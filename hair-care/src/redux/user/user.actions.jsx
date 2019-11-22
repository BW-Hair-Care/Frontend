import { UserActionTypes } from "./user.types";
import axios from "axios";

export const setUser = user => ({
	type: UserActionTypes.SET_USER,
	payload: user
});

export const getUser = props => dispatch => {
	dispatch({ type: UserActionTypes.GET_USER });
	axios
		.get(`https://hair-care-backend.herokuapp.com/stylists/${props}`)
		.then(
			response =>
				dispatch({
					type: UserActionTypes.GET_USER_SUCCESS,
					payload: response.data
				}),
			[]
		)
		.catch(err =>
			dispatch({ type: UserActionTypes.GET_USER_FAIL, payload: err.response })
		);
};
