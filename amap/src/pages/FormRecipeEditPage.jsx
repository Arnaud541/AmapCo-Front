import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import FormRecipeEdit from "../components/Recipes/FormRecipeEdit";

function FormRecipeEditPage() {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <FormRecipeEdit />
    </>
  );
}

export default FormRecipeEditPage;
