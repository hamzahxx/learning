import React from "react";

function Login(props) {
  return (
    <>
      <h1>Please {props.register ? "Login" : "Register"}</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {!props.register && <input type="password" placeholder="Confirm Password" />}
        <button type="submit">{props.register ? "Login" : "Register"}</button>
      </form>
    </>
  );
}

export default Login;
