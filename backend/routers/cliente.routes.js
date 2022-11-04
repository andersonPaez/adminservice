const { Router } = require("express");
const {
  consultarClientes,
  crearCliente,
  consultaCliente,
  modificarCliente,
  borrarCliente,
  modificarContrasenia,
} = require("../controllers/cliente.controller");

const validarToken = require("../middlewares/validarToken");

const rutasCliente = Router();

rutasCliente.get("/clientes", [validarToken], consultarClientes);
rutasCliente.post("/clientes",[validarToken],crearCliente);
rutasCliente.post("/cliente", [validarToken],consultaCliente);
rutasCliente.put("/modificarcliente",[validarToken], modificarCliente);
rutasCliente.delete("/borrarcliente",[validarToken], borrarCliente);
rutasCliente.put("/modificarcontrasenia",[validarToken], modificarContrasenia);

module.exports = rutasCliente;
