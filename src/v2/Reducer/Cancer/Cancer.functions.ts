import {
  CancerDiagnosticErrorInterface,
  CancerDiagnosticInterface,
} from "./Cancer.model";

export const checkDiagnosticError = (
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
      const message = value.value === "" ? `${key} is empty` : "";
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
