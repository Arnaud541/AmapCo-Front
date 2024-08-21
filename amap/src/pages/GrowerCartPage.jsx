import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import GrowerCart from "../components/Grower/GrowerCart";
import axios from "axios";
import { useParams } from "react-router-dom";

function GrowerCartPage() {
  const [cartDetails, setCartDetails] = useState([]);
  const [associatedRecipes, setAssociatedRecipes] = useState([]);
  const [sub, setSub] = useState(false);
  const { idcart } = useParams();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    axios
      .get(
        "https://amap-co.infinityfreeapp.com/htdocs/AmapCo-Back/index.php?action=cartDetails",
        {
          params: {
            idcart,
          },
        }
      )
      .then((response) => {
        if (response.data.status === 200) {
          setCartDetails(response.data.detail);
        }
      });

    axios
      .get(
        "https://amap-co.infinityfreeapp.com/htdocs/AmapCo-Back/index.php?action=getSimilarRecipeCart",
        {
          params: {
            cart: idcart,
          },
        }
      )
      .then((response) => {
        if (response.data.status === 200) {
          setAssociatedRecipes(response.data.recettes);
        }
      });

    if (user) {
      axios
        .get(
          "https://amap-co.infinityfreeapp.com/htdocs/AmapCo-Back/index.php?action=subscription",
          {
            params: {
              id_panier: idcart,
              id_utilisateur: user.id,
            },
          }
        )
        .then((response) => {
          setSub(response.data.sub);
        });
    }
  }, []);
  return (
    <>
      <Navbar />
      <GrowerCart
        cartDetails={cartDetails}
        associatedRecipes={associatedRecipes}
        sub={sub}
        idCart={idcart}
        setSub={setSub}
      />
    </>
  );
}

export default GrowerCartPage;
