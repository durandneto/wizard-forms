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
  onUpdateChildren: (slug: string, key: string, value: any) => void;
  value: string;
  cancerList: any;
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
  console.log(props.errorMessage);
  return (
    <Accordeon
      noBorder
      // error={props.errorMessage.isDiagnosed !== ""}
      {...props}
      control
      initialClosed
    >
      <Grid container spacing={3}>
        {Object.entries(props.cancerList).map((list: any, index: number) => {
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
                  error={props.error}
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
                    error={props.error}
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
                    // error={
                    //   UserState.errorMessage.PersonalInfo.message.ethnicity
                    // }
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
      </Grid>
    </Accordeon>
  );
}
