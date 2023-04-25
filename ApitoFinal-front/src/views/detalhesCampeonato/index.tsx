import { Menur } from "../../components/TelasHome/menu";
import { SubMenu } from "../../components/subMenu";
import { NomeCampeonato } from "../../components/NomeCampeonato";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../server/api";

export const DetalhesCampeonato = () => {
	const params = useParams();
	const [torneio, setTorneio] = useState([]);
	useEffect(() => {
		api.get(`/campeonato/buscar/${params.id}`)
			.then((res) => {
				setTorneio(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<Menur ativo1="ativo" />
			{torneio.map((torneios: any, index: number) => {
				return (
					<>
						<SubMenu
							ativo="ativo"
							titulo="Detalhes"
							id={`${params.id}`}
							pontos={torneios.tipoCampeonato}
						/>
						<div className="absolute mt-40 px-10 w-full flex flex-col gap-14">
							<NomeCampeonato id={`${params.id}`} />
							<main className="flex flex-col gap-7 z-0">
								<div className="flex flex-col">
									<h3 className="uppercase text-buttonCard font-padrao font-black text-lg">
										Descrição
									</h3>
									<p className="text-preto text-lg">
										{torneios.descricao}
									</p>
								</div>
								<div className="flex flex-col">
									<h3 className="uppercase text-buttonCard font-padrao font-black text-lg">
										Premiação
									</h3>
									<p className="text-preto text-lg">
										{torneios.premiacao}
									</p>
								</div>
								<div className="flex flex-col">
									<h3 className="uppercase text-buttonCard font-padrao font-black text-lg">
										Tipo de Campeonato
									</h3>
									<p className="text-preto text-lg">
										{torneios.tipoCampeonato == "PONTOS"
											? "PONTOS CORRIDOS"
											: "MATA-MATA"}
									</p>
								</div>
							</main>
						</div>
					</>
				);
			})}
		</div>
	);
};
