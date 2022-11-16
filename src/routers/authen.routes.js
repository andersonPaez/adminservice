const {Router} = require("express");
const {autenticacion, validarJWT} = require("../controllers/authen.controller");
const validarToken = require("../middlewares/validarToken");

const rutasAutenticacion = Router();

rutasAutenticacion.post("/autenticacion", autenticacion);
rutasAutenticacion.get("/validar-token",[validarToken], validarJWT);

module.exports = rutasAutenticacion;