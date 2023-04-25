import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { api } from "../../server/api";

type dados = {
	timeX?: string;
	timeY?: string;
	golsX: number;
	golsY: number;
};

export const Placar = ({ timeX, golsX, timeY, golsY}: dados) => {

	const [time1, setTime1] = useState([]);
	const [time2, setTime2] = useState([]);
	const user = useContext(AuthContext);

	useEffect(() => {
		api.get(`/times/buscarTimesId/${timeX}/${user.user.id}`)
			.then((res) => {
				setTime1(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	},[]);

	useEffect(() => {
		api.get(`/times/buscarTimesId/${timeY}/${user.user.id}`)
			.then((res) => {
				setTime2(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	},[]);

	console.log(time1,time2)

	return (
		<figure className="flex flex-row flex-wrap items-center justify-between">
			{time1.map((time : any) => {
				return(
					<div className="w-6">
						<img src={time.escudo} alt={time.nome} />
					</div>
				)
			})}
			<p className="text-xl font-home font-semibold tracking-widest">
				{golsX} : {golsY}
			</p>
			{time2.map((time : any) => {
				return(
					<div className="w-6">
						<img src={time.escudo} alt={time.nome} />
					</div>
				)
			})}
		</figure>
	);
};
