const ClienteModelo = require("../models/cliente");
const conexionDb = require("../config/conexiondb");

conexionDb();

const cliente1 = {
    tipoDocumento : "CC",
    identificacion : "1003246878",
    nombre : "Kamilo",
    apellido : "ballestero",
    email : "kamilo@gmail.com",
    telefono : "3111020",
    password : "12345"
}

ClienteModelo.create(cliente1).then((resultado)=>{
    console.log(`Se inserto el cliente ${resultado.nombre}`);
}).catch(()=>{
    console.log("Error al insertar cliente.");
});