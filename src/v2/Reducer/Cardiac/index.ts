import { guidGenerator } from "../../../utils";
import { checkDiagnosticError } from "./Cardiac.functions";
import { familyMemberData } from "./Cardiac.initialState";
import {
  CardiacFamilyMemberInterface,
  CardiacInterface,
} from "./Cardiac.model";

export const CARDIAC_SET_ERROR = "CARDIAC/CARDIAC_SET_ERROR";
export const CARDIAC_UPDATE = "CARDIAC/CARDIAC_UPDATE";
export const CARDIAC_ADD_FAMILY_MEMBER = "CARDIAC/CARDIAC_ADD_FAMILY_MEMBER";
export const CARDIAC_UPDATE_FAMILY_MEMBER =
  "CARDIAC/CARDIAC_UPDATE_FAMILY_MEMBER";
export const CARDIAC_REMOVE_FAMILY_MEMBER =
  "CARDIAC/CARDIAC_REMOVE_FAMILY_MEMBER";

export type CardiacActionInterface =
  | {
      type: "CARDIAC/CARDIAC_SET_ERROR";
    }
  | {
      type: "CARDIAC/CARDIAC_UPDATE_FAMILY_MEMBER";
      fm: CardiacFamilyMemberInterface;
    }
  | {
      type: "CARDIAC/CARDIAC_ADD_FAMILY_MEMBER";
    }
  | {
      type: "CARDIAC/CARDIAC_REMOVE_FAMILY_MEMBER";
      id: string;
    }
  | { type: "CARDIAC/CARDIAC_UPDATE"; key: string; value: any };

export const initialCardiac = (initialCardiac: CardiacInterface) => {
  return {
    ...initialCardiac,
  };
};

export default function reducer(
  state: CardiacInterface,
  action: CardiacActionInterface
): CardiacInterface {
  switch (action.type) {
    case CARDIAC_ADD_FAMILY_MEMBER:
      return {
        ...state,
        FamilyMember: [
          ...state.FamilyMember,
          {
            ...familyMemberData,
            id: guidGenerator(),
          },
        ],
      };
    case CARDIAC_REMOVE_FAMILY_MEMBER:
      const fmIndex = state.FamilyMember.findIndex((f) => f.id === action.id);
      let newaFm = state.FamilyMember;
      if (fmIndex > -1) {
        newaFm.splice(fmIndex, 1);
      }
      return {
        ...state,
        FamilyMember: [...newaFm],
      };
    case CARDIAC_UPDATE_FAMILY_MEMBER:
      const fmaIndex = state.FamilyMember.findIndex(
        (f) => f.id === action.fm.id
      );
      let newFm = state.FamilyMember;
      if (fmaIndex > -1) {
        newFm[fmaIndex] = action.fm;
      }
      return {
        ...state,
        FamilyMember: [...newFm],
      };
    case CARDIAC_SET_ERROR:
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
    case CARDIAC_UPDATE:
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
