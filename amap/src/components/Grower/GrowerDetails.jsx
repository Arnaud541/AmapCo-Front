import React from "react";
import "./GrowerDetails.css";
import growerimg from  "../../assets/img/backgroundgrower.png"


function GrowerDetails(props) {
  const{grower, growercart, growerriew}=props
  console.log(growercart)
    return (
    <div className="container">
      
      <img id="growerimg" src={growerimg}/>

      <div className="growerinfo">
        {grower.avatar}
        {grower.nom}
        {grower.created_at}
      </div>

      <div className="growerCarts">

        {growercart.map((cart) => (
          <div className="growerCart">
              <h2>{cart.nom}</h2>
          </div>
            
        ))}

        {growercart.map((cart) => {
          cart.nom
        })}

      </div>
      <div className="userReview">
        <h2 id="titleUserReview">Avis des amapiens</h2>
        <hr />

        {growerreview.map((gr) => (
          
          <div className="growerReview">
            
              <h2>{gr.avis}</h2>
          </div>
            
        ))}
      </div>
    </div>   
  )
}

export default GrowerDetails