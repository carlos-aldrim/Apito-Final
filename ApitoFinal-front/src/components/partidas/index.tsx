import { IoMdArrowDropleft } from "react-icons/io";
import { PartidaFut } from "./style";

interface Dados {
	time1: string;
	time2: string;
	gols1: string;
	gols2: string;
	data: string;
	horario: string;
	status: string;
	escudo1: string;
	escudo2: string;
}

export const PartidasFut = ({
	time1,
	time2,
	gols1,
	gols2,
	data,
	horario,
	status,
	escudo1,
	escudo2,
}: Dados) => {
	return (
		<PartidaFut className="w-80 ">
			<div className="flex flex-wrap">
				<figure className="flex flex-col flex-wrap gap-3 w-48  border-r-2 border-borderForm">
					<div className="flex items-center justify-between pl-2">
						<div className="flex items-center gap-3">
							<img
								src={escudo1}
								alt={time1}
								width={35}
								height={35}
							/>
							<h3 className="text-xl font-home font-semibold">
								{time1}
							</h3>
						</div>
						<div className="flex flex-wrap gap-1 items-center">
							<p className="text-buttonCard font-bold font-home text-xl">
								{gols1}
							</p>
							<IoMdArrowDropleft className="text-buttonCard text-3xl" />
						</div>
					</div>
					<div className="w-48 flex items-center justify-between pl-2">
						<div className="flex items-center gap-3">
							<img
								src={escudo2}
								alt={time2}
								width={35}
								height={35}
							/>
							<h3 className="text-xl font-home font-semibold">
								{time2}
							</h3>
						</div>
						<div className="flex flex-wrap gap-1 items-center">
							<p className="text-buttonCard font-bold font-home text-xl">
								{gols2}
							</p>
							<IoMdArrowDropleft className="text-buttonCard text-3xl" />
						</div>
					</div>
				</figure>
				<div className="pl-3 flex justify-center flex-col items-center gap-3">
					<p className="flex justify-center flex-col items-center">
						<h3 className="text-sm font-home font-semibold text-preto">
							{data}
						</h3>
						<h3 className="text-sm font-home font-semibold text-preto">
							{horario}
						</h3>
					</p>
					<h3 className="text-sm font-home uppercase font-semibold text-buttonCard">
						{status}
					</h3>
				</div>
			</div>
		</PartidaFut>
	);
};
