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
					<li><a>Inicio</a></li>
					<li><a>Registrarse</a></li>
					<li><a>Ingresar</a></li>
				</ul>
			</nav>
			<article>
				<section>
					<div className="form">
						<form action="">
							<div>
								<button className="btn btn-outline-secondary">Abrir nuevo Tickect</button>
							</div>
							<div>
								<button className="btn btn-outline-secondary">Consultar estado tickect</button>
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
