import React, { useContext, useReducer } from "react";
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
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
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

  const { AgentState, AgentDispatch } = useContext(AppContext);

  debugger;
  return (
    <form className={classes.root}>
      <div>
        <TextField
          error={AgentState.error && AgentState.errorMessage.url !== ""}
          id="outlined-error"
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
          id="outlined-error-helper-text"
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
            AgentDispatch({ type: AGENT_SET_NAME, name: e.target.value });
          }}
        />
      </div>
      <Button
        onClick={() => {
          AgentDispatch({ type: AGENT_SET_ERROR });
        }}
        variant="contained"
        color="primary"
      >
        Next
      </Button>
      <div>{JSON.stringify(AgentState.errorMessage)}</div>
    </form>
  );
}
