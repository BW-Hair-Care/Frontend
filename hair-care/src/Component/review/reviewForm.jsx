import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import FormInput from "../FormInput";

import postToAPI from "../../redux/post-Review/post.actions";

import "../components.css";
import { selectUser } from "../../redux/user/user.selector";

const ReviewForm = ({ postToAPI, currentUser, id }) => {
	const [customerReview, setCustomerReview] = useState("");
	const [CustomerId, setCustomerId] = useState(currentUser.subject);
	const [StylistsId, setStylistId] = useState(id);


	const handleSubmit = e => {
		e.preventDefault();
		console.log(id, { customerReview, CustomerId, StylistsId });
		postToAPI(id,{customerReview,CustomerId, StylistsId});
		setCustomerReview("")
	};

	const handleChange = e => {
		setCustomerReview(e.target.value);
	};

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<div>
					<FormInput
						name="customerReview"
						type="textarea"
						handleChange={handleChange}
						value={customerReview}
						label="Please Leave Your Review"
						required
					/>
				</div>
				<div>
					<button className="button" type="submit">
						Submit Review{" "}
					</button>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectUser
});

const mapDispatchToProps = { postToAPI };

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
