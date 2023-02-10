import React from "react";
import "./GrowerCart.css";


function GrowerCart(props) {
  const{cartDetails}=props;
  console.log(cartDetails)
    return (
    <div className="container">
      <h2>la</h2>
      <div className="cartvue">
      <img className="cartimg" src={cartDetails[0].img_url} alt="CartPicture"/>
      {/* {
        cartDetails.map((c) => (
          <div>{c.img_url}</div>
        ))
      } */}

      


        </div>  
    </div>
    
  )
}

export default GrowerCart