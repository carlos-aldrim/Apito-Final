import { Router } from "express";
import * as Campeonato from "../controllers/campeonatosController";
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

router.get("/", Campeonato.paginaCampeonato);
router.post(
	"/criarCampeonato",
	upload.single("logo"),
	Campeonato.criarCampeonato
);
router.get("/listarCampeonatos/:id", Campeonato.listarCampeonatos);
router.post("/updateCampeonato", Campeonato.updateCampeonato);
router.delete("/deleteCampeonato/:id", Campeonato.deleteCampeonato);
router.get("/buscar/:id", Campeonato.getBuscar);

export default router;
