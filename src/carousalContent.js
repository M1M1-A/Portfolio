import React, { useState } from 'react';
import UIdesign from "./StreamSeekerUI.png";
import Demo from "./StreamSeekerDemo.mp4";

function CarouselContent() {
  const [activeTab, setActiveTab] = useState(0);

  const handlePrevClick = () => {
    setActiveTab((prevTab) => (prevTab - 1 + 2) % 2); // Toggle between 0 and 1
  };

  const handleNextClick = () => {
    setActiveTab((prevTab) => (prevTab + 1) % 2); // Toggle between 0 and 1
  };

  return (
    <div>
      <div className="carousel">
        {activeTab === 0 && (
          <img
            src={UIdesign}
            alt="UI Design"
            width="500"
            height="300"
          />
        )}
        {activeTab === 1 && (
          <video width="500" height="300" controls>
            <source src={Demo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="carousel-arrows">
        <button onClick={handlePrevClick} className="arrow left">
          UI Diagram
        </button>
        <button onClick={handleNextClick} className="arrow right">
          Demo
        </button>
      </div>
    </div>
  );
}

export default CarouselContent;
