import { useContext } from "react";
import { Error } from "../../views/error";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const auth = useContext(AuthContext);
	if (!auth.user) {
		return <Error></Error>;
	}
	return children;
};
