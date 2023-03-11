import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import logo from "../../assets/img/Ham'apiens.png";

function Navbar() {
  const [isMenuclicked, setIsMenuclicked] = useState(false);
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
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

  const updateMenu = () => {
    if(!isMenuclicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    } else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuclicked(!isMenuclicked)
  }

  return (
    <div>
      <nav className="navbar1">
      <Link className="a-logo" to='/.'><img className="logo" src={logo} alt="logo" /></Link>
        <div className="burger-menu" onClick={updateMenu}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
      </nav>
    <div className={menu_class}>
    <>
      <div className="burger-menu-options">
      <>
      
         <div className="recipes-burger-menu"><Link className="link-burger-menu" to="/recipes">Recettes</Link></div>
         <div className="growers-burger-menu"><Link className="link-burger-menu"  to="/growers">Producteurs</Link></div>
       </>  
       {JSON.parse(localStorage.getItem("connected")) ? (
        <>
          <div className="signout-burger-menu"><Link className="link-burger-menu"  to="/signout">Deconnexion</Link></div>
          {access == 2 ? (
            <div className="grower-profile-burger-menu"><Link className="link-burger-menu"   to={`/profileGrower/${idUser}`}>Mon profil</Link> </div>
          ) : (
            <div className="user-profile-burger-menu"><Link className="link-burger-menu"  to={`/profile/${idUser}`}>Mon profil</Link></div>
          )}
        </>
      ) : (
        <>
          <div className="signin-burger-menu"><Link className="link-burger-menu"  to="/signin">Connexion</Link></div>
          <div className="signup-burger-menu"><Link className="link-burger-menu"  to="/signup">Inscription</Link></div>
        
        </>
        
      )}
      </div>
      </>
    </div>
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
  </div>
  );}




export default Navbar;
