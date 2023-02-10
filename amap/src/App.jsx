import "./App.css";

import { Routes, Route } from "react-router-dom";
import RecipesPage from "./pages/RecipesPage";
import GrowersPage from "./pages/GrowersPage";
import SignIn from "./components/Signin/SignIn";
import SignUp from "./components/Signup/SignUp";
import HomePage from "./pages/HomePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import GrowerDetailsPage from "./pages/GrowerDetailsPage";
import GrowerCartPage from "./pages/GrowerCartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes" element={<RecipesPage />} />
      <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
      <Route path="/growers" element={<GrowersPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/growers/:id" element={<GrowerDetailsPage />} />
      <Route path="/growers/:id/cart/:idcart" element={<GrowerCartPage />} />
    </Routes>
  );
}

export default App;
