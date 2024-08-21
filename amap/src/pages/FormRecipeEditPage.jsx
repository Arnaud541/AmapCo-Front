import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import FormRecipeEdit from "../components/Recipes/FormRecipeEdit";

function FormRecipeEditPage() {
  const { id } = useParams();

  const [recipeToEdit, setRecipeToEdit] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://amap-co.infinityfreeapp.com/htdocs/AmapCo-Back/index.php?action=recipeById",
        {
          params: {
            id,
          },
        }
      )
      .then((response) => {
        setRecipeToEdit(response.data.recette[0]);
      });
  }, []);
  return (
    <>
      <Navbar />
      <FormRecipeEdit recipeToEdit={recipeToEdit} idRecipe={id} />
    </>
  );
}

export default FormRecipeEditPage;
