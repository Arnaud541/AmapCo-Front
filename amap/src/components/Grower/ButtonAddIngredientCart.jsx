import React, { useState } from "react";
import SelectIngredientUnique from "../Recipes/SelectIngredientUnique";

function ButtonAddIngredientCart(props) {
  const { handleChangeSelect, style, animatedComponents, setCart, cart } =
    props;

  const [div, setDiv] = useState([]);
  const handleAdd = () => {
    const test = { ingredient: "", quantite: "", unite: "" };
    const abc = [...div, []];
    const newCart = { ...cart };
    newCart["ingredients"].push(test);

    setCart(newCart);
    setDiv(abc);
  };

  const handleChange = (event, i) => {
    let str = event.target.name.split("-");

    const cartChangeIngredient = { ...cart };
    cartChangeIngredient["ingredients"][str[1]][str[0]] = event.target.value;
    setCart(cartChangeIngredient);
  };
  return (
    <><div className="add-ingredients">
      <button
        className="button-add-ingredient-cart"
        type="button"
        onClick={() => handleAdd()}
      >
        Ajouter un ingrédient
      </button>
      {div.map((data, i) => {
        return (
          <div className="panier-info-ingredients-item">
            <SelectIngredientUnique
              style={style}
              handleChangeSelect={handleChangeSelect}
              animatedComponents={animatedComponents}
              id={i}
            />
            <input
              type="text"
              placeholder="Quantité"
              onChange={(e) => handleChange(e, i)}
              name={"quantite-" + i}
            />
            <input
              type="text"
              placeholder="Unité de mesure"
              onChange={(e) => handleChange(e, i)}
              name={"unite-" + i}
            />
          </div>
        );
      })}
      </div>
    </>
  );
}

export default ButtonAddIngredientCart;
