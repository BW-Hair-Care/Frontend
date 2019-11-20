import { LoginTypes } from "./login.types";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";

const loginUser = (credentials, props) => dispatch => {
	console.log("creds", credentials);
	console.log('propz',props)
	dispatch({ type: LoginTypes.LOGIN_START });
	axios
		.post("https://hair-care-backend.herokuapp.com/auth/login", credentials, {
			headers: credentials
		})

		.then(response => {
			const token = response.data.token;
			localStorage.setItem("token", token);
			dispatch({
				type: LoginTypes.LOGIN_SUCCESS,
				payload: response.data
			});
			console.log("hey props", props);
			console.log("hey data", response.data);
			props.push('/explore')
		})

		.catch(err =>
			dispatch({ type: LoginTypes.LOGIN_FAIL, payload: err.response })
		);
};

export default loginUser;
