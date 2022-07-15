import { BrowserRouter,Routes, Route} from "react-router-dom";
import UserContext from "../contexts/UserContext.js";
import { useState } from 'react'

import "./../css/reset.css";
import "./../css/style.css"
import Login from "./Login";
import Register from "./SignUp";
import MainMenu from "./MainMenu";
import NewNote from "./NewNote";
import Example from "./Example";


export default function App() {

  const [user, setUser] = useState(
    localStorage.getItem('userdata')
        ? JSON.parse(localStorage.getItem('userdata'))
        : null
  );

  return (
    
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path ='/login' element ={<Login />}/>
            <Route path='/sign-up' element={<Register />} />
            <Route path='/' element={ <MainMenu />} />
            <Route path='/newnote' element={ < NewNote/>} />  
            <Route path='/example' element={ < Example/>} />           
          </Routes>
      </UserContext.Provider>
    </BrowserRouter> 

         
        
  );

}