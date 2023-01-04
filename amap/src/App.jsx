import './App.css'

import { Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Recettes from "./pages/Recipes";
import Producteurs from './pages/Grower';
import Connexion from './pages/SignIn';
import Inscription from './pages/SignUp';




function App() {

  return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Recettes' element={<Recettes />} />
        <Route path='/Producteurs' element={<Producteurs />} />
        <Route path='/Connexion' element={<Connexion />} />
        <Route path='/Inscription' element={<Inscription />} />
      </Routes>
  )
}

export default App;
