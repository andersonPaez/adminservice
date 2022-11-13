const express = require("express");
const conexionDb = require("./conexiondb");
const rutasCliente = require("../routers/cliente.routes");
const rutasAutenticacion = require("../routers/authen.routes");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv").config();

class server{
    constructor(){
        this.puerto = process.env.PUERTO;
        this.app = express();
        this.middlewares();
        this.app.listen(this.puerto,()=>{
            console.log(`El servidor se esta ejecutando en el puerto ${this.puerto}`);
        });
        this.rutas();

        conexionDb();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static("public"));

    }
    rutas(){
        this.app.use("/",rutasCliente);
        this.app.use("/",rutasAutenticacion);
        this.app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname,"../../public/index.html"))
          })
      
    }
}
module.exports = server;