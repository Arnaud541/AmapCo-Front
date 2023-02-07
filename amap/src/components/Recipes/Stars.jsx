import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { HiOutlineStar } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import axios from "axios";

function Stars(props) {
  const [rating, setRating] = useState(0);
  const { recipeID } = props;

  const handleRating = (rate) => {
    console.log(rate);
    axios
      .post("http://127.0.0.1/AmapCo-Back/index.php?action=recipeNote", {
        note: rate,
        id_recette: recipeID,
        id_utilisateur: 2,
      })
      .then((response) => {
        if (response.data.status === 200) {
          setRating(rate);
        }
        console.log(response);
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
