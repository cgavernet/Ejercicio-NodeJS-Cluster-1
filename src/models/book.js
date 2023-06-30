const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
//const Library = require("./library");

const Book = sequelize.define("Books", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,        
        unique: true,
        autoIncrement: true,
    },
    isbn:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    titulo:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    autor:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    year:{
        type: DataTypes.STRING(100),
        allowNull: false,
    }
    // },
    // library:{
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // }
},{
    paranoid: true, //softdelet
});

//Book.sync({force: true});

module.exports = Book;