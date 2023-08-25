import React from "react";
import "./section.css";

const Section = () => {
  return (
    <div className="box">
      <div className="head">ISRO</div>
      <div className="body">
        <p className="para1">
          For the provision of satellite launch services, ISRO is inviting bids
          from reputable private aerospace firms. Through this project, we hope
          to strengthen our country's space capabilities by utilising the
          knowledge and resources of the private sector.
        </p>
        <strong className="head1">Work scope:</strong>
        <ul className="list1">
          <li>Launching two satellites into predetermined orbits.</li>
          <li>
            Providing the launch vehicle, integrating the payload, managing the
            launch, and providing post-launch assistance.
          </li>
        </ul>
        <strong>Conditions for Submission:</strong>
        <ul>
          <li>Details about the launch vehicle and technical approach.</li>
          <li>Cost breakdown and suggested budget.</li>
          <li>successful satellite launches in the past.</li>
        </ul>
        <p>
          <strong>Date of Submission: </strong>September 22, 2023
        </p>
        <p>
          <strong>Contact Information : </strong>[Name, Email, Phone]
        </p>
        <p className="para2">
          "We are eager to hear about your ideas and work with you to strengthen
          our country's space exploration capabilities."
        </p>
      </div>
      <button className="apply">Apply</button>
    </div>
  );
};

export default Section;
