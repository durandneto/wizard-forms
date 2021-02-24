import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  FormHelperText,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import Accordeon from "../../common/Accordeon";
import { CancerDiagnosticErrorInterface } from "../../../Reducer/Cancer/Cancer.model";

interface CancerQuizInterface {
  success?: boolean;
  error?: boolean;
  title: string;
  onChange: (item: any) => void;
  onOtherChange: (item: any, value: any) => void;
  onUpdateChildren: (slug: string, key: string, value: any) => void;
  value: string;
  cancerList: any;
  other: any;
  errorMessage: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: `0 ${theme.spacing(15)}px`,
    },
    radio: {
      flexDirection: "row",
    },
  })
);
export default function CancerQuiz(props: CancerQuizInterface) {
  const classes = useStyles();
  const { cancerList, other } = props;

  return (
    <Accordeon
      noBorder
      // error={props.errorMessage.isDiagnosed !== ""}
      {...props}
      highlight
      control
      initialClosed
    >
      <Grid container spacing={3}>
        {Object.entries(cancerList).map((list: any, index: number) => {
          const [key, value] = list;
          console.log([key, value]);
          return (
            <Accordeon
              title={value.description}
              value={value.value}
              key={`cancer-list-map-${index}`}
              control
              initialClosed
              error={props.errorMessage.message.cancerList[key] !== ""}
              // success={props.errorMessage.cancerList[key].message.success}
              onChange={(value: any) => {
                props.onUpdateChildren(key, "value", value);
              }}
            >
              <div style={{ marginRight: "15px" }}>
                <TextField
                  required
                  id="outlined-full-width"
                  label={value.secondLabel}
                  error={props.errorMessage.message.cancerList[key] !== ""}
                  style={{ margin: 8 }}
                  placeholder={value.secondLabel}
                  type="number"
                  helperText={
                    // AgentState.errorMessage.name !== ""
                    // ? AgentState.errorMessage.name
                    // : "Required"
                    "Number, required"
                  }
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="dense"
                  variant="outlined"
                  value={value.secondValue}
                  name={"name"}
                  onChange={(e: any) => {
                    props.onUpdateChildren(key, "secondValue", e.target.value);
                  }}
                />
              </div>
              {value.number && (
                <div>
                  <TextField
                    required
                    id="outlined-full-width"
                    label={value.number.label}
                    error={props.errorMessage.message.cancerList[key] !== ""}
                    style={{ margin: 8 }}
                    placeholder={value.number.label}
                    type="number"
                    helperText={
                      // AgentState.errorMessage.name !== ""
                      // ? AgentState.errorMessage.name
                      // : "Required"
                      "Number, required"
                    }
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="dense"
                    variant="outlined"
                    value={value.number.value}
                    name={"name"}
                    onChange={(e: any) => {
                      props.onUpdateChildren(key, "number", {
                        ...value.number,
                        value: e.target.value,
                      });
                    }}
                  />
                </div>
              )}
              {value.radio && (
                <div>
                  <FormControl
                    component="fieldset"
                    error={props.errorMessage.message.cancerList[key] !== ""}
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">
                      {value.radio.label}(*)
                    </FormLabel>
                    <RadioGroup
                      aria-label="ethnicity"
                      name="ethnicity"
                      value={value.radio.value}
                      onChange={(e: any) => {
                        props.onUpdateChildren(key, "radio", {
                          ...value.radio,
                          value: e.target.value,
                        });
                      }}
                      className={classes.radio}
                    >
                      {value.radio.items.map((et: any, key: number) => (
                        <FormControlLabel
                          value={et.value}
                          key={et}
                          control={<Radio />}
                          label={et.label}
                        />
                      ))}
                    </RadioGroup>
                    <FormHelperText>Required</FormHelperText>
                  </FormControl>
                </div>
              )}
            </Accordeon>
          );
        })}
        <Accordeon
          title={"Other Cancer"}
          control
          initialClosed={other.value !== "Yes"}
          value={other.value}
          error={props.errorMessage.message.other.value !== ""}
          // success={props.errorMessage.cancerList[key].message.success}
          onChange={(value: any) => {
            props.onOtherChange("other", {
              ...other,
              value,
            });
          }}
        >
          <div style={{ marginRight: "15px" }}>
            <TextField
              required
              id="outlined-full-width"
              label={"Onset Age"}
              error={props.errorMessage.message.other.age !== ""}
              style={{ margin: 8 }}
              placeholder={"Onset Age"}
              type="number"
              helperText={
                // AgentState.errorMessage.name !== ""
                // ? AgentState.errorMessage.name
                // : "Required"
                "Number, required"
              }
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="dense"
              variant="outlined"
              value={other.age}
              name={"age"}
              onChange={(e: any) => {
                props.onOtherChange("other", {
                  ...other,
                  age: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-full-width"
              label={"Cancer Type"}
              error={props.errorMessage.message.other.type !== ""}
              style={{ margin: 8 }}
              // placeholder={value.number.label}
              helperText={
                // AgentState.errorMessage.name !== ""
                // ? AgentState.errorMessage.name
                // : "Required"
                "Required"
              }
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="dense"
              variant="outlined"
              value={other.type}
              name={"type"}
              onChange={(e: any) => {
                props.onOtherChange("other", {
                  ...other,
                  type: e.target.value,
                });
              }}
            />
          </div>
          <div style={{ marginLeft: "15px" }}>
            <TextField
              required
              id="outlined-full-width"
              label={"Clinical History"}
              error={props.errorMessage.message.other.history !== ""}
              style={{ margin: 8 }}
              // placeholder={value.number.label}
              helperText={
                // AgentState.errorMessage.name !== ""
                // ? AgentState.errorMessage.name
                // : "Required"
                "Required"
              }
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="dense"
              variant="outlined"
              value={other.history}
              name={"history"}
              onChange={(e: any) => {
                props.onOtherChange("other", {
                  ...other,
                  history: e.target.value,
                });
              }}
            />
          </div>
        </Accordeon>
      </Grid>
    </Accordeon>
  );
}
