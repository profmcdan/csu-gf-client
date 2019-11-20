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
      <div className="main-bar">
          <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#!">
              <Link to="/">
                <img src={Logo} height="30px" width="30px" alt="CSU-GF" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/" className="px-4">
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="/members" className="px-4">
                  <Link to="/members">Members</Link>
                </Nav.Link>
                <Nav.Link href="/eventz" className="px-4">
                  <Link to="/eventz">Events</Link>
                </Nav.Link>
                <Nav.Link href="/resources" className="px-4">
                  <Link to="/resources">Resources</Link>
                </Nav.Link>
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
                        <Link className="nav-link px-md-4 px-4" to="/login">
                          <span className="nav-text">Login</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link btn-rounded px-4 py-2" to="/register">
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
    </Fragment>
  );
};

export default Header;
