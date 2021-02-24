import { StepperInterface } from "../components/common/Stepper";
import Agent from "../components/Agent";
import User from "../components/User";
import Cancer from "../components/Cancer";
import RECTansferCancer from "../components/Cancer/RCETransfer";

export const SET_CURRENT_STEP = "STEP/SET_CURRENT_STEP";
export const SET_STEP_ERROR = "STEP/SET_STEP_ERROR";
export const SET_STEP_SUCCESS = "STEP/SET_STEP_SUCCESS";
export const GOT_TO_NEXT_STEP = "STEP/GOT_TO_NEXT_STEP";

export type StepperActionInterface =
  | {
      type: "STEP/SET_CURRENT_STEP";
      step: number;
    }
  | {
      type: "STEP/SET_STEP_ERROR";
    }
  | {
      type: "STEP/GOT_TO_NEXT_STEP";
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
    label: "RCE Transfer",
    slug: "CancerTranser",
    children: <RECTansferCancer />,
    error: false,
    success: false,
    completed: false,
  },
  {
    label: "Cardiac",
    slug: "Cardiac",
    children: <Agent />,
    error: false,
    success: false,
    completed: false,
  },
  {
    label: "RCE Transfer",
    slug: "CancerTranser",
    children: <Cancer />,
    error: false,
    success: false,
    completed: false,
  },
  {
    label: "Diabetes",
    slug: "Diabetes",
    children: <Agent />,
    error: false,
    success: false,
    completed: false,
  },
  {
    label: "RCE Transfer",
    slug: "CancerTranser",
    children: <Cancer />,
    error: false,
    success: false,
    completed: false,
  },
  {
    label: "Review",
    slug: "CancerTranser",
    children: <Cancer />,
    error: false,
    success: false,
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
    case GOT_TO_NEXT_STEP:
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    default:
      return state;
  }
}
