import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Jogos } from "../../components/jogos";
import { Linha } from "../../components/linhaTabela";
import { NomeCampeonato } from "../../components/NomeCampeonato";
import { SubMenu } from "../../components/subMenu";
import { Menur } from "../../components/TelasHome/menu";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Tabela = () => {
	const [rodada, setRodada] = useState(1);
	const proximaRodada = () => {
		setRodada(rodada + 1);
	};
	const anteriorRodada = () => {
		if (rodada > 1) {
			setRodada(rodada - 1);
		}
	};
	const params = useParams();
	return (
		<div>
			<Menur ativo1="ativo" />
			<SubMenu
				ativo1="ativo"
				titulo="Grupos e Tabelas"
				btnEditarAtivo={true}
				pontos={""}
				id={`${params.id}`}
			/>
			<div className="absolute mt-40 px-10 w-full flex flex-col gap-14">
				<NomeCampeonato id={`${params.id}`} />
				<main className="flex w-full h-full gap-8 mb-11">
					<table className="flex flex-col w-3/5 gap-3">
						<h2 className="font-padrao text-3xl text-black font-bold">
							TABELA
						</h2>
						<div className="font-padrao text-lg font-semibold text-black flex flex-col">
							<thead className="flex w-full text-base border-t-2 border-borderTopTabela">
								<tr className="flex w-full border-b-2 h-14 items-center border-borderTituloTabela justify-between">
									<th className="w-1/5 text-left h-full flex items-center border-r-2 border-borderDireitaTimes">
										CLASSIFICAÇÃO
									</th>
									<th className="w-tabela text-center ">P</th>
									<th className="w-tabela text-center">J</th>
									<th className="w-tabela text-center">V</th>
									<th className="w-tabela text-center">E</th>
									<th className="w-tabela text-center">D</th>
									<th className="w-tabela text-center">GP</th>
									<th className="w-tabela text-center">GC</th>
									<th className="w-tabela text-center">SG</th>
								</tr>
							</thead>
							<tbody className="flex flex-col w-full mt-0">
								<Linha
									posicao="1"
									time="Palmeiras"
									pontos="29"
									jogos="15"
									vitorias="8"
									empates="5"
									derrotas="2"
									golsPro="27"
									golsContra="12"
								/>
								<Linha
									posicao="2"
									time="Athletico-PR"
									pontos="27"
									jogos="15"
									vitorias="8"
									empates="3"
									derrotas="4"
									golsPro="19"
									golsContra="15"
								/>
								<Linha
									posicao="3"
									time="Atlético-MG"
									pontos="27"
									jogos="15"
									vitorias="7"
									empates="6"
									derrotas="2"
									golsPro="24"
									golsContra="17"
								/>
								<Linha
									posicao="4"
									time="Corinthians"
									pontos="26"
									jogos="15"
									vitorias="7"
									empates="5"
									derrotas="3"
									golsPro="17"
									golsContra="14"
								/>
								<Linha
									posicao="5"
									time="Internacional"
									pontos="25"
									jogos="15"
									vitorias="6"
									empates="7"
									derrotas="2"
									golsPro="22"
									golsContra="15"
								/>
								<Linha
									posicao="6"
									time="Fluminense"
									pontos="24"
									jogos="15"
									vitorias="7"
									empates="3"
									derrotas="5"
									golsPro="20"
									golsContra="16"
								/>
							</tbody>
						</div>
					</table>
					<div className="flex flex-col pl-8 w-2/5 border-l gap-3 border-l-borderDireitaTimes">
						<h2 className="font-padrao text-3xl text-black font-bold">
							JOGOS
						</h2>
						<ul className="flex flex-col w-full">
							<li className="flex justify-between items-center h-14 border-t-2 border-borderTopTabela border-b-2 border-borderTituloTabela">
								<IoIosArrowBack
									className="text-2xl cursor-pointer"
									onClick={anteriorRodada}
								/>
								<p className="text-2xl font-bold font-padrao">
									{rodada}ª RODADA
								</p>
								<IoIosArrowForward
									className="text-2xl cursor-pointer"
									onClick={proximaRodada}
								/>
							</li>
							<Jogos
								data="02/07/2022"
								escudo1="../../../public/images/463debd5f273f60bf2bcee425f931223.png"
								time1="FLU"
								golsTime1="4"
								local="MARACANÃ"
								hora="16:30"
								escudo2="../../../public/images/463debd5f273f60bf2bcee425f931223.png"
								time2="FLU"
								golsTime2="0"
							/>
							<Jogos
								data="02/07/2022"
								escudo1="../../../public/images/463debd5f273f60bf2bcee425f931223.png"
								time1="FLU"
								golsTime1="4"
								local="MARACANÃ"
								hora="16:30"
								escudo2="../../../public/images/463debd5f273f60bf2bcee425f931223.png"
								time2="FLU"
								golsTime2="0"
							/>
							<Jogos
								data="02/07/2022"
								escudo1="../../../public/images/463debd5f273f60bf2bcee425f931223.png"
								time1="FLU"
								golsTime1="4"
								local="MARACANÃ"
								hora="16:30"
								escudo2="../../../public/images/463debd5f273f60bf2bcee425f931223.png"
								time2="FLU"
								golsTime2="0"
							/>
						</ul>
					</div>
				</main>
			</div>
		</div>
	);
};
