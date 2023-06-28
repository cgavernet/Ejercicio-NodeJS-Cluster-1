const express = require('express');
const router = express.Router();
const { userContoller } = require("../controllers")
const { authMiddleware } = require("../middleware/auth");

//router.get();
router.post("/", authMiddleware, userContoller.createUser);
router.get("/", authMiddleware, userContoller.getAllUsers );
router.get("/:userId", authMiddleware, userContoller.getUser);
router.put("/:userId", authMiddleware, userContoller.updateUser);
router.delete("/:userId", authMiddleware, userContoller.deleteUser);

module.exports = router;