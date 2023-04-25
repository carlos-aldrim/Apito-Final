import { Link } from "react-router-dom";
export const Links = () => {
	return (
		<>
			<li className=" cursor-pointer hover:text-gray-600">
				<Link to="/cadastrar">Cadastre-se</Link>
			</li>
			<li className=" cursor-pointer hover:text-gray-600">
				<Link to="/login">Entrar</Link>
			</li>
		</>
	);
};
