const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const Book = require("./book");

const Library = sequelize.define("Librarys", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,        
        unique: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    location:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono:{
        type: DataTypes.STRING(20),
        allowNull: false,
    },
},{
    paranoid: true, //softdelete
});

Library.hasMany(Book, {
    foreignKey: 'library',
    hooks:true
});
Book.belongsTo(Library,{
    foreignKey: 'library',
    onDelete: 'SET NULL',
    //constraints: false,    //Si es true, para crear el libro debe existir la libreria
});


module.exports = Library;