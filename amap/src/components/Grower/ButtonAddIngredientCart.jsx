import React, { useState } from "react";
import SelectIngredientUnique from "../Recipes/SelectIngredientUnique";

function ButtonAddIngredientCart(props) {
  const { handleChangeSelect, style, animatedComponents, setCart, cart } = props;

  // État pour stocker les nouveaux champs d'ingrédients ajoutés
  const [div, setDiv] = useState([]);

  // Fonction pour ajouter un nouvel ingrédient
  const handleAdd = () => {
    const newIngredient = { ingredient: "", quantite: "", unite: "" };
    const updatedDiv = [...div, {}]; // Ajout d'un objet vide pour représenter un nouvel ingrédient
    const updatedCart = { ...cart };

    if (!updatedCart.ingredients) {
      updatedCart.ingredients = []; // Initialisation du tableau si nécessaire
    }
    
    updatedCart.ingredients.push(newIngredient);

    setCart(updatedCart);
    setDiv(updatedDiv);
  };

  // Fonction pour gérer les changements dans les inputs
  const handleChange = (event, index) => {
    const [field, ingredientIndex] = event.target.name.split("-");

    const updatedCart = { ...cart };
    updatedCart.ingredients[ingredientIndex][field] = event.target.value;
    setCart(updatedCart);
  };

  return (
    <div className="add-ingredients">
      <button
        className="button-add-ingredient-cart"
        type="button"
        onClick={handleAdd}
      >
        Ajouter un ingrédient
      </button>

      {div.map((_, index) => (
        <div className="panier-info-ingredients-item" key={index}>
          <SelectIngredientUnique
            style={style}
            handleChangeSelect={handleChangeSelect}
            animatedComponents={animatedComponents}
            id={index}
          />
          <input
            type="text"
            placeholder="Quantité"
            onChange={(e) => handleChange(e, index)}
            name={`quantite-${index}`}
          />
          <input
            type="text"
            placeholder="Unité de mesure"
            onChange={(e) => handleChange(e, index)}
            name={`unite-${index}`}
          />
        </div>
      ))}
    </div>
  );
}

export default ButtonAddIngredientCart;
