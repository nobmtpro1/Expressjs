const fs = require("fs");
require('dotenv').config()

module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: "127.0.0.1",
        port: 3306,
        dialect: "mysql",
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: "127.0.0.1",
        port: 3306,
        dialect: "mysql",
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: "127.0.0.1",
        port: 3306,
        dialect: "mysql",
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
};
