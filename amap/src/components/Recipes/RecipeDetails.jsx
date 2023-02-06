import React from "react";

function RecipeDetails(props) {
  const { recipe, comments } = props;

  return (
    <div className="container">
      <div className="recipe">
        <div className="recipe-info">
          <h1>{recipe.titre}</h1>
          <h2>{recipe.photo}</h2>
        </div>
        <div className="recipe-like"></div>
      </div>
    </div>
  );
}

export default RecipeDetails;
