import { Figure } from "./style";
import Detalhes from "../../assets/images/Vector.svg";

type dados = {
	foto?: string;
	nome: string;
};

export const ListarJogadoresTimes = ({ foto, nome }: dados) => {
	return (
		<Figure className="flex flex-row flex-wrap justify-between mb-8">
			<figure className="flex items-center">
				<img src={foto} alt="Foto do Jogador" className="h-16 w-16" />
			</figure>
			<div className="flex flex-col justify-between ">
				<h2 className="text-xl font-padrao font-bold text-white text-right">
					{nome}
				</h2>
				<p className="text-base flex flex-row flex-wrap items-center gap-1 justify-end font-padrao font-semibold text-white text-right">
					Ver Detalhes <img src={Detalhes} alt="" />
				</p>
			</div>
		</Figure>
	);
};
