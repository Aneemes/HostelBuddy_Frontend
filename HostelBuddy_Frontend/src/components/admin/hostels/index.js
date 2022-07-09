import React, { Fragment, createContext, useReducer } from "react";
import AdminLayout from "../layout";
import HostelMenu from "./HostelMenu";
import HostelTable from "./HostelTable";
import { hostelState, hostelReducer } from "./HostelContext";

/* This context manage all of the hostels component's data */
export const HostelContext = createContext();

const HostelComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <HostelMenu />
      <HostelTable />
    </div>
  );
};

const Hostels = (props) => {
  /* To use useReducer make sure that reducer is the first arg */
  const [data, dispatch] = useReducer(hostelReducer, hostelState);

  return (
    <Fragment>
      <HostelContext.Provider value={{ data, dispatch }}>
        <AdminLayout children={<HostelComponent />} />
      </HostelContext.Provider>
    </Fragment>
  );
};

export default Hostels;
