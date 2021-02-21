export interface UserDataErrorInterface {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthDate: string;
  phone: string;
  phoneCode: string;
  altPhone: string;
  altPhoneCode: string;
  ethnicity: string;
  salivaSwabTest: string;
  isNursingLiving: string;
  isAlzheimerorDementiatype: string;
  previousTests: string;
}
export interface UserDataInterface {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthDate: string;
  phone: string;
  phoneCode: string;
  altPhone: string;
  altPhoneCode: string;
  ethnicity: string;
  salivaSwabTest?: boolean;
  isAlzheimerorDementiatype?: boolean;
  isNursingLiving?: boolean;
  previousTests: Array<string>;
}

export interface UserInterface {
  error: boolean;
  success: boolean;
  errorMessage: {
    PersonalInfo: {
      error: boolean;
      success: boolean;
      message: UserDataErrorInterface;
    };
  };

  PersonalInfo: UserDataInterface;
}
