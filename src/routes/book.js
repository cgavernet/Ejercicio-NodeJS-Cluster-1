const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers');
const { authMiddleware, validatorMiddleware } = require("../middleware");
//const { authMiddleware } = require("../middleware/auth");
//router.get();
router.post("/", validatorMiddleware.createBookValidator, authMiddleware.authenticate, bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:bookId", bookController.getBook);
router.put("/:bookId", validatorMiddleware.updateBookValidator, authMiddleware.authenticate, bookController.updateBook);
router.delete("/:bookId", authMiddleware.authenticate, bookController.deleteBook);

module.exports = router;