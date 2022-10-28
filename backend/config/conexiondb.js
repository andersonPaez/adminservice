const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/adminservice";

const conexionDb = ()=>{
    mongoose.connect(uri).then(() => {
    console.log("Conexion exitosa.");
}).catch(() => {
    console.log("Falla en la conexion.");
})};

module.exports = conexionDb;