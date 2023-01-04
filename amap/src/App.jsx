import './App.css'

import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Recipes from './pages/Recipes';
import Grower from './pages/Grower';
import SignIn from './components/SignIn';
import SignUp from './pages/SignUp';




function App() {

  return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/grower' element={<Grower />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
  )
}

export default App;
