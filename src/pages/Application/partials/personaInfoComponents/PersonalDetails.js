import React, { useState, useEffect } from "react";

import {
  Select,
  MenuItem,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./PersonalDetails.css";
import { countryList, stateList } from "../../lib/dropdownData";

const PersonalDetails = () => {
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
  const [stateOfIssueDL, setStateOfIssueDL] = useState("State of Issue");

  return (
    <div className="personalDetails__container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>Personal Details</h2>
        </AccordionSummary>
        <AccordionDetails>
          <div className="personalDetails__selectContainer">
            <div className="personalDetails__selectRow">
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                variant="outlined"
                className="personalDetails__inputStyle1"
              />
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Middle Name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                variant="outlined"
                className="personalDetails__inputStyle2"
              />

              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
                className="personalDetails__inputStyle2"
              />
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Suffix"
                value={suffix}
                onChange={(e) => setSuffix(e.target.value)}
                variant="outlined"
                className="personalDetails__inputStyle2"
              />
            </div>

            <div className="personalDetails__selectRow">
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Date of Birth (DD/MM/YYYY)"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                variant="outlined"
                className="personalDetails__inputStyle1"
              />
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Social Secuirity Number"
                value={socialSecuirityNumber}
                onChange={(e) => setSocialSecuirityNumber(e.target.value)}
                variant="outlined"
                className="personalDetails__inputStyle1"
              />
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Verify Social Secuirity Number"
                value={socialSecuirityNumber}
                onChange={(e) => setSocialSecuirityNumber(e.target.value)}
                variant="outlined"
                className="personalDetails__inputStyle1"
              />
            </div>
            <div className="personalDetails__selectRow">
              <FormControl
                variant={"outlined"}
                className="personalDetails__inputStyle3"
              >
                <InputLabel
                  style={{ backgroundColor: "#fff" }}
                  id="demo-simple-select-helper-label"
                >
                  Do you have a Driver's License
                </InputLabel>
                <Select
                  style={{ height: "55px" }}
                  margin="dense"
                  displayEmpty={true}
                  renderValue={() => {
                    return haveDriverLicense;
                  }}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={haveDriverLicense}
                  onChange={(e) => setHaveDriverLicense(e.target.value)}
                  autoWidth
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="personalDetails__selectRow">
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Driver's License Number
                "
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                variant="outlined"
                className="personalDetails__inputStyle2"
              />
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Verify Driver's License Number"
                value={socialSecuirityNumber}
                onChange={(e) => setSocialSecuirityNumber(e.target.value)}
                variant="outlined"
                className="personalDetails__inputStyle2"
              />
              <FormControl
                variant={"outlined"}
                className="personalDetails__inputStyle2"
              >
                <InputLabel
                  style={{ backgroundColor: "#fff" }}
                  id="demo-simple-select-helper-label"
                >
                  State of Issue
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
            </div>
            <div className="personalDetails__selectRow">
              <FormControl
                variant={"outlined"}
                className="personalDetails__inputStyle3"
              >
                <InputLabel
                  style={{ backgroundColor: "#fff" }}
                  id="demo-simple-select-helper-label"
                >
                  Are you a U.S. citizen or permanent resident?
                </InputLabel>
                <Select
                  style={{ height: "55px" }}
                  margin="dense"
                  displayEmpty={true}
                  renderValue={() => {
                    return haveDriverLicense;
                  }}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={haveDriverLicense}
                  onChange={(e) => setHaveDriverLicense(e.target.value)}
                  autoWidth
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="personalDetails__selectRow">
              <FormControl
                variant={"outlined"}
                className="personalDetails__inputStyle3"
              >
                <InputLabel
                  style={{ backgroundColor: "#fff" }}
                  id="demo-simple-select-helper-label"
                >
                  What country were you born in?
                </InputLabel>
                <Select
                  style={{ height: "55px" }}
                  margin="dense"
                  displayEmpty={true}
                  renderValue={() => {
                    return haveDriverLicense;
                  }}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={haveDriverLicense}
                  onChange={(e) => setHaveDriverLicense(e.target.value)}
                  autoWidth
                >
                  {countryList.map((item) => (
                    <MenuItem value={item.name}>{item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="personalDetails__selectRow">
              <FormControl
                variant={"outlined"}
                className="personalDetails__inputStyle3"
              >
                <InputLabel
                  style={{ backgroundColor: "#fff" }}
                  id="demo-simple-select-helper-label"
                >
                  Do you plan to travel or reside outside of the U.S. in the
                  next two years?
                </InputLabel>
                <Select
                  style={{ height: "55px" }}
                  margin="dense"
                  displayEmpty={true}
                  renderValue={() => {
                    return haveDriverLicense;
                  }}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={haveDriverLicense}
                  onChange={(e) => setHaveDriverLicense(e.target.value)}
                  autoWidth
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PersonalDetails;
