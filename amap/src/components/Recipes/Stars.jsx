import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { HiOutlineStar } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import axios from "axios";

function Stars(props) {
  const [rating, setRating] = useState(0);
  const { recipeID } = props;

  useEffect(() => {
    if (localStorage.getItem("user")) {
      axios
        .get(
          "http://127.0.0.1/AmapCo-Back/index.php?action=getUserNoteByIdRecipe",
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
          }
        });
    }
  });

  const handleRating = (rate) => {
    axios
      .post("http://127.0.0.1/AmapCo-Back/index.php?action=recipeNote", {
        note: rate,
        id_recette: recipeID,
        id_utilisateur: JSON.parse(localStorage.getItem("user")).id,
      })
      .then((response) => {
        if (response.data.status === 200) {
          setRating(rate);
        }
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
