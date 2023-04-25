import { Router } from "express";
import * as Jogador from "../controllers/jogadorController";
import multer from "multer";

const upload = multer({
	dest: "./tmp",
	fileFilter: (req, file, cb) => {
		const allowedTypes: string[] = [
			"image/jpeg",
			"image/png",
			"image/jpg",
			"image/svg+xml",
			"image/svg",
		];
		if (allowedTypes.includes(file.mimetype)) {
			cb(null, true);
		} else {
			cb(new Error("Tipo de arquivo"));
		}
	},
});

const router = Router();

router.post("/cadastrar", upload.single("imagem"), Jogador.cadastrarJogador);
router.post("/atualizar", Jogador.atualizarJogador);
router.delete("/deletar/:id", Jogador.deletarJogador);
router.get("/listar/:timeId", Jogador.listarJogadores);

export default router;
