import "./App.css";

import { Routes, Route } from "react-router-dom";
import RecipesPage from "./pages/RecipesPage";
import Grower from "./pages/Grower";
import SignIn from "./components/Signin/SignIn";
import SignUp from "./components/Signup/SignUp";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes" element={<RecipesPage />} />
      <Route path="/grower" element={<Grower />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
