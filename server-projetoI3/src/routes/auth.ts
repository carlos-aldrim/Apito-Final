import { Router } from "express";
import * as Auth from "../controllers/authController";
const router = Router();

router.post("/verifyToken", Auth.Authorization);
router.get("/", Auth.Auth);

export default router;
