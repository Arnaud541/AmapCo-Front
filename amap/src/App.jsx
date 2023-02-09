import "./App.css";

import { Routes, Route } from "react-router-dom";
import RecipesPage from "./pages/RecipesPage";
import GrowersPage from "./pages/GrowersPage";
import SignUp from "./components/Signup/SignUp";
import HomePage from "./pages/HomePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import GrowerDetailsPage from "./pages/GrowerDetailsPage";
import GrowerCartPage from "./pages/GrowerCartPage";
import FormRecipePage from "./pages/FormRecipePage";
import SignInPage from "./pages/SignInPage";
import ProfileUserPage from "./pages/ProfileUserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes" element={<RecipesPage />} />
      <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
      <Route path="/recipe/create" element={<FormRecipePage />} />
      <Route path="/growers" element={<GrowersPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/profile/:id" element={<ProfileUserPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/growers/:id" element={<GrowerDetailsPage />} />
      <Route path="/growers/:id/cart/:idcart" element={<GrowerCartPage />} />
    </Routes>
  );
}

export default App;
