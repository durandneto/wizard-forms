import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { ButtonGroup, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      boxShadow: "none",
      margin: 0,
    },
    heading: {
      margin: 0,
      color: "#0051b0",
      flex: 1,
    },
    border: {
      borderBottom: "solid 0.5px #0051b0",
      margin: "0 !important",
      display: "flex",
      justifyContent: "space-between",
    },
    secondaryHeading: {
      margin: 0,
      color: "#232333",
      //   fontSize: theme.typography.pxToRem(15),
    },
  })
);

export interface AccordeonInterface {
  title: string;
  description: string;
  children: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  control?: boolean;
}
export default function ControlledAccordions({
  title,
  children,
  control,
  error,
  success,
  description,
}: AccordeonInterface) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [choice, setChoice] = React.useState<string>("");

  //   const handleChange = (panel: string) => (
  //     event: React.ChangeEvent<{}>,
  //     isExpanded: boolean
  //   ) => {
  //     setExpanded(isExpanded ? panel : false);
  //   };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded}
        // onClick={() => setExpanded(!expanded)}
        className={classes.root}
      >
        <AccordionSummary
          expandIcon={
            <>
              {!control && (
                <ExpandMoreIcon onClick={() => setExpanded(!expanded)} />
              )}
            </>
          }
          className={classes.border}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            className={classes.heading}
          >
            {title}
          </Typography>
          {control && (
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Button
                onClick={(e: any) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setExpanded(false);
                  setChoice("No");
                }}
                variant={choice === "No" ? "contained" : "outlined"}
                disableElevation
              >
                No
              </Button>
              <Button
                color="primary"
                variant={choice === "Yes" ? "contained" : "outlined"}
                onClick={(e: any) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setExpanded(true);
                  setChoice("Yes");
                }}
                disableElevation
              >
                Yes
              </Button>
            </ButtonGroup>
          )}
        </AccordionSummary>
        {description && (
          <AccordionDetails>
            <Typography>{description}</Typography>
          </AccordionDetails>
        )}
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
}
