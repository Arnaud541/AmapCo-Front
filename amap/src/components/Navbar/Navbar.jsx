import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [idUser, setIdUser] = useState(0);
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    JSON.parse(localStorage.getItem("user")) != null
      ? setIdUser(JSON.parse(localStorage.getItem("user")).id)
      : null;
  }, []);
  return (
    <div>
      <Link to="/recipes">Recettes</Link>
      <Link to="/growers">Producteurs</Link>
      {JSON.parse(localStorage.getItem("connected")) ? (
        <>
          <Link to="/signout">Deconnexion</Link>
          <Link to={`/profile/${idUser}`}>Mon profil</Link>
        </>
      ) : (
        <>
          <Link to="/signin">Connexion</Link>
          <Link to="/signup">Inscription</Link>
        </>
      )}
    </div>
  );
}

export default Navbar;
