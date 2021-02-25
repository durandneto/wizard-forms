import React, { createContext, useReducer } from "react";
import AgentReducer, { agentData } from "../Reducer/Agent";
import StepperReducer, { stepControlData } from "../Reducer/Stepper";
import UserReducer from "../Reducer/User";
import CancerReducer from "../Reducer/Cancer";
import CardiacReducer from "../Reducer/Cardiac";
import { userData } from "../Reducer/User/User.initialState";
import { cardiacData } from "../Reducer/Cardiac/Cardiac.initialState";
import { cancerData } from "../Reducer/Cancer/Cancer.initialState";

export const AppContext = createContext<any>(null);

const Store = ({ children }: any) => {
  const [AgentState, AgentDispatch] = useReducer(AgentReducer, agentData);
  const [UserState, UserDispatch] = useReducer(UserReducer, userData);
  const [CancerState, CancerDispatch] = useReducer(CancerReducer, cancerData);
  const [CardiacState, CardiacDispatch] = useReducer(
    CardiacReducer,
    cardiacData
  );
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
        CancerState,
        CancerDispatch,
        CardiacState,
        CardiacDispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
