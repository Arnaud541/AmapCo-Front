import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileGrower from "../components/Grower/ProfileGrower";
import Navbar from "../components/Navbar/Navbar";

function ProfileGrowerPage() {
  const { id } = useParams();
  const [myCarts, setMyCarts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://amap-co.fr/index.php?action=growercart",
        {
          params: {
            id,
          },
        }
      )
      .then((response) => {
        if (response.data.status === 200) {
          setMyCarts(response.data.carts);
        }
      });
  }, []);
  return (
    <>
      <Navbar />
      <ProfileGrower myCarts={myCarts} />
    </>
  );
}

export default ProfileGrowerPage;
