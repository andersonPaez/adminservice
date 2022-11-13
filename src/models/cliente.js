const {Schema,model} = require("mongoose");

const cliente = {
    tipoDocumento : {type: String, required: [true, "Tipo documento es requerido."]},
    identificacion : {type: String, unique: true, required: [true," La Identificacion requerida."]},
    nombre : {type: String, required:[true,"El nombre es requerido."]},
    apellido : {type: String, required: [true, "El apellido es requerido."]},
    email : {type: String, unique: true, required: [true, "El email es requerido."]},
    telefono : String,
    password : {type: String, required:[true, "La contraseña es requerida."]},
    tipo: {type:String, enum:["ADMIN","AGENTE","CLIENTE"]}
}

const clienteSquema = new Schema(cliente);

const ClienteModelo = model("clientes",clienteSquema);

module.exports = ClienteModelo;