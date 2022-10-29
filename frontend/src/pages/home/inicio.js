import React from "react";
import logo from "../../assets/image/adminServiceLogo.png";
//Estilos:
import "./inicio.css";

export default function Inicio() {
  return (
    <div>
      <header>
        <div>
          <img src={logo} alt="" />
        </div>
      </header>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li> <a href="#">Registrarse</a></li>
          <li><a href="#">Ingresar</a></li>
        </ul>
      </nav>
      <article>
        <section>
          <div className="form">
            <form action="">
              <div>
                <button>Abrir nuevo Tickect</button>
              </div>
              <div>
                <button>Consultar estado tickect</button>
              </div>
            </form>
          </div>
        </section>
      </article>
      <aside>
        <p>
          Proyecto de sistema de incidencias/tickets, elaborado por los
          tripulantes del grupo 9 MisionTic 2022.
        </p>
      </aside>
      <footer>
        <i>© Derechos reservados Grupo 9 MinTIC</i>
      </footer>
    </div>
  );
}
