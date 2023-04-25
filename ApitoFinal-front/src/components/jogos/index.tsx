interface Dados {
	data: string;
	hora: string;
	local: string;
	time1: string;
	time2: string;
	golsTime1: string;
	golsTime2: string;
	escudo1: string;
	escudo2: string;
}

export const Jogos = ({
	data,
	hora,
	local,
	time1,
	time2,
	golsTime1,
	golsTime2,
	escudo1,
	escudo2,
}: Dados) => {
	return (
		<li className="w-full h-28 flex flex-col border-b border-borderTabela py-3 gap-3 items-center">
			<header>
				<p className="font-padrao font-bold text-xs">
					{data} <span className="font-normal">{local} </span>
					{hora}
				</p>
			</header>
			<main className="flex gap-4">
				<figure className="flex gap-2 items-center">
					<h3>{time1}</h3>
					<img src={escudo1} alt={time1} width={30} height={30} />
				</figure>
				<div className="flex items-center gap-3">
					<h2 className="font-sans font-bold text-xl">{golsTime1}</h2>
					<p className="font-sans font-normal text-base">x</p>
					<h2 className="font-sans font-bold text-xl">{golsTime2}</h2>
				</div>
				<figure className="flex gap-2 items-center">
					<img src={escudo2} alt={time2} width={30} height={30} />
					<h3>{time2}</h3>
				</figure>
			</main>
			<footer>
				<h2 className="text-xs font-sans text-buttonCard font-semibold">
					VEJA COMO FOI
				</h2>
			</footer>
		</li>
	);
};
