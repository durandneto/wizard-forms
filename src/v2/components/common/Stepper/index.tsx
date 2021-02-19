import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

export interface StepperInterface {
  activeStep: number;
  control?: boolean;
  steps: Array<{
    label: string;
    error: boolean | string;
    success: boolean | string;
    completed: boolean;
    children: React.ReactNode;
  }>;
  onNext?: (nextStep: number) => void;
  onPrevious?: (previousStep: number) => void;
  onFinished?: () => void;
}

export default function MainStepper({
  activeStep,
  steps,
  onNext,
  onPrevious,
  onFinished,
  control = true,
}: StepperInterface) {
  const classes = useStyles();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      onFinished && onFinished();
    } else {
      onNext && onNext(activeStep + 1);
    }
  };

  const handleBack = () => {
    onPrevious && onPrevious(activeStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step key={step.label} completed={step.completed}>
              <StepLabel error={step.error ? true : false}>
                {step.label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length && control ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {steps[activeStep].children}
            </Typography>
            {control && (
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
