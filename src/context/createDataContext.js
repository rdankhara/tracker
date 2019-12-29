import React from "react";
import { useReducer } from "react";

const createDataContext = (reducer, actions = {}, initialState) => {
  const Context = React.createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = Object.getOwnPropertyNames(actions).reduce(
      (acc, key) => {
        acc[key] = actions[key](dispatch);
        return acc;
      },
      {}
    );
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};

export { createDataContext };
