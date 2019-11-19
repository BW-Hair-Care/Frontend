import React from "react";
import "./App.css";
import LogIn  from "./Component/LoginForm";
import Registration from "./Component/registration.component";
import ProfileCard from "./Component/profile-card";
import ProtfolioCard from "./Component/portfolio-card";
import {Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    

      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/login" component={Registration} />
      </Switch>
    </div>
  );
}

export default App;
