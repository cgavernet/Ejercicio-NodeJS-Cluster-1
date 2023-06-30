//const { Op } = require("sequelize");
//const { where } = require("sequelize");
const { Book } = require("../models");

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
        const newBook = await Book.create(book);
        return newBook;
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
        await Book.update((book),{
            where: {
                id: bookId,
            }
        });
        const bookUpdated = await Book.findByPk(bookId, 
            { 
                include: { 
                    all: true,
                    attributes: ['id', 'name', 'location', 'telefono']
                } 
            });
        return bookUpdated;
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