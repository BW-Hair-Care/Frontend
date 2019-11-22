import { createSelector } from "reselect";

const getAPI = state => state.getUsers;

export const selectUsers = createSelector(
	[getAPI],
	users => users.users
);