import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Logo from './images/logo.png';

export default function Footer() {
  return (
    <Fragment>
      <div className="container-fluid main-bar">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">
              <Link to="/">
                <img src={Logo} height="80px" width="80px" alt="CSU-GF" />
              </Link>
            </div>
            <button
              type="button"
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="ToggleCSU"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/members">
                    <span className="nav-text">Graduate Members</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/events">
                    <span className="nav-text">Events</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resources">
                    <span className="nav-text">Resources</span>
                  </Link>
                </li>
              </ul>
              <div className="my-2 my-lg-0">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link btn-rounded" to="/register">
                      <span className="nav-text-white">Get Started</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
}
