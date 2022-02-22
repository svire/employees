import React, {createContext, useReducer, useContext} from "react";
import {reducer} from "./reducer";
const initialState = {
  employees: [1],
  newarray: [],
  errorMessage: "",
  regularEmployees: {
    employees: [],
    currentPage: 0,
    loading: false,
  },
  deletedEmployees: {
    employees: [],
    currentPage: 0,
    loading: false,
  },
};

const context = createContext(initialState);
const {Provider} = context;

const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

const useAppContext = () => useContext(context);

export {context, StateProvider, useAppContext};
