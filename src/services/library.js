const { libraryProvider } = require("../providers");

const getLibrary = async (libraryId) => {
    const library = await libraryProvider.getLibrary(libraryId);
    return library;
};

const createLibrary = async (library) => {
    return await libraryProvider.createLibrary(library);
};

const getAllLibrarys = async () =>{
    return await libraryProvider.getAllLibrarys();
}

const updateLibrary = async (libraryId, library) =>{
    return await libraryProvider.updateLibrary(libraryId,library);
}

const deleteLibrary = async (libraryId) => {
    return await libraryProvider.deleteLibrary(libraryId);
}

const createBook = async (libraryId, book) => {
    const library = await libraryProvider.getLibrary(libraryId);
    if (library) {
        const newBook = await libraryProvider.createBook(libraryId, book);
        return newBook;
    }
        return null;
};

module.exports = { getLibrary, createLibrary, getAllLibrarys, updateLibrary, deleteLibrary, createBook };