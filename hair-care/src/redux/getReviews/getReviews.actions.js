import { getReviewsActions } from "./getReviews.types";
import axios from 'axios'

 const getReviews = props => dispatch => {
	 console.log(props)
	dispatch({ type: getReviewsActions.GET_START });
	axios
		.get(`https://hair-care-backend.herokuapp.com/stylists/${props}/review`)
		.then(response =>
			dispatch({ type: getReviewsActions.GET_SUCCESS, payload: response.data })
		,[])
		.catch(err =>
			dispatch({ type: getReviewsActions.GET_FAIL, payload: err.response })
		);
};

export default getReviews