import React, { useContext } from "react";
import Accordeon from "../../common/Accordeon";
import {
  Button,
  Grid,
  Checkbox,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";

import { AppContext } from "../../../store";
import FamilyMemberForm from "./../FamilyHistory/form";
import {
  CANCER_ADD_FAMILY_MEMBER,
  CANCER_UPDATE,
  CANCER_UPDATE_FAMILY_MEMBER,
  CANCER_REMOVE_FAMILY_MEMBER,
} from "../../../Reducer/Cancer";
import { CancerFamilyMemberInterface } from "../../../Reducer/Cancer/Cancer.model";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { availableGenesCancerList } from "../../../Reducer/Cancer/Cancer.initialState";
export default function PreviousTreatment() {
  const { CancerState, CancerDispatch } = useContext(AppContext);

  const handleKeyValueChange = (key: string, value: any) => {
    CancerDispatch({
      type: CANCER_UPDATE,
      key,
      value,
    });
  };
  return (
    <Accordeon
      noBorder
      title="Selects all available genes"
      highlight
      initialClosed
    >
      <Grid container spacing={3}>
        <FormControl
          required
          // error={error}
          component="fieldset"
          // className={classes.formControl}
        >
          <FormGroup>
            {availableGenesCancerList.map((item) => {
              const includes = CancerState.Diagnostic.availableGenes.includes(
                item.title
              );
              return (
                <>
                  <Grid item xs={12}>
                    <Typography variant="caption">
                      {item.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={includes}
                          onChange={(e: any) => {
                            if (includes) {
                              const index = CancerState.Diagnostic.availableGenes.findIndex(
                                (i: string) => i === item.title
                              );
                              const newPreviousTests =
                                CancerState.Diagnostic.availableGenes;
                              newPreviousTests.splice(index, 1);
                              handleKeyValueChange(
                                "availableGenes",
                                newPreviousTests
                              );
                            } else {
                              handleKeyValueChange("availableGenes", [
                                ...CancerState.Diagnostic.availableGenes,
                                item.title,
                              ]);
                            }
                          }}
                        />
                      }
                      label={item.title}
                    />
                  </Grid>
                  <br />
                </>
              );
            })}
          </FormGroup>
        </FormControl>
      </Grid>
    </Accordeon>
  );
}
