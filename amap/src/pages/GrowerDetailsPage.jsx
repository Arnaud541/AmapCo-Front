import React from "react";
import GrowerDetails from "../components/Grower/GrowerDetails";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

function GrowerDetailsPage() {
  const [grower, setGrower] = useState({});
  const [growercart, setGrowerCart] = useState([]);
  const [growerreview, setGrowerReview] = useState([]);
  const [note, setNote] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        "https://amap.momomotus.fr/AmapCo-Back/index.php?action=growerbyid",
        {
          params: {
            id,
          },
        }
      )
      .then((response) => {
        setGrower(response.data.producteur);
      });
    axios
      .get(
        "https://amap.momomotus.fr/AmapCo-Back/index.php?action=growercart",
        {
          params: { id },
        }
      )
      .then((response) => {
        setGrowerCart(response.data.carts);
      });
    axios
      .get(
        "https://amap.momomotus.fr/AmapCo-Back/index.php?action=growerreview",
        {
          params: { id },
        }
      )
      .then((response) => {
        setGrowerReview(response.data.reviews);
      });

    axios
      .get(
        "https://amap.momomotus.fr/AmapCo-Back/index.php?action=growerNote",
        {
          params: {
            id,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setNote(response.data.note);
      });
  }, [id]);

  return (
    <>
      <Navbar />
      <GrowerDetails
        grower={grower}
        growerreview={growerreview}
        growercart={growercart}
        note={note}
      />
    </>
  );
}

export default GrowerDetailsPage;
