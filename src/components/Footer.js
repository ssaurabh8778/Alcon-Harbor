import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Avatar, Card, Paper } from "@material-ui/core";

function Footer() {
  return (
    <Paper elevation={5} className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="navbar-logo">
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
          </div>
          <small className="website-rights">233 ENGINEERS @ 2021</small>
          <div className="social-icon">
            <Link
              className="social-icon-link facebook"
              to="/"
              targets="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              targets="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              targets="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              targets="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              targets="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </Paper>
  );
}

export default Footer;
