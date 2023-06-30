const express = require('express');
const router = express.Router();
const { userContoller } = require("../controllers")
const { authMiddleware, validatorMiddleware } = require("../middleware");

//router.get();
router.post("/", validatorMiddleware.createUserValidator, authMiddleware.authenticate, userContoller.createUser);
router.get("/", authMiddleware.authenticate, userContoller.getAllUsers );
router.get("/:userId", authMiddleware.authenticate, userContoller.getUser);
router.put("/:userId", validatorMiddleware.updateUserValidator, authMiddleware.authenticate, userContoller.updateUser);
router.delete("/:userId", authMiddleware.authenticate, userContoller.deleteUser);

module.exports = router;