import { createSelector } from "reselect";

const getReviews = state => state.getReviews;

export const selectReviews = createSelector(
	[getReviews],
	reviews => reviews.reviews
);