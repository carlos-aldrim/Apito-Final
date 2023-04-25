import { Router } from "express";
import * as Times from "../controllers/timesController";
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

router.get("/", Times.paginaTimes);
router.post("/cadastrar", upload.single("escudo"), Times.cadastrarTime);
router.post("/update", Times.updateTime);
router.delete("/delete/:id", Times.deleteTime);
router.get("/buscar/:id", Times.listarTimes);
router.get("/buscarTimesId/:id/:userId", Times.listarTimesId);

export default router;
