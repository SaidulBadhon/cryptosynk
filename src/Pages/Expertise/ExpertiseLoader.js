import React from "react"
import "./OurExpertise.css"

import Typography from "@material-ui/core/Typography"

function ExpertiseLoader(props) {
    return (
      <div className="ContentBox">
        <div className="ContentImg">
          <img src={props.item.img}/>
        </div>

        <br></br>

        <div className="ContentInfo">
          <h6>{props.item.heading}</h6>
        </div>
      </div>

    )
}

export default ExpertiseLoader
