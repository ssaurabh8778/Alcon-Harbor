import React, { useState } from "react";
import "./HOME1_APPLY_WITHIN_MINUTES.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  Paper,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { stateList } from "../../Application/lib/dropdownData";

export default () => {
  const Background = "/233_images/signup.jpg";
  const [stateWhereLocated, setStateWhereLocated] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [tobacooAndNicotine, setTobaccoAndNicotine] = useState("");
  const [overallHealth, setOverallHealth] = useState("");
  const [replacementPolicy, setReplacementPolicy] = useState("");
  const [haveDriverLicense, setHaveDriverLicense] = useState("");

  const [stateOfIssueDL, setStateOfIssueDL] = useState("State of Issue");
  const addSuggestedProducts = () => {};
  return (
    <>
      <Paper className="home1__container">
        <h1>Apply within minutes</h1>
        <h3>
          Start protexting your loved ones and what's important in your life
        </h3>
        <div className="home1__selectContainer">
          <div className="home1__selectRow">
            <FormControl variant={"outlined"} className="home1__inputStyle3">
              <InputLabel
                style={{ backgroundColor: "#fff", maxWidth: "250px" }}
                id="demo-simple-select-helper-label"
              >
                State where located
              </InputLabel>
              <Select
                style={{ height: "55px" }}
                margin="dense"
                displayEmpty={true}
                renderValue={() => {
                  return stateWhereLocated;
                }}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={stateWhereLocated}
                onChange={(e) => setStateWhereLocated(e.target.value)}
                autoWidth
              >
                {stateList.map((item) => (
                  <MenuItem value={item.name}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant={"outlined"} className="home1__inputStyle3">
              <InputLabel
                style={{ backgroundColor: "#fff", maxWidth: "250px" }}
                id="demo-simple-select-helper-label"
              >
                Gender
              </InputLabel>
              <Select
                style={{ height: "55px" }}
                margin="dense"
                displayEmpty={true}
                renderValue={() => {
                  return gender;
                }}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                autoWidth
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Date of Birth MM/DD/YYYY"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              variant="outlined"
              className="home1__inputStyle3"
            />
          </div>
          <div className="home1__selectRow">
            <FormControl variant={"outlined"} className="home1__inputStyle3">
              <InputLabel
                style={{ backgroundColor: "#fff", maxWidth: "250px" }}
                id="demo-simple-select-helper-label"
              >
                Do you use tobacco or nicotine products?
              </InputLabel>
              <Select
                style={{ height: "55px" }}
                margin="dense"
                displayEmpty={true}
                renderValue={() => {
                  return tobacooAndNicotine;
                }}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={tobacooAndNicotine}
                onChange={(e) => setTobaccoAndNicotine(e.target.value)}
                autoWidth
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant={"outlined"} className="home1__inputStyle3">
              <InputLabel
                style={{ backgroundColor: "#fff", maxWidth: "250px" }}
                id="demo-simple-select-helper-label"
              >
                Overall health
              </InputLabel>
              <Select
                style={{ height: "55px" }}
                margin="dense"
                displayEmpty={true}
                renderValue={() => {
                  return overallHealth;
                }}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={overallHealth}
                onChange={(e) => setOverallHealth(e.target.value)}
                autoWidth
              >
                <MenuItem value={"Superb"}>Superb</MenuItem>
                <MenuItem value={"Excellent"}>Excellent</MenuItem>
                <MenuItem value={"Good"}>Good</MenuItem>
                <MenuItem value={"Fair"}>Fair</MenuItem>
                <MenuItem value={"Poor"}>Poor</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant={"outlined"} className="home1__inputStyle3">
              <InputLabel
                style={{ backgroundColor: "#fff", maxWidth: "250px" }}
                id="demo-simple-select-helper-label"
              >
                Replacement policy
              </InputLabel>
              <Select
                style={{ height: "55px" }}
                margin="dense"
                displayEmpty={true}
                renderValue={() => {
                  return replacementPolicy;
                }}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={replacementPolicy}
                onChange={(e) => setReplacementPolicy(e.target.value)}
                autoWidth
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <small>
          *Tobacco or nicotine products include cigarettes, cigars, pipes,
          chewing tobacco, snuff, nicotine patches or gums.
        </small>
        <h3>
          You must be age 50+ to qualify for a Peace Assured Final Expense Whole
          Life Insurance policy. Sage Term Life, Sage Whole Life and Peace
          Assured are not available in all states.
        </h3>
        <div>
          <Link
            to="/choose-products"
            onClick={() => addSuggestedProducts()}
            style={{ textDecoration: "none" }}
          >
            <Button
              style={{ margin: "10px", fontSize: "18px" }}
              variant={"outlined"}
              color={"primary"}
              size={"large"}
            >
              Get Your Quote
            </Button>
          </Link>
          <Button
            style={{ margin: "10px", fontSize: "18px" }}
            variant={"outlined"}
            color={"secondary"}
            size={"large"}
          >
            Calculate Your Need
          </Button>
        </div>
      </Paper>
    </>
  );
};
