const { userService } = require("../services");

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.userId);
        if (!user) {
            res.status(404).json({ action: "getUser", error: "User Not Found" });
        } else {
            res.json(user);
        }
    } catch (err) {
        res.status(500).json({ action: "getUser", error: err.message });
    }
};

const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ action: "createUser", error: err.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ action: "getAllUsers", error: err.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const userUpdated = userService.updateUser(req.params.userId, req.body);
        if (!userUpdated) {
            res.status(404).json({ action: "updateUser", error: "User Not Found" });
        } else {
            res.json(userUpdated);
        }
    } catch (error) {
        res.status(500).json({ action: "updateUser", error: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userDeleted = userService.deleteUser(req.params.userId);
        if (!userDeleted){
            res.status(404).json({ action: "deleteUser", error: "User Not Found" });
        }else {
            res.json(userUpdated);
        }
    } catch (error) {
        
    }
}
module.exports = { getUser, createUser, getAllUsers, updateUser, deleteUser };