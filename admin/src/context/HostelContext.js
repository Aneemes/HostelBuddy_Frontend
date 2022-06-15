import React from "react";
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  loading: false,
  error: null,
};

export const HostelContext = createContext();

const HostelReducer = (state, action) => {
  switch (action.type) {
    case "ADD_START":
      return {
        file: null,
        loading: true,
        error: null,
      };
    case "ADD_SUCCESS":
      return {
        file: action.payload,
        loading: false,
        error: null,
      };
    case "ADD_FAILURE":
      return {
        file: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const HostelContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(HostelReducer, INITIAL_STATE);

  return (
    <HostelContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </HostelContext.Provider>
  );
};
