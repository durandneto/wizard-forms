import { TabItemInterface, TabHeaderInterface } from '../components/TabHeader'
import PersonalInfo from "../components/Profile/PersonalInfo"
import Address from "../components/Profile/Address"
import MedicareID from "../components/Profile/MedicareID"
import PrimaryCare from "../components/Profile/PrimaryCare"
import { guidGenerator } from '../utils'

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
   previousTests: Array<string> | null;
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
   Patient_Last: string | null;
   payerCode: string | null;
   Patient_First: string | null;
   Patient_DOB: string | null;
   memberID: string | null;
}

export interface ProfilePrimaryCareDataInterface {
   fullName: string | null;
   phone: string | null;
}

export const ProfilePrimaryCareData = {
   fullName: "MD. Jhon",
   phone: "+1 7788347347",
}
// Cardio ober1001A Lionell Yewitt 2/9/1951 Medicare 5v32-m08-gc02
export const ProfileMedicareData = {
   memberID: "9dx2tp7pc18",
   Provider_LastName: "Fastflow Marketing",
   Provider_NPI: "1609388842",
   payerCode: "00007",
   Patient_Last: "Gaytan",
   Patient_First: "Rodolfo",
   Patient_DOB: "8/30/1949",
}

export const ProfileAddressData = {
   streetLine: "470 S Washington st",
   streetLine2: null,
   city: "North Attleboro",
   state: "MA",
   postalCode: "2760",
}

export const ProfileUserData: ProfileUserDataInterface = {
   firstName: "Rodolfo",
   lastName: "Gaytan",
   email: "durand.neto@gmail.com",
   gender: "male",
   birthDate: "1949-08-30",
   phoneCode: "+ 1",
   phone: "778 834 7347",
   altPhoneCode: "+ 1",
   altPhone: "778 834 7347",
   ethnicity: "Indian",
   salivaSwabTest: true,
   previousTests: ["Diabetes"]
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
      id: guidGenerator(),
      label: "Personal Information.",
      slug: "PersonalInfo",
      isRequired: true,
      component: (props:any) => <PersonalInfo {...props} />,
      index: 0,
      data: ProfileData.User
   },
   {
      id: guidGenerator(),
      label: "Address",
      slug: "Address",
      isRequired: true,
      component:  (props:any) =>  <Address {...props}  />,
      index: 1,
      data: ProfileData.Address
   },
   {
      id: guidGenerator(),
      label: "Medicare ID",
      slug: "Medicare",
      isRequired: true,
      component:  (props:any) =>  <MedicareID {...props}  />,
      index: 2,
      data: ProfileData.Medicare
   },
   {
      id: guidGenerator(),
      label: "Primary Care",
      slug: "PrimaryCare",
      isRequired: true,
      component:  (props:any) =>  <PrimaryCare {...props}  />,
      index: 3,
      data: ProfileData.PrimaryCare
   },
]

export const ProfileTab: TabHeaderInterface = {
   id: guidGenerator(),
   index: 1,
   label: "Profile",
   slug: "Profile",
   tabs: ProfileItemsTab,
}