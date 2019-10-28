import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../layout/images/csu-logo.png';
import './auth.css';

export default function index() {
  return (
    <Fragment>
      <div className="container-fluid auth-panel">
        <div className="row mt-4">
          <div className="col-md-12 auth-container">
            <div className="card auth-card border-0">
              <div className="card-header form-header">
                <div className="text-center py-3">
                  <Link className="text-default" to="/">
                    <img src={Logo} alt=""/>
                  </Link>
                </div>
                <h3 className="mb-1 form-header-text text-center">
                  Create Your Account
                </h3>
              </div>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control input-lg" id="username" aria-describedby="usernameHelp" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control input-lg" id="email" aria-describedby="emailHelp" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control input-lg" id="password" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control input-lg" id="confirmPassword" placeholder="" />
                  </div>
                  <button type="button" className="btn btn-rounded btn-block btn-lg">
                    Register
                  </button>
                </form>
                <div className="py-3 text-center">
                  <p className="mb-0">
                    <span>I already have an account?</span>&nbsp;
                    <strong>
                      <Link className="text-default" to="/login">
                        Log In
                      </Link>
                      </strong>
                  </p>
                </div>
                <div className="social-login mt-2 mb-3">
                  
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <button className="btn btn-rounded has-icon btn-lg btn-fb text-default">
                        <span className="icon-container"><i className="fa fa-facebook fb-color"></i></span> <span className="text-container">Register with Facebook</span>
                      </button>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <button className="btn btn-rounded btn-google has-icon btn-lg text-default">
                        <span className="icon-container">
                          <img src="https://img.icons8.com/color/50/000000/google-logo.png"/>
                        </span> <span className="text-container">Register with Google</span>
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="card-footer form-footer">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
