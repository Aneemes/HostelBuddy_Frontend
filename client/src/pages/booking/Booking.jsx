import "./booking.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Booking = ({ item }) => {
    const [info, setInfo] = useState({});
    const { data, loading, error } = useFetch("/bookings");
    const handleChange = (e) => {

        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        try {
          
    
          const newbooking = {
            ...info,
          };
    
          await axios.post("http://localhost:8000/api/bookings/", newbooking);
          
        } catch (err) {console.log(err)}
    
      };
  return (
    <div id="booking" class="section">
      <Navbar/>
    <div class="section-center">
        <div class="container1">
            <div class="row">
                <div class="booking-form">
                    <div class="form-header">
                        <h1>Make your reservation</h1>
                    </div>
                    <form>
                        {/* <div class="form-group">
                            <input class="form-control" type="text" placeholder="price" id="cheapestPrice"/>
                            <span class="form-label">Total Price</span>
                        </div> */}
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" type="date" required id="checkInDate" onChange={handleChange}/>
                                    <span class="form-label">Check In</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" type="date" required id="checkOutDate" onChange={handleChange}/>
                                    <span class="form-label">Check out</span>
                                </div>
                            </div>
                        </div>
                        {/* <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <select class="form-control" required>
                                        <option value="" selected hidden>rooms</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    <span class="select-arrow"></span>
                                    <span class="form-label">Rooms</span>
                                </div>
                            </div> */}
                            {/* <div class="col-md-4">
                                <div class="form-group">
                                    <select class="form-control" required>
                                        <option value="" selected hidden>no of adults</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    <span class="select-arrow"></span>
                                    <span class="form-label">Adults</span>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <select class="form-control" required>
                                        <option value="" selected hidden>no of children</option>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                    <span class="select-arrow"></span>
                                    <span class="form-label">Children</span>
                                </div>
                            </div> */}
                        {/* </div> */}
                        {/* <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" type="email" placeholder="Enter your Email" />
                                    <span class="form-label">Email</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" type="tel" placeholder="Enter you Phone" />
                                    <span class="form-label">Phone</span>
                                </div>
                            </div>
                        </div> */}
                        <div class="form-btn">
                            <button onClick={handleClick} class="submit-btn">Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        
    </div>
   
</div> 
  );
};
export default Booking;