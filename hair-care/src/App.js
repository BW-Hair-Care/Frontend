import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import CustomerRegistration from './Component/customer/registration'
import StylistRegistration from './Component/stylist/registration'
import LoginCustomer from "./Component/customer/LoginForm";
import LoginStylist from "./Component/stylist/LoginForm";
import Landing from "./page/Landing";
import ExplorePage from "./page/Explore";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path="/stylist-login" component={LoginStylist} />
        <Route path="/customer-login" component={LoginCustomer} />
        <Route path="/register-stylist" component={StylistRegistration} />
        <Route path="/register-customer" component={CustomerRegistration} />

        <PrivateRoute path="/explore" component={ExplorePage} />




      </Switch>
    </div>
  );
}

export default App;
