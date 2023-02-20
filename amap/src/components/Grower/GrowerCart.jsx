import React, { useEffect } from "react";
import "./GrowerCart.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillCheckCircle } from "react-icons/ai";

function GrowerCart(props) {
  const { cartDetails, sub, idCart, setSub, associatedRecipes } = props;
  const navigate = useNavigate();

  const profile = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const handleDelete = () => {
    axios
      .delete("http://127.0.0.1/AmapCo-Back/index.php?action=growercart", {
        data: {
          id_panier: idCart,
        },
      })
      .then((response) => {
        if (response.data.success) {
          navigate(`/profileGrower/${profile.id}`);
        }
      });
  };

  const handleClick = () => {
    axios
      .post("http://127.0.0.1/AmapCo-Back/index.php?action=subscription", {
        id_panier: idCart,
        id_utilisateur: JSON.parse(localStorage.getItem("user")).id,
      })
      .then((response) => {
        if (response.data.status === 200) {
          setSub(!sub);
        }
      });
  };
  return (
    <div className="containerGrowerCart">
      <div className="header-cart">
        <div className="cart1">
          <h1 className="Cart-Name">{cartDetails[0]?.PanierProducteurNom}</h1>

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
            <button
              type="button"
              className="btn-subscription"
              onClick={handleClick}
            >
              S'abonner <AiFillCheckCircle />
            </button>
          )}

          {cartDetails[0]?.ProducteurId == profile?.id &&
          profile?.acces == 2 ? (
            <button type="button" className="btn-delete" onClick={handleDelete}>
              Supprimer mon panier
            </button>
          ) : null}
        </div>

        <h3 className="titldesc">Description</h3>
        <hr></hr>
        <div className="descriptioncart">
          <span className="description">{cartDetails[0]?.description}</span>
        </div>

        <h2 className="productsTitle">Produits</h2>
        <hr />
        <div className="carts-products-items">
          {cartDetails?.map((c) => (
            <div className="cart_products_item">
              <h4>
                <p className="list">
                  ● {c?.IngredientNom} : {c?.quantite}
                </p>
              </h4>
            </div>
          ))}
        </div>
        <div className="associatedRecipes">
          <h3 className="titleAssociatedRecipes">Recettes associées à ce panier</h3>
            <hr></hr>
          <div className="associated-Recipes-Items">
            {associatedRecipes?.map((r) => (
              <Link className="link-associated-recipe" to={`/recipes/${r.id}`}>
                <div className="associatedRecipesItem">
                  <h3 className="associated-recipe-title">{r.titre}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrowerCart;
