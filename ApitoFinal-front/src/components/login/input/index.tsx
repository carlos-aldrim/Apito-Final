type dados = {
	label: string;
	id: string;
	placeholder: string;
	type: string;
	name: string;
	mb?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	required?: boolean;
};

export const Inputs = ({
	id,
	label,
	placeholder,
	type,
	name,
	mb,
	onChange,
	value,
	onBlur,
	required,
}: dados) => {
	return (
		<>
			<div className={`flex flex-col gap-1.5 ${mb}`}>
				<label
					htmlFor={id}
					className="text-base font-sans font-semibold leading-4 text-labelLogin"
				>
					{label}
				</label>
				<input
					type={type}
					name={id}
					placeholder={placeholder}
					id={id}
					className="px-2.5 py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid border-borderInput"
				/>
			</div>
		</>
	);
};
