import React, { useState, useEffect } from "react";
import PersonalDetails from "./personaInfoComponents/PersonalDetails";
import AddressAndContactDetails from "./personaInfoComponents/AddressAndContactDetails";
import EmploymentAndIncomeDetails from "./personaInfoComponents/EmploymentAndIncomeDetails";
import LifeInsurancePolicySpecifics from "./personaInfoComponents/LifeInsurancePolicySpecifics";
import { Button, Paper } from "@material-ui/core";
import SelectedProduct from "../../SignUp/partials/SelectedProduct";

function PolicyDetails() {
  const [selectedProduct, setSelectedProduct] = useState({
    pid: "p1",
    title: "SAGE TERM LIFE INSURANCE",
    term: "10-Year Term",
    price: "60",
    feature1: "Lowest yearly premium",
    feature2: "Rates are guaranteed never to increase over a 10-year period",
  });
  const [policyDetails, setPolicyDetails] = useState({
    Title: "SAGE TERM LIFE INSURANCE",
    Term: "10-Year Term",
    ValidFrom: "24.05.2021",
    ValidUpTo: "25.05.2021",
    OtherFeatures:
      "Rates are guaranteed never to increase over a 10-year period",
  });
  const [policyDetailsJSX, setPolicyDetailsJSX] = useState([]);
  useEffect(() => {
    let x = [];
    for (let key in policyDetails) {
      x.push({
        key: key,
        value: policyDetails[key],
      });
    }

    setPolicyDetailsJSX(x);
    console.log(x);
  }, [policyDetails]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Paper
        style={{
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Policty Details</h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              height: "100%",
              padding: "25px",
              marginTop: "25px",
              backgroundColor: "#f8f8f8",
              borderRadius: "25px",
              border: "1px solid lightgray",
            }}
          >
            {policyDetailsJSX.map((item) => (
              <PolicyDetailsRow item={item} />
            ))}
          </div>
          <SelectedProduct product={selectedProduct} />
        </div>
      </Paper>
      <div style={{ marginTop: "15px" }}>
        <Button
          style={{ margin: "10px", minWidth: "250px" }}
          variant={"contained"}
          color={"primary"}
        >
          Download Policy Documents
        </Button>
        <Button
          style={{ margin: "10px", minWidth: "250px" }}
          variant={"contained"}
          color={"secondary"}
        >
          Renew Policy
        </Button>
      </div>
    </div>
  );
}

export default PolicyDetails;

const PolicyDetailsRow = ({ item }) => {
  console.log(item);
  return (
    <div style={{ display: "flex", margin: "3px" }}>
      <h3 style={{ color: "black", minWidth: "150px" }}>{item.key}:</h3>
      <h3 style={{ color: "darkblue", minWidth: "200px" }}>{item.value}</h3>
    </div>
  );
};
