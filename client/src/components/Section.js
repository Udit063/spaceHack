import React from "react";
import "./section.css";

const Section = ({ title, content, listItems, date, contactInfo, para2 }) => {
  return (
    <div className="box">
      <div className="head">{title}</div>
      <div className="body">
        {content && <p className="para1">{content}</p>}
        <strong className="head1">Work Scope:</strong>
        <ul className="list1">
          {listItems &&
            listItems.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <strong>Conditions for Submission:</strong>
        <ul>
          <li>Technical details regarding specifications and approach.</li>
          <li>A comprehensive breakdown of costs and a proposed budget.</li>
          <li>Evidence of successful implementation of similar projects.</li>
        </ul>
        <p>
          <strong>Date of Submission: </strong>
          {date || "N/A"}
        </p>
        <p>
          <strong>Contact Information: </strong>
          {contactInfo || "N/A"}
        </p>
        {para2 && <p className="para2">{para2}</p>}
      </div>
      <a
        href="https://eproc.vssc.gov.in/home.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="apply">Apply</button>
      </a>
    </div>
  );
};

export default Section;
