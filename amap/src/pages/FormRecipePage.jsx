import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import FormRecipe from "../components/Recipes/FormRecipe";
import FormRecipeEdit from "../components/Recipes/FormRecipeEdit";

function FormRecipePage() {
  const { action } = useParams();
  return (
    <>
      <Navbar />
      {action == "create" ? <FormRecipe /> : null}
      {action == "edit" ? <FormRecipeEdit /> : null}
    </>
  );
}

export default FormRecipePage;
