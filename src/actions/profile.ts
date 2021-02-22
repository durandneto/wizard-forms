import axios from "axios";
import { token } from "../context/Auth.Context";
import { format, compareAsc } from "date-fns";
import {
  ProfileAddressDataInterface,
  ProfileMedicareDataInterface,
  ProfileUserDataInterface,
} from "../context/Profile.Contex";
import {
  UserAddressInfoDataInterface,
  UserInterface,
} from "../v2/Reducer/User/User.model";

export const BASE_URL =
  "http://ec2co-ecsel-uixxpxra75ed-1580772910.us-west-2.elb.amazonaws.com";

export const validateAddress = (Address: UserAddressInfoDataInterface) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const data = `?street=${Address.street}&street2=${Address.street2}&city=${Address.city}&state=${Address.state}&zipcode=${Address.zipcode}`;
  return axios
    .get(`${BASE_URL}/address-validation/${data}`, axiosConfig)
    .then((r: any) => r.data);
};

export const checkMedicare = (User: UserInterface) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  if (!User.PersonalInfo.birthDate) {
    // eslint-disable-next-line no-throw-literal
    throw "Invalid User DOB, Check Personal info section.";
  }
  if (!User.PersonalInfo.firstName) {
    // eslint-disable-next-line no-throw-literal
    throw "Invalid User firstname, Check Personal info section.";
  }
  if (!User.PersonalInfo.lastName) {
    // eslint-disable-next-line no-throw-literal
    throw "Invalid User lastname, Check Personal info section.";
  }

  const DOB = new Date(User.PersonalInfo.birthDate);
  // ?memberID=9dx2tp7pc18&Patient_DOB=1%2F22%2F1938&Patient_First=Rodolfo&Patient_Last=Gaytan&payerCode=00007&Provider_LastName=Fastflow%20Marketing&Provider_NPI=1609388842
  const data = `?memberID=${User.MediCare.memberID}&Patient_DOB=${format(
    new Date(DOB),
    "MM/dd/yyyy"
  )}&Patient_First=${User.PersonalInfo.firstName}&Patient_Last=${
    User.PersonalInfo.lastName
  }&payerCode=${User.MediCare.payerCode}&Provider_LastName=${
    User.MediCare.Provider_LastName
  }&Provider_NPI=${User.MediCare.Provider_NPI}`;
  return axios
    .get(`${BASE_URL}/medicare/${data}`, axiosConfig)
    .then((r: any) => r.data);
};
