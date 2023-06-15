const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');

//router.get();
router.post("/", libraryController.createLibrary);
router.get("/", libraryController.getAllLibrary);
router.get("/:libraryId", libraryController.getLibrary);
router.put("/:libraryId", libraryController.updateLibrary);
router.delete("/:libraryId", libraryController.delLibrary);

module.exports = router;