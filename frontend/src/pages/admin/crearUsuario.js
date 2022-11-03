import React from 'react'
import ContentHeader from '../../shared/content-header'

export default function CrearUsuario() {

  function submit(event){
    event.preventDefault();
    
    for (let index = 0; index < 8; index++) {
      console.log(event.target[index].value);
      
    }
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
                <form onSubmit={submit}>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombres"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="apellido">Apellidos:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="apellido"
                        name="apellido"
                        placeholder="Apellidos"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tipoDocumento">Tipo documento:</label>
                        <select className="form-control" name="tipoDocumento" id="tipoDocumento">
                            <option value={""}>Seleccione...</option>
                            <option value={"CC"}>CC - Cedula ciudadania</option>
                            <option value={"CE"}>CE - Cedula extranjeria</option>
                            <option value={"NIT"}>Nit - Numero identificion tributaria</option>
                        </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="identificacion">No Identificacion:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="identificacion"
                        name="identificacion"
                        placeholder="Numero de identificacion"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Correo electronico:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Correo electronico"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefono">Numero de Telefono/celular:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="telefono"
                        name="telefono"
                        placeholder="Numero de telefono/celular"/>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="password">Contraseña:</label>
                                <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Contraseña"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="password">Confirmar contraseña:</label>
                                <input
                                type="password"
                                className="form-control"
                                id="passwordConfirm"
                                name="passwordConfirm"
                                placeholder="Repite la contraseña"/>
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
