//const { Op } = require("sequelize");
//const { where } = require("sequelize");
const { User } = require("../models");

const getUser = async (userId) => {
    try {
        const user = await User.findByPk(userId);
        return user;
    } catch (err) {
        console.error("Error when fetching User", err);
        throw err;
    }
};

const createUser = async (user) => {
    try {
        const newUser = await User.create(user);
        return newUser;
    } catch (err) {
        console.error("Error when creating User", err);
        throw err;
    }
};

const getAllUsers = async() =>{
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        console.error("Error when geting all Users", error);
        throw error;
    }
};

const updateUser = async(userId, user) =>{
    try {
        await User.update((user),{
            where: {
                id: userId,
            }
        });
        const userUpdated = await User.findByPk(userId, { include: { all: true } });
        return userUpdated;
    } catch (error) {
        console.error("Error when updating User", error);
        throw error;
    }
};

const deleteUser = async(userId) => {
    try {
        const userDeleted = await User.destroy({
            where: {
                id: userId,
            }
        });
        return userDeleted;
    } catch (error) {
        console.error("Error when deleting User", error);
        throw error;
    }
}

const validateUser = async (username, password) => {
    try {
        const user = await User.findOne({
            where: { username, password }
        });
        if (user){
            return user;
        }else{
            return false;
        }
    } catch (error) {
        console.error("Error when fetching User", err);
        throw err;
    }
};

const addDefaultUser = async () => {
    try {
        const user = await User.findOne({
            where: { username: "admin", }
        });
        //Verifica si el usuario ya existe
        if (!user){
            const newUser = await User.create({
                firstName: "Jhon",
                lastName: "Doe",
                email: "admin@admin.com",
                username: "admin",
                password: "admin"
            });
            console.log("Nuevo usuario");
            return newUser;
        }
    } catch (err) {
        console.error("Error when creating Default User", err);
        throw err;
    }
};

module.exports = { getUser, createUser, getAllUsers, updateUser, deleteUser, validateUser, addDefaultUser };