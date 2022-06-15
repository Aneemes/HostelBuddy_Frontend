import "./searchItem.css";
import { Routes, Route, Link } from "react-router-dom";
import {Col, Container, Row, Form, Button} from "react-bootstrap"

const SearchItem = ({ item }) => {
  return  <div>
  
  <div class="card">
  <div class="card-meta">
    <img src={item.photos} alt="" className="siImg" />
    <ul class="card-meta-detail">
      <li class="card-meta-author">
        <i class="fa fa-user"></i>{item.name}
      </li>
      <li class="card-meta-date">
        <i class="fa fa-calendar-check"></i>
        {item.city}
      </li>
     
    </ul>
  </div>
  <article class="card-description">
    <h2 class="card-description-title">{item.name}</h2>
    <h4 class="card-description-subtitle">
    {item.desc}
    </h4>
    <p class="card-description-content">
    <div className="siDetails">
    <span className="siDistance">{item.distance}m from center</span>
    {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice"> ${item.cheapestPrice} </span>
          
          
        </div>
      </div>
    </p>
    <Link to ={`/hostels/${item._id}`}><a href="#" class="read-more">Explore</a></Link>
  </article>
</div>


</div>

  
};

export default SearchItem;
