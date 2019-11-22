import React, { useEffect } from "react";
import ReviewCard from "./reveiwCard";

export const Reviews = props => {
	console.log("look here", props.reviews);

	const reviews = props.reviews;
	console.log(reviews);
	return (
		<div className="review">
			
			{reviews.map(review => (
				<ReviewCard key={review.id} review={review} />
			))}
		</div>
	);
};
