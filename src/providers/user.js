//const { Op } = require("sequelize");
const { where } = require("sequelize");
const { User } = require("../models");

const getUser = async (userId) => {
    try {
        const user = await User.findByPk(userId, { include: { all: true } });
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
    } catch (error) {
        console.error("Error when updating User", error);
        throw error;
    }
};

const deleteUser = async(userId) => {
    try {
        await User.destroy({
            where: {
                id: userId,
            }
        });
    } catch (error) {
        console.error("Error when deleting User", error);
        throw error;
    }
}
module.exports = { getUser, createUser, getAllUsers, updateUser };