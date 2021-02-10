import Profile from '../components/Profile'
import { TabItemInterface, TabHeaderInterface } from '../components/TabHeader'
import PersonalInfo from "../components/Profile/PersonalInfo"
import Address from "../components/Profile/Address"
import MedicareID from "../components/Profile/MedicareID"
import PrimaryCare from "../components/Profile/PrimaryCare"

export interface ProfileUserDataInterface {
   firstName: string;
   lastName: string;
   email: string;
   gender: string;
   birthdate: string;
   phone: string;
   phoneCode: string;
   altPhone: string;
   altPhoneCode: string;
   ethnicity: string;
   previousTests: Array<string>;
}

export interface ProfileAddressDataInterface {
   streetLine: string;
   streetLine2: string;
   city: string;
   state: string;
   postalCode: string;
}

export interface ProfileMedicareDataInterface {

   Provider_LastName: string;
   Provider_NPI: string;
   Patient_Last: string;
   payerCode: string;
   Patient_First: string;
   Patient_DOB: string;
   memberID: string;
}

export interface ProfilePrimaryCareDataInterface {
   fullName: string;
   phone: string;
}

export const ProfilePrimaryCareData = {
   fullName: "",
   phone: "",
}

export const ProfileMedicareData = {
   memberID: "9dx2tp7pc18",
   Provider_LastName: "Fastflow Marketing",
   Provider_NPI: "1609388842",
   payerCode: "00007",
   Patient_Last: "Gaytan",
   Patient_First: "Rodolfo",
   Patient_DOB: "1/22/1938",
}

export const ProfileAddressData = {
   streetLine: "",
   streetLine2: "",
   city: "",
   state: "",
   postalCode: "",
}

export const ProfileUserData: ProfileUserDataInterface = {
   firstName: "",
   lastName: "",
   email: "",
   gender: "",
   birthdate: "",
   phoneCode: "+ 1",
   phone: "",
   altPhoneCode: "+ 1",
   altPhone: "",
   ethnicity: "",
   previousTests: [""]
}

export interface ProfileInterface {
   User: ProfileUserDataInterface;
   Address: ProfileAddressDataInterface;
   Medicare: ProfileMedicareDataInterface;
   PrimaryCare: ProfilePrimaryCareDataInterface;
}

export const ProfileData = {
   User: ProfileUserData,
   Address: ProfileAddressData,
   Medicare: ProfileMedicareData,
   PrimaryCare: ProfilePrimaryCareData,
}

const ProfileItemsTab: Array<TabItemInterface> = [
   {
      id: 1,
      label: "Personal Information.",
      component: (props:any) => <PersonalInfo {...props} />,
      index: 0,
      data: ProfileData.User
   },
   {
      id: 2,
      label: "Address",
      component:  (props:any) =>  <Address {...props}  />,
      index: 1,
      data: ProfileData.Address
   },
   {
      id: 3,
      label: "Medicare ID",
      component:  (props:any) =>  <MedicareID {...props}  />,
      index: 2,
      data: ProfileData.Medicare
   },
   {
      id: 4,
      label: "Primary Care",
      component:  (props:any) =>  <PrimaryCare {...props}  />,
      index: 3,
      data: ProfileData.PrimaryCare
   },
]

export const ProfileTab: TabHeaderInterface = {
   id: 1,
   index: 0,
   label: "Profile",
   component: (props: any) => <Profile  {...props}/>,
   activeTab: ProfileItemsTab[0],
   tabs: ProfileItemsTab,
}