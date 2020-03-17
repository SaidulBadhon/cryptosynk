import React from 'react';
import "./Services.css";
import { Typography } from '@material-ui/core';
import Consulting from "../../Images/ContentSVGs/Consulting.svg"
import Implementation from "../../Images/ContentSVGs/Implementation.svg"


function Services() {
  return (
    <div className="Services">
        <h5>Services</h5>

        <div className="ServicesMain">
            <div className="ServicesBody">
                <h2>Consulting</h2>

                <img src={Consulting }alt="Consulting image"/>
                
                <p>We provide strategic guidance throughout your ML development projects. 
                    Starting with goal-setting and analysis of your business processes and data sources, 
                    we offer scenarios for business process optimization with machine learning algorithms, 
                    define the expected results, select technologies, 
                    and outline the development scope.</p>

            </div>

            <div className="ServicesBody">
                <h2>Implementation</h2>

                <img src={Implementation}alt="Consulting image"/>

                <p>We shape ML models into fully functioning AI solutions. 
                    Our ML experts ensure that machine learning solutions operate smoothly within 
                    software ecosystems and perform properly without jeopardizing the integrity 
                    and operation of deployed systems.</p>
            </div>
        </div>

    </div>
  );
}

export default Services;
