const {
    Ticket,
    SoldTicket,
    Order,
    OrderDetail,
    sequelize,
} = require("../../database/models/index");
const moment = require("moment");
const formatPrice = require("../../utils/formatPrice");
const { home } = require("../../configs/routes");
var nodemailer = require("nodemailer");
var ejs = require("ejs");
var fs = require("fs");

class Controller {
    async index(req, res, next) {
        try {
            const tickets = await Ticket.findAll({ include: SoldTicket });
            res.render("client/home", {
                req,
                res,
                tickets,
                moment,
                formatPrice,
            });
        } catch (error) {
            next(error);
        }
    }

    async calculate(req, res) {
        var total = 0;
        var quantityAll = 0;

        for (const e of req.body?.data) {
            var ticket = await Ticket.findOne({ where: { id: e?.id } });
            total += ticket?.price * parseInt(e?.quantity);
            quantityAll += parseInt(e?.quantity);
        }

        res.status(200).json({
            total,
            quantityAll,
            data: req.body?.data,
        });
    }

    async checkout(req, res) {
        var total = 0;
        var quantityAll = 0;

        for (const e of req.body?.data) {
            var ticket = await Ticket.findOne({ where: { id: e?.id } });
            total += ticket?.price * parseInt(e?.quantity);
            quantityAll += parseInt(e?.quantity);
        }

        var orderDetailArr = [];
        const t = await sequelize.transaction();
        try {
            var order = await Order.create(
                {
                    name: req.body?.name,
                    email: req.body?.email,
                    phone: req.body?.phone,
                    total: total,
                },
                { transaction: t }
            );

            for (const e of req.body?.data) {
                const ticket = await Ticket.findOne({ where: { id: e?.id } });
                const orderDetail = await OrderDetail.create(
                    {
                        order_id: order?.id,
                        ticket_id: e?.id,
                        quantity: e?.quantity,
                        data: JSON.stringify(ticket),
                    },
                    { transaction: t }
                );
                orderDetailArr.push(orderDetail);
            }

            await t.commit();
        } catch (error) {
            await t.rollback();
            return res.status(400).json({
                message: "Error",
            });
        }

        req.session.order = {
            order,
            orderDetailArr,
        };

        res.render("client/popup/bank", {
            order,
            orderDetailArr,
            formatPrice,
        });
    }

    async cancelOrder(req, res) {
        req.session.order = null;
        res.redirect(home);
    }

    async pay(req, res) {
        var order = await Order.findOne({
            where: { id: req.body?.id },
            include: OrderDetail,
        });

        var soldTicketArr = [];

        const t = await sequelize.transaction();
        try {
            order.update(
                {
                    is_paid: 1,
                },
                { transaction: t }
            );
            for (const e of order?.OrderDetails) {
                for (var i = 0; i < e?.quantity; i++) {
                    soldTicketArr.push(
                        await SoldTicket.create(
                            {
                                ticket_id: e?.ticket_id,
                                code: Math.floor(Math.random() * 100000),
                            },
                            { transaction: t }
                        )
                    );
                }
            }

            await t.commit();
        } catch (error) {
            await t.rollback();
            return res.status(400).json({
                message: "Error",
            });
        }

        var file = fs.readFileSync("views/mail/sendCode.ejs", "ascii");
        var html = ejs.render(file, { soldTicketArr });

        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "nobmtpro1@gmail.com",
                pass: "liowprpinkjirmjc",
            },
        });

        var mailOptions = {
            from: "nobmtpro1@gmail.com",
            to: "nobmtpro2021@gmail.com",
            subject: "Sending Email using Node.js",
            html: html,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });

        return res.status(200).json({
            order,
            soldTicketArr,
        });
    }

    async test(req, res) {
        res.send("123");
    }
}

module.exports = new Controller();
