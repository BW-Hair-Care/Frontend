import { editUsersActions } from "./editUsers.types";

const initialState = {
	users: [],
	isEditing: false,
	edited: false,
	error: ""
};

const editUsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case editUsersActions.EDIT_START:
			return {
				...state,
				isEditing: true
			};

		case editUsersActions.EDIT_SUCCESS:
			return {
				...state,
				isEditing: false,
				edited:true,
				users: action.payload,
				error: ""
			};
		case editUsersActions.EDIT_FAIL:
			return {
				...state,
				isEditing: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default editUsersReducer;
