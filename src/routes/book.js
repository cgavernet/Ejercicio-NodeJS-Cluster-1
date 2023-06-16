const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers');

//router.get();
router.post("/", bookController.createBook);
router.get("/", bookController.getAllBook);
router.get("/:bookId", bookController.getBook);
router.put("/:bookId", bookController.updateBook);
router.delete("/:bookId", bookController.delBook);

module.exports = router;