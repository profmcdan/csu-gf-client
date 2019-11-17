import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import './auth.css';
import { Store } from '../../configureStore';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { BASE_URL } from '../../config';
import { LOGIN } from '../../actions';

import { Container } from 'react-bootstrap';

const Login = (props: any) => {
  const { state, dispatch } = useContext(Store);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessages, setErrorMessage] = useState('');

  const handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const login = async (data: any) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login/`, data);
      const decoded = jwtDecode(res.data.access);
      localStorage.setItem('accessToken', res.data.access);
      localStorage.setItem('refreshToken', res.data.refresh);
      return dispatch({
        type: LOGIN,
        payload: {
          isLoggedIn: true,
          acessToken: res.data.access,
          refreshToken: res.data.refresh,
        },
      });
    } catch (error) {
      const mgs: any = Object.values(error.response.data)[0];
      setErrorMessage(JSON.stringify(mgs));
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const formData = {
      email,
      password,
    };
    await login(formData);
    setLoading(false);
    if (errorMessages) {
      alert(errorMessages);
    } else {
      props.history.push('/');
    }
  };

  return (
    <Fragment>
      <Container fluid className="auth-panel">
        <div className="container-fluid auth-panel">
          <div className="row mt-4">
            <div className="col-md-4 offset-md-4">
              <div className="card shadow-sm">
                <div className="card-header form-header">
                  <h3 className="mb-1 form-header-text">Log In</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder=""
                        value={email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        placeholder=""
                        onChange={handleInputChange}
                      />
                    </div>
                    {loading ? (
                      <ReactLoading
                        type="spinningBubbles"
                        color="#0754a2"
                        height={50}
                        width={50}
                      />
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-rounded btn-block"
                      >
                        Log In
                      </button>
                    )}
                  </form>
                  <div className="social-login mt-4 mb-3">
                    <hr className="mb-2" />

                    <p className="text-center">OR connect with</p>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-rounded btn-fb has-icon">
                        <span className="icon-container">
                          <i className="fa fa-facebook"></i>
                        </span>{' '}
                        Facebook
                      </button>
                      <button className="btn btn-rounded btn-google has-icon">
                        <span className="icon-container">
                          <i className="fa fa-google"></i>
                        </span>{' '}
                        Google
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-footer form-footer">
                  <p>
                    <span>Don't Have An Account ? </span>
                    <Link className="text-default" to="/register">
                      Sign Up Here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Login;
