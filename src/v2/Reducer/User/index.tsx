import {
  UserDataErrorInterface,
  UserDataInterface,
  UserInterface,
} from "./User.model";

export const USER_SET_ERROR = "USER/USER_SET_ERROR";
export const USER_UPDATE = "USER/USER_UPDATE";
export const USER_SET_URL = "USER/USER_SET_URL";

export type UserActionInterface =
  | {
      type: "USER/USER_SET_ERROR";
    }
  | { type: "USER/USER_UPDATE"; key: string; value: any };

export const initialUser = (initialUSER: UserInterface) => {
  return {
    ...initialUSER,
  };
};

const checkPersonalInfoError = (
  info: UserDataInterface
): [boolean, UserDataErrorInterface] => {
  let hasErrors: boolean = false;
  const errors: any = Object.entries(info).reduce((acc: any, data: any) => {
    const [key, value] = data;
    const message = value === "" ? `${key} is empty` : "";
    if (message !== "") {
      hasErrors = true;
    }
    acc[key] = message;
    return acc;
  }, {});

  errors["salivaSwabTest"] = !info.salivaSwabTest
    ? `salivaSwabTest is empty`
    : "";
  errors["isNursingLiving"] = !info.isNursingLiving
    ? `isNursingLiving is empty`
    : "";

  errors["isAlzheimerorDementiatype"] = !info.isAlzheimerorDementiatype
    ? `isAlzheimerorDementiatype is empty`
    : "";

  if (
    errors["salivaSwabTest"] !== "" ||
    errors["isNursingLiving"] !== "" ||
    errors["isAlzheimerorDementiatype"] !== ""
  ) {
    hasErrors = true;
  }
  return [hasErrors, errors];
};

export default function reducer(
  state: UserInterface,
  action: UserActionInterface
): UserInterface {
  switch (action.type) {
    case USER_SET_ERROR:
      const [hasErros, message] = checkPersonalInfoError(state.PersonalInfo);
      return {
        ...state,
        error: hasErros,
        success: !hasErros,
        errorMessage: {
          ...state.errorMessage,
          PersonalInfo: {
            error: hasErros,
            success: !hasErros,
            message,
          },
        },
      };

    case USER_UPDATE:
      return {
        ...state,
        PersonalInfo: {
          ...state.PersonalInfo,
          [action.key]: action.value,
        },
      };
    default:
      return state;
  }
}
