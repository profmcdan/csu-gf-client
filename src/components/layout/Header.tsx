import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Store } from '../../configureStore';
import Logo from './images/logo.png';
import axios from 'axios';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BASE_URL } from '../../config';
import { GET_USER, LOGOUT } from '../../actions';

const Header = (props: any) => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    if (state.auth.isLoggedIn) {
      getUserDetails();
    }
  }, [state.auth.isLoggedIn]);

  const getUserDetails = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const config = {
        headers: { Authorization: 'Bearer ' + accessToken },
      };
      const res = await axios.get(`${BASE_URL}/auth/user/me`, config);
      const { data } = res;
      return dispatch({
        type: GET_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    dispatch({
      type: LOGOUT,
      payload: { isLoggedIn: false, accessToken: '', refreshToken: '' },
    });
    // props.history.push('/');
  };

  return (
    <Fragment>
      {console.log('New State ==> ', state)}
      <div className="container-fluid main-bar">
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
              <img src={Logo} height="30px" width="30px" alt="CSU-GF" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#!">
                  <Link to="/members">Members</Link>
                </Nav.Link>
                <Nav.Link href="/events">Eventz</Nav.Link>
                <Nav.Link href="/resources">Resources</Nav.Link>

                <NavDropdown title="Actions" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Connect
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Be a Mentor
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Get a Mentor
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Update Profile
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className="my-2 my-lg-0">
                <ul className="navbar-nav">
                  {state.auth.isLoggedIn ? (
                    <>
                      <NavDropdown title="My Settings" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#!">
                          <span className="nav-text">
                            {state.user.last_name} {state.user.first_name}
                          </span>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#!">
                          <Link to="/update-profile">Update Profile</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#!">
                          Get a Mentor
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#!">
                          <Link className="nav-link" to="/login">
                            <a className="nav-text" onClick={handleLogout}>
                              Logout
                            </a>
                          </Link>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </>
                  ) : (
                    <Fragment>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">
                          <span className="nav-text">Login</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link btn-rounded" to="/register">
                          <span className="nav-text-white">Get Started</span>
                        </Link>
                      </li>
                    </Fragment>
                  )}
                </ul>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </Fragment>
  );
};

const OldHeader = () => {
  const { state, dispatch } = React.useContext(Store);
  return (
    <Fragment>
      <div className="container-fluid main-bar">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">
              <Link to="/">
                <img src={Logo} height="30px" width="30px" alt="CSU-GF" />
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
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
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
                    <Link className="nav-link" to="/login">
                      <span className="nav-text">Login</span>
                    </Link>
                  </li>
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
};

export default Header;
