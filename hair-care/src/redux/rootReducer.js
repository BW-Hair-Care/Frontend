import { combineReducers } from "redux";
import userReducer from './user/user.reducer'
import registerReducer from "./register/register.reducer";
import loginReducer from "./login/login.reducer";

export default combineReducers({
user: userReducer,
register: registerReducer,
login: loginReducer
});
