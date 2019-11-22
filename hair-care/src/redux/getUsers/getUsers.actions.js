import { getUsersActions } from "./getUsers.types";
import axios from 'axios'

 const getAPI = props => dispatch => {
	dispatch({ type: getUsersActions.GET_START });
	axios
		.get(`https://hair-care-backend.herokuapp.com/stylists/`)
		.then(response =>
			dispatch({ type: getUsersActions.GET_SUCCESS, payload: response.data })
		,[])
		.catch(err =>
			dispatch({ type: getUsersActions.GET_FAIL, payload: err.response })
		);
};

export default getAPI