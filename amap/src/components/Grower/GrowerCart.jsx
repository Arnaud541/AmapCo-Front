import React from "react";
import "./GrowerCart.css";

function GrowerCart(props) {
  const { cartDetails } = props;
  return (
    <div className="container">
      <div className="cart">
        <div className="img-cart">
          <img id="cartimg" src={cartDetails[0]?.img_url} alt="CartPicture" />
          <h3>
            {"Panier de " +
              cartDetails[0]?.ProducteurNom +
              " " +
              cartDetails[0]?.prenom}
          </h3>
        </div>
        <div className="cart_products">
          <h2>Produits</h2>
          <hr />
          <div className="carts-products-items">
            {cartDetails.map((c) => (
              <div className="cart_products_item">
                <h4>
                  {c.IngredientNom} : {c.quantite}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* {
        cartDetails.map((c) => (
          <div>{c.PanierProducteurNom}</div>
        ))
      }  */}
      </div>
    </div>
  );
}

export default GrowerCart;
