import React from "react";
import "./proposal.css";
import Section from "../../components/Section";

const Proposal = () => {
  const sectionsData = [
    {
      title: "ISRO Satellite Launch Services",
      content:
        "For the provision of satellite launch services, ISRO is inviting bids from reputable private aerospace firms. Through this project, we hope to strengthen our country's space capabilities by utilizing the knowledge and resources of the private sector, fostering a collaborative ecosystem that propels India's space exploration endeavors to new heights.",
      listItems: [
        "Launching two satellites into predetermined orbits.",
        "Providing the launch vehicle, integrating the payload, managing the launch, and providing post-launch assistance.",
      ],
      date: "September 22, 2023",
      contactInfo: "[Name, Email, Phone]",
      para2:
        "We are eager to hear about your ideas and work with you to strengthen our country's space exploration capabilities.",
    },
    {
      title: "ISRO Satellite Communication Enhancement",
      content:
        "This project aims to tap into the expertise of the private sector to enhance our satellite communication networks and provide advanced connectivity solutions.",
      listItems: [
        "Deploying a constellation of communication satellites in specified orbital positions.",
        "Providing satellite buses, payload integration, launch services, and post-launch maintenance.",
      ],
      date: "October 10, 2023",
      contactInfo: "[Name, Email, Phone]",
      para2:
        "We are excited to collaborate with pioneering space technology companies to elevate our satellite communication capabilities and ensure reliable connectivity worldwide.",
    },
    {
      title: "ISRO Earth Observation Project",
      content:
        "To strengthen our Earth observation capabilities, NASA is seeking proposals from experienced aerospace companies. The objective of this project is to leverage private sector innovation in developing and launching advanced Earth observation satellites to enhance our understanding of environmental changes.",
      listItems: [
        "Launching a series of Earth observation satellites equipped with advanced sensors.",
        "Providing satellite platforms, payload integration, launch services, and post-launch data processing support.",
      ],
      date: "November 8, 2023",
      contactInfo: "[Name, Email, Phone]",
      para2:
        "We are eager to collaborate with visionary aerospace firms to advance our Earth observation capabilities and contribute to a better understanding of our planet's dynamic changes.",
    },
    // Add more sections as needed
  ];

  return (
    <div className="contribute">
      <div className="contributeHead">
        Contribute To the growth of Indian Space Industry
      </div>
      {sectionsData.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          content={section.content}
          listItems={section.listItems}
          date={section.date}
          contactInfo={section.contactInfo}
          para2={section.para2}
        />
      ))}
    </div>
  );
};

export default Proposal;
