import { BrowserRouter,Routes, Route} from "react-router-dom";

import "./../css/reset.css";
import "./../css/style.css"
import Login from "./Login";
import Register from "./SignUp";



export default function App() {



  return (
    
              <BrowserRouter>
                  <Routes>
                    <Route path ='/login' element ={<Login />}/>
                    <Route path='/sign-up' element={<Register />} />
                    
                  </Routes>
              </BrowserRouter> 

         
        
  );

}