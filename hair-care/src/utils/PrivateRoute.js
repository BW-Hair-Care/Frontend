import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
	console.log({Component})

	return (
		<Route
			{...rest}
			render={props => {
				if (localStorage.getItem("token")) {
					return <Component {...props} />;
				} else {
					return <Redirect to="/login" />;
				}
			}}
		/>
	);
}

export default PrivateRoute;
