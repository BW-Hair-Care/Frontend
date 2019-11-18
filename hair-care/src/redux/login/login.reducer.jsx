import { LoginTypes } from "./Login.types";

const INITIAL_STATE = {
  addingUser: false,
  addedUser: false,
  token: null,
  error: ''
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginTypes.LOGIN_START:
      return {
        ...state,
        addingUser: true,
        addedUser: false,
        error: '',
      }
    case  LoginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        addingUser: false,
        addedUser: true,
        user: action.payload.user,
        token: action.payload.data.token,
        error: '',
      }
    case  LoginTypes.LOGIN_FAIL:
      return {
        ...state,
        addedUser: false,
        error: action.payload,
      }
    default:
      return state;
  }
};

export default loginReducer;