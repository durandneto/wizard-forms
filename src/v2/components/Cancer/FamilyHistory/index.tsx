import React, { useContext } from "react";
import Accordeon from "../../common/Accordeon";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { AppContext } from "../../../store";
import FamilyMemberForm from "./form";
import {
  CANCER_ADD_FAMILY_MEMBER,
  CANCER_UPDATE,
  CANCER_UPDATE_FAMILY_MEMBER,
  CANCER_REMOVE_FAMILY_MEMBER,
} from "../../../Reducer/Cancer";
import { CancerFamilyMemberInterface } from "../../../Reducer/Cancer/Cancer.model";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
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
    <Accordeon noBorder title="Family History" highlight initialClosed>
      <Grid container spacing={3}>
        {CancerState.FamilyMember.length < 3 && (
          <>
            {CancerState.FamilyMember.length === 0 && (
              <Grid item xs={12} spacing={3}>
                <Typography variant="body2" color="textSecondary" component="p">
                  You didn't add any Family Member yet, to add a new Family
                  Member press the Button below.{" "}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12} spacing={3}>
              <Button
                startIcon={<AddCircleOutlineIcon />}
                size="small"
                onClick={() => {
                  CancerDispatch({
                    type: CANCER_ADD_FAMILY_MEMBER,
                  });
                }}
                variant="outlined"
                color="primary"
              >
                Add new family member
              </Button>
            </Grid>
          </>
        )}
        {CancerState.FamilyMember.map(
          (F: CancerFamilyMemberInterface, index: number) => (
            <Accordeon
              title={`Family Member ${index}`}
              key={`Family-Member-${F.id}`}
              onChange={(value: any) => {
                if (value === "Yes") {
                  debugger;
                } else {
                  debugger;
                  CancerDispatch({
                    type: CANCER_UPDATE,
                    key: "sugery",
                    value: "",
                  });
                }
              }}
            >
              <FamilyMemberForm
                familyMember={F}
                onRemove={(id: string) => {
                  CancerDispatch({
                    type: CANCER_REMOVE_FAMILY_MEMBER,
                    id,
                  });
                }}
                onSave={(fm: CancerFamilyMemberInterface) => {
                  CancerDispatch({
                    type: CANCER_UPDATE_FAMILY_MEMBER,
                    fm,
                  });
                }}
              />
            </Accordeon>
          )
        )}
      </Grid>
    </Accordeon>
  );
}
