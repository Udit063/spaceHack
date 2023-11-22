import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    organization: "",
    password: "",
  });

  const [_, setCookies] = useCookies(["accessToken"]);
  const { email, organization, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      navigate("/home"); //-- use this to transfer user to home page after signup
      setInputValue({
        email: "",
        organization: "",
        password: "",
      });
      window.localStorage.setItem("userID", response.data.user);
      setCookies("accessToken", response.data.accessToken);

      console.log(response);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="login">
      <div className="head">Log In</div>
      <form className="form">
        <input
          className="orgname"
          type="text"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleOnChange}
        />
        <input
          className="orgname"
          type="text"
          name="organization"
          value={organization}
          placeholder="Enter your organization"
          onChange={handleOnChange}
        />
        <input
          className="orgname"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleOnChange}
        />
        <div className="loginbtn">
          <button onClick={(e) => handleLogin(e)}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
