const {Router} = require("express");
const {autenticacion} = require("../controllers/authen.controller");

const rutasAutenticacion = Router();

rutasAutenticacion.post("/autenticacion", autenticacion);

module.exports = rutasAutenticacion;