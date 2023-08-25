import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    window.localStorage.removeItem("userID");
    try {
      const response = await axios.post("http://localhost:8000/auth/logout");
      console.log(response.data); // Optional: Log the response data
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./logo.png" alt="" />
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to={"/home "}>Home</Link>
          </li>
          <li>
            <Link to={"/satellites"}>Satelites</Link>
          </li>
          <li>
            <Link to={"/proposal"}>Contribute</Link>
          </li>
        </ul>
      </div>
      <div className="logout">
        <button onClick={handleLogout}>LogOut</button>
      </div>
    </div>
  );
};

export default Navbar;
