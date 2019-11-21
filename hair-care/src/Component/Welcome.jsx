import React from "react";
import { connect } from "react-redux";

const Welcome = (user) => {
console.log(user)
	return (
		<>
			<h1> Welcome Back, {user.user.username}! </h1>
		
        </>
	);
};

const mapStateToProps = state => {
  return {
      user: state.user.user
  }
}

export default connect(
  mapStateToProps,
)(Welcome)
