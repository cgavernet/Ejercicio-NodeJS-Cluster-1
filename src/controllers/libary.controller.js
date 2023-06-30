const { libraryService } = require("../services");

const getLibrary = async (req, res) => {
    try {
        const library = await libraryService.getLibrary(req.params.libraryId);
        if (!library) {
            res.status(404).json({ action: "getLibrary", error: "Library Not Found" });
        } else {
            res.json(library);
        }
    } catch (err) {
        res.status(500).json({ action: "getLibrary", error: err.message });
    }
};

const createLibrary = async (req, res) => {
    try {
        const newLibrary = await libraryService.createLibrary(req.body);
        res.json(newLibrary);
    } catch (err) {
        res.status(500).json({ action: "createLibrary", error: err.message });
    }
};

const getAllLibrarys = async (req, res) => {
    try {
        const librarys = await libraryService.getAllLibrarys();
        res.json(librarys);
    } catch (err) {
        res.status(500).json({ action: "getAllLibrarys", error: err.message });
    }
};

const updateLibrary = async (req, res) => {
    try {
        const libraryUpdated = await libraryService.updateLibrary(req.params.libraryId, req.body);
        if (!libraryUpdated) {
            res.status(404).json({ action: "updateLibrary", error: "Library Not Found" });
        } else {
            res.json({ message: "Library Updated" });
        }
    } catch (error) {
        res.status(500).json({ action: "updateLibrary", error: err.message });
    }
};

const deleteLibrary = async (req, res) => {
    try {
        const libraryDeleted = await libraryService.deleteLibrary(req.params.libraryId);
        if (!libraryDeleted){
            res.status(404).json({ action: "deleteLibrary", error: "Library Not Found" });
        }else {
            res.json({ message: "Library Deleted" });
        }
    } catch (error) {
        
    }
};

const createBook = async (req, res) => {
    try {
        const book = await libraryService.createBook(req.params.libraryId, req.body);
        if (!book) {
            res.status(404).json({ action: "createBook", error: "Library Not Found" });
        } else {
            res.json(book);
        }
    } catch (err) {
        res.status(500).json({ action: "createBook", error: err.message });
    }
};

module.exports = { getLibrary, createLibrary, getAllLibrarys, updateLibrary, deleteLibrary, createBook };