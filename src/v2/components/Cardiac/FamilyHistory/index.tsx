import React, { useContext } from "react";
import Accordeon from "../../common/Accordeon";
import { Button, Grid, Typography } from "@material-ui/core";
import { AppContext } from "../../../store";
import FamilyMemberForm from "./form";
import {
  CARDIAC_ADD_FAMILY_MEMBER,
  CARDIAC_UPDATE,
  CARDIAC_UPDATE_FAMILY_MEMBER,
  CARDIAC_REMOVE_FAMILY_MEMBER,
} from "../../../Reducer/Cardiac";
import { CardiacFamilyMemberInterface } from "../../../Reducer/Cardiac/Cardiac.model";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
const cardiacList = [
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
  const { CardiacState, CardiacDispatch } = useContext(AppContext);
  return (
    <Accordeon noBorder title="Family History" highlight>
      <Grid container spacing={3}>
        {CardiacState.FamilyMember.length < 3 && (
          <>
            {CardiacState.FamilyMember.length === 0 && (
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
                  CardiacDispatch({
                    type: CARDIAC_ADD_FAMILY_MEMBER,
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
        {CardiacState.FamilyMember.map(
          (F: CardiacFamilyMemberInterface, index: number) => (
            <Accordeon
              title={`Family Member ${index}`}
              key={`Family-Member-${F.id}`}
              onChange={(value: any) => {
                if (value === "Yes") {
                  debugger;
                } else {
                  debugger;
                  CardiacDispatch({
                    type: CARDIAC_UPDATE,
                    key: "sugery",
                    value: "",
                  });
                }
              }}
            >
              <FamilyMemberForm
                familyMember={F}
                onRemove={(id: string) => {
                  CardiacDispatch({
                    type: CARDIAC_REMOVE_FAMILY_MEMBER,
                    id,
                  });
                }}
                onSave={(fm: CardiacFamilyMemberInterface) => {
                  CardiacDispatch({
                    type: CARDIAC_UPDATE_FAMILY_MEMBER,
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
