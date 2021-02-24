export interface CancerListInterface {
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
export interface CancerFamilyMemberInterface {
  id: string;
  relationship: string;
  name: string;
  dob: string;
  gender: string;
  ageOfDiagnosis: string;
  diagnosisOrSymptoms: string;
}

export interface CancerDiagnosticErrorInterface {
  indicationTest: string;
  isDiagnosed: string;
  isRCECancerTransfer: string;
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
  cancerList: {
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
export interface CancerDiagnosticInterface {
  indicationTest: string;
  isDiagnosed: string;
  isRCECancerTransfer?: boolean;
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
  cancerList: {
    brain: CancerListInterface;
    breast: CancerListInterface;
    secondPrimaryBreast: CancerListInterface;
    colorectal: CancerListInterface;
    giPolyps: CancerListInterface;
    hematologic: CancerListInterface;
    melanoma: CancerListInterface;
    ovarian: CancerListInterface;
    pancreatic: CancerListInterface;
    prostate: CancerListInterface;
    urine: CancerListInterface;
  };
}

export interface CancerInterface {
  error: boolean;
  success: boolean;
  errorMessage: {
    Diagnostic: {
      success: boolean;
      error: boolean;
      message: CancerDiagnosticErrorInterface;
    };
    FamilyMember: {
      success: boolean;
      error: boolean;
      message: Array<CancerFamilyMemberInterface>;
    };
  };
  Diagnostic: CancerDiagnosticInterface;
  FamilyMember: Array<CancerFamilyMemberInterface>;
}
