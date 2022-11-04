import React from 'react'
import ContentHeader from '../../shared/content-header'
import {useForm} from "react-hook-form";
import axios from 'axios';
import { urlBackend } from '../../config/constants';

export default function CrearUsuario() {

  const {register, handleSubmit, formState:{errors}} = useForm();

  function submit(data){
   // event.preventDefault(); // evita que al hacer click se recargue la pagina

    axios.post(urlBackend + "/clientes",data)
    .then((respuesta)=>{
      alert("Se creo el usuario");
    })
    .catch((error)=>{
      console.error("Hubo un error al crear");
    });

  }

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
                        placeholder="Nombres"/>
                        {errors.nombre && <span style={{color:"red"}}>*campo requerido</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="apellido">Apellidos:</label>
                      <input
                        type="text"
                        className={"form-control" + (errors.apellido ? " is-invalid":"")}
                        id="apellido"
                        {...register("apellido",{required: true})}
                        placeholder="Apellidos"/>
                        {errors.apellido && <span style={{color:"red"}}>*campo requerido</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="tipoDocumento">Tipo documento:</label>
                        <select className={"form-control" + (errors.tipoDocumento ? " is-invalid":"")} {...register("tipoDocumento",{required: true})} id="tipoDocumento">
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
                        placeholder="Numero de identificacion" maxLength={10} minLength={6}/>
                        {errors.identificacion && <span style={{color:"red"}}>*campo requerido</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Correo electronico:</label>
                      <input
                        type="email"
                        className={"form-control" + (errors.email ? " is-invalid":"")}
                        id="email"
                        {...register("email",{required: true})}
                        placeholder="Correo electronico"/>
                        {errors.email && <span style={{color:"red"}}>*campo requerido</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefono">Numero de Telefono/celular:</label>
                      <input
                        type="number"
                        className={"form-control" + (errors.telefono ? " is-invalid":"")}
                        id="telefono"
                        {...register("telefono",{required: true})}
                        placeholder="Numero de telefono/celular"/>
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
                                placeholder="Contraseña"/>
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
