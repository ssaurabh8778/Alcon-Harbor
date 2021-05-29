import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import "./NavBar.css";
import Dropdown from "./Dropdown";
import {
  AboutMenuItems,
  SectorsMenuItems,
  CareersMenuItems,
} from "./MenuItems";
import { Avatar, Card, Paper } from "@material-ui/core";
import firebase from "../firebase";
import { useAuth } from "../AuthContext";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [sectorsDropdown, setSectorsDropdown] = useState(false);
  const [careersDropdown, setCareersDropdown] = useState(false);
  const [userCard, setUserCard] = useState(false);
  //const { currentUser } = useAuth();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (method) => {
    if (window.innerWidth < 960) {
      method(false);
    } else {
      method(true);
    }
  };

  const onMouseLeave = (method) => {
    if (window.innerWidth < 960) {
      method(false);
    } else {
      method(false);
    }
  };

  const goToSignIn = () => {
    window.location = "/log-in";
  };

  const goToHome = () => {
    window.location = "/home";
  };

  return (
    <>
      <Paper className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              style={{
                width: "200px",
                margin: "5px",
                backgroundColor: "#fff",
              }}
              src="/alcan-harbor-logo.png"
              alt=""
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li
              className="nav-item"
              onMouseEnter={() => onMouseEnter(setAboutDropdown)}
              onMouseLeave={() => onMouseLeave(setAboutDropdown)}
            >
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us <i className="fas fa-caret-down" />
              </Link>
              {aboutDropdown && <Dropdown MenuItems={AboutMenuItems} />}
            </li>

            <li
              className="nav-item"
              onMouseEnter={() => onMouseEnter(setSectorsDropdown)}
              onMouseLeave={() => onMouseLeave(setSectorsDropdown)}
            >
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products <i className="fas fa-caret-down" />
              </Link>
              {sectorsDropdown && <Dropdown MenuItems={SectorsMenuItems} />}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => onMouseEnter(setCareersDropdown)}
              onMouseLeave={() => onMouseLeave(setCareersDropdown)}
            >
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Learning Center <i className="fas fa-caret-down" />
              </Link>
              {careersDropdown && <Dropdown MenuItems={CareersMenuItems} />}
            </li>
            <li>
              <Button
                style={{ minWidth: "180px", fontSize: "15px" }}
                variant={"contained"}
                color={"primary"}
                onClick={() => goToHome()}
              >
                Apply WithIn Minutes
              </Button>
            </li>
            <li>
              <Button
                style={{ minWidth: "180px", fontSize: "15px" }}
                variant={"contained"}
                color={"secondary"}
                onClick={() => goToSignIn()}
              >
                View Saved Applications
              </Button>
            </li>
          </ul>
        </div>
      </Paper>
    </>
  );
}

const UserCard = (props) => {
  return (
    <Card elevation={10} className="userCard">
      <Link to="/user-dashboard">
        <Avatar />
      </Link>
      <Typography variant="h6"> {props.currentUser.displayName}</Typography>
      <Typography variant="subtitle1"> {props.currentUser.email}</Typography>
      <Button
        onClick={() => {
          firebase.auth().signOut();
          window.location = "/home";
        }}
        variant="contained"
        color="secondary"
      >
        Sign Out
      </Button>
    </Card>
  );
};
