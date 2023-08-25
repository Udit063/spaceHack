import React, { useState } from "react";
import "./landing.css";
import SignUp from "../../components/SignUp";
import Login from "../../components/Login";

const Landing = () => {
  const [alreadySigned, setAlreadySigned] = useState(false);

  const handleSign = () => {
    setAlreadySigned(!alreadySigned);
  };

  return (
    <div className="landing">
      <div className="heroSection">
        <div className="leftArea">
          <div className="image">
            <img src="./spaceImage.jpg" alt="" />
          </div>
        </div>
        <div className="rightArea">
          {alreadySigned ? <Login /> : <SignUp />}
          <span className="or">OR</span>
          <button
            className="btnlogin"
            onClick={() => {
              handleSign();
            }}
          >
            {alreadySigned
              ? "First Time Here, Sign Up"
              : "Already a User, Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
