import React from "react";
import cypress from './Assests/cypress.png'
import express from './Assests/Express.png'
import jest from './Assests/jest.png'
import mongoDB from './Assests/mongoDB.png'
import node from './Assests/Node.js.png'
import react from './Assests/React.png'
import tmdb from './Assests/TMDB.png'
import './Technologies.css'

function Technologies() {
  return (
    <>
      <img className="logos" src={mongoDB} alt='mongoDB'/>
      <img className="logos" src={express} alt='express'/>
      <img className="logos" src={react} alt='react'/>
      <img className="logos" src={node} alt='node'/>
      <img className="logos" src={tmdb} alt='tmdb'/>
      <img className="logos" src={cypress} alt='cypress'/>
      <img className="logos" src={jest} alt='jest'/>
    </>
  )
}

export default Technologies;