import Cardiac from '../components/Cardiac'
import { TabItemInterface, TabHeaderInterface } from '../components/TabHeader'
import FamilyMemberComponent from "../components/Cardiac/FamilyMember"
import DiagnosticComponent from "../components/Cardiac/Diagnostic"


export const Relationship = [{value: "MOM", label:"Mom"},
{value: "DAD", label:"Dad"},
{value: "BROTHER", label:"Brother"},
{value: "SISTER", label:"Sister"},
{value: "GRANDMOTHER", label:"Grandmother"},
{value: "GRANDFATHER", label:"Grandfather"},
{value: "COUSIN", label:"Cousin"},
{value: "AUNT", label:"Aunt"},
{value: "UNCLE", label:"Uncle"},
{value: "GREATGRANDMOTHER", label:"Great Grandmother"},
{value: "GREATGRANDFATHER", label:"Great Grandfather"},
{value: "SON", label:"Son"},
{value: "DAUGHTER", label:"Daughter"},
{value: "NIECE", label:"Niece"},
{value: "NEWPHEW", label:"Nephew"},
{value: "HALF-SISTER", label:"Half-sister"},
{value: "HALF-BROTHER", label:"Half-brother"}]


export const FamilyMemberHeartConditions  = [
{value: "Heart Attack", label :"Heart Attack"},
{value: "Stroke", label :"Stroke"},
{value: "Coronary Heart Disease", label :"Coronary Heart Disease"},
{value :"High Blood Pressure", label :"High Blood Pressure"},
{value :"High Cholesterol", label :"High Cholesterol"},
{value :"Bypass Surgery", label :"Bypass Surgery"},
{value :"Stents in heart", label :"Stents in heart"},
{value :"Atrial fibrillation", label :"Atrial fibrillation"},
{value :"Fast or slow heart beat", label :"Fast or slow heart beat"},
{value :"Irregular heart beat", label :"Irregular heart beat"},
{value :"Congestive heart failure", label :"Congestive heart failure"},
{value :"Heart murmer", label :"Heart murmer"},
{value :"Rheumatic heart disease", label :"Rheumatic heart disease"},
{value :"Pace maker", label :"Pace maker"},
]

export interface CardiacDiagnosticInterface {
   typeOfCardiac: Array<string>;
   age: string;
   prescribedMedications: string;
   heartMedicationList: Array<string>;
   OTCList: Array<string>;
   diabetesType: Array<string>;
   hasDiabetes: boolean;
   isRCECardioTransfer: boolean;
   otherDiagnosis: string;
}


export interface CardiacFamilyMemberInterface {
   id: string
   conditionDate: string;
   relationship: string;
   materialOrPaternal: string;
   age: string;
   typeOfCardiac: string;
   heartConditions: Array<string>
}

export const familyMemberData: CardiacFamilyMemberInterface = {
   id: "",
   conditionDate: "",
   relationship: "",
   materialOrPaternal: "",
   age: "",
   typeOfCardiac: "",
   heartConditions: []
}

export const DiagnosticData: CardiacDiagnosticInterface = {
   typeOfCardiac: [],
   age: "",
   prescribedMedications: "",
   heartMedicationList:[],
   OTCList:[],
   diabetesType:[],
   hasDiabetes: false,
   isRCECardioTransfer: false,
   otherDiagnosis: ""
}

export const CardiacDiagnosticList: Array<string> = [
   "Hypertension",
   "High Cholesterol",
   "Heart Attack",
   "Pre-Cardiac",
   "Sleep Apnea",
   "Coronary Artery Disease",
   "Stents in Heart",
   "Open Heart Surgery",
   "Cardiac Mellitus (TYPE 2 Cardiac)"
]

export interface CardiacDataInterface {
   FamilyMemberList: {
      list: Array<CardiacFamilyMemberInterface>
   },
   Diagnostic: CardiacDiagnosticInterface
}

export const CardiacDiagnosticData: CardiacDataInterface = {
   FamilyMemberList: { list:[] },
   Diagnostic: DiagnosticData
}

const CardiacItemsTab: Array<TabItemInterface> = [
   {
      id: 1,
      index: 0,
      label: "Diagnostic",
      slug: "Diagnostic",
      component: (props:any) => <DiagnosticComponent {...props} />,
      data: CardiacDiagnosticData.Diagnostic
   },
   {
      id: 2,
      index: 1,
      label: "Family Member",
      slug: "FamilyMember",
      component: (props:any) => <FamilyMemberComponent {...props} />,
      data: CardiacDiagnosticData.FamilyMemberList
   },
]

export const CardiacTab: TabHeaderInterface = {
   id: 3,
   index: 2,
   label: "Cardiac",
   slug: "Cardiac",
   component: (props: any) => <Cardiac  {...props}/>,
   activeTab: CardiacItemsTab[0],
   tabs: CardiacItemsTab,
}
