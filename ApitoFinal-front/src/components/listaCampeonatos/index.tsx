import Tabela from "../../assets/images/Tabela.png";
import PlayOff from "../../assets/images/PlayOff.png";
import Prosseguir from "../../assets/images/Prosseguir.svg";
import { Link } from "react-router-dom";

type dados = {
	logoCampeonato?: string;
	nomeCampeonato: string;
	tipoCampeonato: string;
	statusCampeonato: string;
	id: string;
};

export const ListaCampeonatos = ({
	logoCampeonato,
	nomeCampeonato,
	tipoCampeonato,
	statusCampeonato,
	id,
}: dados) => {
	return (
		<div className="flex flex-col flex-wrap mb-4">
			<div className="flex h-16 first-letter:border-2 border-solid border-borderForm shadow-menu rounded-xl px-6 py-2 items-center justify-between">
				<figure className="flex w-4/12  flex-row flex-wrap items-center gap-6">
					<img src={logoCampeonato} alt="" width={34} height={36} />
					<h3 className="text-xl font-home font-light text-navMenuAtivo">
						{nomeCampeonato}
					</h3>
				</figure>
				<main className="flex w-4/12 flex-row flex-wrap gap-x-9 justify-end">
					<figure>
						{tipoCampeonato === "PONTOS" ? (
							<img src={Tabela} alt="Tabela de Pontos Corridos" />
						) : (
							<img src={PlayOff} alt="Campeonato de Play Off" />
						)}
					</figure>
					<p className="text-lg font-home font-light text-navMenuAtivo">
						{statusCampeonato}
					</p>
				</main>
				<footer className="flex w-4/12 flex-row flex-wrap justify-end gap-2 items-center">
					<Link
						to={`/detalhesCampeonato/${id}`}
						className="flex flex-row flex-wrap items-center h-full justify-end gap-1"
					>
						<p className="text-buttonCard text-base font-light font-home">
							Ver Detalhes
						</p>
						<img src={Prosseguir} alt="" />
					</Link>
				</footer>
			</div>
		</div>
	);
};
