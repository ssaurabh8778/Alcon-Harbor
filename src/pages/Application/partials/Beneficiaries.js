import React, { useState, useEffect } from "react";
import { MemoryRouter } from "react-router";
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
} from "@material-ui/core";
import "./Beneficiaries.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Beneficiaries() {
  const [totalBenificiaries, setTotalBenificiaries] = useState([{}]);
  useEffect(() => {}, [totalBenificiaries]);

  const addBeneficiary = () => {
    if (totalBenificiaries.length === 5) {
      alert("You can't add more than five benefeciaries");
      return;
    }
    totalBenificiaries.push({});
    console.log(totalBenificiaries);
    setTotalBenificiaries([...totalBenificiaries]);
  };
  return (
    <div className="beneficiaries__container">
      {totalBenificiaries.map((x, index) => (
        <Benificiary
          primary={true}
          index={index + 1}
          addBeneficiary={addBeneficiary}
        />
      ))}
      <Button
        style={{ alignSelf: "flex-end", margin: "25px", marginRight: "12%" }}
        variant={"outlined"}
        color={"secondary"}
        onClick={() => addBeneficiary()}
      >
        + Add Beneficiary
      </Button>
    </div>
  );
}

export default Beneficiaries;

const Benificiary = ({ index, addBeneficiary }) => {
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

  return (
    <div className="beneficiary__container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>
            {index === 1 ? "Primary Beneficiary " : "Additional Beneficiary "}
            <small>(Beneficiary {index})</small>
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <div className="beneficiary__selectContainer">
            <div className="beneficiary__selectRow">
              <FormControl
                variant={"outlined"}
                className="beneficiary__inputStyle1"
              >
                <Select
                  style={{ height: "55px" }}
                  margin="dense"
                  displayEmpty={true}
                  renderValue={() => {
                    return beneficiaryType;
                  }}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={beneficiaryType}
                  onChange={(e) => setBeneficiaryType(e.target.value)}
                  autoWidth
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
              <TextField
                style={{ margin: "5px" }}
                id="outlined-basic"
                label="Percentage Benefit"
                value={percentageBenefit}
                onChange={(e) => setPercentageBenefit(e.target.value)}
                variant="outlined"
                className="beneficiary__inputStyle1"
              />
            </div>
            <div className="beneficiary__selectRow">
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                variant="outlined"
                className="beneficiary__inputStyle1"
              />
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Middle Name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                variant="outlined"
                className="beneficiary__inputStyle2"
              />

              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
                className="beneficiary__inputStyle2"
              />
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Suffix"
                value={suffix}
                onChange={(e) => setSuffix(e.target.value)}
                variant="outlined"
                className="beneficiary__inputStyle2"
              />
            </div>
            <div className="beneficiary__selectRow">
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Date of Birth (DD/MM/YYYY)"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                variant="outlined"
                className="beneficiary__inputStyle1"
              />
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="Social Secuirity Number"
                value={socialSecuirityNumber}
                onChange={(e) => setSocialSecuirityNumber(e.target.value)}
                variant="outlined"
                className="beneficiary__inputStyle1"
              />
              <FormControl
                variant={"outlined"}
                className="beneficiary__inputStyle1"
              >
                <Select
                  style={{ height: "55px" }}
                  margin="dense"
                  displayEmpty={true}
                  renderValue={() => {
                    return relationship;
                  }}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  autoWidth
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="beneficiary__selectRow">
              <TextField
                style={{ margin: "5px", minWidth: "150px" }}
                id="outlined-basic"
                label="City of Residance"
                value={cityOfResidence}
                onChange={(e) => setCityOfResidence(e.target.value)}
                variant="outlined"
                className="beneficiary__inputStyle1"
              />
              <FormControl
                variant={"outlined"}
                className="beneficiary__inputStyle1"
              >
                <Select
                  style={{ height: "55px" }}
                  margin="dense"
                  displayEmpty={true}
                  renderValue={() => {
                    return stateOfResidance;
                  }}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={beneficiaryType}
                  onChange={(e) => setStateOfResidance(e.target.value)}
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
