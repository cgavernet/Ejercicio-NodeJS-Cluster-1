//const { Op } = require("sequelize");
//const { where } = require("sequelize");
const { Library, Book } = require("../models");

const getLibrary = async (libraryId) => {
    try {
        const library = await Library.findByPk(libraryId, 
            { 
                include: { 
                    all: true,
                    attributes: ['id', 'isbn', 'titulo','autor', 'year']
                }, 
                attributes: ['id', 'name', 'location', 'telefono']
            });
        return library;
    } catch (err) {
        console.error("Error when fetching Library", err);
        throw err;
    }
};

const createLibrary = async (library) => {
    try {
        const newLibrary = await Library.create(library);
        return newLibrary;
    } catch (err) {
        console.error("Error when creating Library", err);
        throw err;
    }
};

const getAllLibrarys = async() =>{
    try {
        const librarys = await Library.findAll(
            { 
                include: { 
                    all: true,
                    attributes: ['id', 'isbn', 'titulo','autor', 'year']
                }, 
                attributes: ['id', 'name', 'location', 'telefono']
            });
        return librarys;
    } catch (error) {
        console.error("Error when geting all Librarys", error);
        throw error;
    }
};

const updateLibrary = async(libraryId, library) =>{
    try {
        await Library.update((library),{
            where: {
                id: libraryId,
            }
        });
        const libraryUpdated = await Library.findByPk(libraryId, { include: { all: true } });
        return libraryUpdated;
    } catch (error) {
        console.error("Error when updating Library", error);
        throw error;
    }
};

const deleteLibrary = async(libraryId) => {
    try {
        const libraryDeleted = await Library.destroy({
            where: {
                id: libraryId,
            }
        });
        return libraryDeleted;
    } catch (error) {
        console.error("Error when deleting Library", error);
        throw error;
    }
};

const createBook = async (libraryId, book) => {
    try {
        const newBook = await Book.create({ ...book, library: libraryId });
        return newBook;
    } catch (err) {
        console.error("Error when creating Bookt", err);
        throw err;
    }
};

module.exports = { getLibrary, createLibrary, getAllLibrarys, updateLibrary, deleteLibrary, createBook};