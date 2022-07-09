import React, { Fragment, createContext, useReducer } from "react";
import AdminLayout from "../layout";
import LocationMenu from "./LocationMenu";
import AllLocations from "./AllLocations";
import { locationState, locationReducer } from "./LocationContext";

/* This context manage all of the caregories component's data */
export const LocationContext = createContext();

const LocationComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <LocationMenu />
      <AllLocations />
    </div>
  );
};

const Locations = (props) => {
  const [data, dispatch] = useReducer(locationReducer, locationState);
  return (
    <Fragment>
      <LocationContext.Provider value={{ data, dispatch }}>
        <AdminLayout children={<LocationComponent />} />
      </LocationContext.Provider>
    </Fragment>
  );
};

export default Locations;
