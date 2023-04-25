import { reducerActionType } from "../types/reducerActionType";

export type LoginType = {
	isLoggedIn: boolean;
	id: string;
	email: string;
};

export const LoginInitialState: LoginType = {
	isLoggedIn: false,
	id: "",
	email: "",
};

export const LoginReducer = (state: LoginType, action: reducerActionType) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				isLoggedIn: action.payload.isLoggedIn,
				id: action.payload.id,
				email: action.payload.email,
			};
			break;
		case "LOGOUT":
			return {
				...state,
				isLoggedIn: action.payload.isLoggedIn,
				id: "",
				email: "",
			};
			break;
	}
	return state;
};
