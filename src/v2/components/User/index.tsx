import React, { useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Accordeon from "../common/Accordeon";
import { AppContext } from "../../store";
import { USER_SET_URL, USER_SET_ERROR } from "../../Reducer/User";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { SET_STEP_ERROR, SET_STEP_SUCCESS } from "../../Reducer/Stepper";

import PersonalInfoForm from "./forms/PersonalInfo";

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
      marginTop: "30px",
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
  // const { UserState, UserDispatch, StepperDispatch } = useContext(AppContext);

  // useEffect(() => {
  //   if (UserState.error) {
  //     console.log("useEffect ErroR");
  //     StepperDispatch({ type: SET_STEP_ERROR });
  //   }
  // }, [UserState.error]);

  // useEffect(() => {
  //   if (UserState.success) {
  //     console.log("useEffect SUcces");
  //     StepperDispatch({ type: SET_STEP_SUCCESS });
  //   }
  // }, [UserState.success]);

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
          <Accordeon title="Personal Info" description="description" control>
            <PersonalInfoForm />
          </Accordeon>
        </Grid>
        <Grid item xs={12} spacing={3}>
          <Accordeon title="Address" description="description">
            content here
          </Accordeon>
        </Grid>
        <Grid item xs={12} spacing={3}>
          <Accordeon title="Previous Tests" description="description">
            content here
          </Accordeon>
        </Grid>
        <Grid item xs={12} spacing={3}>
          <Accordeon title="Medicare" description="description" control>
            content here
          </Accordeon>
        </Grid>
        <Grid item xs={12} spacing={3}>
          <Accordeon title="Primary Care" description="description" control>
            content here
          </Accordeon>
        </Grid>
      </Grid>
      <Grid item xs={12} spacing={3} className={classes.action}>
        <Button
          onClick={() => {
            // UserDispatch({ type: USER_SET_ERROR });
          }}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
        {/* <div>{JSON.stringify(UserState.errorMessage)}</div> */}
      </Grid>
    </div>
  );
}
