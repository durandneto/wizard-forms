import { StepperInterface } from "../components/common/Stepper";
import Agent from "../components/Agent";
import User from "../components/User";
import Cancer from "../components/Cancer";
import Cardiac from "../components/Cardiac";

export const SET_CURRENT_STEP = "STEP/SET_CURRENT_STEP";
export const SET_STEP_ERROR = "STEP/SET_STEP_ERROR";
export const SET_STEP_SUCCESS = "STEP/SET_STEP_SUCCESS";
export const GO_TO_NEXT_STEP = "STEP/GO_TO_NEXT_STEP";
export const BACK_TO_PREV_STEP = "STEP/BACK_TO_PREV_STEP";

export type StepperActionInterface =
  | {
      type: "STEP/SET_CURRENT_STEP";
      step: number;
    }
  | {
      type: "STEP/SET_STEP_ERROR";
    }
  | {
      type: "STEP/BACK_TO_PREV_STEP";
    }
  | {
      type: "STEP/GO_TO_NEXT_STEP";
    }
  | {
      type: "STEP/SET_STEP_SUCCESS";
    };

export const initialStepper = (initialStepper: StepperInterface) => {
  return {
    ...initialStepper,
  };
};

const MainSteps2 = [
  {
    label: "Agent",
    slug: "Agent",
    children: <Agent />,
    error: false,
    success: false,
    completed: false,
  },
  {
    label: "Profile",
    slug: "Profile",
    children: <User />,
    error: false,
    success: false,
    completed: false,
  },
  {
    label: "Cancer",
    slug: "Cancer",
    children: <Cancer />,
    error: false,
    success: false,
    completed: false,
  },
  {
    label: "Cardiac",
    slug: "Cardiac",
    children: <Cardiac />,
    error: false,
    success: false,
    completed: false,
  },
  {
    label: "Review",
    slug: "CancerTranser",
    children: <p>In Progress</p>,
    error: false,
    success: true,
    completed: false,
  },
];
export const stepControlData: StepperInterface = {
  activeStep: 0,
  control: false,
  steps: MainSteps2,
};

export default function reducer(
  state: any,
  action: StepperActionInterface
): StepperInterface {
  switch (action.type) {
    case SET_CURRENT_STEP:
      return {
        ...state,
        activeStep: action.step,
      };
    case SET_STEP_ERROR:
      state.steps[state.activeStep].error = true;
      state.steps[state.activeStep].success = false;
      state.steps[state.activeStep].completed = false;
      return {
        ...state,
      };
    case SET_STEP_SUCCESS:
      state.steps[state.activeStep].success = true;
      state.steps[state.activeStep].completed = true;
      state.steps[state.activeStep].error = false;

      return {
        ...state,
      };
    case GO_TO_NEXT_STEP:
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case BACK_TO_PREV_STEP:
      if (state.activeStep > 0) {
        return {
          ...state,
          activeStep: state.activeStep - 1,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
