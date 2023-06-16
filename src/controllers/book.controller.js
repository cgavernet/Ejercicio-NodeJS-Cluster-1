const createBook = (req, res) => {
    try{
        console.log(`Book created `);
        res.json(req.body);
    }
    catch (err){
        res.status(400).json({ action: "createBook", error: err.message } )   
    }
}

const getBook = (req, res) => {
console.log(`Book found with id ${req.params.bookId}`);
  res.json({ id: req.params.bookId, name: "Biblioteca Popular" });
}

const getAllBook = (req, res) => {
    console.log(`List of all Books`);
    res.json([
        {
          "id": 1,
          "isbn": 9781234567890,
          "titulo": "El Gran Gatsby",
          "autor": "F. Scott Fitzgerald",
          "year": "1925",
          "library": 2
        },
        {
          "id": 2,
          "isbn": 9780987654321,
          "titulo": "Cien años de soledad",
          "autor": "Gabriel García Márquez",
          "year": "1967",
          "library": 1
        },
        {
          "id": 3,
          "isbn": 9789876543210,
          "titulo": "1984",
          "autor": "George Orwell",
          "year": "1949",
          "library": 3
        }
    ])
}

const updateBook = (req, res)=>{
    console.log(`Book found with id ${req.params.bookId}`);
    res.json({ id: req.params.bookId, name: req.body.name});
}

const delBook = (req, res)=>{
    console.log(`Book found with id ${req.params.bookId}`);
    res.json({ id: req.params.bookId, logicalDel: true});
}

module.exports = { createBook, getBook, getAllBook, updateBook, delBook};