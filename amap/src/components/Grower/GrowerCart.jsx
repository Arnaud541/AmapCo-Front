import React, { useEffect } from "react";
import "./GrowerCart.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiFillCheckCircle } from "react-icons/ai";

function GrowerCart(props) {
  const { cartDetails, sub, idCart, setSub } = props;

  const handleClick = () => {
    console.log("test");
    axios
      .post("http://127.0.0.1/AmapCo-Back/index.php?action=subscription", {
        id_panier: idCart,
        id_utilisateur: JSON.parse(localStorage.getItem("user")).id,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          setSub(!sub);
        }
      });
  };
  return (
    <div className="container">
      <div className="cart">
        <h1 className="Cart-Name">{cartDetails[0]?.PanierProducteurNom}</h1>
        <div className="header-cart">
          <img
            className="cartimg"
            src={cartDetails[0]?.img_url}
            alt="CartPicture"
          />

          <h3 className="growername">
            {"Panier proposé par "}
            <Link
              className="backToGrower"
              to={`/growers/${cartDetails[0]?.ProducteurId}`}
            >
              {cartDetails[0]?.ProducteurNom + " " + cartDetails[0]?.prenom}
            </Link>
          </h3>
          {sub ? (
            <h3>Vous êtes abonné à ce panier</h3>
          ) : (
            <button type="button" onClick={handleClick}>
              S'abonner <AiFillCheckCircle />
            </button>
          )}
        </div>

        <h3 className="titldesc">Description</h3>
        <hr></hr>
        <div className="descriptioncart">
          <span className="description">{cartDetails[0]?.description}</span>
        </div>

        <h2 className="productsTitle">Produits</h2>
        <hr />
        <div className="carts-products-items">
          {cartDetails.map((c) => (
            <div className="cart_products_item">
              <h4>
                <p className="list">
                  ● {c.IngredientNom} : {c.quantite}
                </p>
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="associatedRecipes">
        <h3 className="titleAssociatedRecipes">Recettes associées</h3>
        <hr></hr>
      </div>
    </div>
  );
}

export default GrowerCart;
