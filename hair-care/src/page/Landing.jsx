  
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<div>
			Welcome to Hair Care Sign Up:
			<Link to="/register">Register</Link>
			Log in:
			<Link to="/login">Login</Link>
		</div>
	);
};

export default Landing;