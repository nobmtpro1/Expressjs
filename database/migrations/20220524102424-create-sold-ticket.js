"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("sold_tickets", {
            id: {
                allowNull: true,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            ticket_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: {
                        tableName: "tickets",
                    },
                    key: "id",
                },
                onDelete: "CASCADE",
            },
            code: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            createdAt: {
                allowNull: true,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("sold_tickets");
    },
};
