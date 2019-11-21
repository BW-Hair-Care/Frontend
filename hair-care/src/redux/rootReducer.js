import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import registerReducer from "./register/register.reducer";
import loginReducer from "./login/login.reducer";
import postReducer from "./post-Review/post.reducer";

export default combineReducers({
	review: postReducer,
	user: userReducer,
	register: registerReducer,
	login: loginReducer
});
