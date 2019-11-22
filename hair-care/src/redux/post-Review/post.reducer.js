import { PostActions } from "./post.types";

const initialState = {
	addingReview: false,
	addedReview: false,
	review: {},
	error: ""
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case PostActions.POST_START:
			return {
				...state,
				addingReview: true,
				addedReview: false,
				error: ""
			};
		case PostActions.POST_SUCCESS:
			return {
				...state,
				addingReview: false,
				addedReview: true,
				review: action.payload,
				error: ""
			};
		case PostActions.POST_FAIL:
			return {
				...state,
				addedReview: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default postReducer;
