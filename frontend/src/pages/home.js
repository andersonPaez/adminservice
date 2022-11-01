import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/adminServiceLogo.png";

export default function Home() {
	return (
		<div>
			<header>
				<div>
					<img src={logo} alt="" />
				</div>
			</header>
			<nav>
				<ul>
					<li><Link to={"/"}>Inicio</Link></li>
					<li><Link>Registrarse</Link></li>
					<li><Link to={"/admin"}></Link></li>
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
