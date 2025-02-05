import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { HiOutlineStar } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import axios from "axios";

function Stars(props) {
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(false);
  const { recipeID } = props;

  useEffect(() => {
    if (localStorage.getItem("user")) {
      axios
        .get("https://amap-co.fr/index.php?action=getUserNoteByIdRecipe", {
          params: {
            id_recette: recipeID,
            id_utilisateur: JSON.parse(localStorage.getItem("user")).id,
          },
        })
        .then((response) => {
          console.log("Réponse de l'API lors du chargement :", response);
          if (response.data.note) {
            setRating(response.data.note.note);
            setIsRated(true);
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération de la note :", error);
        });
    }
  }, [recipeID]);

  const handleRating = (rate) => {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const payload = {
      note: rate,
      id_recette: recipeID,
      id_utilisateur: userId,
    };

    const request = isRated
      ? axios.put("https://amap-co.fr/index.php?action=recipeNote", payload)
      : axios.post("https://amap-co.fr/index.php?action=recipeNote", payload);

    request
      .then((response) => {
        console.log("Réponse de l'API lors de la soumission :", response);
        if (response.data.status === 200) {
          setRating(rate);
          if (!isRated) setIsRated(true);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de la note :", error);
      });
  };

  return (
    <>
      <Rating
        fillIcon={<HiStar />}
        emptyIcon={<HiOutlineStar />}
        transition
        showTooltip
        initialValue={rating}
        onClick={handleRating}
      />
    </>
  );
}

export default Stars;