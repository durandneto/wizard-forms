import { CancerFamilyMemberInterface, CancerInterface } from "./Cancer.model";

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

export const CancerListData = {
  brain: {
    label: "Brain",
    secondLabel: "Brain Onset Age",
    description: "Have you ever been diagnosed with any type of Brain cancer?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
  breast: {
    label: "Breast",
    secondLabel: "Breast Onset Age",
    description: "Have you ever been diagnosed with any type of Breast cancer?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
  secondPrimaryBreast: {
    label: "2nd Primary Breast",
    secondLabel: "2nd Primary Breast Onset Age",
    description:
      "Have you ever been diagnosed with any type of 2nd Primary Breast cancer?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
  colorectal: {
    label: "Colorectal",
    secondLabel: "Colorectal Onset Age",
    description:
      "Have you ever been diagnosed with any type of Colorectal cancer?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
  giPolyps: {
    label: "Gi Polyps",
    value: "",
    secondLabel: "Gi Polyps Onset Age",
    description:
      "Have you ever been diagnosed with any type of Gi Polyps cancer?",
    secondValue: "",
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
    secondValue: "",
    ps: "Lung caner not eligible",
  },
  melanoma: {
    label: "Melanom",
    secondLabel: "Melanom Onset Age",
    description:
      "Have you ever been diagnosed with any type of Melanom cancer?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
  ovarian: {
    label: "Ovarian",
    secondLabel: "Ovarian Onset Age",
    description:
      "Have you ever been diagnosed with any type of Ovarian cancer?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
    radio: {
      label: "Location",
      value: "",
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
    secondValue: "",
    hint: "If yes, ask about the",
  },
  prostate: {
    label: "Prostate",
    secondLabel: "Prostate Onset Age",
    description:
      "Have you ever been diagnosed with any type of Prostate cancer?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
  urine: {
    label: "Urine",
    secondLabel: "Urine Onset Age",
    description: "Have you ever been diagnosed with any type of Urine cancer?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
};

export const familyMemberData: CancerFamilyMemberInterface = {
  id: "",
  relationship: "",
  materialOrPaternal: "",
  age: "",
  ageOfDiagnosis: "",
  typeOfCancer: "",
};

export const cancerData: CancerInterface = {
  error: false,
  success: false,
  FamilyMember: [],
  Diagnostic: {
    indicationTest: "",
    isDiagnosed: "",
    treatment: [],
    sugery: "",
    OTC: "",
    cancerList: CancerListData,
  },
  errorMessage: {
    FamilyMember: {
      success: false,
      error: false,
      message: [],
    },
    Diagnostic: {
      success: false,
      error: false,
      message: {
        indicationTest: "",
        isDiagnosed: "",
        treatment: "",
        isRCECancerTransfer: "",
        OTC: "",
        sugery: "",
        cancerList: {
          brain: "",
          breast: "",
          secondPrimaryBreast: "",
          colorectal: "",
          giPolyps: "",
          hematologic: "",
          melanoma: "",
          ovarian: "",
          pancreatic: "",
          prostate: "",
          urine: "",
        },
      },
    },
  },
};
