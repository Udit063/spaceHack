import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src="./logo.jpg" alt=""></img>
      </div>
      <div className="navComponents">
        <span className="home">Home</span>
        <span className="satellite">Satellite</span>
        <span className="agencies">Agencies</span>
      </div>
      <div className="logout">Logout</div>
    </div>
  );
};

export default Navbar;
