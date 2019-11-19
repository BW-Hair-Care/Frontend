import { LoginTypes } from "./login.types";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import Axios from "axios";

const loginUser = credentials => dispatch => {
	dispatch({ type: LoginTypes.LOGIN_START });
	Axios
		.post("https://hair-care-backend.herokuapp.com/auth/login", credentials)
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