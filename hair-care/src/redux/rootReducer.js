import { combineReducers } from "redux";
import userReducer from '../redux/users/user.reducer'
import registerReducer from "./register/register.reducer";

export default combineReducers({
user: userReducer,
register: registerReducer
});
