import React, { createContext, useReducer } from "react";
import AgentReducer, { agentData } from "../Reducer/Agent";

export const AppContext = createContext<any>(null);

const Store = ({ children }: any) => {
  const [AgentState, AgentDispatch] = useReducer(AgentReducer, agentData);
  return (
    <AppContext.Provider value={{ AgentState, AgentDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default Store;
