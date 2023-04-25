import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
	const [user, setUser] = useState<User | null>(null);
	const api = useApi();
	useEffect(() => {
		const validateToken = async () => {
			const storageData = localStorage.getItem("authToken");
			if (storageData) {
				const data = await api.validateToken(storageData);
				setUser(data.data.user);
			}
		};
		validateToken();
	}, [api]);
	const singin = async (email: string, senha: string) => {
		const data = await api.singin(email, senha);
		if (data.message && data.token) {
			setUser(data);
			setToken(data.token);
			return true;
		}
		return false;
	};
	const singout = () => {
		setUser(null);
		setToken("");
	};
	const setToken = (token: string) => {
		localStorage.setItem("authToken", token);
	};
	return (
		<AuthContext.Provider value={{ user, singin, singout }}>
			{children}
		</AuthContext.Provider>
	);
};
