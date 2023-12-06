import React from "react";

function Login() {
  return (
    <>
      <h1>Please Login</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
