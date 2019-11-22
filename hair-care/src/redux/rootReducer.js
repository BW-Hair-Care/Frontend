import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import registerReducer from "./register/register.reducer";
import loginReducer from "./login/login.reducer";
import postReducer from "./post-Review/post.reducer";
import getUsersReducer from './getUsers/getUsers.reducer'
import getReviewsReducer from "./getReviews/getReviews.reducer";
import editUsersReducer from "./editUser/editUsers.reducer";

export default combineReducers({
	review: postReducer,
	getReviews: getReviewsReducer,
	user: userReducer,
	register: registerReducer,
	login: loginReducer,
	editUser: editUsersReducer,
	getUsers: getUsersReducer

});
