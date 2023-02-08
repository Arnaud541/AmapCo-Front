import React from "react";
import "./GrowerDetails.css";
import growerimg from  "../../assets/img/backgroundgrower.png"
import GrowerCart from "./GrowerCart";


function GrowerDetails(props) {
  const{grower}=props
  console.log(grower)
    return (
    <div className="container">
      
      <img id="growerimg" src={growerimg}/>

      <div className="growerinfo">
        <h1>div1 remplir les infos du grower</h1>
        {grower.avatar}
        <p>{grower.nom}</p>
        {grower.created_at}
      </div>

      <div className="growercart">
        <h1>div2 paniers de producteur</h1>
        <h2>{GrowerCart.nom}</h2>
      </div>

      
      <div className="userReview">
        <h2 id="titleUserReview">Avis des amapiens</h2>
        <hr />
      </div>
      



    </div>
    
  )
}

export default GrowerDetails