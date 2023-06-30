//const { Op } = require("sequelize");
//const { where } = require("sequelize");
const { Book, Library } = require("../models");

const getBook = async (bookId) => {
    try {
        const book = await Book.findByPk(bookId, 
            {
                include: { 
                    all: true,
                    attributes: ['id', 'name', 'location', 'telefono'],
                },
                attributes: ['id', 'isbn', 'titulo','autor', 'year'],
            });
        // book = await Book.findByPk(bookId, { include: { all: true } });
        return book;
    } catch (err) {
        console.error("Error when fetching Book", err);
        throw err;
    }
};

const createBook = async (book) => {
    try {
        //Busco si la librería existe para luego crear el book
        const library = await Library.findByPk(book.library);
        if(library){
            const newBook = await Book.create(book);
            return newBook;
        }else{
            return { message: "Library not exists"}
        }
    } catch (err) {
        console.error("Error when creating Book", err);
        throw err;
    }
};

const getAllBooks = async() =>{
    try {
        const books = await Book.findAll(
            { 
                include: { 
                    all: true,
                    attributes: ['id', 'name', 'location', 'telefono'],
                },
                attributes: ['id', 'isbn', 'titulo','autor', 'year']
            });
        return books;
    } catch (error) {
        console.error("Error when geting all Books", error);
        throw error;
    }
};

const updateBook = async(bookId, book) =>{
    try {

        const bookToUpdated = await Book.findByPk(bookId);
        if(bookToUpdated){
            await Book.update((book),{
                where: {
                    id: bookId,
                }
            });
            return true;
        }
        return false;
    } catch (error) {
        console.error("Error when updating Book", error);
        throw error;
    }
};

const deleteBook = async(bookId) => {
    try {
        const bookDeleted = await Book.destroy({
            where: {
                id: bookId,
            }
        });
        return bookDeleted;
    } catch (error) {
        console.error("Error when deleting Book", error);
        throw error;
    }
}
module.exports = { getBook, createBook, getAllBooks, updateBook, deleteBook };