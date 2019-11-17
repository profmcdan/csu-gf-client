import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactLoading from 'react-loading';
import './auth.css';
import { BASE_URL } from '../../config';
import { Store } from '../../configureStore';
import { IAction } from '../../interfaces';
import { REGISTER } from '../../actions';

const Register = (props: any) => {
  const { state, dispatch } = useContext(Store);

  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    switch (name) {
      case 'lastname':
        setLastName(value);
        break;
      case 'firstname':
        setFirstName(value);
        break;
      case 'middlename':
        setMiddleName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'password2':
        setPassword2(value);
        break;

      default:
        break;
    }
  };

  const register = async (data: any) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, data);
      alert('Account Created Successfully');
      return dispatch({
        type: REGISTER,
        payload: res.data,
      });
    } catch (error) {
      const errorMessage = error.response.data;
      setErrorMessage(errorMessage);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const formData = {
      email,
      password,
      last_name: lastname,
      first_name: firstname,
      middle_name: middlename,
      phone,
    };
    await register(formData);
    setLoading(false);
    if (errorMessage) {
      alert(JSON.stringify(errorMessage));
    } else {
      props.history.push('/login');
    }
  };

  return (
    <Fragment>
      <div className="container-fluid auth-panel">
        <div className="row mt-4">
          <div className="col-md-4 offset-md-4">
            <div className="card shadow-sm">
              <div className="card-header form-header">
                <h3 className="mb-1 form-header-text">Create Your Account</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastname"
                      placeholder=""
                      value={lastname}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstname"
                      placeholder=""
                      value={firstname}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Middle Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="middlename"
                      placeholder=""
                      value={middlename}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder=""
                      value={phone}
                      onChange={handleInputChange}
                    />
                  </div>
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
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="password2"
                      value={password2}
                      placeholder=""
                      onChange={handleInputChange}
                    />
                  </div>
                  {loading ? (
                    <ReactLoading type="spinningBubbles" color="#ffffff" />
                  ) : (
                    <button type="submit" className="btn btn-rounded btn-block">
                      Register
                    </button>
                  )}
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
};

export default Register;
