import { IoIosArrowBack } from "react-icons/io";
import Descricao from "../../assets/images/descricao.svg";
import Tabela from "../../assets/images/Tabela.svg";
import Campo from "../../assets/images/campo.svg";
import Player from "../../assets/images/Player.svg";
import Chaves from "../../assets/images/Chaves.svg";
import { Link } from "react-router-dom";
import { Lista } from "./style";
import { BtnEditar } from "../../components/btnEditarCampeonato/Index";

type ativos = {
	ativo?: string;
	ativo1?: string;
	ativo2?: string;
	ativo3?: string;
	ativo4?: string;
	titulo?: string;
	btnEditarAtivo?: boolean;
	pontos: string;
	id: string;
};

export const SubMenu = ({
	ativo1,
	ativo2,
	ativo3,
	ativo,
	titulo,
	ativo4,
	btnEditarAtivo,
	pontos,
	id,
}: ativos) => {
	return (
		<nav className="flex z-10 bg-preto mt-20 fixed w-full justify-between items-center text-white">
			<div className="h-14 flex flex-wrap items-center">
				<Lista className="h-full flex flex-wrap gap-2">
					<Link to="/campeonato">
						<li className="w-11 flex flex-wrap justify-center h-full items-center">
							<IoIosArrowBack className="text-lg" />
						</li>
					</Link>
					<Link to={`/detalhesCampeonato/${id}`}>
						<li
							className={`w-11 flex ${ativo} flex-wrap justify-center h-full items-center`}
						>
							<img src={Descricao} alt="Icone de descricao" />
						</li>
					</Link>
					{pontos == "PONTOS" ? (
						<Link to={`/tabelaCampeonato/${id}`}>
							<li
								className={`w-11 flex flex-wrap justify-center h-full items-center ${ativo1}`}
							>
								<img src={Tabela} alt="Icone de tabela" />
							</li>
						</Link>
					) : (
						<Link to={`/chavesCampeonato/${id}`}>
							<li
								className={`w-11 flex flex-wrap justify-center h-full items-center ${ativo4}`}
							>
								<img src={Chaves} alt="Icone de Chaves" />
							</li>
						</Link>
					)}
					<Link to={`/partidasCampeonato/${id}`}>
						<li
							className={`w-11 flex flex-wrap justify-center h-full items-center ${ativo2}`}
						>
							<img src={Campo} alt="Icone de campo" />
						</li>
					</Link>
					<li
						className={`w-11 flex flex-wrap justify-center h-full items-center ${ativo3}`}
					>
						<img src={Player} alt="Icone de player" />
					</li>
				</Lista>
			</div>
			<div className="flex">
				<h3>{titulo} / Premier League</h3>
			</div>
			<div className="flex gap-4 mr-4">
				<BtnEditar ativo={btnEditarAtivo} />
				<button className="px-4 py-2 flex items-center border border-white rounded font-black text-lg font-home">
					Excluir
				</button>
			</div>
		</nav>
	);
};
