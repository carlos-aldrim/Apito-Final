import logoImage from "../../assets/images/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Links } from "./linkCadLog";

export function BarraMenuInicial() {
	return (
		<header className="mt-0 sticky">
			<nav className="flex items-center py-2 mt-2 px-10 lg:px-12">
				<div className="">
					<Link to="index" smooth={true} duration={1000}>
						<img src={logoImage}></img>
					</Link>
				</div>
				<ul className="hidden sm:flex flex-1 justify-end items-center gap-12 font-padrao text-menu uppercase">
					<li className="cursor-pointer hover:text-gray-600 ">
						<Link to="index" smooth={true} duration={1000}>
							Inicio
						</Link>
					</li>
					<li className=" cursor-pointer hover:text-gray-600">
						<Link to="apitofinal" smooth={true} duration={1000}>
							Apito Final
						</Link>
					</li>
					<li className=" cursor-pointer hover:text-gray-600">
						<Link to="sobre" smooth={true} duration={1000}>
							Sobre
						</Link>
					</li>
					<Links />
				</ul>
				<div className="flex sm:hidden flex-1 justify-end">
					<i className="text-2xl fa-solid fa-bars"></i>
				</div>
			</nav>
		</header>
	);
}
