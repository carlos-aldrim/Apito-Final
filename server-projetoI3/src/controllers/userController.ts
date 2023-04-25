import { Request, Response } from "express";
import { emailRecuperarSenha } from "../model/mails/emailRecuperarSenha";
import { User } from "../model/users/userModel";
import JWT from "jsonwebtoken";
import exp from "constants";

export const user = async (req: Request, res: Response) => {
	const { nome, email, senha, imagem } = req.body;
	let user = await User.seacherEmail(email);
	if (user) {
		res.send({ message: "Email já utilizado!" }).status(400);
	} else {
		let usuario = await User.setUser({ nome, email, senha, imagem });
		usuario
			? res
					.status(201)
					.send({ message: "Usuário cadastrado com sucesso!" })
			: res.send({ message: "Erro ao cadastrar usuário!" }).status(400);
	}
};

export const login = async (req: Request, res: Response) => {
	const { email, senha } = req.body;
	if (email && senha) {
		let usuario: any = await User.login({ email, senha });
		if (usuario != null) {
			let isAtivo = await User.isAtivo(usuario.email);
			console.log(isAtivo);
			if (isAtivo != null) {
				const token = JWT.sign(
					{
						id: usuario.id,
						email: usuario.email,
					},
					process.env.JWT_SECRET as string
				);
				res.send({
					message: "Login realizado com sucesso!",
					token,
				}).status(200);
			} else {
				res.json({
					message: "Para fazer login, ative a sua conta!",
				}).status(400);
			}
		} else {
			res.json({
				message: "Email ou senha incorretos!",
			}).status(400);
		}
	} else {
		res.status(400).send({ message: "Está faltando algum dado!" });
	}
};

export const deletarUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;
	let usuario = await User.deleteUser(id);
	usuario
		? res.status(200).send({ message: "Usuário deletado com sucesso!" })
		: res.status(400).send({ message: "Erro ao deletar usuário!" });
};

export const updateUsuario = async (req: Request, res: Response) => {
	const { id, nome, email, senha, imagem } = req.body;
	let usuario = await User.updateUser({ id, nome, email, senha, imagem });
	usuario
		? res.status(200).send({ message: "Usuário atualizado com sucesso!" })
		: res.status(400).send({ message: "Erro ao atualizar usuário!" });
};

export const confirmarCadastro = async (req: Request, res: Response) => {
	const { id } = req.params;
	let usuario = await User.setAtivo(id);
	usuario
		? res.status(200).send(res.redirect("http://localhost:3000/login"))
		: res.status(400).send({ message: "Erro ao confirmar usuário!" });
};

export const recuperarSenha = async (req: Request, res: Response) => {
	const { email } = req.body;
	let usuario = await User.seacherEmail(email);
	if (usuario) {
		emailRecuperarSenha(usuario as any);
		res.status(200).send({ message: "Email enviado com sucesso!" });
		return true;
	} else {
		res.send({ message: "Email não cadastrado!" }).status(400);
	}
};

export const retornaNomeUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;
	let usuario: any = await User.nomeUsuario(id);
	if(usuario){
		res.status(200).send(usuario);
	}else{
		res.status(400).send({ message: "Erro ao retornar nome!"});
	}
};
