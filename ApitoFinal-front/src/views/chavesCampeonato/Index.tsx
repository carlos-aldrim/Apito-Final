import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Btn } from "../../components/btnPadrao/Index";
import { Chaves } from "../../components/chaves/Index";
import { NomeCampeonato } from "../../components/NomeCampeonato";
import { SubMenu } from "../../components/subMenu";
import { Menur } from "../../components/TelasHome/menu";
import { api } from "../../server/api";

var randomTimes: Array<object> = [];

function fisherYatesShuffle(arr: Array<object>) {
	console.log(arr);

	for (var i = arr.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1)); //random index
		[arr[j], arr[j]] = [arr[j], arr[i]]; // swap
		randomTimes.push(arr[j]);
	}
}

export function CampeonatoEmChaves() {
	const [times, setTimes] = useState([]);

	const params = useParams();
	const [torneio, setTorneio] = useState([]);
	useEffect(() => {
		api.get("times/buscar/665d4c6a-9268-4257-8c47-22074571b9e3")
			.then((Response) => {
				setTimes(Response.data);
			})
			.catch((err) => {
				console.error("Times não recuperados");
			});
	}, []);

	{
		/**function showTimes(props:any){
		console.log(times)
		const chave = (
			<div>
				{props.times.map((time: { nomeTime: string; }) => {
					<Chaves nomeTime1={time.nomeTime} nomeTime2={time.nomeTime} />
				})}
			</div>
		)

		return {chave}
	}*/
	}

	return (
		<div>
			<Menur ativo1="ativo" />
			<SubMenu
				ativo1="desativo"
				ativo4="ativo"
				btnEditarAtivo={true}
				pontos={"PONTOS"}
				id={`${params.id}`}
			/>
			<div className="absolute mt-40 px-10 w-full flex flex-col gap-14">
				<NomeCampeonato id={`${params.id}`} />
				<main className="flex flex-col gap-7 z-0 ">
					<div></div>
					<div className="flex flex-row gap-4 ml-[45rem]">
						<Btn
							link="/"
							texto="Gerar Partidas"
							classname="rounded-3xl
								border-black
								text-black
								border-2
								w-56 h-10
								font-bold
								text-lg"
						/>
						<Btn
							link="/chavesCampeonato"
							texto="Sortear Times"
							classname="rounded-3xl
							border-black
							text-white
							bg-black
							border-2
							w-56 h-10
							font-bold
							text-lg"
							onClick={fisherYatesShuffle(times)}
						/>
						<button>show</button>
					</div>
				</main>
			</div>
		</div>
	);
}
