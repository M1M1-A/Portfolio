import React from "react";
import './Technologies.css'


function Technologies(props) {
  return (
    <>
      {props.technologies.map((tech, index) => (
        <img key={index} className="logos" src={require(`./Assests/${tech}.png`)} alt={tech} />
      ))}
    </>
  );
}

export default Technologies;