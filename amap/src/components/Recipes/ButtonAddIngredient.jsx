import React, { useState } from "react";
import SelectIngredientUnique from "./SelectIngredientUnique";

function ButtonAddIngredient(props) {
  const { handleChangeSelect, style, animatedComponents, setRecipe, recipe } =
    props;

  const [div, setDiv] = useState([]);
  const handleAdd = () => {
    const test = { ingredient: "", quantite: "", unite: "" };
    const abc = [...div, []];
    const newRecipe = { ...recipe };
    newRecipe["ingredients"].push(test);

    setRecipe(newRecipe);
    setDiv(abc);
  };
  const handleChange = (event, i) => {
    let str = event.target.name.split("-");

    const recipeChangeIngredient = { ...recipe };
    recipeChangeIngredient["ingredients"][str[1]][str[0]] = event.target.value;
    setRecipe(recipeChangeIngredient);
  };
  return (
    <>
      <button className="button-add-ingredient" type="button" onClick={() => handleAdd()}>
        Ajouter un ingrédient
      </button>
      {div.map((data, i) => {
        return (
          <div className="recette-info-ingredients-item">
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
    </>
  );
}

export default ButtonAddIngredient;
