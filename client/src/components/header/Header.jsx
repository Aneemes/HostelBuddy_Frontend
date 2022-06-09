import {
  faBed,
  faCalendarDays,
  faCar,
  faHome,
  faPhone,
  faUser,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hostels", { state: { destination, date, options } });
  };

  // console.log()

  return (
    <div class="header main-container">
      <div
        class={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
       
        {type !== "list" && (
          <>
            <h1 class="headerTitle ">
              Book Your Stay
            </h1>
            <p class="headerDesc">
              Get Amazing room for yourself !!!!
            </p>
            <button class="headerBtn">Book Now</button>
            <div class="headerSearch">
              <div class="headerSearchItem">
                <FontAwesomeIcon icon={faBed} class="headerIcon" />
                <input
                  type="text"
                  placeholder="Location"
                  class="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              {/* <div class="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} class="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  class="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    class="date"
                    minDate={new Date()}
                  />
                )}
              </div> */}
              {/* <div class="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} class="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  class="headerSearchText"
                >{`${options.adult} number of people `}</span>
                {openOptions && (
                  <div class="options">
                    <div class="optionItem">
                      <span class="optionText">number of people</span>
                      <div class="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          class="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span class="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          class="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div class="optionItem">
                      <span class="optionText">Children</span>
                      <div class="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          class="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span class="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          class="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div class="optionItem">
                      <span class="optionText">Room</span>
                      <div class="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          class="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span class="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          class="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div> */}
              <div class="headerSearchItem">
                <button class="Btn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
