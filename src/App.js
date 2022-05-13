import './App.css';
import SignUp from "./component/layout/signup.js";
import SignIn from "./component/layout/signin.js";
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
