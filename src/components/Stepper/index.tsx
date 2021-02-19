import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },
});

export default function ProgressMobileStepper(props: any) {
  const classes = useStyles();
  const theme = useTheme();

  console.log(props);
  return (
    <MobileStepper
      variant="progress"
      steps={props.steps}
      position="static"
      activeStep={props.activeStep}
      className={classes.root}
      nextButton={
        <Button
          size="small"
          onClick={props.handleNext}
          disabled={props.activeStep === props.steps - 1}
        >
          Next
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={props.handleBack}
          disabled={props.activeStep === 0}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}
