import { createSelector } from "reselect";

const setUser = state => state.user;

const setStylist = state => state.user;

export const selectUser = createSelector([setUser], user => user.user);

export const selectStylist = createSelector([setStylist], stylist => stylist);
