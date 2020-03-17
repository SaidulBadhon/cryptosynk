import React from 'react';
import "./OurExpertise.css";
import { Typography } from '@material-ui/core';

import ExpertiseLoader from "./ExpertiseLoader.js"
import ExpertiseData from "./ExpertiseData.js"

class OurExpertise extends React.Component {

  constructor() {
    super()
    this.state = {
        expertises: ExpertiseData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    return;
  }

  render(){

    const expertiseLoader = this.state.expertises.map(item => <ExpertiseLoader key={item.id} item={item}
    handleChange={this.handleChange}/>)


    return (
      <div className="OurExpertise">
        <div className="ExpertiseHeader">
            <h5>How We Apply Our Data Science Expertise</h5>
        </div>
        
        <div className="ExpertiseBody">
          {expertiseLoader}
        </div>
      </div>
    );
  }
}

export default OurExpertise;
