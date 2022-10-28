const express = require("express");
const conexionDb = require("./conexiondb");
const rutasCliente = require("../routers/cliente.routes");
const rutasAutenticacion = require("../routers/authen.routes");

class server{
    constructor(){

        this.puerto = 3000;
        this.app = express();

        this.app.use(express.json());
        this.app.listen(this.puerto,()=>{
            console.log(`El servidor se esta ejecutando en el puerto ${this.puerto}`);
        });
        this.rutas();

        conexionDb();
    }

    rutas(){
        
        this.app.use("/",rutasCliente);
        this.app.use("/",rutasAutenticacion);
    }
}

module.exports = server;