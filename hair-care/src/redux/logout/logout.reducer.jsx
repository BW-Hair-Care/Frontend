import { LogOutTypes } from "./logout.types";
import jwt from "jsonwebtoken";

const INITIAL_STATE = {
	loggingOut: false,
	loggedOut: false,
	user: jwt.decode(localStorage.getItem("token")),
	error: ""
};

const logoutReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LogOutTypes.LOGOUT_START:
			return {
				...state,
				loggingOut: true,
				loggedOut: false,
				error: ""
			};
		case LogOutTypes.LOGOUT_SUCCESS:
			return {
				...state,
				loggingOut: false,
				loggedOut: true,
				user: action.payload,
				error: ""
			};
		case LogOutTypes.LOGOUT_FAIL:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};

export default logoutReducer;
