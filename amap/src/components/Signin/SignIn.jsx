import axios from "axios";
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
    axios
      .post("http://127.0.0.1/AmapCo-Back/index.php?action=signIn", {
        user: user,
      })
      .then((response) => {
        if (response.data.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/");
        }
      });
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
