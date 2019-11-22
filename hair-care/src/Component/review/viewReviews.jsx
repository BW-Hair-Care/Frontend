import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import getReviews from "../../redux/getReviews/getReviews.actions";
import axiosWithAuth from "../../utils/axiosWithAuth";

const Reviews = (props) => {
	const handleClick = e => {
		e.preventDefault();
        console.log(props);
        props.getReviews(props.id)
    };
    
    

	return (
		<div>
			<button onClick={handleClick}>Get Reviews</button>
		</div>
	);
};
const mapDispatchToProps = { getReviews };

export default connect(null, mapDispatchToProps)(Reviews);
