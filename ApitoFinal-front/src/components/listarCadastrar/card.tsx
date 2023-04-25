import { Figure } from "../../views/campeonatos/style";
import calendar from "../../assets/images/calendar.svg";
import prosseguir from "../../assets/images/Prosseguir.svg";
import { Link } from "react-router-dom";
import moment from "moment";

type dados = {
	logo: string;
	nome: string;
	tipoCampeonato: string;
	id: string;
	dataFim: string;
};

export const Card = ({ logo, nome, tipoCampeonato, id, dataFim }: dados) => {
	return (
		<div className="flex w-card flex-col mb-8 border-2 border-solid shadow-menu border-borderCard rounded-xl">
			<Figure>
				<img src={logo} alt="logo do campeonato" width={70} />
				<h3 className="font-padrao font-semibold">{nome}</h3>
			</Figure>
			<div className="flex flex-col mt-5 ml-4">
				<ul className="flex flex-col gap-1">
					<li className="font-home font-light text-base text-fontCard">
						{tipoCampeonato == "PONTOS"
							? "PONTOS CORRIDOS"
							: "MATA-MATA"}
					</li>
				</ul>
				<div className="flex flex-row flex-wrap gap-3">
					<figure className="flex flex-row flex-wrap  items-center gap-2">
						<img src={calendar} alt="calendario" />
						<p className="font-home flex items-center font-light text-base  h-full text-fontCard">
							{moment(dataFim).format("DD/MM/YYYY")}
						</p>
					</figure>
				</div>
				<figure className="mb-7 mt-7 pr-7">
					<Link
						to={`/detalhesCampeonato/${id}`}
						className="flex flex-row flex-wrap items-center h-full justify-end gap-1"
					>
						<p className="text-verde-claro font-home h-full  flex items-center font-bold text-base">
							Ver Detalhes
						</p>
						<img
							src={prosseguir}
							alt="seta de prosseguir"
							className=""
						/>
					</Link>
				</figure>
			</div>
		</div>
	);
};
