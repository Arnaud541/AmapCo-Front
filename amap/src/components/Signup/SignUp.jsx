import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function SignUp() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    description: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser(() => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation basique
    if (!user.email || !user.password || !user.confirmPassword || !user.firstname || !user.lastname) {
      alert("Tous les champs doivent être remplis.");
      return;
    }

    if (user.password !== user.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    axios
      .post("https://amap-co.fr/index.php?action=signUp", {
        user,
      })
      .then((response) => {
        if (response.data.status === 200) {
          // Redirection vers la page de connexion après une inscription réussie
          alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
          navigate("/signin"); // Redirige vers la page de connexion
        } else {
          alert(response.data.message); // Affiche un message d'erreur si l'inscription échoue
        }
      })
      .catch((error) => {
        console.error("Erreur lors de l'inscription :", error);
        alert("Une erreur est survenue lors de l'inscription.");
      });
  };

  return (
    <div className="screen-sign">
      <h1 className="h1-signup">Inscription</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="sign__input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="sign__input"
          type="text"
          name="lastname"
          placeholder="Nom"
          onChange={handleChange}
        />
        <input
          className="sign__input"
          type="text"
          name="firstname"
          placeholder="Prénom"
          onChange={handleChange}
        />
        <textarea
          className="sign__input"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          className="sign__input"
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handleChange}
        />
        <input
          className="sign__input"
          type="password"
          name="confirmPassword"
          placeholder="Confirmer le mot de passe"
          onChange={handleChange}
        />
        <button className="sign-submit" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default SignUp;
