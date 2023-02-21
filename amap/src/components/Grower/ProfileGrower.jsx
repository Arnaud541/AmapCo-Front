import React from "react";
import { Link } from "react-router-dom";
import "./GrowerDetails.css";
import avatarimg from "../../assets/default.png";
import "./ProfileGrower.css";

function ProfileGrower(props) {
  const { myCarts } = props;
  const profile = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="container">
      <div className="profile">
        <div className="profile-info">
          <div className="perso-info-profile-grower">
          <span className="Grower-profile-name">Bonjour {profile.nom}</span>
          <span className="Grower-profile-created-date">
            Vous êtes membre depuis le{" "}
            {new Date(profile.created_at).toLocaleDateString("fr-FR")}
          </span>
          </div>
        <div className="profile-avatar">
          <img id="avatargrowerprofile" src={avatarimg} alt={profile.nom} />
        </div>
        </div>
        <a className="cart-creation-link" href="/growers/cart/create">Créer un panier</a>
      </div>
      <div className="my-carts">
        <h1 className="grower-week-cart-profile">Mes paniers de la semaine</h1>
        <hr />
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
