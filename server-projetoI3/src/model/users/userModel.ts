import { prisma } from "../../prisma";
import { criptografar } from "../criptografia/criptografia";
import { emailConfirmacao } from "../mails/emailConfirmacao";

export type Usuario = {
	nome: string;
	email: string;
	senha: string;
	imagem: string;
};

type Entrar = {
	email: string;
	senha: string;
};

interface Atualizar extends Usuario {
	id: string;
}

export const User = {
	setUser: async ({ nome, email, senha, imagem }: Usuario) => {
		let cad = await prisma.$queryRaw
			`INSERT INTO usuarios (nome, email, senha, imagem) VALUES (${nome}, ${email}, ${senha}, ${imagem})`
			.then((usuario) => {
				//emailConfirmacao(nome, email, id);
				return true;
			})
			.catch((err) => {
				console.error(err);
				return false;
			});
		return cad;
	},
	login: async ({ email, senha }: Entrar) => {
		let usuario = await prisma.usuario
			.findFirst({
				where: {
					email,
					senha: criptografar(senha),
				},
			})
			.then((usuario) => {
				return usuario;
			})
			.catch((err) => {
				return false;
			});
		return usuario;
	},
	seacherEmail: async (email: string) => {
		let usuario = await prisma.usuario
			.findFirst({
				where: {
					email,
				},
			})
			.then((usuario) => {
				return usuario;
			})
			.catch((err) => {
				return false;
			});
		return usuario;
	},
	deleteUser: async (id: string) => {
		let usuario = await prisma.usuario
			.delete({
				where: {
					id,
				},
			})
			.then((usuario) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
		return usuario;
	},
	updateUser: async ({ id, nome, email, senha, imagem }: Atualizar) => {
		let usuario = await prisma.usuario
			.update({
				where: {
					id,
				},
				data: {
					nome,
					email,
					senha: criptografar(senha),
					imagem,
				},
			})
			.then((usuario) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
		return usuario;
	},
	setAtivo: async (id: string) => {
		let usuario = await prisma.usuario
			.update({
				where: {
					id,
				},
				data: {
					ativo: true,
				},
			})
			.then((usuario) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
		return usuario;
	},
	isAtivo: async (email: string) => {
		let usuario = await prisma.usuario
			.findFirst({
				where: {
					email,
					ativo: true,
				},
			})
			.then((usuario) => {
				return usuario;
			})
			.catch((err) => {
				return false;
			});
		return usuario;
	},
	nomeUsuario: async (id: string) => {
		let usuario = await prisma.usuario
			.findUnique({
				where:{
					id,
				},
			})
			.then((usuario) => {
				return usuario;
			})
			.catch((err) => {
				return false;
			});
		return usuario;
	},
};
