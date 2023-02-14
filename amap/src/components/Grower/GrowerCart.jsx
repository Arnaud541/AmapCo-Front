import React from "react";
import "./GrowerCart.css";


function GrowerCart(props) {
  const{cartDetails}=props;
  console.log(cartDetails)
    return (
    <div className="container">
      
      <div className="cartvue">
      <h2>la
     
      { cartDetails[0] && (<> <img id="cartimg" src={cartDetails[0].img_url} alt="CartPicture"/></>) }
      <div>{cartDetails[0]?.PanierProducteurNom}</div>
      {/* {
        cartDetails.map((c) => (
          <div>{c.PanierProducteurNom}</div>
        ))
      }  */}
      </h2>
      

        </div>  
    </div>
    
  )
}

export default GrowerCart