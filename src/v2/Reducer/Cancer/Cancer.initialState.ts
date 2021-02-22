import { CancerInterface } from "./Cancer.model";

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

export const cancerData: CancerInterface = {
  error: false,
  success: false,
  Diagnostic: {
    indicationTest: "",
    isDiagnosed: "",
    treatment: "",
    OTC: "",
    cancerList: CancerListData,
  },
  errorMessage: {
    Diagnostic: {
      success: false,
      error: false,
      message: {
        indicationTest: "",
        isDiagnosed: "",
        treatment: "",
        isRCECancerTransfer: "",
        OTC: "",
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
