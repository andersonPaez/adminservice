const {request,response} = require("express");
const {verify} = require("jsonwebtoken");

function validarToken(peticion = request, respuesta = response, next){

    const token = peticion.header("token")

    try {
        if(token){
            if(verify(token,"grupo09adminservice")){
                next();
            }else{
                respuesta.status(401).send({mensaje:"Autenticacion no valida"});
            }
        }else{
            respuesta.status(400).send({mensaje:"No existen el token"});
        }
    } catch (error) {
        respuesta.status(500).send({mensaje: "Error interno del servidor (token)"});
    }
}

module.exports = validarToken;