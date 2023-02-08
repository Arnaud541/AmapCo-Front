import React, { useState } from "react";
import SelectIngredient from "./SelectIngredient";

function ButtonAddIngredient(props) {
  const { handleChangeSelectArray, style, animatedComponents, setRecipe } =
    props;

  const [div, setDiv] = useState([]);
  const handleAdd = () => {
    const abc = [...div, []];
    setDiv(abc);
  };
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...div];
    inputdata[i] = onChangeValue.target.value;
    setDiv(inputdata);
  };
  const handleDelete = (i) => {
    const deletVal = [...div];
    deletVal.splice(i, 1);
    setDiv(deletVal);
  };
  return (
    <>
      <button type="button" onClick={() => handleAdd()}>
        Ajouter un ingrédient
      </button>
      {div.map((data, i) => {
        return (
          <div className="recette-info-ingredients-item">
            <SelectIngredient
              style={style}
              handleChangeSelectArray={handleChangeSelectArray}
              animatedComponents={animatedComponents}
            />
            <input
              type="text"
              placeholder="Quantité"
              onChange={handleChange}
              name="quantite"
            />
            <input
              type="text"
              placeholder="Unité de mesure"
              onChange={handleChange}
              name="unite"
            />
          </div>
        );
      })}
    </>
  );
}

export default ButtonAddIngredient;
