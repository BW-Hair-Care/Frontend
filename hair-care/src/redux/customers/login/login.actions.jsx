import { LoginTypes } from "./login.types";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";

const loginCustomer = (credentials, props) => dispatch => {
	console.log("creds", credentials);
	console.log("propz-user", props);
	dispatch({ type: LoginTypes.LOGIN_START });
	axios
		.post(
			"https://haircarebackend.herokuapp.com/api/customers/login",
			credentials,
			{
				headers: credentials
			}
		)

		.then(response => {
			const token = response.data.token;
			localStorage.setItem("token", token);
			dispatch({
				type: LoginTypes.LOGIN_SUCCESS,
				payload: response.data
			});
			console.log("hey props", props);
			console.log("hey data", response.data);
			props.push("/explore");
		})

		.catch(err =>
			dispatch({ type: LoginTypes.LOGIN_FAIL, payload: err.response })
		);
};

export default loginCustomer;
