import { UsersActionTypes } from './users.types';
import jwt from 'jsonwebtoken'

const INITIAL_STATE = {
 user: jwt.decode(localStorage.getItem('token')),

};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;