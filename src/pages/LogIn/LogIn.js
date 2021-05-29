import React, { useState } from "react";
import "./LogIn.css";
import { Paper, Grid, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import firebase from "../../firebase";

export default () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const logInWithEmailPassword = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;

        window.history.back();
      })
      .catch((error) => {
        console.log(error);
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
      <Grid className="login--container">
        <Paper elevation="5" className="login--insideContainer2">
          <Paper
            className="login--insideContainer1
        "
          >
            <img className="login--logo" src="/alcan-harbor-logo.png" />
          </Paper>
          <h4 style={{ alignSelf: "flex-start", margin: "10px 0" }}>
            Please enter below details to retrieve your application
          </h4>
          <TextField
            id="outlined-basic"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            className="login--insideContainer2-textInput1"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            className="login--insideContainer2-textInput1"
          />

          <Button
            onClick={(e) => logInWithEmailPassword(e)}
            size="large"
            variant="contained"
            color="primary"
            style={{ marginTop: "15px" }}
          >
            Retrieve Your Application
          </Button>
        </Paper>
      </Grid>
    </>
  );
};
