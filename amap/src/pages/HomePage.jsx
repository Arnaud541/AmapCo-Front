import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Carts from "../components/Home/Carts";
import { useEffect } from "react";

function HomePage() {
  return (
    <>
      <Navbar />
      <Carts />
    </>
  );
}

export default HomePage;
