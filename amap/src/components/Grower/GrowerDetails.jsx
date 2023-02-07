import React from "react";
import "./Growers.css";

function GrowerDetails(props) {
  const{grower}=props
  console.log(grower)
    return (
    <div className="container">
    <h1>hello</h1>
    <h2>
              {grower.nom}
                </h2>
    </div>
    
  )
}

export default GrowerDetails