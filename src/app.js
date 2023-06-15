const express = require('express');

const PORT = 8090;

const app = express();

//app Middlewares;
app.use(express.json());