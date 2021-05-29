import React, { useState, useEffect } from "react";

import {
  Button,
  Select,
  MenuItem,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControl,
  FormControlLabel,
  Checkbox,
  InputLabel,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./EmploymentAndIncomeDetails.css";
import { stateList } from "../../lib/dropdownData";

const EmploymentAndIncomeDetails = ({ index, addBeneficiary }) => {
  const [beneficiaryType, setBeneficiaryType] = useState(
    "Is this beneficiary a company of trust"
  );
  const [percentageBenefit, setPercentageBenefit] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [relationship, setRelationship] = useState("Relationship");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [socialSecuirityNumber, setSocialSecuirityNumber] = useState("");
  const [cityOfResidence, setCityOfResidence] = useState("");
  const [stateOfResidance, setStateOfResidance] = useState(
    " State of Residance"
  );
  const [haveDriverLicense, setHaveDriverLicense] = useState("");
  const [dlNumber, setDlNumber] = useState("");
  const [verifyDlNumber, setVerifyDlNumber] = useState("");
  const [stateOfIssueDL, setStateOfIssueDL] = useState("");

  return (
    <div className="eaid__container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>Employment & Income</h2>
        </AccordionSummary>
        <AccordionDetails>
          <div className="eaid__selectContainer">
            <div className="eaid__selectRow">
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Employer / Company"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                variant="outlined"
                className="eaid__inputStyle1"
              />
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Occupation"
                value={socialSecuirityNumber}
                onChange={(e) => setSocialSecuirityNumber(e.target.value)}
                variant="outlined"
                className="eaid__inputStyle1"
              />
            </div>
            <div className="eaid__selectRow">
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Duties"
                value={socialSecuirityNumber}
                onChange={(e) => setSocialSecuirityNumber(e.target.value)}
                variant="outlined"
                className="eaid__inputStyle3"
              />
            </div>

            <div className="eaid__selectRow">
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Employer Address"
                value={socialSecuirityNumber}
                onChange={(e) => setSocialSecuirityNumber(e.target.value)}
                variant="outlined"
                className="eaid__inputStyle3"
              />
            </div>

            <div className="eaid__selectRow">
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Employer City"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                variant="outlined"
                className="eaid__inputStyle2"
              />
              <FormControl variant={"outlined"} className="eaid__inputStyle2">
                <InputLabel
                  style={{ backgroundColor: "#fff" }}
                  id="demo-simple-select-helper-label"
                >
                  Employer State
                </InputLabel>
                <Select
                  style={{ height: "55px" }}
                  margin="dense"
                  displayEmpty={true}
                  renderValue={() => {
                    return stateOfIssueDL;
                  }}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={stateOfIssueDL}
                  onChange={(e) => setStateOfIssueDL(e.target.value)}
                  autoWidth
                >
                  {stateList.map((item) => (
                    <MenuItem value={item.name}>{item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Employer Zip Code"
                value={socialSecuirityNumber}
                onChange={(e) => setSocialSecuirityNumber(e.target.value)}
                variant="outlined"
                className="eaid__inputStyle2"
              />
            </div>

            <div className="eaid__selectRow">
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Annual Income"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                variant="outlined"
                className="eaid__inputStyle1"
              />
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Total Household Income"
                value={socialSecuirityNumber}
                onChange={(e) => setSocialSecuirityNumber(e.target.value)}
                variant="outlined"
                className="eaid__inputStyle1"
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default EmploymentAndIncomeDetails;
