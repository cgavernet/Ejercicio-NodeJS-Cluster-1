const { bookProvider } = require("../providers");

const getBook = async (bookId) => {
    const book = await bookProvider.getBook(bookId);
    return book;
};

const createBook = async (book) => {
    return await bookProvider.createBook(book);
};

const getAllBooks = async () =>{
    return await bookProvider.getAllBooks();
}

const updateBook = async (bookId, book) =>{
    return await bookProvider.updateBook(bookId,book);
}

const deleteBook = async (bookId) => {
    return await bookProvider.deleteBook(bookId);
}


module.exports = { getBook, createBook, getAllBooks, updateBook, deleteBook };