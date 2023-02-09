import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProfileUser from "../components/User/ProfileUser";

function ProfileUserPage() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=userById")
      .then((response) => {
        console.log(response);
      });
    const user = JSON.parse(localStorage.getItem("user"));
    user ? setUser(user) : null;
  }, []);
  return (
    <>
      <Navbar />
      <ProfileUser user={user} />
    </>
  );
}

export default ProfileUserPage;
