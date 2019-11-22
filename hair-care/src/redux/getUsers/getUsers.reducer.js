import { getUsersActions } from "./getUsers.types";

const initialState = {
	users: [],
	isFetching: false,
	fetched: false,
	error: ""
};

const getUsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case getUsersActions.GET_START:
			return {
				...state,
				isFetching: true
			};

		case getUsersActions.GET_SUCCESS:
			return {
				...state,
				isFetching: false,
				fetched:true,
				users: action.payload,
				error: ""
			};
		case getUsersActions.GET_FAIL:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default getUsersReducer;
