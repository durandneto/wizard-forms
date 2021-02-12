import Diabetes from '../components/Diabetes'
import { TabItemInterface, TabHeaderInterface } from '../components/TabHeader'
import DiagnosticComponent from "../components/Diabetes/Diagnostic"
import BMIComponent from "../components/Diabetes/BMI"
import FamilyMemberComponent from "../components/Diabetes/FamilyMember"


export interface DiabetesFamilyMemberInterface {
   id: string;
   firstName: string;
   lastName: string;
   gender: string;
   birthDate: string;
   relationship: string;
   diagnosisOrSymptoms: string;
   ageOfOnset: string;
   isRCEDiabetesTransfer: boolean;
}

export const familyMemberData: DiabetesFamilyMemberInterface = {
   id: "",
   firstName: "",
   lastName: "",
   gender: "",
   birthDate: "",
   relationship: "",
   diagnosisOrSymptoms: "",
   ageOfOnset: "",
   isRCEDiabetesTransfer: false
}

export const DiabetesDiagnosticList: Array<string> = [
   "Hypertension",
   "High Cholesterol",
   "Heart Attack",
   "Pre-diabetes",
   "Sleep Apnea",
   "Coronary Artery Disease",
   "Stents in Heart",
   "Open Heart Surgery",
   "Diabetes Mellitus (TYPE 2 Diabetes)"
   ]

export interface DiabetesDiagnosticDataInterface {
   DiagnosticList: {
      list: Array<string>
   };
   BMI: {
      value: string 
   },
   FamilyMemberList: {
      list: Array<DiabetesFamilyMemberInterface>
   }
}

export const DiabetesDiagnosticData: DiabetesDiagnosticDataInterface = {
   DiagnosticList: { list:[] },
   BMI: { value: "" },
   FamilyMemberList: { list:[] }
}

export interface DiabetesInterface {
   Diagnostic: DiabetesDiagnosticDataInterface;
}

export const DiabetesData = {
   DiagnosticList: DiabetesDiagnosticData.DiagnosticList,
   BMI: DiabetesDiagnosticData.BMI,
   FamilyMemberList: DiabetesDiagnosticData.FamilyMemberList,
}

const DiabetesItemsTab: Array<TabItemInterface> = [
   {
      id: 1,
      index: 0,
      label: "BMI",
      slug: "BMI",
      component: (props:any) => <BMIComponent {...props} />,
      data: DiabetesData.BMI
   },
   {
      id: 2,
      index: 1,
      label: "Diagnostic",
      slug: "Diagnostic",
      component: (props:any) => <DiagnosticComponent {...props} />,
      data: DiabetesData.DiagnosticList
   },
   {
      id: 3,
      index: 2,
      label: "Family Member",
      slug: "FamilyMember",
      component: (props:any) => <FamilyMemberComponent {...props} />,
      data: DiabetesData.FamilyMemberList
   },
]

export const DiabetesTab: TabHeaderInterface = {
   id: 4,
   index: 3,
   label: "Diabetes",
   slug: "Diabetes",
   component: (props: any) => <Diabetes  {...props}/>,
   activeTab: DiabetesItemsTab[0],
   tabs: DiabetesItemsTab,
}

