const express = require('express');
const { bookRouter, userRouter, authRouter, libraryRouter } = require("./routes");
const PORT = 8090;

const app = express();

//app Middlewares;
app.use(express.json());

//Rutas
//app.use('/library', libraryRouter);
app.use('/user', userRouter);
app.use('/library', libraryRouter);


// Manejo errores
const errorHandler = (err, req, res, next) =>{
    res.status(500);
    res.json({ message: err.message });
};

app.use(errorHandler);

//levanto el servidor
app.listen(PORT, ()=>{
    console.log(`Server running in ${PORT}`);
})