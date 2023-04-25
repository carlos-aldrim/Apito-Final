import { Password } from "./password/index";
import { Inputs } from "../input";

export const Input = () => {
	return (
		<>
			<Inputs
				id="email"
				label="Email"
				placeholder="@email.com"
				type="email"
				mb="mb-7"
			/>
			<Password id="senha" label="Senha" placeholder="Senha" />
		</>
	);
};
