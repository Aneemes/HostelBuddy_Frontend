import "./featuredProperties.css";

const FeaturedProperties = () => {
  return <div className="body">
   <div className="cont">
  <h1>Card section</h1>
  <div className="cards">
    <div className="card one">
      <div className="details">
        <div className="content">
          <h2>Blue</h2>
          <p>This is the description.</p>
          <a href="#" className="button">Get</a>
        </div>
      </div>
    </div>
    <div className="card two">
      <div className="details">
        <div className="content">
          <h2>Orange</h2>
          <p>This is the description.</p>
          <a href="#" className="button">Get</a>
        </div>
      </div>
    </div>
    <div class="card three">
      <div class="details">
        <div class="content">
          <h2>Black</h2>
          <p>This is the description.</p>
          <a href="#" class="button">Get</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
};

export default FeaturedProperties;
