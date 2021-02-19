import { TabItemInterface, TabHeaderInterface } from "../components/TabHeader";
import FamilyMemberComponent from "../components/Cancer/FamilyMember";
import DiagnosticComponent from "../components/Cancer/Diagnostic";
import { guidGenerator } from "../utils";

export interface ListInterface {
  label: string;
  value?: string;
  secondLabel?: string;
  secondValue?: number;
  number?: {
    label: string;
    value: number;
  };
  radio?: {
    label: string;
    value: string;
    items: Array<{ label: string; value: string }>;
  };
}
const CancerList = {
  brain: {
    label: "Brain",
    secondLabel: "Brain Onset Age",
    description: "Have you ever been diagnosed with any type of Brain cancer?",
    value: "",
    secondValue: null,
    hint: "If yes, ask about the",
  },
  breast: {
    label: "Breast",
    secondLabel: "Breast Onset Age",
    description: "Have you ever been diagnosed with any type of Breast cancer?",
    value: "",
    secondValue: null,
    hint: "If yes, ask about the",
  },
  secondPrimaryBreast: {
    label: "2nd Primary Breast",
    secondLabel: "2nd Primary Breast Onset Age",
    description:
      "Have you ever been diagnosed with any type of 2nd Primary Breast cancer?",
    value: "",
    secondValue: null,
    hint: "If yes, ask about the",
  },
  colorectal: {
    label: "Colorectal",
    secondLabel: "Colorectal Onset Age",
    description:
      "Have you ever been diagnosed with any type of Colorectal cancer?",
    value: "",
    secondValue: null,
    hint: "If yes, ask about the",
  },
  giPolyps: {
    label: "Gi Polyps",
    value: "",
    secondLabel: "Gi Polyps Onset Age",
    description:
      "Have you ever been diagnosed with any type of Gi Polyps cancer?",
    secondValue: null,
    hint: "If yes, ask about the",
    number: {
      label: "Number of Polyps",
      value: 0,
    },
  },
  hematologic: {
    label: "Hematologic",
    secondLabel: "Hematologic Onset Age",
    description:
      "Have you ever been diagnosed with any type of Hematologic cancer?",
    value: "",
    secondValue: null,
    ps: "Lung caner not eligible",
  },
  melanoma: {
    label: "Melanom",
    secondLabel: "Melanom Onset Age",
    description:
      "Have you ever been diagnosed with any type of Melanom cancer?",
    value: "",
    secondValue: null,
    hint: "If yes, ask about the",
  },
  ovarian: {
    label: "Ovarian",
    secondLabel: "Ovarian Onset Age",
    description:
      "Have you ever been diagnosed with any type of Ovarian cancer?",
    value: "",
    secondValue: null,
    hint: "If yes, ask about the",
    radio: {
      label: "Location",
      value: null,
      items: [
        {
          label: "Fallopian Tube",
          value: "Fallopian Tube",
        },
        {
          label: "Primary Peritoneal",
          value: "Primary Peritoneal",
        },
      ],
    },
  },
  pancreatic: {
    label: "Pancreatic",
    secondLabel: "Pancreatic Onset Age",
    description:
      "Have you ever been diagnosed with any type of Pancreatic cancer?",
    value: "",
    secondValue: null,
    hint: "If yes, ask about the",
  },
  prostate: {
    label: "Prostate",
    secondLabel: "Prostate Onset Age",
    description:
      "Have you ever been diagnosed with any type of Prostate cancer?",
    value: "",
    secondValue: null,
    hint: "If yes, ask about the",
  },
  urine: {
    label: "Urine",
    secondLabel: "Urine Onset Age",
    description: "Have you ever been diagnosed with any type of Urine cancer?",
    value: "",
    secondValue: null,
    hint: "If yes, ask about the",
  },
  // other: {
  //   label: "Other",
  //   secondLabel: "Other Onset Age",
  // description:
  // "Have you ever been diagnosed with any type of EEEEEE cancer?",
  //   value: "",
  // secondValue: null,
  // hint: "If yes, ask about the",
  // },
};

export const Relationship = [
  { value: "MOM", label: "Mom" },
  { value: "DAD", label: "Dad" },
  { value: "BROTHER", label: "Brother" },
  { value: "SISTER", label: "Sister" },
  { value: "GRANDMOTHER", label: "Grandmother" },
  { value: "GRANDFATHER", label: "Grandfather" },
  { value: "COUSIN", label: "Cousin" },
  { value: "AUNT", label: "Aunt" },
  { value: "UNCLE", label: "Uncle" },
  { value: "GREATGRANDMOTHER", label: "Great Grandmother" },
  { value: "GREATGRANDFATHER", label: "Great Grandfather" },
  { value: "SON", label: "Son" },
  { value: "DAUGHTER", label: "Daughter" },
  { value: "NIECE", label: "Niece" },
  { value: "NEWPHEW", label: "Nephew" },
  { value: "HALF-SISTER", label: "Half-sister" },
  { value: "HALF-BROTHER", label: "Half-brother" },
];

export const DiagnosedCancerList = [
  { value: "DIAGNOSTIC", label: "Diagnostic" },
  { value: "PRESYMPTOMATIC", label: "Pre-symptomatic" },
  { value: "FAMILY_HISTORY", label: "Family History" },
  { value: "FAMILY_VARIANT", label: "Family Variant" },
  { value: "OTHER", label: "Other" },
];

export const TreatmentCancerList = [
  { value: "CHEMOTHERAPY", label: "Chemotherapy" },
  { value: "RADIATION", label: "Radiation" },
  { value: "SURGERY", label: "Surgery" },
];

export const FamilyMemberHeartConditions = [
  { value: "Heart Attack", label: "Heart Attack" },
  { value: "Stroke", label: "Stroke" },
  { value: "Coronary Heart Disease", label: "Coronary Heart Disease" },
  { value: "High Blood Pressure", label: "High Blood Pressure" },
  { value: "High Cholesterol", label: "High Cholesterol" },
  { value: "Bypass Surgery", label: "Bypass Surgery" },
  { value: "Stents in heart", label: "Stents in heart" },
  { value: "Atrial fibrillation", label: "Atrial fibrillation" },
  { value: "Fast or slow heart beat", label: "Fast or slow heart beat" },
  { value: "Irregular heart beat", label: "Irregular heart beat" },
  { value: "Congestive heart failure", label: "Congestive heart failure" },
  { value: "Heart murmer", label: "Heart murmer" },
  { value: "Rheumatic heart disease", label: "Rheumatic heart disease" },
  { value: "Pace maker", label: "Pace maker" },
];

export interface CancerDiagnosticInterface {
  indicationTest: string | null;
  isDiagnosed: string | null;
  isRCECancerTransfer: boolean | null;
  treatment: string | null;
  OTC: string | null;
  cancerList: any;
}

export interface CancerFamilyMemberInterface {
  id: string | null;
  relationship: string | null;
  materialOrPaternal: string | null;
  age: string | null;
  ageOfDiagnosis: string | null;
  typeOfCancer: string | null;
}

export const familyMemberData: CancerFamilyMemberInterface = {
  id: null,
  relationship: null,
  materialOrPaternal: null,
  age: null,
  ageOfDiagnosis: null,
  typeOfCancer: null,
};

export const DiagnosticData: CancerDiagnosticInterface = {
  indicationTest: "",
  isDiagnosed: "",
  isRCECancerTransfer: false,
  treatment: "",
  OTC: "",
  cancerList: CancerList,
};

export const CancerDiagnostic: Array<string> = [
  "Hypertension",
  "High Cholesterol",
  "Heart Attack",
  "Pre-Cancer",
  "Sleep Apnea",
  "Coronary Artery Disease",
  "Stents in Heart",
  "Open Heart Surgery",
  "Cancer Mellitus (TYPE 2 Cancer)",
];

export interface CancerDataInterface {
  FamilyMemberList: {
    list: Array<CancerFamilyMemberInterface>;
  };
  Diagnostic: CancerDiagnosticInterface;
}

export const CancerDiagnosticData: CancerDataInterface = {
  FamilyMemberList: { list: [] },
  Diagnostic: DiagnosticData,
};

const CancerItemsTab: Array<TabItemInterface> = [
  {
    id: guidGenerator(),
    index: 0,
    label: "Diagnostic",
    slug: "Diagnostic",

    component: (props: any) => <DiagnosticComponent {...props} />,
    data: CancerDiagnosticData.Diagnostic,
  },
  {
    id: guidGenerator(),
    index: 1,
    label: "Family Member",
    slug: "FamilyMember",
    component: (props: any) => <FamilyMemberComponent {...props} />,
    data: CancerDiagnosticData.FamilyMemberList,
  },
];

export const CancerTab: TabHeaderInterface = {
  id: guidGenerator(),
  index: 2,
  label: "Cancer",
  slug: "Cancer",
  tabs: CancerItemsTab,
};
