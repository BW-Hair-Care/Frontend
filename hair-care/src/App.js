import React from "react";
import "./App.css";
import { LoginForm } from "./Component/LoginForm";
import Registration from './Component/registration.component'

function App() {
  return (
    <div className="App">
      
      <Registration />

      <header className="App-header">hello</header>
      <LoginForm />
    </div>
  );
}

export default App;
