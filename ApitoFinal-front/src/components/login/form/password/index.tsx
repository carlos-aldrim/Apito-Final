import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Inputi } from "../style";
import { useState } from "react";

type dados = {
	label: string;
	id: string;
	placeholder: string;
	mt?: string;
};

export const Password = ({ id, label, placeholder, mt }: dados) => {
	const [tipo, setTipo] = useState("password");
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
		setTipo(show ? "password" : "text");
	};
	return (
		<div className={`flex flex-wrap flex-col gap-1.5 ${mt}`}>
			<label
				htmlFor={id}
				className="text-base font-sans font-semibold leading-4 text-labelLogin"
			>
				{label}
			</label>
			<Inputi className="flex flex-wrap items-center">
				<input
					type={tipo}
					name={id}
					id={id}
					placeholder={placeholder}
					className="px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid border-borderInput"
				/>
				{show ? (
					<AiFillEye
						className="h-13 w-8 olho bg-input"
						onClick={handleClick}
					/>
				) : (
					<AiFillEyeInvisible
						className="h-13 w-8 olho bg-input"
						onClick={handleClick}
					/>
				)}
			</Inputi>
		</div>
	);
};
