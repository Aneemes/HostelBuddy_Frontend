import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  // const [min, setMin] = useState(undefined);
  // const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/hostels?city=${destination}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      {/* <Header type="list" /> */}
      <div class="listContainer">
        <div class="listWrapper">
          <div class="listSearch">
            <h1 class="lsTitle">Search</h1>
            <div class="lsItem">
              <p class="na">Destination</p>
              <input placeholder={destination} type="text" />
            </div>
            <div class="lsItem">
              <p class="na">Check-in Date</p>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div class="lsItem">
              <p class="na">Options</p>
              <div class="lsOptions">
                <div class="lsOptionItem">
                  <span class="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" class="lsOptionInput" />
                </div>
                <div class="lsOptionItem">
                  <span class="lsOptionText">
                    Max price <small>per month</small>
                  </span>
                  <input type="number" class="lsOptionInput" />
                </div>
                
              </div>
            </div>
            <button onClick={handleClick} >Search</button>
          </div>
          <div class="listResult">
          {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
