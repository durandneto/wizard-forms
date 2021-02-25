import React, { useContext, useEffect } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Accordeon from "../common/Accordeon";

import { Button, Grid, Paper, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import PersonalInfoForm from "./forms/PersonalInfo";
import AddressInfoForm from "./forms/AddressInfo";
import AditionalInfoForm from "./forms/AditionalInfo";
import MedicareForm from "./forms/MediCare2";
import PrimaryCareForm from "./forms/PrimaryCare";
import { AppContext } from "../../store";
import {
  SET_STEP_ERROR,
  SET_STEP_SUCCESS,
  GO_TO_NEXT_STEP,
  BACK_TO_PREV_STEP,
} from "../../Reducer/Stepper";
import { USER_SET_ERROR } from "../../Reducer/User";
import SaveIcon from "@material-ui/icons/Save";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
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
      top: 0,
      right: 0,
    },
    button: {
      margin: theme.spacing(1, 1, 0, 0),
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
    },
  })
);
export default function User() {
  const classes = useStyles();
  const { UserState, UserDispatch, StepperDispatch } = useContext(AppContext);

  useEffect(() => {
    if (UserState.error) {
      StepperDispatch({ type: SET_STEP_ERROR });
    }
  }, [UserState.error]);

  useEffect(() => {
    if (UserState.success) {
      StepperDispatch({ type: SET_STEP_SUCCESS });
    }
  }, [UserState.success]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} spacing={3}>
          <Typography gutterBottom variant="h5" component="h2">
            User Info
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Grid>
        <Grid item xs={12} spacing={3}>
          <Accordeon
            highlight
            error={UserState.errorMessage.PersonalInfo.error}
            success={UserState.errorMessage.PersonalInfo.success}
            title="Personal Info"
            description="description here"
          >
            <PersonalInfoForm />
          </Accordeon>
        </Grid>
        <Grid item xs={12} spacing={3}>
          <Accordeon
            highlight
            error={UserState.errorMessage.AddressInfo.error}
            success={UserState.errorMessage.AddressInfo.success}
            title="Address"
            description="description"
          >
            <AddressInfoForm />
          </Accordeon>
        </Grid>
        <Grid item xs={12} spacing={3}>
          <Accordeon
            highlight
            error={UserState.errorMessage.AditionalInformation.error}
            success={UserState.errorMessage.AditionalInformation.success}
            title="Aditional Information"
            description="description"
          >
            <AditionalInfoForm />
          </Accordeon>
        </Grid>
        <Grid item xs={12} spacing={3}>
          <Accordeon
            highlight
            error={UserState.errorMessage.MediCare.error}
            success={UserState.errorMessage.MediCare.success}
            title="MediCare"
            description="description"
          >
            <MedicareForm />
          </Accordeon>
        </Grid>
        <Grid item xs={12} spacing={3}>
          <Accordeon
            highlight
            title="Primary Care"
            error={UserState.errorMessage.PrimaryCare.error}
            success={UserState.errorMessage.PrimaryCare.success}
            description="description"
          >
            <PrimaryCareForm />
          </Accordeon>
        </Grid>
      </Grid>
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
            UserDispatch({ type: USER_SET_ERROR });
          }}
        >
          Validate form
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          disabled={!UserState.success}
          className={classes.button}
          endIcon={
            UserState.error ? <ReportProblemIcon /> : <NavigateNextIcon />
          }
          onClick={() => {
            StepperDispatch({ type: GO_TO_NEXT_STEP });
          }}
        >
          Next
        </Button>
      </Grid>
    </div>
  );
}
