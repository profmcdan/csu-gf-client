import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

export default function index() {
  return (
    <Fragment>
      <div className="container-fluid register-panel">
        <div className="row mt-4">
          <div className="col-md-4 offset-md-4">
            <div className="card shadow-sm">
              <div className="card-header form-header">
                <h3 className="mb-1 form-header-text">
                  Create Your Account
                </h3>
              </div>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="" />
                  </div>
                  <button type="button" className="btn btn-rounded btn-block">
                    Register
                  </button>
                </form>
              </div>
              <div className="card-footer form-footer">
                <p>
                  <span>Already Have An Account? </span>
                  <Link className="text-default" to="/login">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
