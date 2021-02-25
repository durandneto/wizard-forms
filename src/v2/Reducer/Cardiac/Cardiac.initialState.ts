import {
  CardiacFamilyMemberInterface,
  CardiacInterface,
} from "./Cardiac.model";
export const availableGenesCardiacList = [
  {
    title: "Comprehensive Cardiomyopathy NGS",
    description:
      "A2ML1, ABCC9, ACADVL, ACTC1, ACTN2, ADA2, AGL, AKAP9, ALMS1, ANK2, ANKRD1, BAG3, BRAF, CACNA1C, CACNB2, CALR3, CASQ2, CAV3, CAVIN4, CBL, CHRM2, CPT2, CRYAB, CSRP3, CTF1, CTNNA3, DES, DMD, DNAJC19, DOLK, DSC2, DSG2, DSP, DTNA, ELAC2, EMD, EYA4, FHL1, FHL2, FKRP, FKTN, FLNC, FXN, GAA, GATA4, GATA6, GATAD1, GLA, GPD1L, HCN4, HRAS, ILK, JPH2, JUP, KCNE1, KCNE2, KCNE3, KCNH2, KCNJ2, KCNJ5, KCNJ8, KCNQ1, KRAS, LAMA4, LAMP2, LDB3, LMNA, MAP2K1, MAP2K2, MIB1, MTO1, MYBPC3, MYH6, MYH7, MYL2, MYL3, MYLK2, MYOM1, MYOZ2, MYPN, NDUFB11, NEBL, NEXN, NF1, NKX2-5, NPPA, NRAS, PDLIM3, PKP2, PLN, PRDM16, PRKAG2, PTPN11, RAF1, RANGRF, RASA1, RBM20, RIT1, RRAS, RYR2, SCN1B, SCN3B, SCN4B, SCN5A, SDHA, SGCD, SHOC2, SLC22A5, SNTA1, SOS1, SOS2, SPRED1, TAZ, TBX20, TCAP, TGFB3, TMEM43, TMEM70, TMPO, TNNC1, TNNI3, TNNT2, TPM1, TRDN, TTN, TTR, TXNRD2, VCL, YWHAE (129 Genes)",
  },
  {
    title: "Comprehensive Arrhythmia NGS",
    description:
      "ABCC9, ACTN2, AKAP9, ANK2, ANKRD1, CACNA1C, CACNA2D1, CACNB2, CALM1, CALM2, CALM3, CASQ2, CAV3, CPT1A, CTNNA3, DEPDC5, DES, DSC2, DSG2, DSP, EMD, FLNC, GJA5, GPD1L, GYG1, HCN4, JUP, KCNA5, KCND3, KCNE1, KCNE2, KCNE3, KCNE5, KCNH2, KCNJ2, KCNJ5, KCNJ8, KCNK3, KCNQ1, KCNQ2, KCNQ3, KCNT1, LDB3, LMNA, NKX2-5, NPPA, PCDH19, PDLIM3, PKP2, PLN, PRKAG2, PRRT2, RANGRF, RBM20, RYR2, SCN10A, SCN1A, SCN1B, SCN2B, SCN3B, SCN4B, SCN5A, SCN8A, SCN9A, SLC25A20, SLC2A1, SLMAP, SNTA1, TBX5, TGFB3, TMEM43, TNNI3, TNNT2, TRDN, TRPM4, TTN (76 genes)",
  },
  {
    title: "Comprehensive Cardiovascular NGS",
    description:
      "A2ML1, ABCC9, ACADVL, ACTA2, ACTB, ACTC1, ACTG1, ACTN2, ACVR2B, ACVRL1, ADA2, AGL, AKAP9, ALMS1, ANK2, ANKRD1, APOA5, APOB, B4GALT7, BAG3, BBS10, BCOR, BMPR2, BRAF, C1R, C1S, CACNA1C, CACNA2D1, CACNB2, CALM1, CALM2, CALM3, CALR3, CASQ2, CAV1, CAV3, CAVIN4, CBL, CBS, CCDC103, CCDC39, CCDC40, CHD7, CHRM2, COL3A1, COL5A1, COL5A2, COX15, CPT1A, CPT2, CRELD1, CRYAB, CSRP3, CTF1, CTNNA3, DEPDC5, DES, DMD, DNAAF1, DNAAF2, DNAAF3, DNAAF4, DNAAF5, DNAH11, DNAH5, DNAI1, DNAI2, DNAJC11, DNAJC19, DNAL1, DOLK, DSC2, DSG2, DSP, DTNA, EFEMP2, ELAC2, ELN, EMD, ENG, EYA4, FBN1, FBN2, FGD1, FHL1, FHL2, FKRP, FKTN, FLNA, FLNC, FOXH1, FXN, GAA, GATA4, GATA6, GATAD1, GDF1, GJA1, GJA5, GLA, GPC3, GPD1L, GYG1, HAMP, HAND1, HCN4, HFE, HJV, HRAS, ILK, INVS, JAG1, JPH2, JUP, KAT6B, KCNA5, KCND3, KCNE1, KCNE2, KCNE3, KCNE5, KCNH2, KCNJ2, KCNJ5, KCNJ8, KCNK3, KCNQ1, KCNQ2, KCNQ3, KCNT1, KRAS, LAMA4, LAMP2, LDB3, LDLR, LDLRAP1, LEFTY2, LMNA, LZTR1, MAP2K1, MAP2K2, MED12, MED13L, MFAP5, MIB1, MKS1, MMP21, MRPL3, MTO1, MYBPC3, MYH11, MYH6, MYH7, MYL2, MYL3, MYLK, MYLK2, MYOM1, MYOZ2, MYPN, NDUFAF1, NDUFB11, NEBL, NEK8, NEXN, NF1, NKX2-5, NKX2-6, NME8, NODAL, NOTCH1, NOTCH2, NPHP3, NPPA, NR2F2, NRAS, NSD1, OFD1, PCDH19, PCSK9, PDLIM3, PKD1L1, PKP2, PLN, PLOD1, PRDM16, PRKAG2, PRKG1, PRRT2, PSEN2, PTPN11, RAF1, RANGRF, RASA1, RBM20, RIT1, RRAS, RYR2, SCN10A, SCN1A, SCN1B, SCN2B, SCN3B, SCN4B, SCN5A, SCN8A, SCN9A, SDHA, SGCD, SHOC2, SKI, SLC22A5, SLC25A20, SLC2A1, SLC2A10, SLC40A1, SLMAP, SMAD3, SMAD4, SMAD6, SMAD9, SNTA1, SOS1, SOS2, SYNE1, TAZ, TBX1, TBX20, TBX5, TCAP, TFR2, TGFB2, TGFB3, TGFBR1, TGFBR2, TMEM43, TMEM70, TMPO, TNNC1, TNNI3, TNNT2, TPM1, TRDN, TRPM4, TTC8, TTN, TTR, TXNRD2, VCL, YWHAE, ZFPM2, ZIC3 (252 genes)",
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

export const DiagnosedCardiacList = [
  { value: "Mosaicism", label: "Mosaicism" },
  { value: "Consanguinity", label: "Consanguinity" },
  { value: "Bone Marrow Transplant", label: "Bone Marrow Transplant" },
  { value: "Organ Transplant", label: "Organ Transplant" },
  {
    value: "Known Chromosomal Gain/Loss",
    label: "Known Chromosomal Gain/Loss",
  },
  { value: "Known Gene Gain/Loss", label: "Known Gene Gain/Loss" },
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

export const CardiacListData = {
  brain: {
    label: "Brain",
    secondLabel: "Brain Onset Age",
    description: "Have you ever been diagnosed with any type of Brain cardiac?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
  breast: {
    label: "Breast",
    secondLabel: "Breast Onset Age",
    description:
      "Have you ever been diagnosed with any type of Breast cardiac?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
  secondPrimaryBreast: {
    label: "2nd Primary Breast",
    secondLabel: "2nd Primary Breast Onset Age",
    description:
      "Have you ever been diagnosed with any type of 2nd Primary Breast cardiac?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
  colorectal: {
    label: "Colorectal",
    secondLabel: "Colorectal Onset Age",
    description:
      "Have you ever been diagnosed with any type of Colorectal cardiac?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
  giPolyps: {
    label: "Gi Polyps",
    value: "",
    secondLabel: "Gi Polyps Onset Age",
    description:
      "Have you ever been diagnosed with any type of Gi Polyps cardiac?",
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
      "Have you ever been diagnosed with any type of Hematologic cardiac?",
    value: "",
    secondValue: "",
    ps: "Lung caner not eligible",
  },
  melanoma: {
    label: "Melanom",
    secondLabel: "Melanom Onset Age",
    description:
      "Have you ever been diagnosed with any type of Melanom cardiac?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
  ovarian: {
    label: "Ovarian",
    secondLabel: "Ovarian Onset Age",
    description:
      "Have you ever been diagnosed with any type of Ovarian cardiac?",
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
      "Have you ever been diagnosed with any type of Pancreatic cardiac?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
  prostate: {
    label: "Prostate",
    secondLabel: "Prostate Onset Age",
    description:
      "Have you ever been diagnosed with any type of Prostate cardiac?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
  urine: {
    label: "Urine",
    secondLabel: "Urine Onset Age",
    description: "Have you ever been diagnosed with any type of Urine cardiac?",
    value: "",
    secondValue: "",
    hint: "If yes, ask about the",
  },
};

export const familyMemberData: CardiacFamilyMemberInterface = {
  id: "",
  name: "",
  relationship: "",
  gender: "",
  dob: "",
  ageOfDiagnosis: "",
  diagnosisOrSymptoms: "",
};

export const cardiacData: CardiacInterface = {
  error: false,
  success: false,
  FamilyMember: [],
  Diagnostic: {
    indicationTest: "",
    isDiagnosed: "",
    treatment: [],
    sugery: "",
    OTC: "",
    CGXTestDescription: "",
    availableGenes: [],
    indicationsTesting: [],
    previousClinicalTumorResults: {
      microsatelliteInstabilityMSIResults: "",
      immunohistochemistryIHCResults: "",
    },
    previousClinicalTestingResults: {
      germlineTestingResults: "",
      somaticTestingResults: "",
      other: "",
    },
    cardiacList: CardiacListData,
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
        isRCECardiacTransfer: "",
        OTC: "",
        sugery: "",
        previousClinicalTumorResults: {
          microsatelliteInstabilityMSIResults: "",
          immunohistochemistryIHCResults: "",
        },
        previousClinicalTestingResults: {
          germlineTestingResults: "",
          somaticTestingResults: "",
          other: "",
        },
        other: {
          age: "",
          type: "",
          history: "",
          value: "",
        },
        cardiacList: {
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
