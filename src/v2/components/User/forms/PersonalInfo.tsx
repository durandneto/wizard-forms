import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { AppContext } from "../../../store";
import { Button, FormHelperText, TextField } from "@material-ui/core";

import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { USER_UPDATE, USER_SET_ERROR } from "../../../Reducer/User";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    formControl: {
      margin: `0 ${theme.spacing(3)}px`,
    },
    radio: {
      flexDirection: "row",
    },
    paper: {
      height: 140,
      width: 100,
    },
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
    control: {
      padding: theme.spacing(2),
    },
  })
);

export default function UserPersonalInfoInterface() {
  const classes = useStyles();
  const { UserState, UserDispatch } = useContext(AppContext);

  // The first commit of Material-UI
  // const [selectedDate, setSelectedDate] = React.useState<Date | null>(
  //   new Date(UserState.PersonalInfo.firstName)
  // );

  const handleDateChange = (date: Date | null) => {
    debugger;
    UserDispatch({
      type: USER_UPDATE,
      key: "birthDate",
      value: date,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleChange", event);
    UserDispatch({
      type: USER_UPDATE,
      key: (event.target as HTMLInputElement).name,
      value: (event.target as HTMLInputElement).value,
    });
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-full-width"
            label="First Name (*) "
            error={UserState.errorMessage.PersonalInfo.message.firstName !== ""}
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText={
              UserState.errorMessage.PersonalInfo.message.firstName !== ""
                ? UserState.errorMessage.PersonalInfo.message.firstName
                : "Required"
            }
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
            variant="outlined"
            value={UserState.PersonalInfo.firstName}
            name={"firstName"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-full-width"
            label="Last Name (*) "
            error={UserState.errorMessage.PersonalInfo.message.lastName !== ""}
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText={
              UserState.errorMessage.PersonalInfo.message.lastName !== ""
                ? UserState.errorMessage.PersonalInfo.message.lastName
                : "Required"
            }
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
            variant="outlined"
            value={UserState.PersonalInfo.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl
            component="fieldset"
            error={UserState.errorMessage.PersonalInfo.message.gender}
            className={classes.formControl}
          >
            <FormLabel component="legend">Gender (*) </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={UserState.PersonalInfo.gender.value}
              onChange={handleChange}
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
              {UserState.errorMessage.PersonalInfo.message.gender !== ""
                ? UserState.errorMessage.PersonalInfo.message.gender
                : "Required"}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="DOB"
              error={UserState.errorMessage.PersonalInfo.message.birthDate}
              format="MM/dd/yyyy"
              value={UserState.PersonalInfo.birthDate}
              onChange={handleDateChange}
              minDate="1920-01-01"
              maxDate="2000-01-01"
              InputLabelProps={{
                shrink: true,
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() => {
            UserDispatch({ type: USER_SET_ERROR });
          }}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
}
