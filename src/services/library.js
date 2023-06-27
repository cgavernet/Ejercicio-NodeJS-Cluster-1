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

module.exports = { getLibrary, createLibrary, getAllLibrarys, updateLibrary, deleteLibrary };