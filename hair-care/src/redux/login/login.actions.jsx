import { LoginTypes } from "./login.types";
import axiosWithAuth from "../../utils/axiosWithAuth";

const loginUser = credentials => {
	dispatch({ type: LoginTypes.LOGIN_START });
	axiosWithAuth()
		.post("", credentials)
		.then(response =>
			dispatch({
				type: LoginTypes.LOGIN_SUCCESS,
				payload: response.data
			})
		)
		.catch(err =>
			dispatch({ type: LoginTypes.LOGIN_FAIL, payload: err.response })
		);
};

export default loginUser;