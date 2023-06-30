const { bookService } = require("../services");

const getBook = async (req, res) => {
    try {
        const book = await bookService.getBook(req.params.bookId);
        if (!book) {
            res.status(404).json({ action: "getBook", error: "Book Not Found" });
        } else {
            res.json(book);
        }
    } catch (err) {
        res.status(500).json({ action: "getBook", error: err.message });
    }
};

const createBook = async (req, res) => {
    try {
        const newBook = await bookService.createBook(req.body);
        res.json(newBook);
    } catch (err) {
        res.status(500).json({ action: "createBook", error: err.message });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.json(books);
    } catch (err) {
        res.status(500).json({ action: "getAllBooks", error: err.message });
    }
};

const updateBook = async (req, res) => {
    try {
        const bookUpdated = await bookService.updateBook(req.params.bookId, req.body);
        if (!bookUpdated) {
            res.status(404).json({ action: "updateBook", error: "Book Not Found" });
        } else {
            res.json({ message: "Book Updated" });
        }
    } catch (error) {
        res.status(500).json({ action: "updateBook", error: err.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const bookDeleted = await bookService.deleteBook(req.params.bookId);
        if (!bookDeleted){
            res.status(404).json({ action: "deleteBook", error: "Book Not Found" });
        }else {
            res.json({ message: "Book Deleted" });
        }
    } catch (error) {
        
    }
}
module.exports = { getBook, createBook, getAllBooks, updateBook, deleteBook };