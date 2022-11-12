const URLBASEDATOS = require("dotenv").config();
const mongoose = require("mongoose");

//const urlBaseDatos = "mongodb+srv://adminservice:adminservice@cluster0.xsuc55x.mongodb.net/adminservice?retryWrites=true&w=majority";

const conexionDb = ()=>{
    mongoose.connect(process.env.URLBASEDATOS).then(() => {
    console.log("Conexion exitosa.");
}).catch(() => {
    console.log("Falla en la conexion.");
})};

module.exports = conexionDb;