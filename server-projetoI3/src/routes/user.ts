import { Router } from "express";
import * as User from "../controllers/userController";

const rota = Router();

rota.post("/cadastrar", User.user);

rota.post("/login", User.login);

rota.delete("/deletar/:id", User.deletarUsuario);

rota.post("/atualizar", User.updateUsuario);

rota.get("/confirmar/:id", User.confirmarCadastro);

rota.post("/recuperar", User.recuperarSenha);

rota.get("/retornaNome/:id", User.retornaNomeUsuario);

export default rota;
