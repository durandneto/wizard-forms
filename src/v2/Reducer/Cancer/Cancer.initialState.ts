import { CancerFamilyMemberInterface, CancerInterface } from "./Cancer.model";
export const availableGenesCancerList = [
  {
    title: "Comprehensive Cancer",
    description: "",
  },
  {
    title: "Breast Cancer STAT (7-10 day TAT)",
    description: "ATM, BRCA1, BRCA2, CDH1, CHEK2, PALB2, PTEN, STK11, TP53",
  },
  {
    title: "Breast Comprehensive",
    description:
      "ATM, BARD1, BRCA1, BRCA2, BRIP1, CDH1, CHEK2, MLH1, MRE11, MSH2, NBN, NF1, PALB2, PTEN, RAD50, RAD51C, RAD51D, STK11, TP53, XRCC2",
  },
  {
    title: "Breast and Ovarian Comprehensive",
    description:
      "ATM, BARD1, BRCA1, BRCA2, BRIP1, CDH1,CHEK2, EPCAM, MLH1, MRE11, MSH2, MSH6, NBN, NF1, PALB2, PMS2, PTEN, RAD50, RAD51C, RAD51D, SMARCA4, STK11, TP53, XRCC2",
  },
  {
    title: "Colorectal Comprehensive",
    description:
      "APC, AXIN2, BMPR1A, CDH1, CHEK2, EPCAM, FAN1, GALNT12, GREM1, MLH1, MLH3, MSH2, MSH6, MUTYH, NTHL1, PMS2, POLD1, POLE, PTEN, SMAD4, STK11, TP53",
  },
  {
    title: "Gastric Comprehensive",
    description:
      "BRCA1, BRCA2, EPCAM, MLH1, MSH2, MSH6, PMS2, POLD1, PTEN, TP53",
  },
  {
    title: "Hematologic Malignancy Comprehensive",
    description:
      "ATM, BLM, CEBPA, EPCAM, GATA2, HRAS,MLH1, MSH2, MSH6, NBN, NF1, PMS2, RUNX1, TERC, TERT, TP53",
  },
  {
    title: "Melanoma Comprehensive",
    description:
      "BAP1, BRCA2, CDK4, CDKN2A, CHEK2, MC1R, MITF, POT1, PTEN, RB1, SLC45A2, TP53, TYR",
  },
  {
    title: "Nervous System / Brain Comprehensive",
    description:
      "ALK, APC, ATM, DICER1, EPCAM, HRAS, LZTR1, MEN1, MLH1, MSH2, MSH6, NF1, NF2, PHOX2B, PMS2, PRKAR1A, PTCH1, PTEN, POT1, SMARCA4, SMARCB1, SMARCE1, SUFU, TP53, TSC1, TSC2, VHL",
  },
  {
    title: "Ovarian Comprehensive",
    description:
      "BARD1, BRCA1, BRCA2, BRIP1, CDH1, EPCAM, MLH1, MRE11, MSH2, MSH6, NBN, PALB2, PMS2, RAD51C, RAD51D, SMARCA4, STK11, TP53",
  },
  {
    title: "Pancreatic Comprehensive",
    description:
      "APC, ATM, BMPR1A, BRCA1, BRCA2, CDK4, CDKN2A, EPCAM, FANCC, MEN1, MLH1, MSH2, MSH6, NF1, PALB2, PMS2, SMAD4, STK11, TP53, TSC1, TSC2, VHL",
  },
  {
    description:
      "FH, MAX, NF1, RET, SDHA, SDHAF2, SDHB, SDHC, SDHD, TMEM127, VHL",
    title: "Paraganglioma-Pheochromocytoma Comprehensive",
  },
  {
    title: "Prostate Comprehensive",
    description:
      "ATM, BRCA1, BRCA2, CHEK2, EPCAM, HOXB13, MLH1, MSH2, MSH6, NBN, PMS2, TP53",
  },
  {
    title: "Renal / Urinary Comprehensive",
    description:
      "BAP1, CDC73, CDKN1C, DICER1, DIS3L2, EPCAM, FH, FLCN, GPC3, MET, MITF, MLH1, MSH2, MSH6, PMS2, PTEN, SDHA, SDHB, SDHC, SDHD, SMARCA4, SMARCB1, TP53, TSC1, TSC2, VHL, WT1",
  },
  {
    title: "Sarcoma Comprehensive",
    description:
      "APC, BLM, CDKN1C, DICER1, EPCAM, FH, HRAS, KIT, MLH1, MSH2, MSH6, NBN, NF1, PDGFRA, PMS2, PRKAR1A, PTCH1, RB1, RECQL4, SDHA, SDHB, SDHC, SDHD, SUFU, TP53, WRN",
  },
  {
    title: "Thyroid Comprehensive",
    description: "APC, CHEK2, DICER1, PRKAR1A, PTEN, RET, TP53",
  },
];
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
  name: "",
  relationship: "",
  gender: "",
  dob: "",
  ageOfDiagnosis: "",
  diagnosisOrSymptoms: "",
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
    comprehensiveCancer: [],
    cancerList: CancerListData,
    other: {
      age: 8,
      type: "type here",
      history: "history here",
      value: "Yes",
    },
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
        other: {
          age: "",
          type: "",
          history: "",
          value: "",
        },
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
