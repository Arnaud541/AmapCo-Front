import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
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
    navigate("/");
  };

  return (
    <div className="login">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default SignIn;
