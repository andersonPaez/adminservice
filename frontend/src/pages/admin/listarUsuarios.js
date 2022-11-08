import React, { useEffect, useState } from 'react'
import axios from "axios"
import ContentHeader from '../../shared/content-header'
import {urlBackend} from "../../config/constants"
import {FaUserEdit,FaUserTimes} from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function ListarUsuarios() {

  const token = localStorage.getItem("token");
  
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get(urlBackend + "/clientes",{headers:{token:token}})
    .then((respuesta)=>{
      setUsuarios(respuesta.data);
    });
  
    return () => {}
  }, [])
  

  return (
    <>
      <ContentHeader
        titulo={"Lista de usuarios"}
        pathName={"Usuarios"}
        path={"/admin"}
        current={"Listar usuarios"}
      />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card-body">
                <div className="dataTables_wrapper dt-bootstrap4">
                  <div className="row">
                    <div className="col-sm-12">
                      <form className="form-inline">
                        <div className="form-group mx-sm-3 mb-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-secondary mb-2">
                          Buscar
                        </button>
                      </form>
                      <table
                        id="example2"
                        className="table table-bordered table-hover dataTable dtr-inline"
                        aria-describedby="example2_info">
                        <thead>
                          <tr>
                            <th
                              className="sorting sorting_asc"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-sort="ascending"
                              aria-label="Rendering engine: activate to sort column descending">
                              Nombre
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Browser: activate to sort column ascending">
                              Apellidos
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Platform(s): activate to sort column ascending">
                              Email
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Engine version: activate to sort column ascending">
                              Telefono
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Engine version: activate to sort column ascending">
                              Opciones
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {usuarios.map((usuario) => (
                            <tr key={usuario._id} className="odd">
                              <td
                                className="dtr-control sorting_1"
                                tabIndex={0}>
                                {usuario.nombre}
                              </td>
                              <td>{usuario.apellido}</td>
                              <td>{usuario.email}</td>
                              <td>{usuario.telefono}</td>
                              <td>
                                <div
                                  className="btn-group"
                                  role="group"
                                  aria-label="Opciones">
                                  <Link to={"/admin/usuarios/crear/" + usuario._id}
                                    type="button"
                                    className="btn btn-info"> {/*Boton modificar*/}
                                    <FaUserEdit size={20} className='nav-icon'/>
                                  </Link>
                                  <Link
                                    type="button"
                                    className="btn btn-danger"> {/*Boton borrar*/}
                                    <FaUserTimes size={20} className='nav-icon'/>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          ))}
                          {usuarios.length === 0 && (
                            <tr>
                              <td colSpan={5} style={{ textAlign: "center" }}>
                                No hay datos para mostrar...{" "}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
