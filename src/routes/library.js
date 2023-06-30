const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');
const { authMiddleware, validatorMiddleware } = require("../middleware");
//router.get();
router.post("/", validatorMiddleware.createLibraryValidator, authMiddleware.authenticate, libraryController.createLibrary);
router.post("/:libraryId/book", libraryController.createBook);
router.get("/", libraryController.getAllLibrarys);
router.get("/:libraryId", libraryController.getLibrary);
router.put("/:libraryId", validatorMiddleware.updateLibraryValidator, authMiddleware.authenticate, libraryController.updateLibrary);
router.delete("/:libraryId", authMiddleware.authenticate, libraryController.deleteLibrary);

module.exports = router;