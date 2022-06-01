import {BrowserRouter,Route, Routes,Link,} from "react-router-dom";
import Home from "./pages/home/Home";
import Hostel from "./pages/hostel/Hostel";
import List from "./pages/list/List";
import SignUp from "./components/layout/signup";
import SignIn from "./components/layout/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hostels" element={<List/>}/>
        <Route path="/hostels/:id" element={<Hostel/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
