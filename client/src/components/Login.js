import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="head">Log In</div>
      <form className="form">
        <input
          className="orgname"
          type="text"
          name="organization"
          placeholder="Organization Name"
        />
        <input
          className="orgname"
          type="text"
          name="email"
          placeholder="Email Address"
        />
        <input
          className="orgname"
          type="password"
          name="password"
          placeholder="Password"
        />
        <div className="loginbtn">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
