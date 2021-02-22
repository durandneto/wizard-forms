import React, { useContext, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { AppContext } from "../../../store";
import { Button, TextField } from "@material-ui/core";
import {
  USER_SET_ERROR_PRIMARY_CARE,
  USER_UPDATE_PRIMARYCARE,
} from "../../../Reducer/User";
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
    table: {
      minWidth: 650,
    },
    control: {
      padding: theme.spacing(2),
    },
  })
);

export default function UserPrimaryCareForm() {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(false);
  const { UserState, UserDispatch } = useContext(AppContext);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    console.log("handleChange", event);
    UserDispatch({
      type: USER_UPDATE_PRIMARYCARE,
      key: (event.target as HTMLInputElement).name,
      value: (event.target as HTMLInputElement).value,
    });
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={loading}
            required
            id="outlined-full-width"
            label="Doctor full name"
            error={UserState.errorMessage.PrimaryCare.message.name !== ""}
            style={{ margin: 8 }}
            placeholder="Doctor full name"
            helperText={
              UserState.errorMessage.PrimaryCare.message.name !== ""
                ? UserState.errorMessage.PrimaryCare.message.name
                : "Required"
            }
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
            variant="outlined"
            value={UserState.PrimaryCare.name}
            name={"name"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputPhone
            id="outlined-full-width"
            label="Phone (*) "
            error={UserState.errorMessage.PrimaryCare.message.phone !== ""}
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText={
              UserState.errorMessage.PrimaryCare.message.phone !== ""
                ? UserState.errorMessage.PrimaryCare.message.phone
                : "Required"
            }
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
            variant="outlined"
            value={UserState.PrimaryCare.phone}
            name="phone"
            onChange={handleChange}
          />
        </Grid>
        {/* // /////////////////////// */}
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() => {
            UserDispatch({ type: USER_SET_ERROR_PRIMARY_CARE });
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
