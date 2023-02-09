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
        <div className="groweravatar">{grower.avatar}</div>
        <div className="growerdata"><p className="data">{grower.nom}<br></br>Date d'inscription {grower.created_at}</p></div>
      </div>

      <div className="growerCarts">

        {growercart.map((cart) => (
          <div className="growerCart">
              {cart.img_url}
              <div className="titlewithgrowercart">
                <h3 className="titlecart">{cart.nom}</h3>
                <h4 className="title4grower">{grower.nom}</h4>
              </div>
          </div>
            
        ))}

        {growercart.map((cart) => {
          cart.nom
        })}

      </div>
      <div className="userReview">
        <h2 id="titleUserReview">Avis des amapiens</h2>
        <hr />

        {/* {growerreview.map((gr) => (
          
          <div className="growerReview">
            
              <h2>{gr.avis}</h2>
          </div>
            
        ))} */}
      </div>
    </div>   
  )
}

export default GrowerDetails