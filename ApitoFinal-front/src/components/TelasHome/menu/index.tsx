import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/Logotype (3) 2.svg";
import { Lista } from "./style";

import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

import { useContext, useEffect, useState } from "react";
import { Btn } from "../../btnPadrao/Index";
import { AuthContext } from "../../../context/Auth/AuthContext";
import { api } from "../../../server/api";

type ativos = {
	ativo?: string;
	ativo1?: string;
	ativo2?: string;
	ativo3?: string;
};

export const Menur = ({ ativo, ativo1, ativo2, ativo3 }: ativos) => {
	const user = useContext(AuthContext);
	const [nome, setNome] = useState("");
	const [imagem, setImagem] = useState("");
	const [janela, setJanela] = useState(false);
	const aparecer = () => {
		setJanela(!janela);
	};
	const apiAuth = useContext(AuthContext);
	const navigate = useNavigate();
	const desloga = () => {
		apiAuth.singout();
		navigate("/login");
	};

	useEffect(() => {
		api.get(`/usuario/retornaNome/${user.user.id}`)
			.then((res) => {
				setNome(res.data.nome);
				setImagem(res.data.imagem);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [user]);

	return (
		<>
			<header className="flex bg-white z-10 top-0 w-full fixed flex-row flex-wrap justify-between h-20 shadow-menu  px-10 border-b border-solid border-borderMenu">
				<nav className="flex flex-wrap flex-row items-center gap-x-12">
					<figure>
						<img src={logo} alt="logo" />
					</figure>
					<Lista className="flex flex-row flex-wrap gap-x-7 font-home font-light  text-lg h-full items-center text-navMenu">
						<Link
							to={"/paginaInicial"}
							className={`h-full ${ativo} items-center flex cursor-pointer hover:text-navMenuAtivo transition-colors`}
						>
							INÍCIO
						</Link>
						<Link
							to={"/campeonato"}
							className={`h-full ${ativo1} items-center flex cursor-pointer hover:text-navMenuAtivo transition-colors`}
						>
							CAMPEONATOS
						</Link>
						<Link
							to={"/times"}
							className={`h-full ${ativo2} items-center flex cursor-pointer hover:text-navMenuAtivo transition-colors`}
						>
							TIMES
						</Link>
						<Link
							to={"/jogadores"}
							className={`h-full ${ativo3} items-center flex cursor-pointer hover:text-navMenuAtivo transition-colors`}
						>
							JOGADORES
						</Link>
					</Lista>
				</nav>
				<div className="flex items-center gap-3">
					<figure className=" h-full items-center justify-center flex">
						<img src={imagem} className="w-12"/>
					</figure>
					<div
						className="flex flex-row flex-wrap items-center gap-3 cursor-pointer"
						onClick={aparecer}
					>
						<h2 className="text-xl font-padrao font-bold text-navMenu">
							{nome}
						</h2>
						{janela ? (
							<IoIosArrowUp className="text-xl text-navMenu" />
						) : (
							<IoIosArrowDown className="text-xl text-navMenu" />
						)}
					</div>
				</div>
				{janela && (
					<div className="flex bg-black flex-col flex-wrap z-10 w-80 h-96 fixed right-0 mr-10 mt-24 rounded-xl p-2 border-2 border-solid border-borderForm shadow-menu ">
						<ul
							className="
								flex flex-col 
								justify-center items-center 
								text-lg font-home font-bold
								py-7 gap-2
								"
						>
							<li>
								<FaUserCircle size={100} color="#fcfcfc" />
							</li>
							<li className="text-white flex flex-col items-center">
								<span>Nome</span>
								<span>Email@gmail.com</span>
							</li>
							<li className="flex flex-col w-full items-center gap-3 py-3">
								<Btn
									link="/editarUsuario"
									texto="Editar Usuário"
									classname="rounded-3xl
									bg-white
									w-44 h-10
									font-bold
									text-lg"
								/>
								<Btn
									link="/editarUsuario"
									texto="Excluir Usuário"
									classname="rounded-3xl
									border-white
									text-white
									border-2
									w-44 h-10
									font-bold
									text-lg"
								/>
							</li>
							<li
								className="
									flex flex-row flex-wrap 
									items-center gap-2 
									text-red-600
									pl-48"
								onClick={desloga}
							>
								Sair <FiLogOut />
							</li>
						</ul>
					</div>
				)}
			</header>
		</>
	);
};
