import { combineReducers } from "redux";
import loginCustomerReducer from "./customers/login/login.reducer";
import loginStylistReducer from "./stylists/login/login.reducer";
import registerCustomerReducer from "./customers/register/register.reducer";
import registerStylistReducer from "./stylists/register/register.reducer";
import postReducer from "./customers/post-Review/post.reducer";


export default combineReducers({
	loginCustomer: loginCustomerReducer,
	loginStylist: loginStylistReducer,
	registerCustomer: registerCustomerReducer,
	registerStylist: registerStylistReducer,
	postReview: postReducer
});
