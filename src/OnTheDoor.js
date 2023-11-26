import React, { useState } from "react";
import UIdesign from "./Assests/OnTheDoor Diagram.png";
import Demo from "./Assests/OnTheDoor Demo.mp4";
import "./StreamSeeker.css";
import Technologies from "./Technologies";

function TabbedContent() {
  const [activeTab, setActiveTab] = useState("video");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabbed-content-container">
      <div className="content-left">
        <div>
          <h2>Project - OnTheDoor</h2>
          <p>
            An app that allows you to upload a csv file from popular Ticketing sites (this one is based on an Eventbrite attendee file), 
            and create a guest list. You can check-in the guests as they arrive, add guests who arrive on the door, and get a dashboard of 
            event stats. 
          </p>
          <p>It was built using an Express backend, with a React Native frontend. 
          </p>
        </div>
        <a className="link" href="https://github.com/M1M1-A/OnTheDoor">
          Git Hub Link
        </a>
        <h3>Technologies:</h3>
        <Technologies technologies={["reactNative","express", "node", "javascript"]}/>
        <br />
      </div>
      <div className="content-right">
        <div className="tab-content">
          {activeTab === "image" && (
            <img
              src={UIdesign}
              alt="UI Design"
              width="1000"
              height="600"
              className="UIDesign"
            />
          )}
          {activeTab === "video" && (
            <video width="1000" height="600" controls className="DemoVideo">
              <source src={Demo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className="tab-buttons">
          <button
            className={activeTab === "video" ? "active2" : "video"}
            onClick={() => handleTabClick("video")}
          >
            Demo Video
          </button>
          <button
            className={activeTab === "image" ? "active2" : "image"}
            onClick={() => handleTabClick("image")}
          >
            Diagrams
          </button>
        </div>
      </div>
    </div>
  );
}

export default TabbedContent;
