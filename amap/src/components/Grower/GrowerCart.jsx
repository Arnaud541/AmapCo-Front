import React from "react";
import "./GrowerCart.css";


function GrowerCart(props) {
  const{Producteur}=props
    return (
    <div className="container">
      <h2>la</h2>
      <div className="cartvue">
      <p>{Producteur.id_panier}</p>
        </div>  
    </div>
    
  )
}

export default GrowerCart