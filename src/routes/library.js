const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');
const { authMiddleware } = require("../middleware/auth");
//router.get();
router.post("/", authMiddleware, libraryController.createLibrary);
router.post("/:libraryId/book", libraryController.createBook);
router.get("/", libraryController.getAllLibrarys);
router.get("/:libraryId", libraryController.getLibrary);
router.put("/:libraryId", authMiddleware, libraryController.updateLibrary);
router.delete("/:libraryId", authMiddleware, libraryController.deleteLibrary);

module.exports = router;