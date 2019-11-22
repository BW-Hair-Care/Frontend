import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../redux/user/user.actions";
import getReviews from "../redux/getReviews/getReviews.actions";

import { Reviews } from "../Component/review/review.container";

const Profile = props => {
	const id = props.match.params.id;
	const stylist = props.stylist;
	const reviews = props.reviews;
	useEffect(() => {
		props.getUser(id);
		props.getReviews(id);
	}, []);

	console.log(reviews);

	return (
		<>
			<div>
				<img
					alt="user"
					src={`https://robohash.org/${stylist.id}?set=set5&size=140x140`}
				/>
			</div>
			<div className="details-wrap">
				<div className="card">
					<h2>{stylist.username}</h2>
					<div className="movie-director">
						<em>Location: {stylist.location}</em>
					</div>

					<h3>Bio</h3>
					<h2>{stylist.description}</h2>
				</div>
			</div>
			<Reviews reviews={reviews}/>
		</>
	);
};

const mapStateToProps = state => {
	return {
		stylist: state.user.stylist,
		reviews: state.getReviews.reviews
	};
};

const mapDispatchToProps = { getUser, getReviews };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
