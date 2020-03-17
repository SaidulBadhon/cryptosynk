import React from 'react';
import "./Technologies.css";

import Angular from "../../Images/jsLogos/Angular.svg"
import Bootstrap from "../../Images/jsLogos/Bootstrap.svg"
import CSS3 from "../../Images/jsLogos/CSS3.svg"
import HTML5 from "../../Images/jsLogos/HTML5.png"
import polymer from "../../Images/jsLogos/polymer.svg"
import ReactJS from "../../Images/jsLogos/ReactJS.svg"

import Section1 from "../../Images/jsLogos/Section1.svg"


function Technologies() {
  return (
    <div className="Technologies">
        <h5>Technologies We Work With</h5>

        <div className="TechnologiesMain">
          <div className="Section1">
              {/*<img className="Image1" src={ReactJS}alt="ReactJS image"/>
              <img className="Image2" src={Angular}alt="Angular image"/>
              <img className="Image3" src={HTML5}alt="HTML5 image"/>
              <img className="Image4" src={CSS3}alt="CSS3 image"/>
              <img className="Image5" src={polymer}alt="polymer image"/>
              <img className="Image6" src={Bootstrap}alt="Bootstrap image"/>*/}
              <img className="Section1" src={Section1}alt="Technologies"/>

          </div>
          
          <div className="Section2">
            <h2>Languages</h2>
            <p>We are specialize in <b>Python</b>, <b>Javascript</b>, <b>Angular</b> and <b>Node JS</b></p>
          </div>

            

        </div>

    </div>
  );
}

export default Technologies;
