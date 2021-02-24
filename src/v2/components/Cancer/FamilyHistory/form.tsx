import React, { useContext, useState, useCallback } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { AppContext } from "../../../store";
import Alert from "@material-ui/lab/Alert";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {
  Button,
  Checkbox,
  FormControl,
  FormGroup,
  FormHelperText,
  InputLabel,
  Select,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import { CancerFamilyMemberInterface } from "../../../Reducer/Cancer/Cancer.model";
import { Relationship } from "../../../Reducer/Cancer/Cancer.initialState";
interface FamilyMemberFormInterface {
  familyMember: CancerFamilyMemberInterface;
  onRemove: (id: string) => void;
  onSave: (fm: CancerFamilyMemberInterface) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: `0 ${theme.spacing(3)}px`,
    },
    radio: {
      flexDirection: "row",
    },
    action: {
      justifyContent: "flex-end",
      display: "flex",
      marginTop: "30px",
      borderBottom: "solid 1px #ebebeb",
      borderRadius: "20px",
      boxShadow: "0px 4px 1px -3px #ebebeb",
      padding: "20px",
    },
    button: {
      margin: "0 15px",
    },
  })
);

const FamilyMemberForm = ({
  familyMember,
  onRemove,
  onSave,
}: FamilyMemberFormInterface) => {
  const [FM, setFM] = useState<CancerFamilyMemberInterface>(familyMember);
  const classes = useStyles();

  const handleChange = useCallback(
    (name: string, value: unknown) => {
      console.log("handleChange", name, value);
      // if (event.name) {
      setFM({
        ...FM,
        [name]: value,
      });
      // }
    },
    [FM]
  );

  console.log(
    JSON.stringify(familyMember) === JSON.stringify(FM),
    familyMember,
    FM
  );
  return (
    <Grid container>
      <Grid item xs={12}>
        <h2>New Family Member {familyMember.id}</h2>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="outlined-full-width"
          label="Full name"
          required
          // error={UserState.errorMessage.PersonalInfo.message.firstName !== ""}
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText={
            "Required"
            // UserState.errorMessage.PersonalInfo.message.firstName !== ""
            //   ? UserState.errorMessage.PersonalInfo.message.firstName
            //   : "Required"
          }
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          margin="dense"
          variant="outlined"
          value={FM.name}
          name={"name"}
          onChange={(e: any) => handleChange(e.target.name, e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4} style={{ marginLeft: "30px" }}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="DOB"
            // error={UserState.errorMessage.PersonalInfo.message.birthDate}
            format="MM/dd/yyyy"
            value={FM.dob}
            name={"dob"}
            onChange={(date: any, value: any) => {
              handleChange("dob", value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl
          required
          // disabled={loading}
          className={classes.formControl}
          // error={UserState.errorMessage.AddressInfo.message.state !== ""}
        >
          <InputLabel htmlFor="state-required">Relationship</InputLabel>
          <Select
            native
            name="relationship"
            inputProps={{
              id: "is-required",
              name: "relationship",
            }}
            value={FM.relationship}
            onChange={(e: any) => handleChange(e.target.name, e.target.value)}
          >
            <option aria-label="None" value="" />
            {Relationship.map((state: { value: string; label: string }) => (
              <option
                value={state.value}
                key={`Cancer-FM-Relationship-${state.value}`}
              >
                {state.label}
              </option>
            ))}
          </Select>
          <FormHelperText>
            Required
            {/* {UserState.errorMessage.AddressInfo.message.state !== ""
                  ? UserState.errorMessage.AddressInfo.message.state
                  : "Required"} */}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl
          component="fieldset"
          // error={UserState.errorMessage.PersonalInfo.message.gender}
          className={classes.formControl}
        >
          <FormLabel component="legend">Gender (*) </FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={FM.gender}
            onChange={(e: any) => handleChange(e.target.name, e.target.value)}
            className={classes.radio}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="famale"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
          <FormHelperText>
            {/* {UserState.errorMessage.PersonalInfo.message.gender !== ""
              ? UserState.errorMessage.PersonalInfo.message.gender
              : "Required"} */}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-full-width"
          label="Diagnosis and/or Symptoms:"
          required
          type={"textarea"}
          rows={4}
          // error={UserState.errorMessage.PersonalInfo.message.firstName !== ""}
          style={{ margin: 8 }}
          placeholder="Diagnosis and/or Symptoms:"
          helperText={
            "Required"
            // UserState.errorMessage.PersonalInfo.message.firstName !== ""
            //   ? UserState.errorMessage.PersonalInfo.message.firstName
            //   : "Required"
          }
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          margin="dense"
          variant="outlined"
          value={FM.diagnosisOrSymptoms}
          name={"diagnosisOrSymptoms"}
          onChange={(e: any) => handleChange(e.target.name, e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-full-width"
          label="Age of Onset"
          required
          type={"number"}
          rows={4}
          // error={UserState.errorMessage.PersonalInfo.message.firstName !== ""}
          style={{ margin: 8 }}
          placeholder="Age of Onset"
          helperText={
            "Required"
            // UserState.errorMessage.PersonalInfo.message.firstName !== ""
            //   ? UserState.errorMessage.PersonalInfo.message.firstName
            //   : "Required"
          }
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          margin="dense"
          variant="outlined"
          value={FM.ageOfDiagnosis}
          name={"ageOfDiagnosis"}
          onChange={(e: any) => handleChange(e.target.name, e.target.value)}
        />
      </Grid>
      <Grid item xs={6} spacing={3} className={classes.action}>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          className={classes.button}
          startIcon={<RemoveCircleIcon />}
          // disabled={UserState.success}
          onClick={() => {
            onRemove(familyMember.id);
          }}
        >
          Remove
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<AddCircleOutlineIcon />}
          disabled={JSON.stringify(familyMember) === JSON.stringify(FM)}
          onClick={() => {
            onSave(FM);
          }}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};
export default FamilyMemberForm;
