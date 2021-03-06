import {
  CancerDiagnosticErrorInterface,
  CancerDiagnosticInterface,
} from "./Cancer.model";

export const checkDiagnosticErrorBKP = (
  info: CancerDiagnosticInterface
): [boolean, CancerDiagnosticErrorInterface] => {
  let hasErrors: boolean = false;
  const errors: CancerDiagnosticErrorInterface = Object.entries(info).reduce(
    (acc: any, data: any) => {
      const [key, value] = data;

      const message = value === "" ? `${key} is empty` : "";
      if (message !== "") {
        hasErrors = true;
      }
      acc[key] = message;
      return acc;
    },
    {}
  );

  errors.cancerList = Object.entries(info.cancerList).reduce(
    (acc: any, data: any) => {
      const [key, value] = data;

      if (value.value !== "Yes") {
        acc[key] = "";
        return acc;
      }

      const message = value.secondValue === "" ? `${key} is empty` : "";
      if (message !== "") {
        hasErrors = true;
      }
      acc[key] = message;
      return acc;
    },
    {}
  );

  if (info.isDiagnosed === "No") hasErrors = false;

  return [hasErrors, errors];
};

export const checkDiagnosticError = (
  info: CancerDiagnosticInterface
): [boolean, CancerDiagnosticErrorInterface] => {
  let hasErrors: boolean = false;
  const errors: CancerDiagnosticErrorInterface = Object.entries(info).reduce(
    (acc: any, data: any) => {
      const [key] = data;
      acc[key] = "";
      return acc;
    },
    {}
  );

  errors.cancerList = Object.entries(info.cancerList).reduce(
    (acc: any, data: any) => {
      const [key] = data;

      acc[key] = "";
      return acc;
    },
    {}
  );

  if (info.isDiagnosed === "No") hasErrors = false;

  return [hasErrors, errors];
};
