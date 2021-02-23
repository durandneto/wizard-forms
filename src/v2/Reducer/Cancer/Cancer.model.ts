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
  materialOrPaternal: string;
  age: string;
  ageOfDiagnosis: string;
  typeOfCancer: string;
}

export interface CancerDiagnosticErrorInterface {
  indicationTest: string;
  isDiagnosed: string;
  isRCECancerTransfer: string;
  treatment: string;
  sugery: string;
  OTC: string;
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
