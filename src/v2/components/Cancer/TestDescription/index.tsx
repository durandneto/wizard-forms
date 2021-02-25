import React, { useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Grid, Typography } from "@material-ui/core";
import Accordeon from "../../common/Accordeon";

import { availableGenesCancerList } from "../../../Reducer/Cancer/Cancer.initialState";
import { AppContext } from "../../../store";
import { CANCER_UPDATE } from "../../../Reducer/Cancer";
export default function RadioButtonsGroup() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    CancerDispatch({
      type: CANCER_UPDATE,
      key: "CGXTestDescription",
      value: (event.target as HTMLInputElement).value,
    });
  };

  const { CancerState, CancerDispatch } = useContext(AppContext);

  return (
    <Accordeon noBorder title="CGX Test Description" highlight initialClosed>
      <Grid container spacing={3}>
        <FormControl
          required
          // error={error}
          component="fieldset"
          // className={classes.formControl}
        >
          (Please check corresponding test from selection above)
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={CancerState.Diagnostic.CGXTestDescription}
            onChange={handleChange}
          >
            {availableGenesCancerList.map((item) => {
              const includes = CancerState.Diagnostic.availableGenes.includes(
                item.title
              );
              return (
                <>
                  <Grid item xs={12}>
                    <FormControlLabel
                      value={item.title}
                      control={<Radio />}
                      label={item.title}
                    />
                  </Grid>
                </>
              );
            })}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Accordeon>
  );
}
