import React from "react";
import "./signUp.css";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="head">Sign Up</div>
      <form className="form">
        <input className="orgName" type="text" placeholder="Enter Name" />
        <input
          className="orgName"
          type="text"
          name="organization"
          placeholder="Organization Name"
        />
        <input
          className="orgName"
          type="text"
          name="email"
          placeholder="Email Address"
        />
        <input
          className="orgName"
          type="password"
          name="password"
          placeholder="Password"
        />
        <div className="signbtn">
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
