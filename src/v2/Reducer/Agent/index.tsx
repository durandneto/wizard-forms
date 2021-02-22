export interface AgentInterface {
  error: boolean;
  errorMessage: {
    url: string;
    name: string;
  };
  success: boolean;
  complete: boolean;
  url: string;
  name: string;
}

export const agentData: AgentInterface = {
  error: false,
  success: false,
  complete: false,
  name: "",
  url: "",
  errorMessage: {
    name: "",
    url: "",
  },
};

export const AGENT_SET_ERROR = "AGENT/AGENT_SET_ERROR";
export const AGENT_UPDATE = "AGENT/AGENT_UPDATE";
export const AGENT_SET_URL = "AGENT/AGENT_SET_URL";

export type AgentActionInterface =
  | {
      type: "AGENT/AGENT_SET_ERROR";
    }
  | { type: "AGENT/AGENT_SET_URL"; url: string }
  | { type: "AGENT/AGENT_UPDATE"; key: string; value: any };

export const initialAgent = (initialAgent: AgentInterface) => {
  return {
    ...initialAgent,
  };
};

export default function reducer(
  state: AgentInterface,
  action: AgentActionInterface
): AgentInterface {
  switch (action.type) {
    case AGENT_SET_ERROR:
      return {
        ...state,
        error: state.name === "" || state.url === "",
        success: state.name !== "" && state.url !== "",
        complete: state.name !== "" && state.url !== "",
        errorMessage: {
          name: state.name === "" ? "name empty" : "",
          url: state.url === "" ? "url empty" : "",
        },
      };
    case AGENT_UPDATE:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}
