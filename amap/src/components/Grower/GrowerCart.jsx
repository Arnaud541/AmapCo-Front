import React from "react";
import "./GrowerCart.css";


function GrowerCart(props) {
  const{cartDetails}=props;
  console.log(cartDetails)
    return (
    <div className="container">
      
      <div className="cartvue">
      <h2>la
      <img id="cartimg" src={cartDetails[0].img_url} alt="CartPicture"/>
      {/* {
        cartDetails.map((c) => (
          <div>{c.Ingredient.id}</div>
        ))
      }  */}
      </h2>
      


        </div>  
    </div>
    
  )
}

export default GrowerCart