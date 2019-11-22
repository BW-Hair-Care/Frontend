import { getReviewsActions } from "./getReviews.types";

const initialState = {
	reviews: [],
	fetchingReview: false,
	fetchedReview: false,
	error: ""
};

const getReviewsReducer = (state = initialState, action) => {
	switch (action.type) {
		case getReviewsActions.GET_START:
			return {
				...state,
				fetchingReview: true
			};

		case getReviewsActions.GET_SUCCESS:
			return {
				...state,
				fetchingReview: false,
				fetchedReview:true,
				reviews: action.payload,
				error: ""
			};
		case getReviewsActions.GET_FAIL:
			return {
				...state,
				fetchingReview: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default getReviewsReducer;
