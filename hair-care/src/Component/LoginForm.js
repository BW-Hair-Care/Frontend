import React, { useState } from "react";

export function LoginForm() {
  const [user, setUser] = useState("");

  const handleChange = e => {
    const { value, name } = e.target;

    setUser({ [name]: value });
  };

  const submitForm = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="user-login">User Login</label>
      <input name="username" type="text" onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input name="password" type="text" onChange={handleChange} />
    </form>
  );
}
