import { StepperInterface } from "../components/common/Stepper";

export const SET_CURRENT_STEP = "STEP/SET_CURRENT_STEP";
export const SET_CURRENT_CHILDREN = "STEP/SET_CURRENT_CHILDREN";

export type StepperActionInterface =
  | {
      type: "STEP/SET_CURRENT_STEP";
      step: number;
    }
  | {
      type: "STEP/SET_CURRENT_CHILDREN";
      children: React.ReactNode;
    };

export const initialStepper = (initialStepper: StepperInterface) => {
  return {
    ...initialStepper,
  };
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
    default:
      return state;
  }
}
