import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import GrowerCart from "../components/Grower/GrowerCart";
import axios from "axios";
import { useParams } from "react-router-dom";

function GrowerCartPage() {
  const [cartDetails, setCartDetails] = useState([]);
  const [sub, setSub] = useState(false);
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

    if (localStorage.getItem("user")) {
      axios
        .get("http://127.0.0.1/AmapCo-Back/index.php?action=subscription", {
          params: {
            id_panier: idcart,
            id_utilisateur: JSON.parse(localStorage.getItem("user")).id,
          },
        })
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
        sub={sub}
        idCart={idcart}
        setSub={setSub}
      />
    </>
  );
}

export default GrowerCartPage;
