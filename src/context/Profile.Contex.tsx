import { TabItemInterface, TabHeaderInterface } from "../components/TabHeader";
import PersonalInfo from "../components/Profile/PersonalInfo";
import Address from "../components/Profile/Address";
import MedicareID from "../components/Profile/MedicareID";
import PrimaryCare from "../components/Profile/PrimaryCare";
import { guidGenerator } from "../utils";

export interface ProfileUserDataInterface {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  gender: string | null;
  birthDate: string | null;
  phone: string | null;
  phoneCode: string | null;
  altPhone: string | null;
  altPhoneCode: string | null;
  ethnicity: string | null;
  salivaSwabTest: boolean | null;
  isNursingLiving: boolean | null | string;
  isAlzheimerorDementiatype: boolean | null | string;
  previousTests: Array<string> | null | string;
}

export interface ProfileAddressDataInterface {
  streetLine: string | null;
  streetLine2: string | null;
  city: string | null;
  state: string | null;
  postalCode: string | null;
}

export interface ProfileMedicareDataInterface {
  Provider_LastName: string | null;
  Provider_NPI: string | null;
  payerCode: string | null;
  memberID: string | null;
  extendedMedicareLeadData?: any;
}

export interface ProfilePrimaryCareDataInterface {
  fullName: string | null;
  phone: string | null;
}

export const ProfilePrimaryCareData = {
  fullName: "",
  phone: "",
};
// Cardio ober1001A Lionell Yewitt 2/9/1951 MediCare 5v32-m08-gc02
export const ProfileMedicareData = {
  memberID: "",
  Provider_LastName: "Fastflow Marketing",
  Provider_NPI: "1609388842",
  payerCode: "00007",
};

export const ProfileAddressData = {
  streetLine: "",
  streetLine2: "",
  city: "",
  state: "",
  postalCode: "",
};

export const ProfileUserData: ProfileUserDataInterface = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  birthDate: "",
  phoneCode: "",
  phone: "",
  altPhoneCode: "",
  altPhone: "",
  ethnicity: "",
  salivaSwabTest: true,
  isNursingLiving: "",
  isAlzheimerorDementiatype: "",
  previousTests: [],
};

export interface ProfileInterface {
  User: ProfileUserDataInterface;
  Address: ProfileAddressDataInterface;
  MediCare: ProfileMedicareDataInterface;
  PrimaryCare: ProfilePrimaryCareDataInterface;
}

export const ProfileData = {
  User: ProfileUserData,
  Address: ProfileAddressData,
  MediCare: ProfileMedicareData,
  PrimaryCare: ProfilePrimaryCareData,
};

const ProfileItemsTab: Array<TabItemInterface> = [
  {
    id: guidGenerator(),
    label: "Personal Information.",
    slug: "PersonalInfo",
    isRequired: true,
    component: (props: any) => <PersonalInfo {...props} />,
    index: 0,
    data: ProfileData.User,
  },
  {
    id: guidGenerator(),
    label: "Address",
    slug: "Address",
    isRequired: true,
    component: (props: any) => <Address {...props} />,
    index: 1,
    data: ProfileData.Address,
  },
  {
    id: guidGenerator(),
    label: "MediCare",
    slug: "MediCare",
    isRequired: true,
    component: (props: any) => <MedicareID {...props} />,
    index: 2,
    data: ProfileData.MediCare,
  },
  {
    id: guidGenerator(),
    label: "Primary Care",
    slug: "PrimaryCare",
    isRequired: true,
    component: (props: any) => <PrimaryCare {...props} />,
    index: 3,
    data: ProfileData.PrimaryCare,
  },
];

export const ProfileTab: TabHeaderInterface = {
  id: guidGenerator(),
  index: 1,
  label: "Profile",
  slug: "Profile",
  tabs: ProfileItemsTab,
};
