import useFetch from "../../hooks/useFetch";

import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hostels?featured=true&limit=3");

  return (
    <div class="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div class="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                class="fpImg"
              />
              <span class="fpName">{item.name}</span>
              <span class="fpCity">{item.city}</span>
              <span class="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div class="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
