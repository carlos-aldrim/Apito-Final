import { Link } from "react-router-dom";
import Casimiro from "../../assets/images/ih.jpg";
export const Error = () => {
	return (
		<div className="w-full flex flex-col flex-wrap gap-4 items-center justify-center h-screen ">
			<h1 className="font-sans font-bold text-4xl">
				Para acessar:{" "}
				<Link to="/login" className="text-buttonCard">
					Faça o Login
				</Link>
			</h1>
			<img src={Casimiro} alt="Casimiro" className="w-1/2" />
		</div>
	);
};
