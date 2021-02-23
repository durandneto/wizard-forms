import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { ButtonGroup, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      boxShadow: "none",
      margin: 0,
      "&:hove": {
        background: "red",
      },
      backgroundColor: "transparent",
    },
    rootContainer: {
      width: "100%",
      boxShadow: "none",
      border: "solid 1px #ebebeb",
      borderRadius: "10px",
      "&:hove": {
        background: "red",
      },
      backgroundColor: "transparent",
      padding: "5px 20px",
      margin: "10px 0",
    },
    error: {
      margin: "-3px 15px",
      color: "red",
    },
    heading: {
      margin: 0,
      color: "#0051b0",
      flex: 1,
    },
    headingWarning: {
      margin: 0,
      color: "yellow",
    },
    headingSuccess: {
      margin: 0,
      color: "green",
      flex: 1,
      "&:hove": {
        color: "yellow",
      },
    },
    headingError: {
      margin: 0,
      color: "red",
      flex: 1,
    },
    border: {
      borderBottom: "solid 0.5px #0051b0",
      margin: "20px 0",
      display: "flex",
      justifyContent: "space-between",
    },
    success: {
      fill: "green",
      margin: "-3px 15px",
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
  description?: string;
  children: React.ReactNode;
  error?: boolean;
  success?: boolean;
  noBorder?: boolean;
  control?: boolean;
  initialClosed?: boolean;
  onChange?: (item: any) => void;
  value?: string;
  errorMessage?: any;
}
export default function ControlledAccordions({
  title,
  children,
  control,
  error,
  success,
  initialClosed,
  value,
  description,
  errorMessage,
  noBorder,
  onChange,
}: AccordeonInterface) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<boolean>(
    initialClosed ? false : true
  );
  return (
    <div className={noBorder ? classes.root : classes.rootContainer}>
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
            variant="h6"
            component="h3"
            className={
              (success || value === "No") && !error
                ? classes.headingSuccess
                : error && value === "No"
                ? classes.headingWarning
                : error
                ? classes.headingError
                : classes.heading
            }
          >
            {title}

            {error && !success && (
              <ReportProblemIcon className={classes.error} />
            )}
            {success ||
              (value === "No" && !error && (
                <DoneAllIcon className={classes.success} />
              ))}
          </Typography>
          {control && (
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Button
                onClick={(e: any) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setExpanded(false);
                  // setChoice("No");
                  onChange && onChange("No");
                }}
                variant={value === "No" ? "contained" : "outlined"}
                disableElevation
              >
                No
              </Button>
              <Button
                color="primary"
                variant={value === "Yes" ? "contained" : "outlined"}
                onClick={(e: any) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setExpanded(true);
                  // setChoice("Yes");
                  onChange && onChange("Yes");
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
