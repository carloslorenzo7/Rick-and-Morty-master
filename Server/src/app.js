const express = require('express');
const router= require("./routes/index")
const morgan= require ("morgan");
const cors = require('cors')

const server = express(); // es la instancia de server


server.use(morgan("dev"));
server.use(cors())


server.use(express.json()); // middleware, la info que llega en formato json la pasa a js




server.use("/rickandmorty", router) // middleware que agrega el string "/rickandmorty" antes de cada una de tus rutas.


module.exports= server;