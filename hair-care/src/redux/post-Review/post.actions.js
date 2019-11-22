import { PostActions } from "./post.types";
import axios from "axios";

const postToAPI = (props, review) => dispatch => {
	console.log(review, "and props", props);
	dispatch({ type: PostActions.POST_START });
	axios
		.post(
			`https://hair-care-backend.herokuapp.com/stylists/${props}/review`,
			review
		)
		.then(response => {
			dispatch({ type: PostActions.POST_SUCCESS, payload: response.data });
		})
		.catch(err =>
			dispatch({ type: PostActions.POST_FAIL, payload: err.response })
		);
};

export default postToAPI;
