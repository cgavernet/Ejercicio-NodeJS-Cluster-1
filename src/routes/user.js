const express = require('express');
const router = express.Router();
const { userContoller } = require("../controllers")

//router.get();
router.post("/", userContoller.createUser);
router.get("/:userId", userContoller.getUser);
//router.put("/:userId", userController.updateUser);
//router.delete("/:userId", userContoller.deleteUser);

module.exports = router;