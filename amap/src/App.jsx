import './App.css'

import { Routes, Route} from "react-router-dom";
import Paniers from "./components/Home/Paniers";
import Recipes from './pages/Recipes';
import Grower from './pages/Grower';
import SignIn from './components/Signin/SignIn';
import SignUp from './components/Signup/SignUp';




function App() {

  return (

      <Routes>
        <Route path='/' element={<Paniers />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/grower' element={<Grower />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
  )
}

export default App;
