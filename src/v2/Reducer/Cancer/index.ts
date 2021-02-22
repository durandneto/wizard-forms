import { checkDiagnosticError } from "./Cancer.functions";
import { CancerInterface } from "./Cancer.model";

export const CANCER_SET_ERROR = "CANCER/CANCER_SET_ERROR";
export const CANCER_UPDATE = "CANCER/CANCER_UPDATE";

export type CancerActionInterface =
  | {
      type: "CANCER/CANCER_SET_ERROR";
    }
  | { type: "CANCER/CANCER_UPDATE"; key: string; value: any };

export const initialCancer = (initialCancer: CancerInterface) => {
  return {
    ...initialCancer,
  };
};

export default function reducer(
  state: CancerInterface,
  action: CancerActionInterface
): CancerInterface {
  switch (action.type) {
    case CANCER_SET_ERROR:
      const [hasErr, DiaMessage] = checkDiagnosticError(state.Diagnostic);
      return {
        ...state,
        error: hasErr ? hasErr : state.error,
        success: !hasErr,
        errorMessage: {
          ...state.errorMessage,
          Diagnostic: {
            error: hasErr,
            success: !hasErr,
            message: DiaMessage,
          },
        },
      };
    case CANCER_UPDATE:
      if (action.key === "isDiagnosed" && action.value === "No") {
        return {
          ...state,
          error: false,
          success: true,
          Diagnostic: {
            ...state.Diagnostic,
            [action.key]: action.value,
          },
        };
      } else {
        return {
          ...state,
          error: false,
          success: false,
          Diagnostic: {
            ...state.Diagnostic,
            [action.key]: action.value,
          },
        };
      }
    default:
      return state;
  }
}