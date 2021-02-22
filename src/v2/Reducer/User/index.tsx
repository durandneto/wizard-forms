import {
  PrimaryCareDataInterface,
  ProfileMedicareDataInterface,
  UserAddressInfoDataInterface,
  UserAddressInfoErrorInterface,
  UserAditionalInformationDataInterface,
  UserAditionalInformationErrorInterface,
  UserDataErrorInterface,
  UserDataInterface,
  UserInterface,
} from "./User.model";

export const USER_SET_ERROR = "USER/USER_SET_ERROR";
export const USER_SET_ERROR_ADDRESS_INFO = "USER/USER_SET_ERROR_ADDRESS_INFO";
export const USER_SET_ERROR_MEDI_CARE = "USER/USER_SET_ERROR_MEDI_CARE";
export const USER_SET_ERROR_ADITIONAL_INFO =
  "USER/USER_SET_ERROR_ADITIONAL_INFO";
export const USER_SET_ERROR_PRIMARY_CARE = "USER/USER_SET_ERROR_PRIMARY_CARE";
export const USER_SET_ERROR_PERSONAL_INFO = "USER/USER_SET_ERROR_PERSONAL_INFO";
export const USER_UPDATE = "USER/USER_UPDATE";
export const USER_UPDATE_ADITIONAL_INFO = "USER/USER_UPDATE_ADITIONAL_INFO";
export const USER_UPDATE_ADDRESS_INFO = "USER/USER_UPDATE_ADDRESS_INFO";
export const USER_UPDATE_MEDICARE_INFO = "USER/USER_UPDATE_MEDICARE_INFO";
export const USER_UPDATE_PRIMARYCARE = "USER/USER_UPDATE_PRIMARYCARE";
export const USER_SET_URL = "USER/USER_SET_URL";

export type UserActionInterface =
  | {
      type: "USER/USER_SET_ERROR";
    }
  | {
      type: "USER/USER_SET_ERROR_PRIMARY_CARE";
    }
  | {
      type: "USER/USER_SET_ERROR_ADITIONAL_INFO";
    }
  | {
      type: "USER/USER_SET_ERROR_PERSONAL_INFO";
    }
  | {
      type: "USER/USER_SET_ERROR_ADDRESS_INFO";
    }
  | {
      type: "USER/USER_SET_ERROR_MEDI_CARE";
    }
  | { type: "USER/USER_UPDATE"; key: string; value: any }
  | { type: "USER/USER_UPDATE_ADITIONAL_INFO"; key: string; value: any }
  | { type: "USER/USER_UPDATE_PRIMARYCARE"; key: string; value: any }
  | { type: "USER/USER_UPDATE_MEDICARE_INFO"; key: string; value: any }
  | { type: "USER/USER_UPDATE_ADDRESS_INFO"; key: string; value: any };

export const initialUser = (initialUSER: UserInterface) => {
  return {
    ...initialUSER,
  };
};

const checkAddressInfoError = (
  info: UserAddressInfoDataInterface
): [boolean, UserAddressInfoErrorInterface] => {
  let hasErrors: boolean = false;
  const errors: any = Object.entries(info).reduce((acc: any, data: any) => {
    const [key, value] = data;
    if (key === "street2") return acc;
    const message = value === "" ? `${key} is empty` : "";
    if (message !== "") {
      hasErrors = true;
    }
    acc[key] = message;
    return acc;
  }, {});

  return [hasErrors, errors];
};

const checkPrimaryCareError = (
  info: PrimaryCareDataInterface
): [boolean, PrimaryCareDataInterface] => {
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

  return [hasErrors, errors];
};
const checkMediCareError = (
  info: ProfileMedicareDataInterface
): [boolean, ProfileMedicareDataInterface] => {
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

  return [hasErrors, errors];
};

const checkPersonalInfoError = (
  info: UserDataInterface
): [boolean, UserDataErrorInterface] => {
  let hasErrors: boolean = false;
  const errors: any = Object.entries(info).reduce((acc: any, data: any) => {
    const [key, value] = data;
    if (key === "altPhone") return acc;
    const message = value === "" ? `${key} is empty` : "";
    if (message !== "") {
      hasErrors = true;
    }
    acc[key] = message;
    return acc;
  }, {});

  return [hasErrors, errors];
};

const checkAditionalInfoError = (
  info: UserAditionalInformationDataInterface
): [boolean, UserAditionalInformationErrorInterface] => {
  let hasErrors: boolean = false;
  const errors: any = {};

  errors["salivaSwabTest"] = !info.salivaSwabTest
    ? `salivaSwabTest is empty`
    : "";
  errors["isNursingLiving"] = !info.isNursingLiving
    ? `isNursingLiving is empty`
    : "";

  errors["isAlzheimerorDementiatype"] = !info.isAlzheimerorDementiatype
    ? `isAlzheimerorDementiatype is empty`
    : "";

  errors["previousTests"] =
    info.previousTests.length === 0 ? `previousTests is empty` : "";

  if (
    errors["salivaSwabTest"] !== "" ||
    errors["isNursingLiving"] !== "" ||
    errors["isAlzheimerorDementiatype"] !== "" ||
    errors["previousTests"] !== ""
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
      const [
        hasAditionalInfoErros,
        adinitonalMessage,
      ] = checkAditionalInfoError(state.AditionalInformation);

      const [
        hasAddressInfoErros,
        hasAddressInfoMessage,
      ] = checkAddressInfoError(state.AddressInfo);
      const [hasMedicareErros, hasMedicareMessage] = checkMediCareError(
        state.MediCare
      );
      const [
        hasPrimaryCareErros,
        hasPrimaryCareMessage,
      ] = checkPrimaryCareError(state.PrimaryCare);

      const formError =
        hasErros ||
        hasAddressInfoErros ||
        hasPrimaryCareErros ||
        hasAditionalInfoErros ||
        hasMedicareErros;

      return {
        ...state,
        error: formError,
        success: !formError,
        errorMessage: {
          ...state.errorMessage,
          AddressInfo: {
            error: hasAddressInfoErros,
            success: !hasAddressInfoErros,
            message: hasAddressInfoMessage,
          },
          PrimaryCare: {
            error: hasPrimaryCareErros,
            success: !hasPrimaryCareErros,
            message: hasPrimaryCareMessage,
          },
          MediCare: {
            error: hasMedicareErros,
            success: !hasMedicareErros,
            message: hasMedicareMessage,
          },
          PersonalInfo: {
            error: hasErros,
            success: !hasErros,
            message,
          },
          AditionalInformation: {
            error: hasAditionalInfoErros,
            success: !hasAditionalInfoErros,
            message: adinitonalMessage,
          },
        },
      };
    case USER_SET_ERROR_MEDI_CARE:
      const [hasMedicare2Erros, hasMedicare2Message] = checkMediCareError(
        state.MediCare
      );
      return {
        ...state,
        error: hasMedicare2Erros ? hasMedicare2Erros : state.error,
        errorMessage: {
          ...state.errorMessage,
          MediCare: {
            error: hasMedicare2Erros,
            success: !hasMedicare2Erros,
            message: hasMedicare2Message,
          },
        },
      };
    case USER_SET_ERROR_ADDRESS_INFO:
      const [
        hasAddressInfoErros2,
        hasAddressInfoMessage2,
      ] = checkAddressInfoError(state.AddressInfo);

      return {
        ...state,
        error: hasAddressInfoErros2 ? hasAddressInfoErros2 : state.error,
        errorMessage: {
          ...state.errorMessage,
          AddressInfo: {
            error: hasAddressInfoErros2,
            success: !hasAddressInfoErros2,
            message: hasAddressInfoMessage2,
          },
        },
      };
    case USER_SET_ERROR_ADITIONAL_INFO:
      const [
        hasAditionalInfoErros2,
        hasAditionalInfoMessage2,
      ] = checkAditionalInfoError(state.AditionalInformation);
      return {
        ...state,
        error: hasAditionalInfoErros2 ? hasAditionalInfoErros2 : state.error,
        errorMessage: {
          ...state.errorMessage,
          AditionalInformation: {
            error: hasAditionalInfoErros2,
            success: !hasAditionalInfoErros2,
            message: hasAditionalInfoMessage2,
          },
        },
      };
    case USER_SET_ERROR_PERSONAL_INFO:
      const [hasErrosP, messageP] = checkPersonalInfoError(state.PersonalInfo);
      return {
        ...state,
        error: hasErrosP ? hasErrosP : state.error,
        errorMessage: {
          ...state.errorMessage,
          PersonalInfo: {
            error: hasErrosP,
            success: !hasErrosP,
            message: messageP,
          },
        },
      };
    case USER_SET_ERROR_PRIMARY_CARE:
      const [hasPrimaryCareErr, hasPrimaryCareMess] = checkPrimaryCareError(
        state.PrimaryCare
      );

      return {
        ...state,
        error: hasPrimaryCareErr ? hasPrimaryCareErr : state.error,
        errorMessage: {
          ...state.errorMessage,
          PrimaryCare: {
            error: hasPrimaryCareErr,
            success: !hasPrimaryCareErr,
            message: hasPrimaryCareMess,
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
    case USER_UPDATE_ADITIONAL_INFO:
      return {
        ...state,
        AditionalInformation: {
          ...state.AditionalInformation,
          [action.key]: action.value,
        },
      };
    case USER_UPDATE_MEDICARE_INFO:
      return {
        ...state,
        MediCare: {
          ...state.MediCare,
          [action.key]: action.value,
        },
      };
    case USER_UPDATE_PRIMARYCARE:
      return {
        ...state,
        PrimaryCare: {
          ...state.PrimaryCare,
          [action.key]: action.value,
        },
      };
    case USER_UPDATE_ADDRESS_INFO:
      return {
        ...state,
        AddressInfo: {
          ...state.AddressInfo,
          [action.key]: action.value,
        },
      };
    default:
      return state;
  }
}
