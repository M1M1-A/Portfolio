import React, { useState } from 'react';
import UIdesign from "./StreamSeekerUI.png"
import Demo from "./StreamSeekerDemo.mp4"
import './StreamSeeker.css'; 
import Technologies from './Technologies';

function TabbedContent() {
  const [activeTab, setActiveTab] = useState('image');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabbed-content-container">
      <div className='content-left'>
        <div>
          <h2>Project - StreamSeeker</h2>
          <p>StreamSeeker is a web-app that allows you to search for a Movie or TV show and get links for where you can stream it. 
            If you sign up as a user, you can also save your search results to come back to later.
            Streamseeker saves you the time and effort of searching each of your streaming services looking for your movie or show.</p>
        </div>
        <a className="link" href="https://github.com/M1M1-A/StreamSeeker">Git Hub Link</a>
        <h3>Technologies:</h3>
        <Technologies />
        <br/>
      </div>
      <div className='content-right'>
        <div className="tab-content">
          {activeTab === 'image' && (
            <img
              src={UIdesign}
              alt="UI Design"
              width="1000"
              height="600"
              className='UIDesign'
            />
          )}
          {activeTab === 'video' && (
            <video width="1000" height="600" controls className='DemoVideo'>
              <source src={Demo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className="tab-buttons">
          <button
            className={activeTab === 'image' ? 'active' : 'image'}
            onClick={() => handleTabClick('image')}
          >
            UI Diagram
          </button>
          <button
            className={activeTab === 'video' ? 'active' : 'video'}
            onClick={() => handleTabClick('video')}
          >
            Demo Video
          </button>
        </div>
      </div>
    </div>
  );
}

export default TabbedContent;
