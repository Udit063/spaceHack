import React from "react";
import "./navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = ({ background = "black" }) => {
  const location = useLocation();
  const isBlogPage = location.pathname.includes("/blogs");

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      window.localStorage.removeItem("userID");
      const response = await axios.post("http://localhost:8000/auth/logout");
      console.log(response.data); // Optional: Log the response data
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ backgroundColor: background }} className="navbar">
      <div className="logo">
        {/* <img src="./logo.png" alt="Logo" /> */}
        Space🌍Sync
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to={"/home "}>Home</Link>
          </li>
          <li>
            <Link to={"/blogs"}>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="logout">
        {isBlogPage && (
          <Link to={"/blogs/write"}>
            <button className="navbutton">Write Blog</button>
          </Link>
        )}
        <button className="navbutton" onClick={handleLogout}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Navbar;
