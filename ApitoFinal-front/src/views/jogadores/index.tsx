import { ListarCadastrar } from "../../components/listarCadastrar";
import { Cards } from "../../components/listarCadastrar/cards";
import { ListarJogadoresTimes } from "../../components/listarJogadoresTimes";
import { Menur } from "../../components/TelasHome/menu";
import { Titulo } from "../../components/TelasHome/titulo";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { api } from "../../server/api";
import { AuthContext } from "../../context/Auth/AuthContext";

export const Jogadores = () => {
	const cadastrarJogadores = Yup.object().shape({
		nome: Yup.string()
			.min(3, "O nome deve ter no mínimo 3 caracteres")
			.required("O nome é obrigatório"),
		numero: Yup.number()
			.min(1, "O número deve ser maior que 0")
			.required("O número é obrigatório"),
	});
	const formik = useFormik({
		initialValues: {
			nome: "",
			numero: "",
			imagem: "",
		},
		validationSchema: cadastrarJogadores,
		onSubmit: (values) => {},
	});
	let [borda, borda1] = "border-borderInput";
	if (formik.errors.nome && formik.values.nome != "") {
		borda = "border-red-500";
	} else if (formik.values.nome != "") {
		borda = "border-green-500";
	}
	if (formik.errors.numero && formik.values.numero != "") {
		borda1 = "border-red-500";
	} else if (formik.values.numero != "") {
		borda1 = "border-green-500";
	}

	const [jogadores, setJogadores] = useState([]);
	const user = useContext(AuthContext);
	useEffect(() => {
		api.get(`/jogador/listar/af441510-bc86-4b37-847d-a684f3b9946c`)
			.then((res) => {
				setJogadores(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<Menur ativo3="ativo" />

			<section className="flex flex-col px-10 mt-32 ">
				<Titulo
					titulo="Jogadores"
					subtitulo="Lista de seus jogadores de futebol cadastrados"
				/>
				<ListarCadastrar>
					<Cards>
						{jogadores.map((jogador: any) => {
							return (
								<ListarJogadoresTimes
									key={jogador.id}
									foto={jogador.imagem}
									nome={jogador.nome}
								/>
							);
						})}
					</Cards>
					<div className="flex flex-col w-1/4 border-2 border-solid border-borderForm shadow-menu rounded-xl pt-8 px-5">
						<h2 className="font-home font-black text-xl text-navMenuAtivo mb-10">
							Novo Jogador
						</h2>
						<form
							action="http://localhost:3333/jogador/cadastrar"
							method="post"
							className="flex flex-col flex-wrap gap-8"
							encType="multipart/form-data"
						>
							<div className="flex flex-col flex-wrap gap-8 w-full">
								<div className="flex flex-col flex-wrap gap-1.5">
									<label
										htmlFor="nome"
										className="text-base font-sans font-semibold leading-4 text-labelLogin"
									>
										Nome
									</label>
									<input
										type="text"
										name="nome"
										id="nome"
										placeholder="Nome"
										required
										onChange={formik.handleChange}
										value={formik.values.nome}
										onBlur={formik.handleBlur}
										className={`px-2.5 py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda}`}
									/>
									{formik.touched.nome &&
									formik.errors.nome ? (
										<p className="text-red-500 font-sans text-sm">
											{formik.errors.nome}
										</p>
									) : null}
								</div>
								<div className="flex flex-col flex-wrap gap-1.5">
									<label
										htmlFor="posicao"
										className="text-base font-sans font-semibold leading-4 text-labelLogin"
									>
										Posicao
									</label>
									<select
										name="posicao"
										id="posicao"
										required
										className={`px-2.5 py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid`}
									>
										<optgroup label="Posições">
											<option value="Goleiro">
												Goleiro
											</option>
											<option value="Zagueiro">
												Zagueiro
											</option>
											<option value="Lateral">
												Lateral
											</option>
											<option value="Meio">Meio</option>
											<option value="Atacante">
												Atacante
											</option>
										</optgroup>
									</select>
								</div>
								<div className="flex flex-col flex-wrap gap-1.5">
									<label
										htmlFor="numero"
										className="text-base font-sans font-semibold leading-4 text-labelLogin"
									>
										Número da camisa
									</label>
									<input
										type="number"
										name="numero"
										id="numero"
										placeholder="Número da camisa"
										required
										min={1}
										onChange={formik.handleChange}
										value={formik.values.numero}
										onBlur={formik.handleBlur}
										className={`px-2.5 py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda1}`}
									/>
									{formik.touched.numero &&
									formik.errors.numero ? (
										<p className="text-red-500 font-sans text-sm">
											{formik.errors.numero}
										</p>
									) : null}
								</div>
								<div className="flex flex-col flex-wrap gap-1.5">
									<label
										htmlFor="Foto"
										className="text-base font-sans font-semibold leading-4 text-labelLogin"
									>
										Foto do Jogador
									</label>
									<input
										type="file"
										name="imagem"
										id="Foto"
										required
										onChange={formik.handleChange}
										value={formik.values.imagem}
										onBlur={formik.handleBlur}
										className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid w-full`}
									/>
								</div>
								<input
									type="hidden"
									name="timeId"
									id="userId"
									value="665d4c6a-9268-4257-8c47-22074571b9e3"
								/>
								<button
									type="submit"
									className={`rounded text-white font-home font-black text-lg py-2 mb-4 bg-buttonCard`}
								>
									Cadastrar Jogador
								</button>
							</div>
						</form>
					</div>
				</ListarCadastrar>
			</section>
		</div>
	);
};
