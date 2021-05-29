import React, { useState } from "react";
import "./Payment.css";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import Typewriter from "typewriter-effect";
import SelectedProduct from "../../SignUp/partials/SelectedProduct";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Payment() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [profession, setProfession] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedProduct, setSelectedProduct] = useState({
    pid: "p1",
    title: "SAGE TERM LIFE INSURANCE",
    term: "10-Year Term",
    price: "60",
    feature1: "Lowest yearly premium",
    feature2: "Rates are guaranteed never to increase over a 10-year period",
  });
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [socialSecuirityNumber, setSocialSecuirityNumber] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);

  const makePayment = () => {
    setPaymentDone(!paymentDone);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Paper className="payment__insideContainer">
        {paymentDone === false ? (
          <div elevation="10" className="payment__insideContainer2">
            <h1>Checkout</h1>
            <Paper
              className="payment__cardDetails"
              style={{ backgroundColor: "#f8f8f8" }}
            >
              <h4>Please enter card details:</h4>
              <div className="payment__selectRow">
                <TextField
                  style={{ margin: "5px", minWidth: "150px" }}
                  id="outlined-basic"
                  label="Name on Card"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  variant="outlined"
                  className="payment__inputStyle1"
                />
              </div>
              <div className="payment__selectRow">
                <TextField
                  style={{ margin: "5px", minWidth: "150px" }}
                  id="outlined-basic"
                  label="Card Number"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  variant="outlined"
                  className="payment__inputStyle1"
                />
              </div>
              <div className="payment__selectRow">
                <TextField
                  style={{ margin: "5px", minWidth: "100px" }}
                  id="outlined-basic"
                  label="Month MM"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  variant="outlined"
                  className="payment__inputStyle1"
                />
                <TextField
                  style={{ margin: "5px", minWidth: "100px" }}
                  id="outlined-basic"
                  label="Year YYY"
                  value={socialSecuirityNumber}
                  onChange={(e) => setSocialSecuirityNumber(e.target.value)}
                  variant="outlined"
                  className="payment__inputStyle1"
                />
                <TextField
                  style={{ margin: "5px", minWidth: "100px" }}
                  id="outlined-basic"
                  label="Secuirity Code"
                  value={socialSecuirityNumber}
                  onChange={(e) => setSocialSecuirityNumber(e.target.value)}
                  variant="outlined"
                  className="payment__inputStyle1"
                />
              </div>

              <Link
                onClick={() => makePayment()}
                style={{ textDecoration: "none", margin: "10px" }}
              >
                <Button variant="contained" color="primary">
                  Make Payment
                </Button>
              </Link>
            </Paper>{" "}
          </div>
        ) : (
          <Paper className="payment__confirmed">
            <CheckCircleIcon style={{ color: "green", fontSize: "100px" }} />
            <h2
              style={{
                color: "green",
                fontSize: "45px",
                borderTop: "3px solid green",
                borderBottom: "3px solid green",
              }}
            >
              Payment Received
            </h2>
          </Paper>
        )}

        <Paper
          elevation="3"
          className="payment__insideContainer1
        "
        >
          <h1>OrderDetails</h1>

          <SelectedProduct product={selectedProduct} />
        </Paper>
      </Paper>
    </div>
  );
}

export default Payment;
