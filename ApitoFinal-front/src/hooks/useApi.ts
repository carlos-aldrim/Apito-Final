import { api } from "../server/api";

export const useApi = () => ({
	validateToken: async (token: string) => {
		const response = await api.post("/auth/verifyToken", { token });
		return response;
	},
	singin: async (email: string, senha: string) => {
		const response = await api.post("/usuario/login", { email, senha });
		return response.data;
	},
	logout: async () => {
		const response = await api.post("");
		return response.data;
	},
});
