import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // État pour stocker le message d'erreur
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(""); // Réinitialiser l'erreur avant de faire la requête
    axios
      .post("https://amap-co.fr/index.php?action=signIn", {
        user: user,
      })
      .then((response) => {
        if (response.data.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("connected", JSON.stringify(true));
          navigate("/");
        } else {
          setError("Connexion échouée. Vérifiez vos identifiants.");
        }
      })
      .catch((err) => {
        setError("Une erreur est survenue. Veuillez réessayer.");
        console.error("Erreur lors de la connexion :", err);
      });
  };

  return (
    <div className="screen-log">
      <h1 className="h1-connexion">Connexion</h1>
      <form className="screen__content" onSubmit={handleSubmit}>
        <input
          className="login__input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="login__input"
          type="password"
          placeholder="Mot de passe"
          name="password"
          onChange={handleChange}
        />
        <button className="login-submit" type="submit">
          Se connecter
        </button>
      </form>
      {error && <p className="error-message">{error}</p>} {/* Affichage de l'erreur */}
    </div>
  );
}

export default SignIn;
