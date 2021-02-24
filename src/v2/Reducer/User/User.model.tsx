export interface PrimaryCareDataInterface {
  name: string;
  phone: string;
}

export interface ProfileMedicareDataInterface {
  Provider_LastName: string;
  Provider_NPI: string;
  payerCode: string;
  memberID: string;
  extendedMedicareLeadData: any;
}

export interface UserAddressInfoErrorInterface {
  street: string;
  street2: string;
  city: string;
  state: string;
  zipcode: string;
}
export interface UserAddressInfoDataInterface {
  street: string;
  street2: string;
  city: string;
  state: string;
  zipcode: string;
}
export interface UserDataErrorInterface {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthDate: string;
  phone: string;
  altPhone: string;
  ethnicity: string;
}
export interface UserDataInterface {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthDate: string;
  phone: string;
  altPhone: string;
  ethnicity: string;
}
export interface UserAditionalInformationDataInterface {
  previousTests: Array<string>;
  salivaSwabTest?: boolean;
  isAlzheimerorDementiatype?: boolean;
  isNursingLiving?: boolean;
}
export interface UserAditionalInformationErrorInterface {
  previousTests: string;
  salivaSwabTest: string;
  isAlzheimerorDementiatype: string;
  isNursingLiving: string;
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
    AditionalInformation: {
      error: boolean;
      success: boolean;
      message: UserAditionalInformationErrorInterface;
    };
    AddressInfo: {
      error: boolean;
      success: boolean;
      message: UserAddressInfoErrorInterface;
    };
    MediCare: {
      error: boolean;
      success: boolean;
      message: ProfileMedicareDataInterface;
    };
    PrimaryCare: {
      error: boolean;
      success: boolean;
      message: PrimaryCareDataInterface;
    };
  };

  PersonalInfo: UserDataInterface;
  AddressInfo: UserAddressInfoDataInterface;
  AditionalInformation: UserAditionalInformationDataInterface;
  MediCare: ProfileMedicareDataInterface;
  PrimaryCare: PrimaryCareDataInterface;
}
