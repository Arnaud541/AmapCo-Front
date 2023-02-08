import React, { useState } from "react";
import SelectSeason from "./SelectSeason";
import makeAnimated from "react-select/animated";
import SelectDifficulty from "./SelectDifficulty";
import SelectDiet from "./SelectDiet";
import SelectTypeDish from "./SelectTypeDish";
import SelectUstensil from "./SelectUstensil";
import ButtonAddIngredient from "./ButtonAddIngredient";

function FormRecipe() {
  const animatedComponents = makeAnimated();
  const [recipe, setRecipe] = useState({
    nom: "",
    description: "",
    temps: 0,
    saison: "",
    difficulte: "",
    regime: "",
    typePlat: "",
    ustensiles: [],
    ingredients: [],
    etapes: [],
  });

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      padding: 20,
      width: 200,
      height: 20,
    }),
    container: (styles) => ({ ...styles, width: "200px" }),
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(recipe);
  };

  const handleChange = (event) => {
    setSearch(() => ({
      ...recipe,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeSelect = (data, event) => {
    setSearch(() => ({
      ...recipe,
      [event.name]: data.value,
    }));
  };

  const handleChangeSelectArray = (data, event) => {
    let copyRecipe = { ...recipe };
    let array = [];
    console.log(data);
    console.log(event.name);

    data.forEach((e) => {
      array.push(e.nom);
    });

    switch (event.name) {
      case "ustensiles":
        copyRecipe.ustensiles = array;
        break;
    }
    setSearch(copyRecipe);
  };

  return (
    <div className="container">
      <form className="search" onSubmit={handleSubmit}>
        <div className="recette-info">
          <input
            type="text"
            placeholder="Nom de la recette"
            onChange={handleChange}
            name="nom"
          />
          <input
            type="text"
            placeholder="Description"
            onChange={handleChange}
            name="description"
          />
          <input
            type="text"
            placeholder="Temps de la recette (minutes)"
            onChange={handleChange}
            name="temps"
          />
        </div>
        <div className="recette-info-caracteristiques">
          <div className="recette-info-caracteristiques-title">
            <h1>Caracteristiques</h1>
            <hr />
          </div>
          <div className="recette-info-caracteristiques-items">
            <SelectSeason
              style={customStyles}
              handleChangeSelect={handleChangeSelect}
              animatedComponents={animatedComponents}
            />
            <SelectDifficulty
              style={customStyles}
              handleChangeSelect={handleChangeSelect}
              animatedComponents={animatedComponents}
            />
            <SelectDiet
              style={customStyles}
              handleChangeSelect={handleChangeSelect}
              animatedComponents={animatedComponents}
            />
            <SelectTypeDish
              style={customStyles}
              handleChangeSelect={handleChangeSelect}
              animatedComponents={animatedComponents}
            />
          </div>
        </div>
        <div className="recette-info-ustensiles">
          <h1>Ustensiles</h1>
          <hr />
          <SelectUstensil
            style={customStyles}
            handleChangeSelectArray={handleChangeSelectArray}
            animatedComponents={animatedComponents}
          />
        </div>
        <div className="recette-info-ingredients">
          <h1>Ingredients</h1>
          <hr />
          <div className="recette-info-ingredients-items">
            <ButtonAddIngredient
              style={customStyles}
              animatedComponents={animatedComponents}
              setRecipe={setRecipe}
            />
          </div>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default FormRecipe;
