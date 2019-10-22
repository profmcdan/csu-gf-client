import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

export default function index() {
  return (
    <Fragment>
      <div className="container-fluid auth-panel">
        <div className="row mt-4">
          <div className="col-md-4 offset-md-4">
            <div className="card shadow-sm">
              <div className="card-header form-header">
                <h3 className="mb-1 form-header-text">
                  Log In
                </h3>
              </div>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password" placeholder="" />
                  </div>
                  <button type="button" className="btn btn-rounded btn-block">
                    Log In
                  </button>
                </form>
                <div className="social-login mt-4 mb-3">
                  <hr className="mb-2"/>
                  
                  <p className="text-center">OR connect with</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-rounded btn-fb has-icon">
                      <span className="icon-container"><i className="fa fa-facebook"></i></span> Facebook
                    </button>
                    <button className="btn btn-rounded btn-google has-icon">
                    <span className="icon-container"><i className="fa fa-google"></i></span> Google
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
    </Fragment>
  );
}
