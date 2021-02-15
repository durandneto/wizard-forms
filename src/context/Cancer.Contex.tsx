import { TabItemInterface, TabHeaderInterface } from '../components/TabHeader'
import FamilyMemberComponent from "../components/Cancer/FamilyMember"
import DiagnosticComponent from "../components/Cancer/Diagnostic"
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

export const DiagnosedCancerList =[
   {value: "DIAGNOSTIC", label: "Diagnostic"},
   {value: "PRESYMPTOMATIC", label: "Pre-symptomatic"},
   {value: "FAMILY_HISTORY", label: "Family History"},
   {value: "FAMILY_VARIANT", label: "Family Variant"},
   {value: "OTHER", label: "Other"},
]

export const TreatmentCancerList = [
   {value: "CHEMOTHERAPY", label: "Chemotherapy"},
   {value: "RADIATION", label: "Radiation"},
   {value: "SURGERY", label: "Surgery"},
]

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

export interface CancerDiagnosticInterface {
   indicationTest: string;
   isDiagnosed: string;
   isRCECancerTransfer: boolean;
   treatment: string;
   OTC: string
}


export interface CancerFamilyMemberInterface {
   id: string
   relationship: string;
   materialOrPaternal: string;
   age: string;
   ageOfDiagnosis: string;
   typeOfCancer: string;
}

export const familyMemberData: CancerFamilyMemberInterface = {
   id: "",
   relationship: "",
   materialOrPaternal: "",
   age: "",
   ageOfDiagnosis: "",
   typeOfCancer: "",
}

export const DiagnosticData: CancerDiagnosticInterface = {
   indicationTest: "",
   isDiagnosed: "",
   isRCECancerTransfer: false,
   treatment: "",
   OTC: ""
}

export const CancerDiagnosticList: Array<string> = [
   "Hypertension",
   "High Cholesterol",
   "Heart Attack",
   "Pre-Cancer",
   "Sleep Apnea",
   "Coronary Artery Disease",
   "Stents in Heart",
   "Open Heart Surgery",
   "Cancer Mellitus (TYPE 2 Cancer)"
]

export interface CancerDataInterface {
   FamilyMemberList: {
      list: Array<CancerFamilyMemberInterface>
   },
   Diagnostic: CancerDiagnosticInterface
}

export const CancerDiagnosticData: CancerDataInterface = {
   FamilyMemberList: { list:[] },
   Diagnostic: DiagnosticData
}

const CancerItemsTab: Array<TabItemInterface> = [
   {
      id: guidGenerator(),
      index: 0,
      label: "Diagnostic",
      slug: "Diagnostic",
      component: (props:any) => <DiagnosticComponent {...props} />,
      data: CancerDiagnosticData.Diagnostic
   },
   {
      id: guidGenerator(),
      index: 1,
      label: "Family Member",
      slug: "FamilyMember",
      component: (props:any) => <FamilyMemberComponent {...props} />,
      data: CancerDiagnosticData.FamilyMemberList
   },
]

export const CancerTab: TabHeaderInterface = {
   id: guidGenerator(),
   index: 2,
   label: "Cancer",
   slug: "Cancer",
   tabs: CancerItemsTab,
}

