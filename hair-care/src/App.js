import React from "react";
import "./App.css";
import LogIn  from "./Component/LoginForm";
import Registration from "./Component/registration";
import ProfileCard from "./Component/profile-card";
import PortfolioCard from "./Component/portfolio-card";
import { Route, Switch } from "react-router-dom";
import Explore from "./page/Explore";
import PrivateRoute from "./utils/PrivateRoute";
import StylistProfile from "./page/Stylist";
import Home from "./Component/Welcome";
import Review from "./Component/reviewForm";

function App() {
  return (
    <div className="App">
    <Review />
      <Switch>
        <Route path="/register" component={Registration} />
        <Route path="/login" component={LogIn} />
        <PrivateRoute path="/explore" component={Explore} />
        <PrivateRoute exact path='/home' component={Home} />
        {/* <Route path="/stylist" component={StylistProfile} /> */}
        {/* <Route path="/user" component={StylistReview} /> */}

      </Switch>
    </div>
  );
}

export default App;
