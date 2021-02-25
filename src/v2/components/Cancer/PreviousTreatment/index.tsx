import React, { useContext } from "react";
import Accordeon from "../../common/Accordeon";
import { Grid, Paper, TextField } from "@material-ui/core";
import { AppContext } from "../../../store";
import { CANCER_UPDATE } from "../../../Reducer/Cancer";
const cancerList = [
  {
    value: "Allogeneic",
    title: "Allogeneic bone marrow or peripheral stem cell transplant",
    children: false,
  },
  { value: "Chemotherapy", title: "Chemotherapy", children: false },
  { value: "Radiation", title: "Radiation", children: false },
];
const Sugery = { value: "Sugery", title: "Sugery", children: true };
export default function PreviousTreatment() {
  const { CancerState, CancerDispatch } = useContext(AppContext);
  return (
    <Accordeon
      noBorder
      title="Previous or Current Treatment"
      highlight
      initialClosed
    >
      <Grid container spacing={3}>
        {cancerList.map((test: any, index: number) => {
          const treatment = CancerState.Diagnostic.treatment.find(
            (t: string) => t === test.value
          );
          const value = typeof treatment === "string" ? "Yes" : "No";
          return (
            <Accordeon
              title={test.title}
              key={`cancer-list-map-${test.value}`}
              control
              noChildren
              value={value}
              //   error={props.errorMessage.message.cancerList[key] !== ""}
              // success={props.errorMessage.cancerList[key].message.success}
              onChange={(value: any) => {
                console.log(CancerState.Diagnostic.treatment);

                if (value === "Yes") {
                  debugger;
                  CancerDispatch({
                    type: CANCER_UPDATE,
                    key: "treatment",
                    value: [...CancerState.Diagnostic.treatment, test.value],
                  });
                } else {
                  const i2 = CancerState.Diagnostic.treatment.findIndex(
                    (i: string) => i === test.value
                  );
                  debugger;
                  if (i2 >= 0) {
                    const newPreviousTests = CancerState.Diagnostic.treatment;
                    newPreviousTests.splice(i2, 1);
                    CancerDispatch({
                      type: CANCER_UPDATE,
                      key: "treatment",
                      value: newPreviousTests,
                    });
                  }
                }
                // props.onUpdateChildren(key, "value", value);
              }}
            ></Accordeon>
          );
        })}

        <Accordeon
          title={Sugery.title}
          control
          initialClosed
          value={CancerState.Diagnostic.sugery !== "" ? "Yes" : "No"}
          //   error={props.errorMessage.message.cancerList[key] !== ""}
          // success={props.errorMessage.cancerList[key].message.success}
          onChange={(value: any) => {
            debugger;
            console.log(CancerState.Diagnostic.sugery);

            if (value === "Yes") {
              debugger;
              // CancerDispatch({
              //   type: CANCER_UPDATE,
              //   key: "sugery",
              //   value: [...CancerState.Diagnostic.sugery, Sugery.value],
              // });
            } else {
              // const i2 = CancerState.Diagnostic.sugery.findIndex(
              //   (i: string) => i === Sugery.value
              // );
              CancerDispatch({
                type: CANCER_UPDATE,
                key: "sugery",
                value: "",
              });
              // if (i2 >= 0) {
              //   const newPreviousTests = CancerState.Diagnostic.sugery;
              //   newPreviousTests.splice(i2, 1);
              //   CancerDispatch({
              //     type: CANCER_UPDATE,
              //     key: "sugery",
              //     value: newPreviousTests,
              //   });
              // }
            }
            // props.onUpdateChildren(key, "value", value);
          }}
        >
          <div style={{ marginRight: "15px" }}>
            <TextField
              required
              id="outlined-full-width"
              label={"Specify Sugery:"}
              // error={props.errorMessage.message.cancerList[key] !== ""}
              style={{ margin: 8 }}
              placeholder={"Specify Sugery:"}
              helperText={
                // AgentState.errorMessage.name !== ""
                // ? AgentState.errorMessage.name
                // : "Required"
                "required"
              }
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="dense"
              variant="outlined"
              value={CancerState.Diagnostic.sugery}
              name={"name"}
              onChange={(e: any) => {
                CancerDispatch({
                  type: CANCER_UPDATE,
                  key: "sugery",
                  value: e.target.value,
                });
              }}
            />
          </div>
        </Accordeon>
      </Grid>
    </Accordeon>
  );
}
