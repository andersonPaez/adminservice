import React, { useEffect, useState } from 'react'
import ContentHeader from '../../shared/content-header'
import {useForm} from "react-hook-form";
import axios from 'axios';
import { ALERT, urlBackend } from '../../config/constants';
import { useParams } from 'react-router-dom';

export default function CrearUsuario() {

  const params = useParams();

  const token = localStorage.getItem("token");
  const {register, handleSubmit, formState:{errors}} = useForm();
  const [usuario, setUsuario] = useState({});

  function submit(data){
    // Condicion para ejecutar peticiones
    if(params.id === "new"){
      
      // Peticion para crear cliente
      axios.post(urlBackend + "/clientes", data, {headers:{token:token}})
      .then((respuesta)=>{
        ALERT.fire({
          icon: 'success',
          title: 'Creacion exitosa!'
        });
      })
      .catch((error)=>{
        ALERT.fire({
          icon: 'error',
          title: 'Error al crear usuario :('
        });
        console.error("Hubo un error al crear");
      });
    }else {
      
      // Peticion para modificar cliente
      data._id = usuario._id;
      axios.put(urlBackend + "/modificarcliente", data, {headers:{token:token}})
      .then((respuesta)=>{
        ALERT.fire({
          icon: 'success',
          title: 'Modificacion exitosa!'
        });
      })
      .catch((error)=>{
        console.error("Hubo un error al crear");
        ALERT.fire({
          icon: 'error',
          title: 'Error al modificar usuario :('
        });
      });
    }
  }

  useEffect(() => {
    if(params.id !== "new"){
      axios.post(urlBackend + "/cliente", {_id:params.id},{headers:{token:token}})
      .then((res)=>{
      setUsuario(res.data);
      })
      .catch((error)=>{
      ALERT.fire({
        icon: 'error',
        title: 'Error al buscar Usuario'
      });
    });
    }
    return () => {}
  }, []);
  
  return (
    <>
      <ContentHeader titulo={"Crear usuario"} pathName={"Usuarios"} path={"/admin"} current={"crear usuario"}/>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Formulario</h3>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre:</label>
                      <input
                        type="text"
                        className={"form-control" + (errors.nombre ? " is-invalid":"")}
                        id="nombre"
                        {...register("nombre",{required: true})}
                        placeholder="Nombres"
                        defaultValue={params.id !== "new" ? usuario.nombre : ""}/>
                        {errors.nombre && <span style={{color:"red"}}>*campo requerido</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="apellido">Apellidos:</label>
                      <input
                        type="text"
                        className={"form-control" + (errors.apellido ? " is-invalid":"")}
                        id="apellido"
                        {...register("apellido",{required: true})}
                        placeholder="Apellidos"
                        defaultValue={params.id !== "new" ? usuario.apellido : ""}/>
                        {errors.apellido && <span style={{color:"red"}}>*campo requerido</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="tipoDocumento">Tipo documento:</label>
                        <select 
                        defaultValue={params.id !== "new" ? usuario.tipoDocumento : ""} 
                        className={"form-control" + (errors.tipoDocumento ? " is-invalid":"")} {...register("tipoDocumento",{required: true})} id="tipoDocumento">
                            <option value={""}>Seleccione...</option>
                            <option value={"CC"}>CC - Cedula ciudadania</option>
                            <option value={"CE"}>CE - Cedula extranjeria</option>
                            <option value={"NIT"}>Nit - Numero identificion tributaria</option>
                        </select>
                        {errors.tipoDocumento && <span style={{color:"red"}}>*campo requerido</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="identificacion">No Identificacion:</label>
                      <input
                        type="text"
                        className={"form-control" + (errors.identificacion ? " is-invalid":"")}
                        id="identificacion"
                        {...register("identificacion",{required: true})}
                        placeholder="Numero de identificacion" maxLength={10} minLength={6}
                        defaultValue={params.id !== "new" ? usuario.identificacion : ""}/>
                        {errors.identificacion && <span style={{color:"red"}}>*campo requerido</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Correo electronico:</label>
                      <input
                        type="email"
                        className={"form-control" + (errors.email ? " is-invalid":"")}
                        id="email"
                        {...register("email",{required: true})}
                        placeholder="Correo electronico"
                        defaultValue={params.id !== "new" ? usuario.email : ""}/>
                        {errors.email && <span style={{color:"red"}}>*campo requerido</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefono">Numero de Telefono/celular:</label>
                      <input
                        type="number"
                        className={"form-control" + (errors.telefono ? " is-invalid":"")}
                        id="telefono"
                        {...register("telefono",{required: true})}
                        placeholder="Numero de telefono/celular"
                        defaultValue={params.id !== "new" ? usuario.telefono : ""}/>
                        {errors.telefono && <span style={{color:"red"}}>*campo requerido</span>}
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="password">Contraseña:</label>
                                <input
                                type="password"
                                className={"form-control" + (errors.password ? " is-invalid":"") }
                                id="password"
                                {...register("password",{required: true})}
                                placeholder="Contraseña"
                                defaultValue={params.id !== "new" ? usuario.password : ""}/>
                                {errors.password && <span style={{color:"red"}}>*campo requerido</span>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="password">Confirmar contraseña:</label>
                                <input
                                type="password"
                                className={"form-control" + (errors.passwordConfirm ? " is-invalid":"")}
                                id="passwordConfirm"
                                name='passwordConfirm'
                                // {...register("passwordConfirm",{required: true})}
                                placeholder="Repite la contraseña"/>
                                {errors.passwordConfirm && <span style={{color:"red"}}>*campo requerido</span>}
                            </div>
                        </div>
                    </div>

                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
