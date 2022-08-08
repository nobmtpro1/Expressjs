"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class SoldTicket extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            SoldTicket.belongsTo(models.Ticket, {
                // associations can be defined here
                foreignKey: "ticket_id",
                targetKey: "id",
                onDelete: "CASCADE",
            });
        }
    }
    SoldTicket.init(
        {
            ticket_id: DataTypes.INTEGER,
            code: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "SoldTicket",
            tableName: "sold_tickets",
        }
    );
    return SoldTicket;
};
