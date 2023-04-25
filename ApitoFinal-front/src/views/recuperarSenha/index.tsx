import Logo from "../../assets/images/logo.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import { api } from "../../server/api";
import Swal from "sweetalert2";
import { CircleNotch } from "phosphor-react";
export const RecuperarSenha = () => {
	const schema = Yup.object().shape({
		email: Yup.string()
			.email("Insira um e-mail válido")
			.required("O e-mail é obrigatório"),
	});
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: schema,
		onSubmit: (values) => {},
	});
	let borda = "border-borderInput";
	if (formik.errors.email && formik.values.email != "") {
		borda = "border-red-500";
	} else if (formik.values.email != "") {
		borda = "border-green-500";
	}

	const [loading, setLoading] = useState(false);
	function handleSubmitForm(e: FormEvent) {
		e.preventDefault();
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener("mouseenter", Swal.stopTimer);
				toast.addEventListener("mouseleave", Swal.resumeTimer);
			},
		});
		setLoading(true);
		setTimeout(() => {
			api.post("/usuario/recuperar", {
				email: formik.values.email,
			})
				.then((res) => {
					Toast.fire({
						icon: "success",
						title: `${res.data.message}`,
					});
					setTimeout(() => {
						window.location.href = "http://localhost:3000/login";
					}, 2000);
				})
				.catch((err) => {
					Toast.fire({
						icon: "error",
						title: `${err.response.data.message}`,
					});
				});
			setLoading(false);
		}, 2000);
	}
	let disable = "bg-buttonCard";
	const isDisableButton = () => {
		if (formik.values.email == "" || !formik.isValid) {
			disable = "bg-buttonCard";
			return true;
		} else {
			disable = "bg-verde-claro";
			return false;
		}
	};

	return (
		<div className="bg-white h-screen">
			<header className="flex justify-center">
				<Link
					to={"/"}
					className="flex flex-row flex-wrap items-center gap-6 pt-16 pb-5"
				>
					<img src={Logo} alt="Logo" />
					<h1 className="text-4xl font-sans font-semibold leading-12 text-verde-claro">
						Apito Final
					</h1>
				</Link>
			</header>
			<main className="flex justify-center mx-auto w-2/5">
				<form onSubmit={handleSubmitForm} method="post">
					<fieldset className="flex bg-white flex-col flex-wrap rounded-xl p-4 border-2 border-solid border-borderForm shadow-menu ">
						<legend className="text-base font-sans font-semibold text-titleLoginFont">
							Recuperar Senha
						</legend>
						<div className="flex flex-col flex-wrap gap-6 w-full">
							<h3 className="text-base font-sans font-semibold text-titleLoginFont">
								Para recuperar a sua senha, informe seu endereço
								de email que nós enviaremos um código para a
								alteração da senha.
							</h3>
							<div className="flex flex-col flex-wrap gap-1.5">
								<label
									htmlFor="email"
									className="text-base font-sans font-semibold leading-4 text-labelLogin"
								>
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="@email.com"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
									required
									className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda}`}
								/>
								{formik.touched.email && formik.errors.email ? (
									<p className="text-red-500 text-sm">
										{formik.errors.email}
									</p>
								) : null}
							</div>
							<button
								type="submit"
								disabled={isDisableButton()}
								className={` text-white rounded-inputLogin py-2.5 text-base font-sans font-semibold ${disable}`}
							>
								{loading ? (
									<div className="h-6 flex justify-center items-center">
										<CircleNotch
											size={30}
											className="animate-spin"
										/>
									</div>
								) : (
									"Recuperar Senha"
								)}
							</button>
						</div>
					</fieldset>
				</form>
			</main>
		</div>
	);
};
