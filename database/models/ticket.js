"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Ticket extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Ticket.hasMany(models.SoldTicket, {
                foreignKey: "ticket_id",
                targetKey: "id",
            });
        }
    }
    Ticket.init(
        {
            type: DataTypes.INTEGER,
            image: DataTypes.STRING,
            name: DataTypes.STRING,
            date: DataTypes.DATE,
            from: DataTypes.TIME,
            to: DataTypes.TIME,
            quantity: DataTypes.INTEGER,
            address: DataTypes.STRING,
            price: DataTypes.INTEGER,
            link_video: DataTypes.STRING,
            overview: DataTypes.STRING,
            is_active: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Ticket",
        }
    );

    return Ticket;
};
