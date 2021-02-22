import React, { useContext, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { AppContext } from "../../../store";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Alert from "@material-ui/lab/Alert";

import { Button, Select, TextField } from "@material-ui/core";

import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import {
  USER_SET_ERROR_MEDI_CARE,
  USER_UPDATE_MEDICARE_INFO,
} from "../../../Reducer/User";
import { AddressStatesList } from "../../../Reducer/User/User.initialState";
import InputPhone from "../../common/InputPhone";
import { checkMedicare } from "../../../../actions/profile";

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

function createData(name: string, value: any) {
  return { name, value };
}

const rows = [
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Gingerbread", 356),
];
// The first commit of Material-UI
// const [selectedDate, setSelectedDate] = React.useState<Date | null>(
//   new Date(UserState.MediCare.firstName)
// );

export default function UserMedicareForm() {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(false);
  const { UserState, UserDispatch } = useContext(AppContext);
  const [internalError, setErr] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    console.log("handleChange", event);
    UserDispatch({
      type: USER_UPDATE_MEDICARE_INFO,
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
            {UserState.errorMessage.MediCare.success && (
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
            label="memberID"
            error={
              UserState.errorMessage.MediCare.message.memberID !== "" ||
              internalError !== ""
            }
            style={{ margin: 8 }}
            placeholder="memberID"
            helperText={
              UserState.errorMessage.MediCare.message.memberID !== ""
                ? UserState.errorMessage.MediCare.message.memberID
                : internalError
                ? internalError
                : "Required"
            }
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
            variant="outlined"
            value={UserState.MediCare.memberID}
            name={"memberID"}
            onChange={handleChange}
          />
        </Grid>
        {/* // /////////////////////// */}
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() => {
            // UserDispatch({ type: USER_SET_ERROR_MEDI_CARE });
            // if (!loading) {
            setLoading(true);
            try {
              checkMedicare(UserState)
                .then((r: any) => {
                  setErr("");
                  UserDispatch({
                    type: USER_UPDATE_MEDICARE_INFO,
                    key: "extendedMedicareLeadData",
                    value: r,
                  });
                  UserDispatch({ type: USER_SET_ERROR_MEDI_CARE });
                  setLoading(false);
                })
                .catch((err: any) => {
                  setErr(err);
                  UserDispatch({
                    type: USER_SET_ERROR_MEDI_CARE,
                  });
                  UserDispatch({
                    type: USER_UPDATE_MEDICARE_INFO,
                    key: "extendedMedicareLeadData",
                    value: {},
                  });
                  setLoading(false);
                });
            } catch (err) {
              setErr(err);
              UserDispatch({ type: USER_SET_ERROR_MEDI_CARE });
              setLoading(false);
            }
            // }
          }}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Save
        </Button>
      </Grid>
      {UserState.MediCare.extendedMedicareLeadData && (
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableBody>
              {Object.entries(UserState.MediCare.extendedMedicareLeadData).map(
                (row: [string, any]) => {
                  const [key, value] = row;
                  console.log(row);
                  switch (true) {
                    case key === "APIResponseMessage":
                    case key === "EDIErrorMessage":
                    case key === "DisclaimerMessage":
                    case key === "PayerName":
                    case key === "DOS":
                    case key === "AddtionalInfo":
                      return (
                        <TableRow key={key}>
                          <TableCell component="th" scope="row">
                            {key}
                          </TableCell>
                          <TableCell align="right">
                            <span
                              dangerouslySetInnerHTML={{ __html: value }}
                            ></span>
                          </TableCell>
                        </TableRow>
                      );
                    case key === "MedicareInfoSummary":
                      return (
                        <>
                          {UserState.MediCare.extendedMedicareLeadData &&
                            Object.entries(
                              UserState.MediCare.extendedMedicareLeadData
                                .MedicareInfoSummary
                            )
                              .filter((r: any) => typeof r[1] === "string")
                              .map((row2: [string, any]) => (
                                <TableRow key={row2[0]}>
                                  <TableCell component="th" scope="row">
                                    {row2[0]}
                                  </TableCell>
                                  <TableCell align="right">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: row2[1],
                                      }}
                                    ></span>
                                  </TableCell>
                                </TableRow>
                              ))}
                        </>
                      );
                  }
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Grid>
  );
}
