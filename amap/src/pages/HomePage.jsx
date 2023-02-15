import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBarCarts from "../components/SearchBarCarts/SearchBarCarts";
import { useEffect, useState } from "react";
import axios from "axios";
import Carts from "../components/Home/Carts";

function HomePage() {
  const [carts, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=producerCart")
      .then((reponse) => {
        setCart(reponse.data.producerCart);
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
