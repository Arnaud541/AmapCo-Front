import React, { useState } from "react";
import SelectStep from "./SelectStep";

function ButtonAddStep(props) {
  const { handleChangeSelect, style, animatedComponents, setRecipe, recipe } =
    props;

  const [div, setDiv] = useState([]);
  const handleAdd = () => {
    const test = { etape: "", description: "" };
    const abc = [...div, []];
    const newRecipe = { ...recipe };
    newRecipe["etapes"].push(test);

    setRecipe(newRecipe);
    setDiv(abc);
  };
  const handleChange = (event, i) => {
    let str = event.target.name.split("-");

    const recipeChangeEtape = { ...recipe };
    recipeChangeEtape["etapes"][str[1]][str[0]] = event.target.value;
    setRecipe(recipeChangeEtape);
  };
  return (
    <>
      <button type="button" onClick={() => handleAdd()}>
        Ajouter une étape
      </button>
      {div.map((data, i) => {
        return (
          <div className="recette-info-etapes-item">
            <SelectStep
              style={style}
              handleChangeSelect={handleChangeSelect}
              animatedComponents={animatedComponents}
              id={i}
            />
            <input
              type="text"
              placeholder="Description de l'étape"
              onChange={(e) => handleChange(e, i)}
              name={"description-" + i}
            />
          </div>
        );
      })}
    </>
  );
}

export default ButtonAddStep;
