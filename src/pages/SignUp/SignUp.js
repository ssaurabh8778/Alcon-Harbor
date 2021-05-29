import React, { useState } from "react";
import "./SignUp.css";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import firebase from "../../firebase";
import Typewriter from "typewriter-effect";
import SelectedProduct from "./partials/SelectedProduct";
import { Link } from "react-router-dom";

export default () => {
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

  const signUpWithEmailPassword = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;

        user
          .updateProfile({
            displayName: "Saurabh Sharma",
          })
          .then(function () {
            alert("profile updated");

            firebase
              .database()
              .ref("users/" + userCredential.user.uid)
              .set(
                {
                  fullName,
                  email,
                  phone,
                  country,
                  profession,
                  otherDetails,
                  uid: userCredential.user.uid,
                },
                (error) => {
                  if (error) {
                    // The write failed...
                    alert("error");
                  } else {
                    window.location = "/user-dashboard";
                    // Data saved successfully!
                  }
                }
              );
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch(function (error) {
        // An error happened.
        alert("error", JSON.stringify(error));
      });
  };
  const continueWithGoogle = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        firebase
          .database()
          .ref("users/" + user.uid)
          .get()
          .then((snapshot) => {
            console.log(snapshot);
            if (!snapshot.val()) {
              firebase
                .database()
                .ref("users/" + user.uid)
                .set({
                  fullName: user.displayName,
                  email: user.email,
                  otherDetails: "other details",
                });
              window.location = "/user-dashboard";
            } else {
              window.location = "/user-dashboard";
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper className="signup--insideContainer">
          <div
            elevation="3"
            className="signup--insideContainer1
        "
          >
            <h1>You are on your way...</h1>
            <h4>It takes only 20 minutes to fill your application</h4>
            <h3>Selected Product</h3>
            <SelectedProduct product={selectedProduct} />
          </div>
          <Paper
            elevation="10"
            style={{ position: "sticky", backgroundColor: "#f8f8f8" }}
            className="signup--insideContainer2"
          >
            <h4>Please enter below details to proceed:</h4>
            <TextField
              id="outlined-basic"
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              variant="outlined"
              className="signup--insideContainer2-textInput1"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              className="signup--insideContainer2-textInput1"
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              variant="outlined"
              className="signup--insideContainer2-textInput1"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              className="signup--insideContainer2-textInput1"
            />
            <TextField
              id="outlined-password-input"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              variant="outlined"
              className="signup--insideContainer2-textInput1"
            />
            <Link to="/application" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                Sign Up & Apply
              </Button>
            </Link>
          </Paper>
        </Paper>
      </div>
    </>
  );
};
