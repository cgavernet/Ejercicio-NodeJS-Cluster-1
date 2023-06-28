const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { secret } = require('../middleware/auth');
const { userProvider } = require('../providers');
const { json } = require('sequelize');
//const { authSevice } = require('../services');

router.post("/", async (req, res)=>{
    const { user, password } = req.body;
    if (user === "admin" && password === "admin"){
        const token = jwt.sign({ user }, secret);
        res.json({token});
    }else{
        const dbUser = await userProvider.validateUser(user, password);
        if (dbUser) {
            const token = jwt.sign({ user: dbUser.username }, secret);
            res.json({token});
        }else{
            res.status(401).json({message: "authentication fail"});
        }
    }
})

module.exports = router;