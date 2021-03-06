import React, { useContext, useReducer } from "react";
import reducer, { AppInterface, init } from "./v2/Reducer/App";
import { StepperInterface } from "./v2/components/common/Stepper";
import SteppReducer, {
  initialStepper,
  SET_CURRENT_STEP,
} from "./v2/Reducer/Stepper";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Agent from "./v2/components/Agent";
import MainStepper from "./v2/components/common/Stepper";
import { AppContext } from "./v2/store";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Container: {},
    AppBar: {
      backgroundColor: "#39394d",
      color: "#fff",
      height: "40px",
      padding: "0 24px",
      top: 0,
      margin: 0,
      alignItems: "center",
      position: "fixed",
      width: "100%",
    },
    AppHeader: {
      color: "#232333",
      height: "64px",
      marginTop: "40px",
      padding: "0 24px",
      alignItems: "center",
      border: "solid 1px #e7e7e7",
      backgroundColor: "#fff",
    },
  })
);

function Counter({ count }: AppInterface) {
  const [state, dispatch] = useReducer(reducer, { count }, init);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "reset", payload: { count } })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

export default function App(props: Props) {
  const classes = useStyles();
  const { StepperState, StepperDispatch } = useContext(AppContext);
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={classes.AppBar} my={2} display="flex">
        <div>Fixed bar</div>
      </Box>{" "}
      {/* 
      <Box className={classes.AppHeader} my={2} display="flex">
        <div>Header</div>
      </Box> */}
      {/* <Container className={classes.Container}> */}
      {/* <Box my={2}> */}
      <MainStepper
        steps={StepperState.steps}
        activeStep={StepperState.activeStep}
        control={StepperState.control}
        // onNext={(nextStep) => {
        //   StepperDispatch({ type: SET_CURRENT_STEP, step: nextStep });
        // }}
        // onPrevious={(previoustStep) => {
        //   StepperDispatch({ type: SET_CURRENT_STEP, step: previoustStep });
        // }}
        onFinished={() => {
          alert("finished");
        }}
      />
      {/* </Box> */}
      {/* </Container> */}
    </React.Fragment>
  );
}
