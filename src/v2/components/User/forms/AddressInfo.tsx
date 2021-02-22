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
  USER_SET_ERROR_ADDRESS_INFO,
  USER_UPDATE_ADDRESS_INFO,
} from "../../../Reducer/User";
import { AddressStatesList } from "../../../Reducer/User/User.initialState";
import InputPhone from "../../common/InputPhone";
import { validateAddress } from "../../../../actions/profile";

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

// The first commit of Material-UI
// const [selectedDate, setSelectedDate] = React.useState<Date | null>(
//   new Date(UserState.AddressInfo.firstName)
// );

export default function UserAddressInfoForm() {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(false);
  const { UserState, UserDispatch } = useContext(AppContext);
  const [internalError, setErr] = useState<string>("");

  const handleDateChange = (date: Date | null) => {
    UserDispatch({
      type: USER_UPDATE_ADDRESS_INFO,
      key: "birthDate",
      value: date,
    });
  };

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    console.log("handleChange", event);
    UserDispatch({
      type: USER_UPDATE_ADDRESS_INFO,
      key: (event.target as HTMLInputElement).name,
      value: (event.target as HTMLInputElement).value,
    });
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
            {UserState.errorMessage.AddressInfo.success && (
              <Grid item xs={12}>
                <Alert severity="success">
                  This section was validated successfully .
                </Alert>
              </Grid>
            )}
          </>
        )}
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={loading}
            required
            id="outlined-full-width"
            label="Street"
            error={UserState.errorMessage.AddressInfo.message.street !== ""}
            style={{ margin: 8 }}
            placeholder="Street"
            helperText={
              UserState.errorMessage.AddressInfo.message.street !== ""
                ? UserState.errorMessage.AddressInfo.message.street
                : "Required"
            }
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
            variant="outlined"
            value={UserState.AddressInfo.street}
            name={"street"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={loading}
            id="outlined-full-width"
            label="Apartament/ Unit"
            style={{ margin: 8 }}
            placeholder="Apartament/ Unit"
            helperText={"optional"}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
            variant="outlined"
            value={UserState.AddressInfo.street2}
            name={"street2"}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            disabled={loading}
            required
            id="outlined-full-width"
            label="City"
            error={UserState.errorMessage.AddressInfo.message.city !== ""}
            style={{ margin: 8 }}
            placeholder="City"
            helperText={
              UserState.errorMessage.AddressInfo.message.city !== ""
                ? UserState.errorMessage.AddressInfo.message.city
                : "Required"
            }
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
            variant="outlined"
            value={UserState.AddressInfo.city}
            name={"city"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid item xs={12}>
            <FormControl
              required
              disabled={loading}
              className={classes.formControl}
              error={UserState.errorMessage.AddressInfo.message.state !== ""}
            >
              <InputLabel htmlFor="state-required">State</InputLabel>
              <Select
                native
                name="state"
                inputProps={{
                  id: "is-required",
                  name: "state",
                }}
                onChange={handleChange}
              >
                <option aria-label="None" value="" />
                {AddressStatesList.map((state: string) => (
                  <option value={state} key={`AddressStatesList-${state}`}>
                    {state}
                  </option>
                ))}
              </Select>
              <FormHelperText>
                {UserState.errorMessage.AddressInfo.message.state !== ""
                  ? UserState.errorMessage.AddressInfo.message.state
                  : "Required"}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            disabled={loading}
            required
            id="outlined-full-width"
            label="Zipcode"
            error={UserState.errorMessage.AddressInfo.message.zipcode !== ""}
            style={{ margin: 8 }}
            placeholder="Zipcode"
            helperText={
              UserState.errorMessage.AddressInfo.message.zipcode !== ""
                ? UserState.errorMessage.AddressInfo.message.zipcode
                : "Required"
            }
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
            variant="outlined"
            value={UserState.AddressInfo.zipcode}
            name={"zipcode"}
            onChange={handleChange}
          />
        </Grid>
        {/* // /////////////////////// */}
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() => {
            // UserDispatch({ type: USER_SET_ERROR_ADDRESS_INFO });
            if (!loading) {
              setLoading(true);
              validateAddress(UserState.AddressInfo)
                .then((r: any) => {
                  setErr("");
                  UserDispatch({ type: USER_SET_ERROR_ADDRESS_INFO });
                  setLoading(false);
                })
                .catch((err: any) => {
                  UserDispatch({ type: USER_SET_ERROR_ADDRESS_INFO });
                  setErr(err.response.data.message);
                  setLoading(false);
                });
            }
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
