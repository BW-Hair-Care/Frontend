import { LoginTypes } from "./login.types";
import jwt from 'jsonwebtoken'

const INITIAL_STATE = {
  isLoggedIn: false,
  isLoggingIn: false,
  token: localStorage.getItem('token'),
  error: ''
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginTypes.LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        error: ''
      }
    case  LoginTypes.LOGIN_SUCCESS:
      return {
        ...state,
    
        token: action.payload.token,
        isLoggingIn: false,
        isLoggedIn: true,
        error: '',
      }
    case  LoginTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        error: action.payload,
      }
    default:
      return state;
  }
};

export default loginReducer;