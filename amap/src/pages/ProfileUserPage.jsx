import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ProfileUser from "../components/User/ProfileUser";

function ProfileUserPage() {
  const [user, setUser] = useState({});
  const [myRecipes, setMyRecipes] = useState([]);
  const [myCartsSubscription, setMyCartsSubscription] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=userById", {
        params: {
          id,
        },
      })
      .then((response) => {
        response.data.user.id === JSON.parse(localStorage.getItem("user")).id
          ? setUser(JSON.parse(localStorage.getItem("user")))
          : setUser(response.data.user);
      });

    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=subscribedCart", {
        params: {
          id,
        },
      })
      .then((response) => {
        console.log(response.data.subscribedCart);
        setMyCartsSubscription(response.data.subscribedCart);
      });

    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=recipesByIdUser", {
        params: {
          id,
        },
      })
      .then((response) => {
        setMyRecipes(response.data.recipes);
      });
  }, []);

  return (
    <>
      <Navbar />
      <ProfileUser
        user={user}
        myRecipes={myRecipes}
        myCartsSubscription={myCartsSubscription}
      />
    </>
  );
}

export default ProfileUserPage;
