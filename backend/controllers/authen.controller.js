const {request,response} = require("express");
const ClienteModelo = require("../models/cliente");
const {compareSync} = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function autenticacion(peticion = request, respuesta = response){

    const {email,password} = peticion.body;

    const cliente = await ClienteModelo.findOne({email});

    if(cliente){
        const validacion = compareSync(password,cliente.password);
        if(validacion){
            jwt.sign({_id: cliente.id},"grupo09adminservice",(error,token)=>{
                if (error) {
                    respuesta.status(500).send({mensaje: "Error al generar token",error});
                }else{
                    respuesta.send({autent: true, token});
                } 
            });
        }else{
            respuesta.send({mensaje:`Contraseña invalida para el cliente ${cliente.nombre}`});
        }
    }else{
        respuesta.status(400).send({mensaje:"Email no registra en la base de datos"});
    }
}

module.exports = {autenticacion};