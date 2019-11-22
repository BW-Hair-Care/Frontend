import { editUsersActions } from "./editUsers.types";
import axios from 'axios'

 const editUsers = (props, edit) => dispatch => {
	dispatch({ type: editUsersActions.EDIT_START });
	axios
		.put(`https://hair-care-backend.herokuapp.com/stylists/1`, edit)
		.then(response =>
			dispatch({ type: editUsersActions.EDIT_SUCCESS, payload: response.data })
		,[])
		.catch(err =>
			dispatch({ type: editUsersActions.EDIT_FAIL, payload: err.response })
		);
};

export default editUsers