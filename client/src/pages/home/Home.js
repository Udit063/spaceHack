import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar";
import Proposal from "../proposal/Proposal";
import NewsPage from "../NewsPage/NewsPage";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <Navbar background="transparent" />
        <div className="info">
          <div className="heading">Space</div>
          <div className="heading">Sync</div>
          <div className="infoDetails">
            Work with Government Organizations on Satellite design, Propulsion
            tech, or space missions
          </div>
        </div>
      </div>
      <div className="options">
        <img src="./subImage1.png" alt="" />
        <img src="./subImage2.png" alt="" />
        <img src="./subImage3.png" alt="" />
      </div>
      <div className="contributePage">
        <NewsPage />
        <Proposal />
      </div>
    </div>
  );
};

export default Home;
