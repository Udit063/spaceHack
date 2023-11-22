import React, { useState } from "react";
import "./signUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
    organization: "",
    email: "",
    password: "",
  });

  const { name, organization, email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      window.localStorage.setItem("userID", response.data.user._id);
      navigate("/home"); //-- use this to transfer user to home page after signup
      setInputValue({
        name: "",
        organization: "",
        email: "",
        password: "",
      });

      console.log(response);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="signUp">
      <div className="head">Sign Up</div>
      <form>
        <input
          className="orgName"
          type="text"
          name="name"
          value={name}
          onChange={handleOnChange}
          placeholder="Enter Name"
        />
        <input
          className="orgName"
          type="text"
          name="organization"
          value={organization}
          onChange={handleOnChange}
          placeholder="Enter your organization Name"
        />
        <input
          className="orgName"
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter your email"
        />
        <input
          className="orgName"
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter your Password"
        />
        <button onClick={(e) => handleSignUp(e)}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
