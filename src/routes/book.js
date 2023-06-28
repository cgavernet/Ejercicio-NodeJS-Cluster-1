const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers');
const { authMiddleware } = require("../middleware/auth");

//router.get();
router.post("/", authMiddleware, bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:bookId", bookController.getBook);
router.put("/:bookId", authMiddleware, bookController.updateBook);
router.delete("/:bookId", authMiddleware, bookController.deleteBook);

module.exports = router;