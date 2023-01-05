import "./App.css";

import { Routes, Route } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Growers from "./components/Growers/Growers";
import SignIn from "./components/Signin/SignIn";
import SignUp from "./components/Signup/SignUp";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/grower" element={<Growers />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
