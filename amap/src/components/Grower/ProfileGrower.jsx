import React from "react";
import { Link } from "react-router-dom";
import "./GrowerDetails.css";

function ProfileGrower(props) {
  const { myCarts } = props;
  const profile = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="container">
      <div className="profile">
        <div className="profile-avatar">
          <img src={profile.avatar} alt={profile.nom} />
        </div>
        <div className="profile-info">
          <h2>{profile.nom}</h2>
          <h3>
            Membre depuis le{" "}
            {new Date(profile.created_at).toLocaleDateString("fr-FR")}
          </h3>
        </div>
        <button>Créer un panier</button>
      </div>
      <div className="my-carts">
        <h1>Mes paniers de la semaine</h1>
        <div className="my-carts-items">
          {myCarts.map((c) => (
            <Link to={`/growers/${profile.id}/cart/${c.id}`}>
              <div className="growerCart">
                <div className="growercartimgprofile">
                  <img id="growercartimg" src={c.img_url} alt={c.nom}></img>
                </div>
                <div className="titlewithgrowercart">
                  <h3 className="titlecart">{c.nom}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileGrower;
