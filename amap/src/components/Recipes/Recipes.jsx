import React from "react";

function Recipes(props) {
  console.log(props);
  return (
    <div className="recipes">
      {props.recipes.map((recipe) => (
        <div className="recipe" key={recipe.id}>
          <h3>{recipe.titre}</h3>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
