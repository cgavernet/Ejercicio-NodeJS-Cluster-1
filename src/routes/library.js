const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');

//router.get();
router.post("/", libraryController.createLibrary);
router.get("/", libraryController.getAllLibrarys);
router.get("/:libraryId", libraryController.getLibrary);
router.put("/:libraryId", libraryController.updateLibrary);
router.delete("/:libraryId", libraryController.deleteLibrary);

module.exports = router;