import React, { useState } from "react";
import { connect } from "react-redux";

import UpdateProfile from "../Component/updateProfile";

const Home = props => {
	console.log(props.currentUser.subject);

	const currentUser = props.currentUser.subject;
	return (
		<div>
			
			<UpdateProfile />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		currentUser: state.user.user
	};
};

export default connect(mapStateToProps)(Home);
