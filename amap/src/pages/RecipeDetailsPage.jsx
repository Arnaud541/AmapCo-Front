import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import RecipeDetails from "../components/Recipes/RecipeDetails";

function RecipeDetailsPage() {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [ustensils, setUstensils] = useState([]);
  const [steps, setSteps] = useState([]);
  const [comments, setComments] = useState([]);
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [note, setNote] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    axios
      .get(
        "https://amap.momomotus.fr/AmapCo-Back/index.php?action=recipeById",
        {
          params: {
            id,
          },
        }
      )
      .then((response) => {
        setRecipe(response.data.recette[0]);
      });

    axios
      .get(
        "https://amap.momomotus.fr/AmapCo-Back/index.php?action=getSimilarRecipe",
        {
          params: {
            recipe: id,
          },
        }
      )
      .then((response) => {
        setSimilarRecipes(response.data.recettes);
      });

    axios
      .get("https://amap.momomotus.fr/AmapCo-Back/index.php?action=ustensils", {
        params: {
          id,
        },
      })
      .then((response) => {
        setUstensils(response.data.ustensils);
      });

    axios
      .get(
        "https://amap.momomotus.fr/AmapCo-Back/index.php?action=ingredient",
        {
          params: {
            id,
          },
        }
      )
      .then((response) => {
        setIngredients(response.data.ingredients);
      });

    axios
      .get("https://amap.momomotus.fr/AmapCo-Back/index.php?action=comments", {
        params: {
          id,
        },
      })
      .then((response) => {
        setComments(response.data.commentaires);
      });

    axios
      .get("https://amap.momomotus.fr/AmapCo-Back/index.php?action=steps", {
        params: {
          id,
        },
      })
      .then((response) => {
        setSteps(response.data.steps);
      });

    axios
      .get(
        "https://amap.momomotus.fr/AmapCo-Back/index.php?action=recipeNote",
        {
          params: {
            id,
          },
        }
      )
      .then((response) => {
        setNote(response.data.note);
      });

    if (user) {
      axios
        .get(
          "https://amap.momomotus.fr/AmapCo-Back/index.php?action=favorite",
          {
            params: {
              id_user: user.id,
              id_recipe: id,
            },
          }
        )
        .then((response) => {
          if (response.data.status === 200) {
            setFavorite(response.data.favorite);
          }
        });
    }
  }, [id]);
  return (
    <>
      <Navbar />
      <RecipeDetails
        recipe={recipe}
        similarRecipes={similarRecipes}
        idRecipe={id}
        comments={comments}
        setComments={setComments}
        ustensils={ustensils}
        ingredients={ingredients}
        steps={steps}
        note={note}
        favorite={favorite}
        setFavorite={setFavorite}
      />
    </>
  );
}

export default RecipeDetailsPage;
