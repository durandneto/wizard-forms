import React, { useReducer } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AgentInterface } from "../../Reducer/Agent";
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

const agentData: AgentInterface = {
  error: null,
  success: false,
  complete: false,
  name: "",
  url: "",
};
export default function Agent() {
  const classes = useStyles();
  const [AgentData, dispatch] = useReducer(
    AgentReducer,
    agentData,
    initialAgent
  );
  return (
    <form className={classes.root}>
      <div>
        <TextField
          //   error={AgentData.error && AgentData.error.url !== null}
          id="outlined-error"
          label="Recording URL"
          defaultValue={AgentData.url}
          value={AgentData.url}
          variant="outlined"
          //   helperText={AgentData.error.url}
          onChange={(e: any) => {
            dispatch({ type: AGENT_SET_URL, url: e.target.value });
          }}
        />
        <TextField
          //   error={AgentData.error.name}
          id="outlined-error-helper-text"
          label="Agent name"
          defaultValue={AgentData.name}
          value={AgentData.name}
          //   helperText={AgentData.error.name}
          variant="outlined"
          onChange={(e: any) => {
            dispatch({ type: AGENT_SET_NAME, name: e.target.value });
          }}
        />
      </div>
      <Button
        onClick={() => {
          dispatch({ type: AGENT_SET_ERROR });
        }}
        variant="contained"
        color="primary"
      >
        Next
      </Button>
      <div>{JSON.stringify(AgentData.error)}</div>
    </form>
  );
}
