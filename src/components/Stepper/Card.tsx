import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Divider } from "@material-ui/core";
import InputMask from "react-input-mask";
import { Button, ButtonGroup, Input } from "reactstrap";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function FormRow() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
    </React.Fragment>
  );
}

export default function OutlinedCard(props: any) {
  const {
    onChange,
    onSecondLabelChange,
    id,
    label,
    value,
    checked,
    hint,
    error,
    secondLabel,
    ps,
    secondValue,
    onRadioChange,
    radio,
    invalid,
    description,
  } = props;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {label}
        </Typography>
        <Typography variant="h5" component="h2">
          {description}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`${hint ? hint : ""} ${ps ? ps : secondLabel}`}
        </Typography>
        <Divider />
        <Typography className={classes.pos}>
          {value === "Yes" && (
            <>
              {secondLabel && (
                <>
                  <Typography variant="subtitle1" gutterBottom>
                    {secondLabel}
                  </Typography>
                  <Input
                    type="tel"
                    mask="99"
                    maskChar=""
                    invalid={invalid}
                    value={secondValue}
                    id={`Cancer-FamilyMemberHeartConditions-second-label-form-${id}`}
                    tag={InputMask}
                    onChange={(e: any) => onSecondLabelChange(e.target.value)}
                  />
                </>
              )}
            </>
          )}
        </Typography>

        {invalid && <Alert severity="error">{invalid}</Alert>}
      </CardContent>
      <CardActions>
        <ButtonGroup>
          <Button
            outline={value !== "Yes"}
            color={"primary"}
            onClick={(e: any) => onChange("Yes")}
          >
            Yes
          </Button>
          <Button outline={value !== "No"} onClick={(e: any) => onChange("No")}>
            No
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}

// const ButtonG = ({
//   onChange,
//   onSecondLabelChange,
//   id,
//   label,
//   value,
//   checked,
//   error,
//   secondLabel,
//   secondValue,
//   onRadioChange,
//   radio,
//   invalid,
// }: any) => {
//   return (
//     <>
//       <Row>
//         <Col xs="12" sm={value === "Yes" ? "2" : "12"}>
//           {label}
//           <br />
// <ButtonGroup size="lg">
//   <Button
//     outline={value !== "Yes"}
//     color={"primary"}
//     onClick={(e: any) => onChange("Yes")}
//   >
//     Yes
//   </Button>
//   <Button
//     outline={value !== "No"}
//     onClick={(e: any) => onChange("No")}
//   >
//     No
//   </Button>
// </ButtonGroup>

//           {/* <FormGroup inline>
//             <Label
//               for={`Cancer-FamilyMemberHeartConditions-isDiagnosed-form-${id}`}
//               inline
//             >
//               {label}
//             </Label>
//             <div>
//               <CustomInput
//                 inline
//                 invalid={invalid}
//                 onClick={(e: any) => onChange("Yes")}
//                 value={value}
//                 checked={value === "Yes"}
//                 type="radio"
//                 id={`Cancer-FamilyMemberHeartConditions-isDiagnosed-form-${id}`}
//                 name={`Cancer-FamilyMemberHeartConditions-isDiagnosed-form-${id}`}
//                 label={"Yes"}
//               />
//               <CustomInput
//                 inline
//                 invalid={invalid}
//                 onClick={(e: any) => onChange("No")}
//                 value={value}
//                 checked={value === "No"}
//                 type="radio"
//                 id={`Cancer-FamilyMemberHeartConditions-isDiagnosed-form-no-${id}`}
//                 name={`Cancer-FamilyMemberHeartConditions-isDiagnosed-form-${id}`}
//                 label={"No"}
//               />
//             </div>
//           </FormGroup> */}
//         </Col>
//         {value === "Yes" && (
//           <>
// {secondLabel && (
//   <Col xs="12" sm="5">
//     <FormGroup>
//       <Label>{secondLabel}</Label>
//       <Input
//         type="tel"
//         mask="99"
//         maskChar=""
//         invalid={invalid}
//         value={secondValue}
//         id={`Cancer-FamilyMemberHeartConditions-second-label-form-${id}`}
//         tag={InputMask}
//         onChange={(e: any) => onSecondLabelChange(e.target.value)}
//       />
//       <FormFeedback>{error}</FormFeedback>
//     </FormGroup>
//   </Col>
// )}
//             {radio && (
//               <Col xs="12" sm="5">
//                 <FormGroup inline>
//                   <Label
//                     for={`Cancer-FamilyMemberHeartConditions-isDiagnosed-form-${id}`}
//                     inline
//                   >
//                     {label}
//                   </Label>
//                   <div>
//                     {radio.items.map((r: any) => (
//                       <CustomInput
//                         inline
//                         invalid={invalid}
//                         onClick={(e: any) => onRadioChange(r.value)}
//                         value={value}
//                         checked={radio.value === r.value}
//                         type="radio"
//                         id={`Cancer-FamilyMemberHeartConditions-isDiagnosed-${r.value}-form-${id}`}
//                         name={`Cancer-FamilyMemberHeartConditions-isDiagnosed-${r.value}-form-${id}`}
//                         label={r.label}
//                       />
//                     ))}
//                   </div>
//                 </FormGroup>
//               </Col>
//             )}
//           </>
//         )}
//         {invalid && <div>{invalid}</div>}
//       </Row>
//     </>
//   );
// };
