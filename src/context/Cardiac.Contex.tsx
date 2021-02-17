import { TabItemInterface, TabHeaderInterface } from '../components/TabHeader'
import FamilyMemberComponent from "../components/Cardiac/FamilyMember"
import DiagnosticComponent from "../components/Cardiac/Diagnostic"
import { guidGenerator } from '../utils'


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
   typeOfCardiac: Array<string> | null  | string;
   age: string | null;
   prescribedMedications: string | null;
   heartMedicationList: Array<string> | null | string;
   OTC: string | null;
   diabetesType: string | null;
   hasDiabetes: boolean | null; 
   isRCECardioTransfer: boolean | null; 
   otherDiagnosis: string | null; 
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
   typeOfCardiac:  [],
   age: "",
   prescribedMedications: "No",
   heartMedicationList:[],
   OTC: "Noting",
   diabetesType: "Type 2",
   hasDiabetes: false,
   isRCECardioTransfer: false,
   otherDiagnosis: ""
}

export const CardiacDiagnostic: Array<string> = [
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
      id: guidGenerator(),
      index: 0,
      label: "Diagnostic",
      slug: "Diagnostic",
      component: (props:any) => <DiagnosticComponent {...props} />,
      data: CardiacDiagnosticData.Diagnostic
   },
   {
      id: guidGenerator(),
      index: 1,
      label: "Family Member",
      slug: "FamilyMember",
      component: (props:any) => <FamilyMemberComponent {...props} />,
      data: CardiacDiagnosticData.FamilyMemberList
   },
]

export const CardiacTab: TabHeaderInterface = {
   id: guidGenerator(),
   index: 3,
   label: "Cardiac",
   slug: "Cardiac",
   tabs: CardiacItemsTab,
}

