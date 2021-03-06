import React, { useContext, useEffect, useReducer } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { AppContext } from "../../store";
import { CANCER_UPDATE, CANCER_SET_ERROR } from "../../Reducer/Cancer";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import {
  SET_STEP_ERROR,
  SET_STEP_SUCCESS,
  GO_TO_NEXT_STEP,
  BACK_TO_PREV_STEP,
} from "../../Reducer/Stepper";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CancerQuiz from "./Quiz";
import SaveIcon from "@material-ui/icons/Save";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import Alert from "@material-ui/lab/Alert";

import PreviousTreatment from "./PreviousTreatment";
import IndicationsTesting from "./IndicationsTesting";
import FamilyHistory from "./FamilyHistory";
import TestDescription from "./TestDescription";
import PreviousClinicalTestingResults from "./PreviousClinicalTestingResults";
import PreviousTumorTestingResults from "./PreviousTumorTestingResults";
import AvailableGenes from "./AvailableGenes";
import NavigatePrevIcon from "@material-ui/icons/NavigateBefore";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    action: {
      justifyContent: "flex-end",
      display: "flex",
      position: "fixed",
      top: "-15px",
      right: 0,
    },
    root: {
      flexGrow: 1,
      padding: "30px 15px",
      backgroundColor: "transparent",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "transparent",
    },
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
  })
);
export default function Cancer() {
  const classes = useStyles();
  const { CancerState, CancerDispatch, StepperDispatch } = useContext(
    AppContext
  );

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    console.log("handleChange", event);
    CancerDispatch({
      type: CANCER_UPDATE,
      key: (event.target as HTMLInputElement).name,
      value: (event.target as HTMLInputElement).value,
    });
  };

  const handleKeyValueChange = (key: string, value: any) => {
    CancerDispatch({
      type: CANCER_UPDATE,
      key,
      value,
    });
  };

  useEffect(() => {
    if (CancerState.error) {
      console.log("useEffect ErroR");
      StepperDispatch({ type: SET_STEP_ERROR });
    }
  }, [CancerState.error]);

  useEffect(() => {
    if (CancerState.success) {
      console.log("useEffect SUcces");
      StepperDispatch({ type: SET_STEP_SUCCESS });
    }
  }, [CancerState.success]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} spacing={3}>
          {CancerState.error ? (
            <Grid item xs={12}>
              <Alert severity="error">
                {JSON.stringify(CancerState.errorMessage)}
              </Alert>
            </Grid>
          ) : (
            <>
              {CancerState.success && (
                <Grid item xs={12}>
                  <Alert severity="success">
                    This section was validated successfully .
                  </Alert>
                </Grid>
              )}
            </>
          )}
        </Grid>
        <Grid item xs={12} spacing={3}>
          <Typography gutterBottom variant="h5" component="h2">
            Cancer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bladder cancer not eligible
          </Typography>
        </Grid>
        <AvailableGenes />
        <TestDescription />
        <IndicationsTesting />
        <CancerQuiz
          onChange={(e: any) => {
            handleKeyValueChange("isDiagnosed", e);
          }}
          onOtherChange={(key: string, value: any) => {
            handleKeyValueChange(key, value);
          }}
          onUpdateChildren={(slug: string, key: string, value: any) => {
            handleKeyValueChange("cancerList", {
              ...CancerState.Diagnostic.cancerList,
              [slug]: {
                ...CancerState.Diagnostic.cancerList[slug],
                [key]: value,
              },
            });
          }}
          cancerList={CancerState.Diagnostic.cancerList}
          other={CancerState.Diagnostic.other}
          errorMessage={CancerState.errorMessage.Diagnostic}
          value={CancerState.Diagnostic.isDiagnosed}
          title="Have you ever been diagnosed with any type of cancer?"
        />

        <PreviousTreatment />
        <PreviousClinicalTestingResults />
        <PreviousTumorTestingResults />
        <FamilyHistory />
        <Grid item xs={12} spacing={3} className={classes.action}>
          <Button
            size="small"
            variant="contained"
            className={classes.button}
            startIcon={<NavigatePrevIcon />}
            onClick={() => {
              StepperDispatch({ type: BACK_TO_PREV_STEP });
            }}
          >
            PREV
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={() => {
              CancerDispatch({ type: CANCER_SET_ERROR });
            }}
          >
            Validate form
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            disabled={!CancerState.success}
            className={classes.button}
            endIcon={
              CancerState.error ? <ReportProblemIcon /> : <NavigateNextIcon />
            }
            onClick={() => {
              StepperDispatch({ type: GO_TO_NEXT_STEP });
            }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
