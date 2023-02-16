import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBarCarts from "../components/SearchBarCarts/SearchBarCarts";
import { useEffect } from "react";
import axios from "axios";
import Carts from "../components/Home/Carts";

function HomePage() {
  const [carts, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://webetu.iutnc.univ-lorraine.fr/~demang163u/AmapCo-Back/index.php?action=producerCart"
      )
      .then((response) => {
        setCart(response.data.producerCart);
      });
  }, []);

  return (
    <>
      <Navbar />
      <SearchBarCarts setCart={setCart} />
      <Carts carts={carts} />
    </>
  );
}

export default HomePage;
