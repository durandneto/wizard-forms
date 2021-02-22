import React, { useContext, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { AppContext } from "../../../store";
import Alert from "@material-ui/lab/Alert";
import {
  Button,
  Checkbox,
  FormGroup,
  FormHelperText,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";

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
import {
  USER_UPDATE,
  USER_SET_ERROR_ADITIONAL_INFO,
  USER_UPDATE_ADITIONAL_INFO,
} from "../../../Reducer/User";
import { EthnicityList } from "../../../Reducer/User/User.initialState";
import InputPhone from "../../common/InputPhone";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    formControl: {
      margin: `0 ${theme.spacing(3)}px`,
      width: "95%",
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

export default function UserAditionalInformationInterface() {
  const classes = useStyles();
  const { UserState, UserDispatch } = useContext(AppContext);
  const [internalError, setErr] = useState<string>("");
  const handleDateChange = (date: Date | null) => {
    UserDispatch({
      type: USER_UPDATE,
      key: "birthDate",
      value: date,
    });
  };

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    console.log("handleChange", event);
    UserDispatch({
      type: USER_UPDATE_ADITIONAL_INFO,
      key: (event.target as HTMLInputElement).name,
      value: (event.target as HTMLInputElement).value,
    });

    //     previousTests: Array<string>;
    //   salivaSwabTest?: boolean;
    //   isAlzheimerorDementiatype?: boolean;
    //   isNursingLiving?: boolean;
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container className={classes.root} spacing={2}>
        {internalError ? (
          <Grid item xs={12}>
            <Alert severity="error">{internalError}</Alert>
          </Grid>
        ) : (
          <>
            {UserState.errorMessage.AditionalInformation.success && (
              <Grid item xs={12}>
                <Alert severity="success">
                  This section was validated successfully .
                </Alert>
              </Grid>
            )}
          </>
        )}
        <Grid item xs={12}>
          <FormControl
            required
            className={classes.formControl}
            error={
              UserState.errorMessage.AditionalInformation.message
                .salivaSwabTest !== ""
            }
          >
            <InputLabel htmlFor="salivaSwabTest-required">
              Have you ever taken a Saliva Swab DNA test?
            </InputLabel>
            <Select
              native
              name="salivaSwabTest"
              inputProps={{
                id: "is-required",
              }}
              onChange={handleChange}
            >
              <option aria-label="None" value="" />
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No</option>
            </Select>
            <FormHelperText>
              {UserState.errorMessage.AditionalInformation.message
                .salivaSwabTest !== ""
                ? UserState.errorMessage.AditionalInformation.message
                    .salivaSwabTest
                : "Required"}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            required
            className={classes.formControl}
            error={
              UserState.errorMessage.AditionalInformation.message
                .isNursingLiving !== ""
            }
          >
            <InputLabel htmlFor="isNursingLiving-required">
              Currenly living in a nursing home or assisted living facility?
            </InputLabel>
            <Select
              native
              name="isNursingLiving"
              inputProps={{
                id: "is-required",
              }}
              onChange={handleChange}
            >
              <option aria-label="None" value="" />
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No</option>
            </Select>
            <FormHelperText>
              {UserState.errorMessage.AditionalInformation.message
                .isNursingLiving !== ""
                ? UserState.errorMessage.AditionalInformation.message
                    .isNursingLiving
                : "Required"}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            required
            className={classes.formControl}
            error={
              UserState.errorMessage.AditionalInformation.message
                .isAlzheimerorDementiatype !== ""
            }
          >
            <InputLabel htmlFor="isAlzheimerorDementiatype-required">
              Do you have Alzheimer's or Dementia?
            </InputLabel>
            <Select
              native
              name="isAlzheimerorDementiatype"
              inputProps={{
                id: "is-required",
              }}
              onChange={handleChange}
            >
              <option aria-label="None" value="" />
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No</option>
            </Select>
            <FormHelperText>
              {UserState.errorMessage.AditionalInformation.message
                .isAlzheimerorDementiatype !== ""
                ? UserState.errorMessage.AditionalInformation.message
                    .isAlzheimerorDementiatype
                : "Required"}
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl
            required
            error={
              UserState.errorMessage.AditionalInformation.message
                .previousTests !== ""
            }
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel component="legend">Previous Generic Test</FormLabel>
            <FormGroup>
              {["Cancer", "Diabetes", "Cardio"].map(
                (item: string, index: number) => (
                  <FormControlLabel
                    key={`form-item-PreviousGenericTest${index}-${item}`}
                    control={
                      <Checkbox
                        checked={UserState.AditionalInformation.previousTests.includes(
                          item
                        )}
                        value={item}
                        onChange={(
                          event: React.ChangeEvent<{
                            checked?: boolean | undefined;
                            value: unknown;
                          }>
                        ) => {
                          if (event.target.checked) {
                            UserDispatch({
                              type: USER_UPDATE_ADITIONAL_INFO,
                              key: "previousTests",
                              value: [
                                ...UserState.AditionalInformation.previousTests,
                                event.target.value,
                              ],
                            });
                          } else {
                            const index = UserState.AditionalInformation.previousTests.findIndex(
                              (i: string) => i === event.target.value
                            );
                            const newPreviousTests =
                              UserState.AditionalInformation.previousTests;
                            newPreviousTests.splice(index, 1);

                            UserDispatch({
                              type: USER_UPDATE_ADITIONAL_INFO,
                              key: "previousTests",
                              value: newPreviousTests,
                            });
                          }
                        }}
                        name={item}
                      />
                    }
                    label={item}
                  />
                )
              )}
            </FormGroup>
            <FormHelperText>
              {UserState.errorMessage.AditionalInformation.message
                .previousTests !== ""
                ? UserState.errorMessage.AditionalInformation.message
                    .previousTests
                : "Required"}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {/* <FormControl
            component="fieldset"
            error={
              UserState.errorMessage.AditionalInformation.message.ethnicity
            }
            className={classes.formControl}
          >
            <FormLabel component="legend">Ethnicity (*) </FormLabel>
            <RadioGroup
              aria-label="ethnicity"
              name="ethnicity"
              value={UserState.AditionalInformation.ethnicity.value}
              onChange={handleChange}
              className={classes.radio}
            >
              {EthnicityList.map((et: string, key: number) => (
                <FormControlLabel
                  value={et}
                  key={et}
                  control={<Radio />}
                  label={et}
                />
              ))}
            </RadioGroup>
            <FormHelperText>
              {UserState.errorMessage.AditionalInformation.message.ethnicity !==
              ""
                ? UserState.errorMessage.AditionalInformation.message.ethnicity
                : "Required"}
            </FormHelperText>
          </FormControl> */}
        </Grid>
        {/* // /////////////////////// */}
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() => {
            UserDispatch({ type: USER_SET_ERROR_ADITIONAL_INFO });
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
