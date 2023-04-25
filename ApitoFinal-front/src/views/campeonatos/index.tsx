import { Menur } from "../../components/TelasHome/menu";
import { Titulo } from "../../components/TelasHome/titulo";
import { ListarCadastrar } from "../../components/listarCadastrar";
import { Cards } from "../../components/listarCadastrar/cards";
import { Card } from "../../components/listarCadastrar/card";
import { FormCampeonato } from "../../components/formCampeonato";
import { useContext, useEffect, useState } from "react";
import { api } from "../../server/api";
import { AuthContext } from "../../context/Auth/AuthContext";

export const Campeonatos = () => {
	const [campeonatos, setCampeonatos] = useState([]);
	const user = useContext(AuthContext);
	useEffect(() => {
		api.get(`/campeonato/listarCampeonatos/${user.user.id}`)
			.then((res) => {
				setCampeonatos(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [user]);
	return (
		<div>
			<Menur ativo1="ativo" />
			<section className="flex flex-col px-10 mt-32">
				<Titulo
					titulo="Campeonatos"
					subtitulo="Lista de seus campeonatos cadastrados"
				/>
				<ListarCadastrar>
					<Cards>
						{campeonatos.map((campeonato: any) => {
							return (
								<Card
									key={campeonato.id}
									nome={campeonato.nome}
									logo={campeonato.logo}
									id={campeonato.id}
									tipoCampeonato={campeonato.tipoCampeonato}
									dataFim={campeonato.dataFim}
								/>
							);
						})}
					</Cards>

					<FormCampeonato />
				</ListarCadastrar>
			</section>
		</div>
	);
};
