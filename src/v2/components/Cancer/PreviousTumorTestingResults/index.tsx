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

import Accordeon from "../../common/Accordeon";
import { Grid, Paper, TextField } from "@material-ui/core";
import { AppContext } from "../../../store";
import { CANCER_UPDATE } from "../../../Reducer/Cancer";

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

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function PreviousTreatment() {
  const { CancerState, CancerDispatch } = useContext(AppContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debugger;
    CancerDispatch({
      type: CANCER_UPDATE,
      key: "previousClinicalTumorResults",
      value: {
        ...CancerState.Diagnostic.previousClinicalTumorResults,
        [(event.target as HTMLInputElement)
          .name]: (event.target as HTMLInputElement).value,
      },
    });
  };

  return (
    <Accordeon
      noBorder
      title="Previous Tumor Testing Results"
      highlight
      initialClosed
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-full-width"
            label={"Microsatellite instability (MSI) results"}
            // error={props.errorMessage.message.cancerList[key] !== ""}
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
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-full-width"
            label={"Immunohistochemistry (IHC) results"}
            // error={props.errorMessage.message.cancerList[key] !== ""}
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
            value={
              CancerState.Diagnostic.previousClinicalTumorResults
                .microsatelliteInstabilityMSIResults
            }
            name={"microsatelliteInstabilityMSIResults"}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-full-width"
            label={"Other, specify"}
            // error={props.errorMessage.message.cancerList[key] !== ""}
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
            value={
              CancerState.Diagnostic.previousClinicalTumorResults
                .immunohistochemistryIHCResults
            }
            name={"immunohistochemistryIHCResults"}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Accordeon>
  );
}
