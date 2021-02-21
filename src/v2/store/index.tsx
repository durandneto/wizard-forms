import React, { createContext, useReducer } from "react";
import AgentReducer, { agentData } from "../Reducer/Agent";
import StepperReducer, { stepControlData } from "../Reducer/Stepper";
import UserReducer from "../Reducer/User";
import { userData } from "../Reducer/User/User.initialState";

export const AppContext = createContext<any>(null);

const Store = ({ children }: any) => {
  const [AgentState, AgentDispatch] = useReducer(AgentReducer, agentData);
  const [UserState, UserDispatch] = useReducer(UserReducer, userData);
  const [StepperState, StepperDispatch] = useReducer(
    StepperReducer,
    stepControlData
  );
  return (
    <AppContext.Provider
      value={{
        UserState,
        UserDispatch,
        AgentState,
        AgentDispatch,
        StepperState,
        StepperDispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
