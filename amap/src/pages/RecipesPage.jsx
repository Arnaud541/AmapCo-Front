import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import axios from "axios";

function RecipesPage() {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=ingredient")
      .then((response) => {
        setIngredients(response.data);
      });
    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=recipe")
      .then((response) => {
        setRecipes(response.data);
      });
  }, []);
  return (
    <>
      <Navbar />
      <SearchBar ingredients={ingredients} recipes={recipes} />
    </>
  );
}

export default RecipesPage;
