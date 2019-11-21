import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<div>
			Welcome to Hair Care Sign Up:
			<Link to="/register-stylist">Stylist</Link>
			<Link to="/register-customer">Customer</Link>
			Log in:
			<Link to="/stylist-login">Stylist</Link>
			<Link to="/customer-login">Customer</Link>
		</div>
	);
};

export default Landing;
