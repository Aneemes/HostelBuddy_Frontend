import './App.css';
import SignUp from "./pages/signup/signup.js";
import SignIn from "./pages/signin/signin.js";
import {BrowserRouter,Route, Routes,Link,} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path ="/" element = {<SignIn />} />
    <Route path ="/signup" element = {<SignUp />} />
  </Routes>
  </BrowserRouter>
  
  
  );
}

export default App;
