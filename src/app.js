const express = require('express');
const { bookRouter, userRouter, authRouter, libraryRouter } = require("./routes");
const { initializeDB  } = require("./config/db-config");
const { authMiddleware }= require("./middleware/auth");
const { addDefaultUser } = require("./providers/user");

const PORT = 8090;

const app = express();

//app Middlewares;
app.use(express.json());

//Rutas
app.use('/user', authMiddleware, userRouter);
app.use('/library', libraryRouter);
app.use('/book', bookRouter);
app.use('/login', authRouter);

// Manejo errores
const errorHandler = (err, req, res, next) =>{
    res.status(500);
    res.json({ message: err.message });
};

app.use(errorHandler);

//levanto el servidor
app.listen(PORT, async ()=>{
    await initializeDB();   //Inicio la conexión a la Bd
    await addDefaultUser(); //Creo el usuario por defecto
    console.log(`Server running in ${PORT}`);
});
