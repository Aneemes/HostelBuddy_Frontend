import './App.css';
import SignUp from "./pages/signup/signup.js";
import Login from "./pages/login/login";
import {BrowserRouter,Route, Routes,} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path ="/" element = {<Login />} />
    <Route path ="/signup" element = {<SignUp />} />
  </Routes>
  </BrowserRouter>
  
  
  );
}

export default App;
