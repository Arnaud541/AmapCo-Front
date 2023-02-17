import React from "react";
import { useParams } from "react-router-dom";

function FormRecipeEditPage() {
  const { id } = useParams();
  return <div>FormRecipeEditPage</div>;
}

export default FormRecipeEditPage;
