import { createSelector } from "reselect";

const getAPI = state => state.stylists;

export const selectUsers = createSelector(
	[getAPI],
	users => users
);