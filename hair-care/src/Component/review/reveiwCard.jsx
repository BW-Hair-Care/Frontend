import React from "react";

const ReviewCard = props => {
    console.log(props.review);
    const review = props.review
	return <div>
        <h5>Review:</h5>
        <h3>{review.customerReview}</h3>
        {/* <h5><i>-{review.username}</i></h5> */}
    </div>;
};

export default ReviewCard;
