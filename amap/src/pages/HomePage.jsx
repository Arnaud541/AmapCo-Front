import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBarCarts from "../components/SearchBarCarts/SearchBarCarts";
import { useEffect } from "react";
import axios from "axios";
import Carts from "../components/Home/Carts";

function HomePage() {
  const [carts, setCart] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=allIngredients")
      .then((response) => {
        setIngredients(response.data.ingredients);
      });
    axios
      .get(
        "https://amap.momomotus.fr/AmapCo-Back/index.php?action=producerCart"
      )
      .then((response) => {
        setCart(response.data.producerCart);
      });
  }, []);

  return (
    <>
      <Navbar />
      <SearchBarCarts setCart={setCart} ingredients={ingredients} />
      <Carts carts={carts} />
    </>
  );
}

export default HomePage;
