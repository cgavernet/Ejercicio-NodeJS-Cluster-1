const { Sequelize } = require("sequelize");
//const { User } = require("../models");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
});

const initializeDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.query("SELECT 2+2  as result;");
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: true });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, initializeDB };