import { UserActionTypes } from "./user.types";
import jwt from "jsonwebtoken";

const INITIAL_STATE = {
	user: jwt.decode(localStorage.getItem("token")),
	gettingStylist: false,
	gotStylist: false,
	stylist: {},
	error: ""
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SET_USER:
			return {
				...state,
				user: action.payload
			};
		case UserActionTypes.GET_USER:
			return {
				...state,
				gettingStylist: true
			};
		case UserActionTypes.GET_USER_SUCCESS:
			return {
				gettingStylist: false,
				gotStylist: true,
				stylist: action.payload,
				error: ""
			};
		case UserActionTypes.GET_USER_FAIL:
			return {
				gettingStylist: false,
				error: ""
			};
		default:
			return state;
	}
};

export default userReducer;
