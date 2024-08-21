import React, { useState } from "react";
import Stars from "./Stars";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./RecipeDetails.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ButtonAddComment from "./ButtonAddComment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RecipeDetails(props) {
  const {
    recipe,
    comments,
    ustensils,
    ingredients,
    steps,
    note,
    idRecipe,
    similarRecipes,
    favorite,
    setFavorite,
  } = props;

  const profile = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [comment, setComment] = useState({
    id_utilisateur: profile ? profile.id : null,
    id_recette: idRecipe,
    contenu: "",
  });

  const handleClick = () => {
    if (profile) {
      if (favorite) {
        axios
          .delete(
            "https://amap-co.infinityfreeapp.com/htdocs/AmapCo-Back/index.php?action=favorite",
            {
              data: {
                id_recette: idRecipe,
                id_utilisateur: profile.id,
              },
            }
          )
          .then((response) => {
            if (response.data.status === 200) {
              setFavorite(false);
              toast.info("La recette a été enlevé de vos favoris", {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                icon: "❤️",
              });
            }
          });
      } else {
        axios
          .post(
            "https://amap-co.infinityfreeapp.com/htdocs/AmapCo-Back/index.php?action=favorite",
            {
              id_recette: idRecipe,
              id_utilisateur: profile.id,
            }
          )
          .then((response) => {
            if (response.data.status === 200) {
              setFavorite(true);
              toast.success("La recette a été ajouté à vos favoris", {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                icon: "❤️",
              });
            }
          });
      }
    } else {
      navigate("/signin");
    }
  };

  const handleDelete = () => {
    axios
      .delete(
        "https://amap-co.infinityfreeapp.com/htdocs/AmapCo-Back/index.php?action=recipeById",
        {
          data: {
            id_recette: idRecipe,
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          navigate(`/profile/${profile.id}`);
        }
      });
  };

  return (
    <div className="container">
      <div className="recipe-title-info">
        <h1 className="recipe-title">{recipe?.titre}</h1>
        <div className="recipe-info">
          <img
            id="avatar-grower-profile-recipe"
            src={`../src/assets/${recipe?.photo}`}
            alt={recipe?.titre}
          />

          <div className="recipe-like">
            {profile &&
            profile.id == recipe.id_utilisateur &&
            profile.acces == 1 ? (
              <Link to={`/recipe/edit/${idRecipe}`}>Modifier la recette</Link>
            ) : null}
            <h2>Note : {Math.round(note.note * 10) / 10}</h2>
            <h2>Commentaires : {comments.length}</h2>
          </div>

          {profile &&
          profile.id == recipe.id_utilisateur &&
          profile.acces == 1 ? (
            <button onClick={handleDelete}>Supprimer la recette</button>
          ) : null}
          {favorite ? (
            <AiFillHeart
              onClick={handleClick}
              style={{ height: 46, width: 36, color: "red" }}
            />
          ) : (
            <AiOutlineHeart
              onClick={handleClick}
              style={{ height: 46, width: 36, color: "red" }}
            />
          )}
        </div>
        <Stars recipeID={idRecipe} />
        <div className="ingredient">
          <h2 className="ingredients-list">Ingredients</h2>
          <hr />
          <div className="ingredient-items">
            {ingredients.map((i) => (
              <div className="item" key={i.id}>
                <h3 className="ingredient-name">{i.nom}</h3>
                <h3 className="ingredient-qty">
                  Quantité : {i.quantite} {i.unite}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="ustensiles">
          <h2 className="ustensils-list">Ustensiles</h2>
          <hr />
          <div className="ustensile-items">
            {ustensils.map((u) => (
              <div className="item" key={u.id}>
                <h3 className="ustensil">{u.nom}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="etapes">
          <h2 className="step-list">Etapes de préparation</h2>
          <hr />
          <div className="etape-items">
            {steps.map((s) => (
              <div className="item" key={s.id}>
                <h3 className="step">Etape {s.numero}</h3>
                <p className="step-details">{s.contenu}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="recettes-similaires">
          <h2 className="similar-recipes-title">Recettes similaires</h2>
          <hr />
          <div className="recettes-similaires-items">
            {similarRecipes?.map((r) => (
              <Link className="link-similar-recipes" to={`/recipes/${r?.id}`}>
                <div className="recette" key={r?.id}>
                  <h3 className="similar-recipe-title">{r?.titre}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="commentaires">
          <h2 className="comments-list">Commentaires</h2>
          <hr />
          {profile && profile.acces === 1 ? (
            <ButtonAddComment
              comment={comment}
              setComment={setComment}
              idRecipe={idRecipe}
            />
          ) : null}

          <div className="commentaire-items">
            {comments.map((c) => (
              <div className="item" key={c.id}>
                <div className="item-info-user">
                  <div className="comment-infos">
                    <img
                      id="avatar-comment"
                      src={`../src/assets/${c.avatar}`}
                      alt=""
                    />
                    <span className="note">
                      {c.nom}{" "}
                      {c.note ? <span className="note">{c.note}/5</span> : null}
                    </span>
                    <span className="publication">
                      publié le {c.created_at}
                    </span>
                  </div>
                </div>
                <p className="recipe-review">{c.contenu}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="recipe-like"></div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RecipeDetails;
