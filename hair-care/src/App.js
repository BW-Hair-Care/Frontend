import React from "react";
import "./App.css";
import LogIn  from "./Component/LoginForm";
import Registration from "./Component/registration";
import ProfileCard from "./Component/profile-card";
import PortfolioCard from "./Component/portfolio-card";
import { Route, Switch } from "react-router-dom";
import Explore from "./page/Explore";
import Stylist from "./page/Stylist";
import User from "./page/User";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route path="/register" component={Registration} />
        <Route path="/login" component={LogIn} />
        <PrivateRoute path="/explore" component={Explore} />
        <Route path="/stylist" component={Stylist} />
        <Route path="/user" component={User} />

      </Switch>
    </div>
  );
}

export default App;
