import React, { Fragment } from 'react';
import "./Styles.css";
import { Typography, Button } from '@material-ui/core';

import Main from "../Images/ContentSVGs/OBJECTSB.svg";

import OurExpertise from "./Expertise/OurExpertise.js";
import Services from "./Services/Services.js";
import Technologies from "./TechnologiesWeWorkWith/Technologies.js";

function Home() {
    const theme = {
        typography: {
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "fontSize": 14,
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 600
        }
      };


  return (
      <Fragment>
        <div className="MainSection">
                        
            <div className="MainText">
                <div className="TextBody">
                    <h1>Serverless AI</h1>
                    <h5>We help startups productionizing Artificial Intelligent applications.</h5>
                    <Button variant="contained" color="secondary">Hire Us</Button>
                </div>
            </div>
            <svg width="750" height="750" className="MainSVG">
                <image type="image/svg+xml" href={Main} />
            </svg>
        </div>

        <OurExpertise/>
        <Services/>
        <Technologies/>


    </Fragment>
    );
}

export default Home;
