import { LoginContainer } from "./style";
import HeaderLogo from "../../components/login/logo";
import { FooterImg } from "../../components/login/footer";
import { HeaderForm } from "../../components/login/headerForm";
import { Inputi } from "../../components/login/form/style";

import { Link, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import { FormEvent, useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { api } from "../../server/api";
import { CircleNotch } from "phosphor-react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/Auth/AuthContext";

export const Login = () => {
	const SinginSchema = Yup.object().shape({
		email: Yup.string()
			.email("Insira um e-mail válido")
			.required("O e-mail é obrigatório"),
		senha: Yup.string()
			.min(6, "A senha deve ter no mínimo 6 caracteres")
			.required("A senha é obrigatória"),
	});
	const formik = useFormik({
		initialValues: {
			email: "",
			senha: "",
		},
		validationSchema: SinginSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});
	let borda = "border-borderInput";
	if (formik.errors.email && formik.values.email != "") {
		borda = "border-red-500";
	} else if (formik.values.email != "") {
		borda = "border-green-500";
	}
	let borda2 = "border-borderInput";
	let border3 = "border-borderInput";
	if (formik.errors.senha && formik.values.senha != "") {
		borda2 = "border-red-500";
		border3 = "border-red-500";
	} else if (formik.values.senha != "") {
		borda2 = "border-green-500";
		border3 = "border-green-500";
	}
	const [tipo, setTipo] = useState("password");
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
		setTipo(show ? "password" : "text");
	};

	let disable = "bg-buttonCard";
	const isDisableButton = () => {
		if (
			formik.values.email == "" ||
			formik.values.senha == "" ||
			!formik.isValid
		) {
			disable = "bg-buttonCard";
			return true;
		} else {
			disable = "bg-verde-claro";
			return false;
		}
	};
	const [loading, setLoading] = useState(false);
	const auth = useContext(AuthContext);
	const navigate = useNavigate();
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const isLogged = await auth.singin(
			formik.values.email,
			formik.values.senha
		);
		if (isLogged) {
			navigate("/paginaInicial");
		} else {
			alert("Deu errado viu");
		}
	};

	return (
		<LoginContainer className="flex flex-row">
			<section className="flex flex-col px-8 w-1/2 items-start">
				<Link to={"/"}>
					<HeaderLogo />
				</Link>
				<form
					onSubmit={handleSubmit}
					method="post"
					className="flex flex-col w-full"
				>
					<HeaderForm
						title="Bem-vindo ao Apito Final"
						subtitle="Faça o login para acessar sua conta."
					/>
					<div className="flex flex-col flex-wrap gap-1.5">
						<label
							htmlFor="email"
							className="text-base font-padrao font-semibold leading-4 text-labelLogin"
						>
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="@email.com"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda}`}
						/>
						<p>
							{formik.errors.email && formik.touched.email ? (
								<span className="text-red-500 text-base font-sans">
									{formik.errors.email}
								</span>
							) : null}
						</p>
					</div>
					<div className="flex flex-col flex-wrap gap-1.5 mt-5">
						<label
							htmlFor="password"
							className="text-base font-padrao font-semibold leading-4 text-labelLogin"
						>
							Senha
						</label>
						<div>
							<Inputi className="flex flex-wrap items-center">
								<input
									type={tipo}
									name="senha"
									id="password"
									placeholder="Senha"
									value={formik.values.senha}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda2}`}
								/>
								{show ? (
									<AiFillEye
										className={`h-13 w-8 bg-input olho border-solid border-inputBorder ${border3}`}
										onClick={handleClick}
									/>
								) : (
									<AiFillEyeInvisible
										className={`h-13 w-8 bg-input olho border-solid border-inputBorder ${border3}`}
										onClick={handleClick}
									/>
								)}
							</Inputi>
							<p>
								{formik.errors.senha && formik.touched.senha ? (
									<span className="text-red-500 text-base font-sans">
										{formik.errors.senha}
									</span>
								) : null}
							</p>
						</div>
					</div>
					<Link
						to={"/recuperarSenha"}
						className="text-verde-claro font-padrao font-semibold text-right mt-7 text-base"
					>
						Esqueceu a senha?
					</Link>
					<button
						type="submit"
						disabled={isDisableButton()}
						className={`${disable} text-white mt-6 rounded-inputLogin py-2.5 text-base font-sans font-semibold `}
					>
						Entrar
					</button>
					<p className="mt-6 font-padrao font-semibold text-base text-labelLogin">
						Ainda não tem uma conta?{" "}
						<Link to={"/cadastrar"} className="text-verde-claro">
							Criar Conta
						</Link>
					</p>
				</form>
			</section>
			<FooterImg />
		</LoginContainer>
	);
};
