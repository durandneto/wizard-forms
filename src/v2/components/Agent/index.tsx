import React, { useContext, useEffect, useReducer } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { AppContext } from "../../store";
import { AgentInterface, agentData } from "../../Reducer/Agent";
import AgentReducer, {
  initialAgent,
  AGENT_SET_NAME,
  AGENT_SET_URL,
  AGENT_SET_ERROR,
} from "../../Reducer/Agent";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { SET_STEP_ERROR, SET_STEP_SUCCESS } from "../../Reducer/Stepper";

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
      backgroundColor: "transparent",
    },
  })
);
export default function Agent() {
  const classes = useStyles();
  //   const [AgentData, dispatch] = useReducer(
  //     AgentReducer,
  //     agentData,
  //     initialAgent
  //   );
  const { AgentState, AgentDispatch, StepperDispatch } = useContext(AppContext);

  useEffect(() => {
    if (AgentState.error) {
      console.log("useEffect ErroR");
      StepperDispatch({ type: SET_STEP_ERROR });
    }
  }, [AgentState.error]);

  useEffect(() => {
    if (AgentState.success) {
      console.log("useEffect SUcces");
      StepperDispatch({ type: SET_STEP_SUCCESS });
    }
  }, [AgentState.success]);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} spacing={3}>
          <Typography gutterBottom variant="h5" component="h2">
            Agent Info
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Grid>
        <Grid item xs={12} spacing={3}>
          <form className={classes.form}>
            <TextField
              error={AgentState.error && AgentState.errorMessage.url !== ""}
              id="filled-error"
              label="Recording URL"
              defaultValue={AgentState.url}
              value={AgentState.url}
              variant="outlined"
              helperText={
                AgentState.error && AgentState.errorMessage.url !== ""
                  ? AgentState.errorMessage.url
                  : ""
              }
              onChange={(e: any) => {
                AgentDispatch({ type: AGENT_SET_URL, url: e.target.value });
              }}
            />
            <TextField
              error={AgentState.error && AgentState.errorMessage.name !== ""}
              id="filled-error-helper-text"
              label="Agent name"
              defaultValue={AgentState.name}
              value={AgentState.name}
              helperText={
                AgentState.error && AgentState.errorMessage.name !== ""
                  ? AgentState.errorMessage.name
                  : ""
              }
              variant="outlined"
              onChange={(e: any) => {
                AgentDispatch({
                  type: AGENT_SET_NAME,
                  name: e.target.value,
                });
              }}
            />
          </form>
        </Grid>
      </Grid>
      <Grid item xs={12} spacing={3} className={classes.action}>
        <Button
          onClick={() => {
            AgentDispatch({ type: AGENT_SET_ERROR });
          }}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </Grid>
    </div>
  );
}
