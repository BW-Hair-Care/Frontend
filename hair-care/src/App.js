import React from "react";
import "./App.css";
import LogIn from "./Component/LoginForm";
import Registration from "./Component/registration";
import { Route, Switch } from "react-router-dom";
import Explore from "./page/Explore";
import PrivateRoute from "./utils/PrivateRoute";
import Profile from "./page/Profile";
import Home from "./page/Home";
import Landing from "./page/Landing";
import Header from "./Component/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/register" component={Registration} />
				<Route path="/login" component={LogIn} />
				<PrivateRoute path="/explore" component={Explore} />
				<PrivateRoute exact path="/edit" component={Home} />

				<PrivateRoute path="/stylist/:id" component={Profile} />
			</Switch>
		</div>
	);
}

export default App;
