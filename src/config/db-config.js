const { Sequelize } = require("sequelize");
//const { User } = require("../models");
//const { User } = require("../models");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
});

const initializeDB = async () => {
    try {
        await sequelize.authenticate();
        //await sequelize.query("SELECT 2+2  as result;");
        console.log('Connection has been established successfully.');
        //sequelize.sync({ force: true })
        // sequelize.models.User.create(
        //     {
        //         "firstName": "Jhon",
        //         "lastName": "Doe",
        //         "email": "admin@admin.com",
        //         "username": "admin",
        //         "password": "admin"
        //     }
        // );
        // .then(()=>{
        //     User.build(
        //         {
        //             "firstName": "Jhon",
        //             "lastName": "Doe",
        //             "email": "admin@admin.com",
        //             "username": "admin",
        //             "password": "admin"
        //         }
        //     ).then(() => console.log("Users data have been saved"));
        // }
        // );
        //sequelize.query("INSERT INTO User ('firstename') values ('admin')")
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, initializeDB };