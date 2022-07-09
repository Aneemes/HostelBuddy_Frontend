import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import {
  hostelDetailsState,
  hostelDetailsReducer,
} from "./HostelDetailsContext";
import Details from "./Details";

export const HostelDetailsContext = createContext();

const DetailsComponent = () => {
  return (
    <Fragment>
      <Details />
    </Fragment>
  );
};

const HostelDetails = (props) => {
  const [data, dispatch] = useReducer(
    hostelDetailsReducer,
    hostelDetailsState
  );
  return (
    <Fragment>
      <HostelDetailsContext.Provider value={{ data, dispatch }}>
        <Layout children={<DetailsComponent />} />
      </HostelDetailsContext.Provider>
    </Fragment>
  );
};

export default HostelDetails;
