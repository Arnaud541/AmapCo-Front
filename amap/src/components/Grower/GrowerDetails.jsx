import React from "react";
import "./GrowerDetails.css";
import growerimg from  "../../assets/img/backgroundgrower.png"


function GrowerDetails(props) {
  const{grower, growerreview, growercart }=props
    return (
    <div className="container">
      
      <img id="growerimg" src={growerimg}/>
      <div className="growerinfo">
        <img id="avatargrowerprofile" src={"../../assets/default.png"} alt="Avatar"></img>
        <div className="growerdata"><p className="data">{grower.nom}<br></br>Date d'inscription {grower.created_at}</p></div>
      </div>

      <div className="growerCarts">

        {growercart.map((cart) => (
          <div className="growerCart">
              <img src={"cart.img_url"}alt="CartPicture"></img>
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

        { growerreview.map((gr) => (
          
          <div className="growerReview">
              <p className="note">{gr.note}</p>
              <p className="growerReviews">{gr.avis}</p>
          </div>
            
        ))} 
      </div>
    </div>   
  )
}

export default GrowerDetails