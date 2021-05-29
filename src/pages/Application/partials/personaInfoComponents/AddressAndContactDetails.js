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
import "./AddressAndContactDetails.css";
import { stateList } from "../../lib/dropdownData";

const AddressAndContactDetails = ({ index, addBeneficiary }) => {
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
    <div className="aacd__container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>Address & Contact Info</h2>
        </AccordionSummary>
        <AccordionDetails>
          <div className="aacd__selectContainer">
            <div className="aacd__selectRow">
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Residancial Address"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                variant="outlined"
                className="aacd__inputStyle3"
              />
            </div>

            <div className="aacd__selectRow">
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="City"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                variant="outlined"
                className="aacd__inputStyle2"
              />
              <FormControl variant={"outlined"} className="aacd__inputStyle2">
                <InputLabel
                  style={{ backgroundColor: "#fff" }}
                  id="demo-simple-select-helper-label"
                >
                  State
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
                label="Zip Code"
                value={socialSecuirityNumber}
                onChange={(e) => setSocialSecuirityNumber(e.target.value)}
                variant="outlined"
                className="aacd__inputStyle2"
              />
            </div>
            <div className="aacd__selectRow">
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Home Phone"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                variant="outlined"
                className="aacd__inputStyle1"
              />
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Mobile Phone"
                value={socialSecuirityNumber}
                onChange={(e) => setSocialSecuirityNumber(e.target.value)}
                variant="outlined"
                className="aacd__inputStyle1"
              />
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Email Address"
                value={socialSecuirityNumber}
                onChange={(e) => setSocialSecuirityNumber(e.target.value)}
                variant="outlined"
                className="aacd__inputStyle1"
              />
            </div>
            <div className="aacd__selectRow">
              <FormControl variant={"outlined"} className="aacd__inputStyle3">
                <InputLabel
                  style={{ backgroundColor: "#fff" }}
                  id="demo-simple-select-helper-label"
                >
                  Is your mailing address the same as your residencial address?
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

export default AddressAndContactDetails;
