import {
  CardiacDiagnosticErrorInterface,
  CardiacDiagnosticInterface,
} from "./Cardiac.model";

export const checkDiagnosticError = (
  info: CardiacDiagnosticInterface
): [boolean, CardiacDiagnosticErrorInterface] => {
  let hasErrors: boolean = false;
  const errors: CardiacDiagnosticErrorInterface = Object.entries(info).reduce(
    (acc: any, data: any) => {
      const [key] = data;
      acc[key] = "";
      return acc;
    },
    {}
  );

  errors.cardiacList = Object.entries(info.cardiacList).reduce(
    (acc: any, data: any) => {
      const [key] = data;
      acc[key] = "";
      return acc;
    },
    {}
  );

  return [hasErrors, errors];
};

export const checkDiagnosticErrorBKP = (
  info: CardiacDiagnosticInterface
): [boolean, CardiacDiagnosticErrorInterface] => {
  let hasErrors: boolean = false;
  const errors: CardiacDiagnosticErrorInterface = Object.entries(info).reduce(
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

  errors.cardiacList = Object.entries(info.cardiacList).reduce(
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
