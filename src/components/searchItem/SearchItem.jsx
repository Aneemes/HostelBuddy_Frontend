import "./searchItem.css";
import { Routes, Route, Link } from "react-router-dom";
import {Col, Container, Row, Form, Button} from "react-bootstrap"

const SearchItem = () => {
  return  <div>
  <Col lg={4} md = {6} sm ={12} className="  ">
  <div class="card">
  <div class="card-meta">
    <div class="card-meta-img"></div>
    <ul class="card-meta-detail">
      <li class="card-meta-author">
        <i class="fa fa-user"></i>Readers Girls Hostel
      </li>
      <li class="card-meta-date">
        <i class="fa fa-calendar-check"></i>
        Koteshwor
      </li>
     
    </ul>
  </div>
  <article class="card-description">
    <h2 class="card-description-title">Readers Girls Hostel</h2>
    <h4 class="card-description-subtitle">
      Koteshwor
    </h4>
    <p class="card-description-content">
    <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice"> Rs 9000 per month </span>
          
          
        </div>
      </div>
    </p>
    <Link to ="/hostels/:id"><a href="#" class="read-more">Explore</a></Link>
  </article>
</div>
</Col>

</div>

  
};

export default SearchItem;
