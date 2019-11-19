import React from "react";
import "./App.css";
import { LoginForm } from "./Component/LoginForm";
import Registration from "./Component/registration.component";
import ProfileCard from "./Component/profile-card";
import ProtfolioCard from "./Component/portfolio-card";

function App() {
  return (
    <div className="App">
      <Registration />

      <header className="App-header">hello</header>
      <LoginForm />
      <ProfileCard />
      <ProtfolioCard />
    </div>
  );
}

export default App;
