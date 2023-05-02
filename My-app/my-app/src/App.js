import './App.css';
import Login from './componets/Login&sigup/loginpage';
import Signup from './componets/Login&sigup/signuppage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element ={<Signup />} />
 c
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;
