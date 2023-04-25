import { Router } from "express";
import * as Partida from "../controllers/partidaController";

const router = Router();

router.post("/criarPartida", Partida.criarPartida);
router.post("/updatePartida", Partida.updatePartida);
router.delete("/deletePartida/:id", Partida.deletePartida);
router.post("/listarPartidas", Partida.listarPartidas);
router.get("/listarTodasPartidas/:id", Partida.listarTodasPartidas);

export default router;
