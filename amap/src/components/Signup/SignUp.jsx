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

    axios
      .post("https://amap.momomotus.fr/AmapCo-Back/index.php?action=signUp", {
        user,
      })
      .then((response) => {
        if (response.data.status === 200) {
          console.log(response);
          navigate("/signup");
        } else {
          if (response.data.status === 400) alert(response.data.message);
        }
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
          placeholder="Prenom"
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
