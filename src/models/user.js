const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const User = sequelize.define("Users", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true,
        },
    },
    username: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    paranoid: true, //softdelet
});

sequelize.sync({force: true}).then(()=>{
    User.create(
        {
            "firstName": "Jhon",
            "lastName": "Doe",
            "email": "admin@admin.com",
            "username": "admin",
            "password": "admin"
        }
    ).then(() => console.log("Users data have been saved"));
})

module.exports = User;