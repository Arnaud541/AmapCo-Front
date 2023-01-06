import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    console.log(user);
    navigate("/signin");
  };

  return (
    <div className="registration">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          onChange={handleChange}
        />
        <input
          type="text"
          name="firstName"
          placeholder="Prenom"
          onChange={handleChange}
        />
        <label for="file"> Choisir un avatar : </label>
        <input
          type="file"
          name="profilePicture"
          accept="image/*"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmer le mot de passe"
          onChange={handleChange}
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default SignUp;
