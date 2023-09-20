import React from "react";
import cypress from './Logos/cypress.png'
import express from './Logos/Express.png'
import jest from './Logos/jest.png'
import mongoDB from './Logos/mongoDB.png'
import node from './Logos/Node.js.png'
import react from './Logos/React.png'
import tmdb from './Logos/TMDB.png'
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