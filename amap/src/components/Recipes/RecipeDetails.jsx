import React from "react";
import Stars from "./Stars";

function RecipeDetails(props) {
  const { recipe, comments, ustensils, ingredients, steps, note, idRecipe } =
    props;

  return (
    <div className="container">
      <div className="recipe">
        <div className="recipe-info">
          <h1>{recipe.titre}</h1>
          <h2>{recipe.photo}</h2>
        </div>
        <div className="recipe-like">
          <h2>Note : {Math.round(note.note * 10) / 10}</h2>
          <h2>Commentaires : {comments.length}</h2>
        </div>
        <Stars recipeID={idRecipe} />

        <div className="ingredient">
          <h2>Ingredients</h2>
          <hr />
          <div className="ingredient-items">
            {ingredients.map((i) => (
              <div className="item" key={i.id}>
                <h3>{i.nom}</h3>
                <h3>Quantité : {i.quantite}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="ustensiles">
          <h2>Ustensiles</h2>
          <hr />
          <div className="ustensile-items">
            {ustensils.map((u) => (
              <div className="item" key={u.id}>
                <h3>{u.nom}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="etapes">
          <h2>Etapes</h2>
          <hr />
          <div className="etape-items">
            {steps.map((s) => (
              <div className="item" key={s.id}>
                <h3>Etape {s.numero}</h3>
                <p>{s.contenu}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="commentaires">
          <h2>Commentaires</h2>
          <hr />
          <div className="commentaire-items">
            {comments.map((c) => (
              <div className="item" key={c.id}>
                <div className="item-info-user">
                  <h2>{c.avatar}</h2>
                  <h3>{c.nom}</h3>
                  {c.note ? <h3>{c.note}/5</h3> : null}
                </div>
                <p>{c.contenu}</p>
                <h3>{c.created_at}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
