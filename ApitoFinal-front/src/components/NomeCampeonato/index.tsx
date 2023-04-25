import Calendario from "../../assets/images/calendar.svg";
import moment from "moment";
import { useEffect, useState } from "react";
import { api } from "../../server/api";
interface Dados {
	id: string;
}

export const NomeCampeonato = ({ id }: Dados) => {
	const [torneio, setTorneio] = useState([]);
	useEffect(() => {
		api.get(`/campeonato/buscar/${id}`)
			.then((res) => {
				setTorneio(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div className="flex h-32">
			<figure className="flex items-center gap-2">
				{torneio.map((torneios: any) => {
					return (
						<>
							<img
								src={`../../../public/${torneios.logo}`}
								alt=""
								width={100}
							/>
							<div className="flex flex-col text-preto justify-between items-center h-full">
								<h1 className="text-6xl font-bold mt-8 font-padrao">
									{torneios.nome}
								</h1>
								<figure className="flex gap-8">
									<div className="flex gap-1 items-center">
										<img
											src={Calendario}
											alt="Data de Início"
										/>
										<p>
											{moment(torneios.dataInicio).format(
												"DD/MM/YYYY"
											)}
										</p>
									</div>
									<div className="flex gap-1 items-center">
										<img
											src={Calendario}
											alt="Data de Fim"
										/>
										<p>
											{moment(torneios.dataFim).format(
												"DD/MM/YYYY"
											)}
										</p>
									</div>
								</figure>
							</div>
						</>
					);
				})}
			</figure>
		</div>
	);
};
