import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import Growers from "../components/Grower/Growers";
function GrowersPage() {
  const [growers, setGrowers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=grower")
      .then((response) => {
        setGrowers(response.data.producteurs);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Growers growers={growers} />
    </>
  );
}

export default GrowersPage;
