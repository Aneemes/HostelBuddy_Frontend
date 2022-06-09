import React from "react";
import {BrowserRouter,Route, Routes, Link, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Hostel from "./pages/hostel/Hostel";
import List from "./pages/list/List";
import SignUp from "./components/layout/signup";
import SignIn from "./components/layout/signin";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Booking from "./pages/booking/Booking";


function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/signin" />;
    }

    return children;
  };
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/">
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>

        <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/hostels" element={<List/>}/>
        <Route path="/hostels/:id" element={<Hostel/>}/>
        <Route path="/booking" element={<Booking/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
