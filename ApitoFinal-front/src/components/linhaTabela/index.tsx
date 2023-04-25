interface Dados {
	posicao: string;
	time: string;
	pontos: string;
	jogos: string;
	vitorias: string;
	empates: string;
	derrotas: string;
	golsPro: string;
	golsContra: string;
}

export const Linha = ({
	derrotas,
	empates,
	golsPro,
	golsContra,
	jogos,
	vitorias,
	pontos,
	posicao,
	time,
}: Dados) => {
	return (
		<tr className="flex w-full justify-between items-center h-14 border-b border-borderTabela">
			<td className="w-1/5 text-left border-r-2 border-borderDireitaTimes h-full flex items-center gap-2">
				<span>{posicao}</span> {time}
			</td>
			<td className="w-tabela text-center  bg-bgTabela h-full flex items-center justify-center">
				{pontos}
			</td>
			<td className="w-tabela text-center">{jogos}</td>
			<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
				{vitorias}
			</td>
			<td className="w-tabela text-center">{empates}</td>
			<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
				{derrotas}
			</td>
			<td className="w-tabela text-center">{golsPro}</td>
			<td className="w-tabela text-center bg-bgTabela h-full flex items-center justify-center">
				{golsContra}
			</td>
			<td className="w-tabela text-center">
				{parseInt(golsPro) - parseInt(golsContra)}
			</td>
		</tr>
	);
};
