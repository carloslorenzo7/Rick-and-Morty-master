const { log } = require("console");
const http = require("http");
const data = require ("./utils/data.js")


http
.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){ 
            const id= req.url.split("/").at(-1)
            
            const finded= data.find((character)=>
            // si ponemos el + adelante de un string lo convierte a numero
                character.id=== +id)

            return res.writeHead(200,{
                "Content-type": "aplication/json"
            })
            // agarra el objeto de js y o convierte en formato json
            .end(JSON.stringify(finded))
    }
})
.listen(3001)