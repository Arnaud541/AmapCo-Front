import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function SignUp() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: "",
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

    axios
      .post("http://127.0.0.1/AmapCo-Back/index.php?action=signUp", {
        user,
      })
      .then((response) => {
        console.log(response);
      });
    navigate("/signup");
  };

  return (
    <div className="screen-sign">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <input className="sign__input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input className="sign__input"
          type="text"
          name="lastName"
          placeholder="Nom"
          onChange={handleChange}
        />
        <input className="sign__input"
          type="text"
          name="firstName"
          placeholder="Prenom"
          onChange={handleChange}
        />
        <input className="sign__input"
          type="file"
          name="profilePicture"
          accept="image/*"
          onChange={handleChange}
        />
        <input className="sign__input"
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handleChange}
        />
        <input className="sign__input"
          type="password"
          name="confirmPassword"
          placeholder="Confirmer le mot de passe"
          onChange={handleChange}
        />
        <button className="sign-submit" type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default SignUp;
