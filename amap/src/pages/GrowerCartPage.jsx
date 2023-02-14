import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import GrowerCart from "../components/Grower/GrowerCart";
import axios from "axios";
import { useParams } from "react-router-dom";

function GrowerCartPage() {
  const [cartDetails, setCartDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=cartDetails", {
        params: {
          id,
        },
      })
      .then((response) => {
        if (response.data.status === 200) {
          console.log(response.data.detail);
          setCartDetails(response.data.detail);
        }
      });
  }, []);
  return (
    <>
      <Navbar />
      <GrowerCart cartDetails={cartDetails} />
    </>
  );
}

export default GrowerCartPage;
