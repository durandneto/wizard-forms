import React, { useContext, useEffect, useReducer } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { AppContext } from "../../store";
import { AGENT_UPDATE, AGENT_SET_ERROR } from "../../Reducer/Agent";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import {
  SET_STEP_ERROR,
  SET_STEP_SUCCESS,
  GOT_TO_NEXT_STEP,
} from "../../Reducer/Stepper";
import Accordeon from "../common/Accordeon";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

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
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
  })
);
export default function Agent() {
  const classes = useStyles();
  const { AgentState, AgentDispatch, StepperDispatch } = useContext(AppContext);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    console.log("handleChange", event);
    AgentDispatch({
      type: AGENT_UPDATE,
      key: (event.target as HTMLInputElement).name,
      value: (event.target as HTMLInputElement).value,
    });
  };

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
            Agent
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Grid>
        <Accordeon
          error={AgentState.error}
          success={AgentState.success}
          title="Info"
          description="description"
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="outlined-full-width"
                label="Agent name (*)"
                error={AgentState.errorMessage.name !== ""}
                style={{ margin: 8 }}
                placeholder="name"
                helperText={
                  AgentState.errorMessage.name !== ""
                    ? AgentState.errorMessage.name
                    : "Required"
                }
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                margin="dense"
                variant="outlined"
                value={AgentState.name}
                name={"name"}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="outlined-full-width"
                label="Reacorded URL (*)"
                error={AgentState.errorMessage.url !== ""}
                style={{ margin: 8 }}
                placeholder="url"
                helperText={
                  AgentState.errorMessage.url !== ""
                    ? AgentState.errorMessage.url
                    : "Required"
                }
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                margin="dense"
                variant="outlined"
                value={AgentState.url}
                name={"url"}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={() => {
                  AgentDispatch({ type: AGENT_SET_ERROR });
                }}
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Accordeon>
      </Grid>
      <Grid item xs={12} spacing={3} className={classes.action}>
        <Button
          variant="contained"
          color="primary"
          disabled={!AgentState.success}
          endIcon={<NavigateNextIcon />}
          onClick={() => {
            StepperDispatch({ type: GOT_TO_NEXT_STEP });
          }}
        >
          Next
        </Button>
      </Grid>
    </div>
  );
}
