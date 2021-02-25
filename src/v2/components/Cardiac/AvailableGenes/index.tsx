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
  CARDIAC_ADD_FAMILY_MEMBER,
  CARDIAC_UPDATE,
  CARDIAC_UPDATE_FAMILY_MEMBER,
  CARDIAC_REMOVE_FAMILY_MEMBER,
} from "../../../Reducer/Cardiac";
import { CardiacFamilyMemberInterface } from "../../../Reducer/Cardiac/Cardiac.model";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { availableGenesCardiacList } from "../../../Reducer/Cardiac/Cardiac.initialState";
export default function PreviousTreatment() {
  const { CardiacState, CardiacDispatch } = useContext(AppContext);

  const handleKeyValueChange = (key: string, value: any) => {
    CardiacDispatch({
      type: CARDIAC_UPDATE,
      key,
      value,
    });
  };
  return (
    <Accordeon noBorder title="Test(s) Requested:" highlight>
      <Grid container spacing={3}>
        <FormControl
          required
          // error={error}
          component="fieldset"
          // className={classes.formControl}
        >
          <FormGroup>
            {availableGenesCardiacList.map((item) => {
              const includes = CardiacState.Diagnostic.availableGenes.includes(
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
                              const index = CardiacState.Diagnostic.availableGenes.findIndex(
                                (i: string) => i === item.title
                              );
                              const newPreviousTests =
                                CardiacState.Diagnostic.availableGenes;
                              newPreviousTests.splice(index, 1);
                              handleKeyValueChange(
                                "availableGenes",
                                newPreviousTests
                              );
                            } else {
                              handleKeyValueChange("availableGenes", [
                                ...CardiacState.Diagnostic.availableGenes,
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
