import axios from "axios";
import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { HiOutlineStar } from "react-icons/hi";
import { HiStar } from "react-icons/hi";

function StarsGrower(props) {
  const [rating, setRating] = useState(0);
  const { idGrower } = props;

  useEffect(() => {
    if (localStorage.getItem("user")) {
      axios
        .get(
          "https://amap.momomotus.fr/AmapCo-Back/index.php?action=getUserNoteByIdRecipe",
          {
            params: {
              id_producteur: idGrower,
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
  }, []);

  const handleRating = (rate) => {
    axios
      .post(
        "https://amap.momomotus.fr/AmapCo-Back/index.php?action=growerNote",
        {
          note: rate,
          id_producteur: idGrower,
          id_utilisateur: JSON.parse(localStorage.getItem("user")).id,
        }
      )
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

export default StarsGrower;
