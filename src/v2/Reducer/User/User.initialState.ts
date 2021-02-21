import { UserInterface } from "./User.model";

export const userData: UserInterface = {
  error: false,
  success: false,
  PersonalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    birthDate: "",
    phone: "",
    phoneCode: "",
    altPhone: "",
    altPhoneCode: "",
    ethnicity: "",
    previousTests: [],
  },
  errorMessage: {
    PersonalInfo: {
      success: false,
      error: false,
      message: {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        birthDate: "",
        phone: "",
        phoneCode: "",
        altPhone: "",
        altPhoneCode: "",
        ethnicity: "",
        salivaSwabTest: "",
        isNursingLiving: "",
        isAlzheimerorDementiatype: "",
        previousTests: "",
      },
    },
  },
};
