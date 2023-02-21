import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import FormRecipe from "../components/Recipes/FormRecipe";

function FormRecipePage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("user")).id) {
      navigate("/signup");
    }
  });
  return (
    <>
      <Navbar />
      <FormRecipe />
    </>
  );
}

export default FormRecipePage;
