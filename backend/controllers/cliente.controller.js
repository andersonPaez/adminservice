const ClienteModelo = require("../models/cliente");
const {request,response} = require("express");
const {hashSync,genSaltSync,compareSync} = require("bcryptjs");

// Consulta todos los cliente
function consultarClientes(peticion = request,respuesta = response){
    
    ClienteModelo.find().then((clientes)=>{
        respuesta.send(clientes);
    }).catch(()=>{
        respuesta.send({mensaje:"No se pudo consultar los clientes"});
    });
}

// Crea un nuevo cliente
async function crearCliente(peticion = request, respuesta = response){

    const {identificacion,password} = peticion.body;

   const resultado = await ClienteModelo.findOne({identificacion});

   if(resultado){
        respuesta.send({mensaje: "cliente ya existe"});
    }else{
        peticion.body.password = hashSync(password,genSaltSync()); // Encriptacion de la contraseña.
    
        ClienteModelo.create(peticion.body).then((clienteCreado)=>{
            respuesta.send({mensaje: "El cliente fue creado", clienteCreado});
        }).catch(()=>{
            respuesta.send({mensaje:"No se pudo crear el cliente"});
        });
    }
}

// Consulta cliente por id, identificacion, nombre y email
async function consultaCliente(peticion = request,respuesta = response){
    
    const {_id,identificacion,nombre,email} = peticion.body;

    let resultado;

    try {
        resultado = await ClienteModelo.findOne({$or: [{identificacion},{nombre},{email},{_id}]});
    } catch (error) {
        console.log(error);
    }

    if(resultado){
        respuesta.send({mensaje: "cliente encontrado",resultado});
    }else{
        respuesta.send({mensaje:"Cliente no encontrado"});
    }
}
// Modifica un cliente
async function modificarCliente(peticion = request,respuesta = response){

    const {_id, ...cliente} = peticion.body;
    
    await ClienteModelo.updateOne({_id:_id},cliente);
    const clienteModificado = await ClienteModelo.findById(_id);
    respuesta.send({mensaje:"Se modifico el cliente",clienteModificado});
   
}

// Modifica la contraseña de un cliente
async function modificarContrasenia(peticion = request,respuesta = response){
    
    const {_id, password} = peticion.body;
    let resultado;
    try {
        resultado = await ClienteModelo.findOne({_id});
    } catch (error) {
        respuesta.status(500).send({mensaje: "Hubo un error al buscar",error});
    }

    if(resultado){
        peticion.body.password = hashSync(password,genSaltSync());
        await ClienteModelo.updateOne({_id},peticion.body);
        respuesta.status(200).send({mensaje: `Contraseña actualizada del cliente: ${resultado.nombre}`});
    }else{
        respuesta.status(400).send({mensaje:"Cliente no existe"});
    }
}

// Elimina un cliente por ID.
async function borrarCliente(peticion = request,respuesta = response){
    const {_id} = peticion.body;

    const eliminado = await ClienteModelo.findByIdAndDelete(_id);

    respuesta.send({mensaje:`Se elimino el cliente: ${eliminado.nombre}`});
}

module.exports = {consultarClientes,crearCliente,consultaCliente,modificarCliente,borrarCliente,modificarContrasenia};