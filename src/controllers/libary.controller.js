//const { libaryService } = require("../services");

const createLibrary = (req, res) => {
    try{
        console.log(`Library created `);
        res.json(req.body);
    }
    catch (err){
        res.status(400).json({ action: "createBook", error: err.message } )   
    }
}

const getLibrary = (req, res) => {
console.log(`Library found with id ${req.params.libraryId}`);
  res.json({ id: req.params.libraryId, name: "Biblioteca Popular" });
}

const getAllLibrary = (req, res) => {
    console.log(`List of all Librarys`);
    res.json([{id: 1, name:"Biblioteca Populuar"},{id: 2, name:"Biblioteca Populuar2"}])
}

const updateLibrary = (req, res)=>{
    console.log(`Library found with id ${req.params.libraryId}`);
    res.json({ id: req.params.libraryId, name: req.body.name});
}

const delLibrary = (req, res)=>{
    console.log(`Library found with id ${req.params.libraryId}`);
    res.json({ id: req.params.libraryId, logicalDel: true});
}

module.exports = { createLibrary, getLibrary, getAllLibrary, updateLibrary, delLibrary};