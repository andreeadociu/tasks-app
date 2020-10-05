import React, { useReducer, createContext } from "react";
import { TASKS } from "../components/data/tasks";
import { cardReducer } from "../redux/cards/cardReducer";

export const CardContext = createContext();

export const CardProvider = (props) => {
  const [tasks, dispatch] = useReducer(cardReducer, TASKS);

  return (
    <CardContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </CardContext.Provider>
  );
};
