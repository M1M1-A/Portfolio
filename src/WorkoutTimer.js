import React, { useState } from "react";
import UIdesign from "./Assests/StreamSeekerUI.png";
import Demo from "./Assests/Workout Timer Demo.mp4";
import "./StreamSeeker.css";
import Technologies from "./WorkoutTimerTechnologies";

function TabbedContent() {
  const [activeTab, setActiveTab] = useState("video");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabbed-content-container">
      <div className="content-left">
        <div>
          <h2>Project - Workout Timer</h2>
          <p>
            The Workout Timer assists you with interval workouts. It allows you to add rounds of
            exercises and how long you want to do each for, and then start a countdown timer
            for each round. 
          </p>
          <p>It was built using a Python Flask backend, with a React JS frontend. 
            Unit, Integration and e2e tests were completed using Pytest and Cypress. 
          </p>
        </div>
        <a className="link" href="https://github.com/M1M1-A/Workout-Timer">
          Git Hub Link
        </a>
        <h3>Technologies:</h3>
        <Technologies />
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
            UI Diagram
          </button>
        </div>
      </div>
    </div>
  );
}

export default TabbedContent;
