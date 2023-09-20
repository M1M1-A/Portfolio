import React, { useState } from 'react';
import StreamSeeker from './StreamSeeker'
import "./ProjectTabs.css"

function ProjectTabs() {
  const [activeTab, setActiveTab] = useState('streamSeeker');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <button
          className={activeTab === 'streamSeeker' ? 'active' : 'streamSeeker'}
          onClick={() => handleTabClick('streamSeeker')}
          >
          StreamSeeker
      </button>

      <div className='projectContent'>
          {activeTab === "streamSeeker" && 
          <StreamSeeker />
          }
      </div>
    </>
  )

}

export default ProjectTabs;