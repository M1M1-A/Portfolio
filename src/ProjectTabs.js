import React, { useState } from 'react';
import StreamSeeker from './StreamSeeker'
import WorkoutTimer from './WorkoutTimer'
import OnTheDoor from './OnTheDoor'
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

      <button
          className={activeTab === 'onTheDoor' ? 'active' : 'onTheDoor'}
          onClick={() => handleTabClick('onTheDoor')}
          >
          OnTheDoor
      </button>

      <button
          className={activeTab === 'WorkoutTimer' ? 'active' : 'WorkoutTimer'}
          onClick={() => handleTabClick('WorkoutTimer')}
          >
          Workout Timer
      </button>

      <div className='projectContent'>
          {activeTab === "streamSeeker" && (
            <div>
              <StreamSeeker />
            </div>
          )}
          {activeTab === "onTheDoor" && (
            <div>
              <OnTheDoor />
            </div>
          )}
          {activeTab === "WorkoutTimer" && (
            <div>
              <WorkoutTimer />
            </div>
          )}
      </div>
    </>
  )

}

export default ProjectTabs;