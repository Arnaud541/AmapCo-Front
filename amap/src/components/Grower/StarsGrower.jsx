import axios from "axios";
import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { HiOutlineStar } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";

function StarsGrower() {
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const [isRated, setIsRated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      axios
        .get(
          "https://amap-co.infinityfreeapp.com/htdocs/AmapCo-Back/index.php?action=getUserNoteByIdGrower",
          {
            params: {
              id_producteur: id,
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
          "https://amap-co.infinityfreeapp.com/htdocs/AmapCo-Back/index.php?action=growerNote",
          {
            id_utilisateur: JSON.parse(localStorage.getItem("user")).id,
            id_producteur: id,
            note: rate,
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
          "https://amap-co.infinityfreeapp.com/htdocs/AmapCo-Back/index.php?action=growerNote",
          {
            note: rate,
            id_producteur: id,
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

export default StarsGrower;
