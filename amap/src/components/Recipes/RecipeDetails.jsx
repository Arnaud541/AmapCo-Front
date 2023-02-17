import React from "react";
import Stars from "./Stars";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./RecipeDetails.css";

function RecipeDetails(props) {
  const { recipe, comments, ustensils, ingredients, steps, note, idRecipe } =
    props;

  const profile = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete("http://127.0.0.1/AmapCo-Back/index.php?action=recipeById", {
        data: {
          id_recette: idRecipe,
        },
      })
      .then((response) => {
        if (response.data.success) {
          navigate(`/profile/${profile.id}`);
        }
      });
  };

  return (
    <div className="recipe">
      <div className="recipe-info">
        <h1>{recipe.titre}</h1>
        <img src={"../src/assets/default.png"} alt={recipe.titre} />
      </div>
      <div className="recipe-like">
        {recipe.id_utilisateur == profile.id && profile.acces == 1 ? (
          <Link to="/recipe/edit">Editer la recette</Link>
        ) : null}
        <h2>Note : {Math.round(note.note * 10) / 10}</h2>
        <h2>Commentaires : {comments.length}</h2>
        {recipe.id_utilisateur == profile.id && profile.acces == 1 ? (
          <button className="btn-delete" onClick={handleDelete}>
            Supprimer la recette
          </button>
        ) : null}
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
  );
}

export default RecipeDetails;
