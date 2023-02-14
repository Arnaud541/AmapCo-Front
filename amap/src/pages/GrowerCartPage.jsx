import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import GrowerCart from "../components/Grower/GrowerCart";
import axios from "axios";
import { useParams } from "react-router-dom";

function GrowerCartPage() {
  const [cartDetails, setCartDetails] = useState([]);
  const { idcart } = useParams();
  useEffect(() => {
    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=cartDetails", {
        params: {
          idcart,
        },
      })
      .then((response) => {
        if (response.data.status === 200) {
          setCartDetails(response.data.detail);
        }
      });
    axios.get(
      "http://127.0.0.1/AmapCo-Back/index.php?action=associatedRecipes",
      {
        params: {},
      }
    );
  }, []);
  return (
    <>
      <Navbar />
      <GrowerCart cartDetails={cartDetails} />
    </>
  );
}

export default GrowerCartPage;
