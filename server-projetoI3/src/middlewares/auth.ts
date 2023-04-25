import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const Auth = {
	private: async (res: Response, req: Request, next: NextFunction) => {
		let sucess: boolean = false;
		if (req.headers.authorization) {
			const [authType, token] = req.headers.authorization.split(" ");
			if (authType === "Bearer") {
				try {
					JWT.sign(token, process.env.JWT_SECRET as string);
				} catch (error) {}
				sucess = true;
			}
		}
		if (sucess) {
			next();
		} else {
			res.json({
				error: "Não autorizado!",
			}).status(403);
		}
	},
};

export default Auth;
