import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Logo from "./images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid main-bar footer-navigation">
        <div className="footer-nav row">
          <div className="bg-white d-sm-flex align-items-center w-100">
            <div className="footer-brand px-2">
              <Link to="/">
                <img src={Logo} height="80px" width="80px" alt="CSU-GF" />
              </Link>
            </div>

            <div className="footer-nav d-sm-flex justify-content-between w-100" id="" style={{ width: 'calc(100vw - 100px)'}}>
              <ul className="footer-navbar d-flex px-1">
                <li className="nav-item px-sm-3">
                  <Link className="nav-link" to="/members">
                    <span className="nav-text">Graduate Members</span>
                  </Link>
                </li>
                <li className="nav-item px-sm-3">
                  <Link className="nav-link" to="/events">
                    <span className="nav-text">Events</span>
                  </Link>
                </li>
                <li className="nav-item px-sm-3">
                  <Link className="nav-link" to="/resources">
                    <span className="nav-text">Resources</span>
                  </Link>
                </li>
              </ul>
              <div className="my-2 my-lg-0">
                <ul className="footer-navbar d-sm-flex pl-sm-2 pl-0 mb-0">
                  <ul className="footer-navbar d-flex pl-sm-2 pl-0 justify-content-center">
                    <li className="nav-item px-3">
                      <Link className="nav-link" to="facebook.com">
                        <i className="fa fa-facebook text-color-primary"></i>
                      </Link>
                    </li>
                    <li className="nav-item px-3">
                      <Link className="nav-link" to="linkedin.com">
                        <i className="fa fa-linkedin text-color-primary"></i>
                      </Link>
                    </li>
                    <li className="nav-item px-3">
                      <Link className="nav-link" to="twitter.com">
                        <i className="fa fa-twitter text-color-primary"></i>
                      </Link>
                    </li>
                    <li className="nav-item px-3">
                      <Link className="nav-link" to="instagram.com">
                        <i className="fa fa-instagram text-color-primary"></i>
                      </Link>
                    </li>
                  </ul>
                  <li className="nav-item">
                    <Link className="nav-link btn-rounded text-center mx-sm-2 text-center" to="/register">
                      <span className="nav-text-white d-inline-block">
                        Get Started
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
