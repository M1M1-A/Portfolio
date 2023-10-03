import React from "react";
import cypress from './Assests/cypress.png'
import node from './Assests/Node.js.png'
import react from './Assests/React.png'
import flask from './Assests/flask.png'
import python from './Assests/python.png'
import pytest from './Assests/pytest.png'
import javascript from './Assests/javascript.png'
import './Technologies.css'

function Technologies() {
  return (
    <>
      <img className="logos" src={flask} alt='flask'/>
      <img className="logos" src={python} alt='python'/>
      <img className="logos" src={pytest} alt='pytest'/>
      <img className="logos" src={react} alt='react'/>
      <img className="logos" src={node} alt='node'/>
      <img className="logos" src={javascript} alt='javascript'/>
      <img className="logos" src={cypress} alt='cypress'/>
    </>
  )
}

export default Technologies;