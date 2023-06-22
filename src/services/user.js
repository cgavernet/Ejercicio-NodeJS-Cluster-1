const { userProvider } = require("../providers");

const getUser = async (userId) => {
    const user = await userProvider.getUser(userId);
    return user;
};

const createUser = async (user) => {
    return await userProvider.createUser(user);
};

const getAllUsers = async () =>{
    return await userProvider.getAllUsers();
}

const updateUser = async (userId, user) =>{
    return await userProvider.updateUser(userId,user);
}

const deleteUser = async (userId) => {
    return await userProvider.deleteUser(userId);
}

module.exports = { getUser, createUser, getAllUsers, updateUser, deleteUser };