import { PostActions } from "./post.types";
import axios from "axios";

const postToAPI = review => async dispatch => {
	dispatch({ type: PostActions.POST_START });
	axios
		.post("https://hair-care-backend.herokuapp.com/stylists/1/review", review)
		.then(console.log(review))
		.then(response => console.log('response',response))
		.then(response =>
			dispatch({ type: PostActions.POST_SUCCESS, payload: response.data })
		)
		.catch(err =>
			dispatch({ type: PostActions.POST_FAIL, payload: err.response })
		);
};

export default postToAPI;
