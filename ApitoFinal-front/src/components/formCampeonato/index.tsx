import { useFormik } from "formik";
import { Inputs } from "../login/input";
import * as Yup from "yup";
import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import { api } from "../../server/api";
import { CircleNotch } from "phosphor-react";
import { IoIosArrowBack } from "react-icons/io";

export const FormCampeonato = () => {
	const SingupSchema = Yup.object().shape({
		nome: Yup.string()
			.min(3, "O nome deve ter no mínimo 3 caracteres")
			.required("O nome é obrigatório"),
		premiacao: Yup.string().required("A premiaçao é obrigatória"),
		qtdTimes: Yup.number()
			.required("A quantidade de times é obrigatória")
			.min(4, "A quantidade de times deve ser maior que 4")
			.max(32, "A quantidade de times deve ser menor que 32"),
	});
	const cadCampeonato = Yup.object().shape({
		dataInicio: Yup.string().required("A data de início é obrigatória"),
		dataFim: Yup.string().required("A data de fim é obrigatória"),
		descricao: Yup.string()
			.required("A descrição é obrigatória")
			.min(5, "A descrição deve ter no mínimo 5 caracteres"),
	});
	const formik = useFormik({
		initialValues: {
			nome: "",
			premiacao: "",
			tipoCampeonato: "",
			qtdTimes: "",
		},
		validationSchema: SingupSchema,
		onSubmit: (values) => {},
	});
	const formik2 = useFormik({
		initialValues: {
			dataInicio: "",
			dataFim: "",
			descricao: "",
		},
		validationSchema: cadCampeonato,
		onSubmit: (values) => {},
	});
	let disable,
		disable2 = "bg-buttonCard";
	const isDisableButton = () => {
		if (
			formik.values.nome == "" ||
			formik.values.premiacao == "" ||
			formik.values.qtdTimes == "" ||
			!formik.isValid
		) {
			disable = "bg-buttonCard";
			return true;
		} else {
			disable = "bg-verde-claro";
			return false;
		}
	};
	const isDisableButton2 = () => {
		if (
			formik2.values.dataInicio == "" ||
			formik2.values.dataFim == "" ||
			formik2.values.descricao == "" ||
			!formik2.isValid
		) {
			disable2 = "bg-buttonCard";
			return true;
		} else {
			disable2 = "bg-verde-claro";
			return false;
		}
	};
	let [borda, borda1, borda2, borda3, borda4, borda5] = "border-borderInput";
	if (formik.errors.nome && formik.values.nome != "") {
		borda = "border-red-500";
	} else if (formik.values.nome != "") {
		borda = "border-green-500";
	}
	if (formik.errors.premiacao && formik.values.premiacao != "") {
		borda1 = "border-red-500";
	} else if (formik.values.premiacao != "") {
		borda1 = "border-green-500";
	}
	if (formik.errors.qtdTimes && formik.values.qtdTimes != "") {
		borda2 = "border-red-500";
	} else if (formik.values.qtdTimes != "") {
		borda2 = "border-green-500";
	}

	if (formik2.errors.dataInicio && formik2.values.dataInicio != "") {
		borda3 = "border-red-500";
	} else if (formik2.values.dataInicio != "") {
		borda3 = "border-green-500";
	}
	if (formik2.errors.dataFim && formik2.values.dataFim != "") {
		borda4 = "border-red-500";
	} else if (formik2.values.dataFim != "") {
		borda4 = "border-green-500";
	}
	if (formik2.errors.descricao && formik2.values.descricao != "") {
		borda5 = "border-red-500";
	} else if (formik2.values.descricao != "") {
		borda5 = "border-green-500";
	}

	const [hidden, setHidden] = useState("");
	const [hidden2, setHidden2] = useState("hidden");

	const isHidden = () => {
		if (hidden == "") {
			setHidden("hidden");
			setHidden2("");
		} else {
			setHidden("");
			setHidden2("hidden");
		}
	};

	let data = new Date();
	let ano = data.getFullYear();
	let mes = data.getMonth() + 1;
	let dia = data.getDate();
	let data2 =
		ano +
		"-" +
		(mes < 10 ? "0" + mes : mes) +
		"-" +
		(dia < 10 ? "0" + dia : dia);

	return (
		<aside className="flex h-full flex-col w-1/4 border-2 border-solid border-borderForm shadow-menu rounded-xl pt-8 px-5">
			<form
				encType="multipart/form-data"
				action="http://localhost:3333/campeonato/criarCampeonato"
				method="POST"
			>
				<h2 className="font-home font-black text-xl text-navMenuAtivo mb-10">
					Novo Campeonato
				</h2>
				<div className={`flex flex-col flex-wrap gap-8 ${hidden}`}>
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
							className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda}`}
						/>
						{formik.touched.nome && formik.errors.nome ? (
							<p className="text-red-500 font-sans text-sm">
								{formik.errors.nome}
							</p>
						) : null}
					</div>
					<div className="flex flex-col flex-wrap gap-1.5">
						<label
							htmlFor="premiacao"
							className="text-base font-sans font-semibold leading-4 text-labelLogin"
						>
							Premiação
						</label>
						<input
							type="text"
							name="premiacao"
							id="premiacao"
							placeholder="Premiação"
							required
							onChange={formik.handleChange}
							value={formik.values.premiacao}
							onBlur={formik.handleBlur}
							className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda1}`}
						/>
						{formik.touched.premiacao && formik.errors.premiacao ? (
							<p className="text-red-500 font-sans text-sm">
								{formik.errors.premiacao}
							</p>
						) : null}
					</div>
					<div className="flex flex-col flex-wrap gap-1.5">
						<label
							htmlFor="tipoCampeonato"
							className="text-base font-sans font-semibold leading-4 text-labelLogin"
						>
							Tipo de Campeonato
						</label>
						<select
							name="tipoCampeonato"
							id="tipoCampeonato"
							className="px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid"
							onChange={formik.handleChange}
							value={formik.values.tipoCampeonato}
							onBlur={formik.handleBlur}
						>
							<option value="PONTOS">PONTOS CORRIDOS</option>
							<option value="PLAYOFF">MATA-MATA</option>
						</select>
						{formik.touched.tipoCampeonato &&
						formik.errors.tipoCampeonato ? (
							<p className="text-red-500 font-sans text-sm">
								{formik.errors.tipoCampeonato}
							</p>
						) : null}
					</div>
					<div className="flex flex-col flex-wrap gap-1.5">
						<label
							htmlFor="qtdTimes"
							className="text-base font-sans font-semibold leading-4 text-labelLogin"
						>
							Quantidade de Times
						</label>
						<input
							type="number"
							name="qtdTimes"
							id="qtdTimes"
							placeholder="10"
							required
							min={4}
							max={32}
							onChange={formik.handleChange}
							value={formik.values.qtdTimes}
							onBlur={formik.handleBlur}
							className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda2}`}
						/>
						{formik.touched.qtdTimes && formik.errors.qtdTimes ? (
							<p className="text-red-500 font-sans text-sm">
								{formik.errors.qtdTimes}
							</p>
						) : null}
					</div>
					<button
						onClick={isHidden}
						disabled={isDisableButton()}
						className={`rounded text-white font-home font-black text-lg py-2 mb-4 ${disable}`}
					>
						Próximo
					</button>
				</div>
				<div className={`flex flex-col flex-wrap gap-8 ${hidden2}`}>
					<div className="flex flex-col flex-wrap gap-1.5">
						<label
							htmlFor="dataInicio"
							className="text-base font-sans font-semibold leading-4 text-labelLogin"
						>
							Data de Início
						</label>
						<input
							type="date"
							name="dataInicio"
							id="dataInicio"
							min={data2}
							placeholder="Data de Início"
							required
							onChange={formik2.handleChange}
							value={formik2.values.dataInicio}
							onBlur={formik2.handleBlur}
							className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda3}`}
						/>
						{formik2.touched.dataInicio &&
						formik2.errors.dataInicio ? (
							<p className="text-red-500 font-sans text-sm">
								{formik2.errors.dataInicio}
							</p>
						) : null}
					</div>
					<div className="flex flex-col flex-wrap gap-1.5">
						<label
							htmlFor="dataFim"
							className="text-base font-sans font-semibold leading-4 text-labelLogin"
						>
							Data de Fim
						</label>
						<input
							type="date"
							name="dataFim"
							id="dataFim"
							min={data2}
							placeholder="Data de Fim"
							required
							onChange={formik2.handleChange}
							value={formik2.values.dataFim}
							onBlur={formik2.handleBlur}
							className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda4}`}
						/>
						{formik2.touched.dataFim && formik2.errors.dataFim ? (
							<p className="text-red-500 font-sans text-sm">
								{formik2.errors.dataFim}
							</p>
						) : null}
					</div>
					<div className="flex flex-col flex-wrap gap-1.5 w-full">
						<label
							htmlFor="logo"
							className="text-base font-sans font-semibold leading-4 text-labelLogin"
						>
							Logo
						</label>
						<input
							type="file"
							name="logo"
							id="logo"
							placeholder="Logo"
							required
							className="px-2.5 w-full password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid"
						/>
					</div>
					<div className="flex flex-col flex-wrap gap-1.5">
						<label
							htmlFor="descricao"
							className="text-base font-sans font-semibold leading-4 text-labelLogin"
						>
							Descrição
						</label>
						<textarea
							name="descricao"
							id="descricao"
							placeholder="Descrição"
							required
							onChange={formik2.handleChange}
							value={formik2.values.descricao}
							onBlur={formik2.handleBlur}
							className={`px-2.5 password py-1 rounded-inputLogin bg-input border-inputBorder border-solid ${borda5}`}
						/>
						{formik2.touched.descricao &&
						formik2.errors.descricao ? (
							<p className="text-red-500 font-sans text-sm">
								{formik2.errors.descricao}
							</p>
						) : null}
					</div>
					<input
						type="hidden"
						name="userId"
						value="328790c5-5819-49d6-a3ff-7c7aaa4a6da2"
					/>
					<input type="hidden" name="situacao" value="ABERTO" />
					<div className="flex justify-between items-center flex-wrap gap-1.5">
						<p
							className="flex items-center gap-1 cursor-pointer"
							onClick={isHidden}
						>
							<IoIosArrowBack /> Voltar
						</p>
						<button
							disabled={isDisableButton2()}
							type="submit"
							className={`w-8/12 px-5.5 h-full py-3.5 rounded bg-buttonLogin text-white font-sans font-semibold leading-4 text-center ${disable2}`}
						>
							Cadastrar Time
						</button>
					</div>
				</div>
			</form>
		</aside>
	);
};
