import React from "react";
import "./proposal.css";
import Section from "../../components/Section";
import Navbar from "../../components/Navbar";

const Proposal = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="contribute">
        <Section />
        <Section />
        <Section />
      </div>
    </div>
  );
};

export default Proposal;
