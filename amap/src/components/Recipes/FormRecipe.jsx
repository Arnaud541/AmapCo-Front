import React, { useEffect, useState } from "react";
import SelectSeason from "./SelectSeason";
import makeAnimated from "react-select/animated";
import SelectDifficulty from "./SelectDifficulty";
import SelectDiet from "./SelectDiet";
import SelectTypeDish from "./SelectTypeDish";
import SelectUstensil from "./SelectUstensil";
import ButtonAddIngredient from "./ButtonAddIngredient";
import ButtonAddStep from "./ButtonAddStep";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormRecipe() {
  const animatedComponents = makeAnimated();
  const [recipe, setRecipe] = useState({
    id_utilisateur: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).id
      : null,
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

    axios
      .post("https://amap.momomotus.fr/AmapCo-Back/index.php?action=recipe", {
        recipe: recipe,
      })
      .then((response) => {
        if (response.data.status === 200) {
          alert(response.data.message);
        }
      });
  };

  const handleChange = (event) => {
    setRecipe(() => ({
      ...recipe,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeSelect = (data, event) => {
    if (event.name.includes("-")) {
      let str = event.name.split("-");

      switch (true) {
        case str[0] == "ingredient":
          const copyRecipeIngredients = { ...recipe };
          copyRecipeIngredients["ingredients"][str[1]][str[0]] = data.id;
          setRecipe(copyRecipeIngredients);
          break;
        case str[0] === "etape":
          const copyRecipeEtapes = { ...recipe };
          copyRecipeEtapes["etapes"][str[1]][str[0]] = data.value;
          setRecipe(copyRecipeEtapes);
          break;
      }
    } else {
      setRecipe(() => ({
        ...recipe,
        [event.name]: data.value,
      }));
    }
  };

  const handleChangeSelectArray = (data, event) => {
    let copyRecipe = { ...recipe };
    let array = [];

    data.forEach((e) => {
      array.push(e.id);
    });

    switch (event.name) {
      case "ustensiles":
        copyRecipe.ustensiles = array;
        break;
    }
    setRecipe(copyRecipe);
  };

  return (
    <div className="container">
      <form className="search" onSubmit={handleSubmit}>
        <div className="recette-info">
          <input
            className="login__input"
            type="text"
            placeholder="Nom de la recette"
            onChange={handleChange}
            name="nom"
          />
          <input
            className="login__input"
            type="text"
            placeholder="Description"
            onChange={handleChange}
            name="description"
          />
          <input
            className="login__input"
            type="text"
            placeholder="Temps de la recette (minutes)"
            onChange={handleChange}
            name="temps"
          />
        </div>
        <div className="recette-info-caracteristiques">
          <div className="recette-info-caracteristiques-title">
            <h1 className="h1-create-recipe">Caracteristiques</h1>
            <hr />
          </div>
          <div className="filters2">
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
          <h1 className="h1-create-recipe">Ustensiles</h1>
          <hr />
          <div className="select-ustensil">
            <SelectUstensil
              style={customStyles}
              handleChangeSelectArray={handleChangeSelectArray}
              animatedComponents={animatedComponents}
            />
          </div>
        </div>
        <div className="recette-info-ingredients">
          <h1 className="h1-create-recipe">Ingredients</h1>
          <hr />
          <div className="recette-info-ingredients-items">
            <ButtonAddIngredient
              recipe={recipe}
              handleChangeSelect={handleChangeSelect}
              style={customStyles}
              animatedComponents={animatedComponents}
              setRecipe={setRecipe}
              type="button"
            />
          </div>
        </div>
        <div className="recette-info-etapes">
          <h1 className="h1-create-recipe">Etapes</h1>
          <hr />
          <div className="recette-info-etapes-items">
            <ButtonAddStep
              recipe={recipe}
              handleChangeSelect={handleChangeSelect}
              style={customStyles}
              animatedComponents={animatedComponents}
              setRecipe={setRecipe}
            />
          </div>
        </div>
        <div className="button-create-recipe">
          <button className="create-new-recipe-btn" type="submit">
            Créer la recette
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormRecipe;
