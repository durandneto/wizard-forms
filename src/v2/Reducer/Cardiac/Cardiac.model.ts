export interface CardiacListInterface {
  label: string;
  value: string;
  secondLabel?: string;
  secondValue?: string;
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
export interface CardiacFamilyMemberInterface {
  id: string;
  relationship: string;
  name: string;
  dob: string;
  gender: string;
  ageOfDiagnosis: string;
  diagnosisOrSymptoms: string;
}

export interface CardiacDiagnosticErrorInterface {
  indicationTest: string;
  isDiagnosed: string;
  isRCECardiacTransfer: string;
  treatment: string;
  sugery: string;
  OTC: string;
  other: {
    age: string;
    type: string;
    history: string;
    value: string;
  };
  previousClinicalTestingResults: {
    germlineTestingResults: string;
    somaticTestingResults: string;
    other: string;
  };
  previousClinicalTumorResults: {
    microsatelliteInstabilityMSIResults: string;
    immunohistochemistryIHCResults: string;
  };
  cardiacList: {
    brain: string;
    breast: string;
    secondPrimaryBreast: string;
    colorectal: string;
    giPolyps: string;
    hematologic: string;
    melanoma: string;
    ovarian: string;
    pancreatic: string;
    prostate: string;
    urine: string;
  };
}
export interface CardiacDiagnosticInterface {
  indicationTest: string;
  isDiagnosed: string;
  isRCECardiacTransfer?: boolean;
  treatment: Array<string>;
  sugery: string;
  OTC: string;
  other: {
    age: number;
    type: string;
    history: string;
    value: string;
  };
  availableGenes: Array<string>;
  indicationsTesting: Array<string>;
  previousClinicalTestingResults: {
    germlineTestingResults: string;
    somaticTestingResults: string;
    other: string;
  };
  previousClinicalTumorResults: {
    microsatelliteInstabilityMSIResults: "";
    immunohistochemistryIHCResults: "";
  };
  CGXTestDescription: string;
  cardiacList: {
    brain: CardiacListInterface;
    breast: CardiacListInterface;
    secondPrimaryBreast: CardiacListInterface;
    colorectal: CardiacListInterface;
    giPolyps: CardiacListInterface;
    hematologic: CardiacListInterface;
    melanoma: CardiacListInterface;
    ovarian: CardiacListInterface;
    pancreatic: CardiacListInterface;
    prostate: CardiacListInterface;
    urine: CardiacListInterface;
  };
}

export interface CardiacInterface {
  error: boolean;
  success: boolean;
  errorMessage: {
    Diagnostic: {
      success: boolean;
      error: boolean;
      message: CardiacDiagnosticErrorInterface;
    };
    FamilyMember: {
      success: boolean;
      error: boolean;
      message: Array<CardiacFamilyMemberInterface>;
    };
  };
  Diagnostic: CardiacDiagnosticInterface;
  FamilyMember: Array<CardiacFamilyMemberInterface>;
}
