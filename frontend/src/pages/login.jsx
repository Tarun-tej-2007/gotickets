import React from "react";
import "./login.css";

export default function login() {
  return (
    <div className="page">
      <h1>Sign in page</h1>
      <div className="form-container">
        <h2>Create an account</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="email">Email Id</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="repassword">Re-Enter Password</label>
          <input type="password" id="repassword" name="repassword" />

          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}
