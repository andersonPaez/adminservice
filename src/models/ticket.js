const {Schema,model} = require("mongoose");

const ticketSchema = new Schema({
    codigo: {type: String, unique: true},
    asunto: {type: String, required: [true,"El asunto es requirido."]},
    descripcion: String,
    tema: String,
    areaEncargada: String,
    estado: {type: String, enum: [ "ABIERTO","EN PROCESO","RESUELTO"]},
    prioridad: String,
    fecha: Date,
    cliente: {type: Schema.Types.ObjectId, ref: "clientes"}
});

const TicketModelo = model("ticket",ticketSchema);

module.exports = TicketModelo;