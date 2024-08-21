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
        .get(
          "https://amap-co.infinityfreeapp.com/htdocs/AmapCo-Back/index.php?action=getUserNoteByIdRecipe",
          {
            params: {
              id_recette: recipeID,
              id_utilisateur: JSON.parse(localStorage.getItem("user")).id,
            },
          }
        )
        .then((response) => {
          if (response.data.note) {
            setRating(response.data.note.note);
            setIsRated(true);
          }
        });
    }
  }, []);

  const handleRating = (rate) => {
    if (isRated) {
      axios
        .put(
          "https://amap.momomotus.fr/AmapCo-Back/index.php?action=recipeNote",
          {
            note: rate,
            id_recette: recipeID,
            id_utilisateur: JSON.parse(localStorage.getItem("user")).id,
          }
        )
        .then((response) => {
          if (response.data.status === 200) {
            setRating(rate);
            window.location.reload();
          }
        });
    } else {
      axios
        .post(
          "https://amap.momomotus.fr/AmapCo-Back/index.php?action=recipeNote",
          {
            note: rate,
            id_recette: recipeID,
            id_utilisateur: JSON.parse(localStorage.getItem("user")).id,
          }
        )
        .then((response) => {
          if (response.data.status === 200) {
            setRating(rate);
            setIsRated(true);
          }
        });
    }
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
