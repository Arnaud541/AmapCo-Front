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
        .get("https://amap-co.fr/index.php?action=getUserNoteByIdGrower", {
          params: {
            id_producteur: id,
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
  }, [id]);

  const handleRating = (rate) => {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const payload = {
      id_utilisateur: userId,
      id_producteur: id,
      note: rate,
    };

    const request = isRated
      ? axios.put("https://amap-co.fr/index.php?action=growerNote", payload)
      : axios.post("https://amap-co.fr/index.php?action=growerNote", payload);

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

export default StarsGrower;