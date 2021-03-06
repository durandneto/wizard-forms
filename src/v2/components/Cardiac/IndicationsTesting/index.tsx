import React, { useContext } from "react";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import clsx from "clsx";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import { CARDIAC_UPDATE, CARDIAC_SET_ERROR } from "../../../Reducer/Cardiac";

import Accordeon from "../../common/Accordeon";
import { Grid, Paper, TextField, Typography } from "@material-ui/core";
import { AppContext } from "../../../store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: "100%",
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  })
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Diagnostic",
  "Presymptomatic",
  "Family History",
  "Family Variant",
  "Other",
];

function getStyles(name: string, indicationsTesting: string[], theme: Theme) {
  return {
    fontWeight:
      indicationsTesting.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function PreviousTreatment() {
  const { CardiacState, CardiacDispatch } = useContext(AppContext);

  const classes = useStyles();
  const theme = useTheme();
  const [indicationsTesting, setindicationsTesting] = React.useState<string[]>(
    []
  );

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setindicationsTesting(event.target.value as string[]);
    CardiacDispatch({
      type: CARDIAC_UPDATE,
      key: "indicationsTesting",
      value: event.target.value as string[],
    });
  };
  return (
    <Accordeon noBorder title="Patient's Personal History" highlight>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Clinical Details</Typography>
          <Typography variant="caption">
            (There are many factors which may affect genetic diagnostic: Such
            as, gene-gene interactions, high-risk ethnicity groups and
            transplants.) Select all that apply:
          </Typography>
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-chip-label">
              (Please select all that apply)
            </InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              value={CardiacState.Diagnostic.indicationsTesting}
              onChange={handleChange}
              input={<Input id="select-multiple-chip" />}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {(selected as string[]).map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(
                    name,
                    CardiacState.Diagnostic.indicationsTesting,
                    theme
                  )}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            Please indicate any clinical presentations and/or findings that may
            be relevant to Cardiovascular genetic testing
          </Typography>
          <Typography variant="caption">
            (Hypertension, High Cholesterol, Heart Attack, Stroke, CAD, etc..)
          </Typography>
          <br />
          <TextField
            required
            id="outlined-full-width"
            // error={props.errorMessage.message.cardiacList[key] !== ""}
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
            // value={value.number.value}
            name={"name"}
            onChange={(e: any) => {
              // props.onUpdateChildren(key, "number", {
              //   ...value.number,
              //   value: e.target.value,
              // });
            }}
          />
        </Grid>
      </Grid>
    </Accordeon>
  );
}
