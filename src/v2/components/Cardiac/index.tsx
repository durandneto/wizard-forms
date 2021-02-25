import React, { useContext, useEffect, useReducer } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { AppContext } from "../../store";
import { CARDIAC_UPDATE, CARDIAC_SET_ERROR } from "../../Reducer/Cardiac";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import {
  SET_STEP_ERROR,
  SET_STEP_SUCCESS,
  GO_TO_NEXT_STEP,
  BACK_TO_PREV_STEP,
} from "../../Reducer/Stepper";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SaveIcon from "@material-ui/icons/Save";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import Alert from "@material-ui/lab/Alert";

import IndicationsTesting from "./IndicationsTesting";
import FamilyHistory from "./FamilyHistory";
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
export default function Cardiac() {
  const classes = useStyles();
  const { CardiacState, CardiacDispatch, StepperDispatch } = useContext(
    AppContext
  );

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    console.log("handleChange", event);
    CardiacDispatch({
      type: CARDIAC_UPDATE,
      key: (event.target as HTMLInputElement).name,
      value: (event.target as HTMLInputElement).value,
    });
  };

  const handleKeyValueChange = (key: string, value: any) => {
    CardiacDispatch({
      type: CARDIAC_UPDATE,
      key,
      value,
    });
  };

  useEffect(() => {
    if (CardiacState.error) {
      console.log("useEffect ErroR");
      StepperDispatch({ type: SET_STEP_ERROR });
    }
  }, [CardiacState.error]);

  useEffect(() => {
    if (CardiacState.success) {
      console.log("useEffect SUcces");
      StepperDispatch({ type: SET_STEP_SUCCESS });
    }
  }, [CardiacState.success]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} spacing={3}>
          {CardiacState.error ? (
            <Grid item xs={12}>
              <Alert severity="error">
                {JSON.stringify(CardiacState.errorMessage)}
              </Alert>
            </Grid>
          ) : (
            <>
              {CardiacState.success && (
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
            Cardiac
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bladder cardiac not eligible
          </Typography>
        </Grid>
        <AvailableGenes />
        <IndicationsTesting />
        <FamilyHistory />

        <Grid item xs={12} spacing={3} className={classes.action}>
          <Button
            variant="contained"
            size="small"
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
              CardiacDispatch({ type: CARDIAC_SET_ERROR });
            }}
          >
            Validate form
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            disabled={!CardiacState.success}
            className={classes.button}
            endIcon={
              CardiacState.error ? <ReportProblemIcon /> : <NavigateNextIcon />
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
