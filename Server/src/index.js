const express = require('express');
const router= require("./routes/index")
const morgan= require ("morgan");
const cors = require('cors')

const server = express(); // es la instancia de server
const PORT = 3001;

server.use(morgan("dev"));
server.use(cors())


server.use(express.json()); // middleware, la info que llega en formato json la pasa a js



// server.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Credentials', 'true');
//    res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//    );
//    res.header(
//       'Access-Control-Allow-Methods',
//       'GET, POST, OPTIONS, PUT, DELETE'
//    );
//    next();
// });

server.use("/rickandmorty", router) // middleware que agrega el string "/rickandmorty" antes de cada una de tus rutas.


server.listen(PORT, () => {
   console.log(`Server raised in port: ${PORT}`);
});