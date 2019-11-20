import { UsersActionTypes } from './users.types';

export const setCurrentUser = user => ({
  type: UsersActionTypes.SET_CURRENT_USER,
  payload: user
});