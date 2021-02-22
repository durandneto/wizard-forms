import { UserInterface } from "./User.model";

export const AddressStatesList = [
  "AK",
  "AL",
  "AR",
  "AS",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "GU",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VI",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY",
];

export const EthnicityList: Array<string> = [
  "Asian",
  "African American",
  "Ashkenzai Jewish",
  "Caucasian",
  "French Canadian",
  "Hispanic",
  "Indian",
  "Middle Eastern",
  "Native American",
  "Pacific Islander",
  "Other",
];

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
    altPhone: "",
    ethnicity: "",
  },
  AddressInfo: {
    street: "",
    street2: "",
    city: "",
    state: "",
    zipcode: "",
  },
  PrimaryCare: {
    name: "",
    phone: "",
  },
  MediCare: {
    memberID: "",
    Provider_LastName: "Fastflow Marketing",
    Provider_NPI: "1609388842",
    payerCode: "00007",
  },
  AditionalInformation: {
    previousTests: [],
  },
  errorMessage: {
    PrimaryCare: {
      success: false,
      error: false,
      message: {
        name: "",
        phone: "",
      },
    },
    MediCare: {
      success: false,
      error: false,
      message: {
        Provider_LastName: "",
        Provider_NPI: "",
        payerCode: "",
        memberID: "",
        extendedMedicareLeadData: "",
      },
    },
    AditionalInformation: {
      success: false,
      error: false,
      message: {
        salivaSwabTest: "",
        isNursingLiving: "",
        isAlzheimerorDementiatype: "",
        previousTests: "",
      },
    },
    AddressInfo: {
      success: false,
      error: false,
      message: {
        street: "",
        street2: "",
        city: "",
        state: "",
        zipcode: "",
      },
    },
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
        altPhone: "",
        ethnicity: "",
      },
    },
  },
};