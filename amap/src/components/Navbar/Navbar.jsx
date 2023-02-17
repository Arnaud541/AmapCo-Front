import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/img/Ham'apiens.png";

function Navbar() {
  const [idUser, setIdUser] = useState(0);
  const [access, setAccess] = useState(0);
  useEffect(() => {
    JSON.parse(localStorage.getItem("user")) != null
      ? setIdUser(JSON.parse(localStorage.getItem("user")).id)
      : null;

    JSON.parse(localStorage.getItem("user")) != null
      ? setAccess(JSON.parse(localStorage.getItem("user")).acces)
      : null;
  }, []);
  return (
    <nav className="navbar">
      <>
        <Link className="a-logo" to='/.'><img className="logo" src={logo} alt="logo" /></Link>
        <Link className="recipesNav" to="/recipes">Recettes</Link>
        <Link className="growersNav"  to="/growers">Producteurs</Link>
      </>
      {JSON.parse(localStorage.getItem("connected")) ? (
        <>
          <Link className="signoutNav" to="/signout">Deconnexion</Link>

          {access == 2 ? (
            <Link className="profileGrowerNav" to={`/profileGrower/${idUser}`}>Mon profil</Link>
          ) : (
            <Link className="profileUserNav" to={`/profile/${idUser}`}>Mon profil</Link>
          )}
        </>
      ) : (
        <>
          <Link className="signinNav" to="/signin">Connexion</Link>
          <Link className="signupNav" to="/signup">Inscription</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
