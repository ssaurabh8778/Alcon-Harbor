import React from "react";

import { Paper } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Benificiaries from "./partials/Beneficiaries";
import Health from "./partials/Health";
import PersonalInfo from "./partials/PersonalInfo";
import Payment from "./partials/Payment";
import PolicyDetails from "./partials/PolicyDetails";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return [
    "Beneficiaries",
    "Health",
    "Personal Info",
    "Payment",
    "Policy Details",
  ];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return <Benificiaries />;
    case 1:
      return <Health />;
    case 2:
      return <PersonalInfo />;
    case 3:
      return <Payment />;
    case 4:
      return <PolicyDetails />;
    default:
      return "Unknown stepIndex";
  }
}
export default () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        marginTop: "5px",
        minHeight: "90vh",
      }}
    >
      <Paper style={{ maxWidth: "1280px", width: "100%" }}>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div style={{ marginLeft: "35%", alignSelf: "center" }}>
                  <Button
                    style={{ margin: "15px 35px" }}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button
                    disabled={activeStep === steps.length - 1}
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Next" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Paper>
    </div>
  );
};
