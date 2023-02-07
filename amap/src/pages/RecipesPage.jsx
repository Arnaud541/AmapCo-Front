import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import axios from "axios";
import Recipes from "../components/Recipes/Recipes";

function RecipesPage() {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=allIngredients")
      .then((response) => {
        setIngredients(response.data.ingredients);
      });
    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=recipe")
      .then((response) => {
        setRecipes(response.data.recettes);
      });
  }, []);
  return (
    <>
      <Navbar />
      <SearchBar ingredients={ingredients} setRecipes={setRecipes} />
      <Recipes recipes={recipes} />
    </>
  );
}

export default RecipesPage;
