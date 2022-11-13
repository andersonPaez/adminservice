const {Schema,model} = require("mongoose");

const agente = {
    tipoDocumento : {type: String, required: [true, "Tipo documento es requerido."]},
    identificacion : {type: String, unique: true, required: [true," La Identificacion requerida."]},
    nombre : {type: String, required:[true,"El nombre es requerido."]},
    apellido : {type: String, required: [true, "El apellido es requerido."]},
    email : {type: String, unique: true, required: [true, "El email es requerido."]},
    telefono : String,
    area:{type: String, required:[true, "El area es requerida."]},
    password : {type:String, required:[true,"La contraseña es requerida"]}
}

const agenteSquema = new Schema(agente);

const AgenteModelo = model("agente",agenteSquema);

module.exports = AgenteModelo;