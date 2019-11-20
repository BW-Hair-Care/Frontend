import { LogOutTypes } from "./logout.types";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";

const loginUser = user => dispatch => {
	console.log("user", user);
	dispatch({ type: LogOutTypes.LOGOUT_START });
	axios
		.delete("https://hair-care-backend.herokuapp.com/auth/logout", user)
		.then(response => {
			dispatch({
				type: LogOutTypes.LOGOUT_SUCCESS,
				payload: response.data
			});
		})
		.then(() => this.props.history.push("/explore"))

		.catch(err =>
			dispatch({ type: LogOutTypes.LOGOUT_FAIL, payload: err.response })
		);
};

export default loginUser;
