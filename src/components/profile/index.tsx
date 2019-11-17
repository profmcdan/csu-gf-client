import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import useForm from 'react-hook-form';
import './index.css';
import Axios from 'axios';
import { BASE_URL } from '../../config';
import { Store } from '../../configureStore';

// Messages
const required = 'This field is required';
const maxLength = 'Your input exceed maximum length';

// Error Component
const errorMessage = (error: any) => {
  return <div className="invalid-feedback">{error}</div>;
};

const schema = {
  twitter: '',
  instagram: '',
  linkein: '',
  facebook: '',
};

const ProfileSettings = (props: any) => {
  const { state, dispatch } = useContext(Store);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (formData: any) => {
    const accessToken = localStorage.getItem('accessToken');
    const config = {
      headers: { Authorization: 'Bearer ' + accessToken },
    };

    try {
      const { data } = await Axios.post(
        `${BASE_URL}/profile/update_profile/`,
        formData,
        config,
      );
      console.log(data);
      props.history.push('/members');
    } catch (error) {
      console.log(error.response.data);
      alert(JSON.stringify(error.response.data));
    }
  };

  return (
    <Container fluid>
      {!state.auth.isLoggedIn && <Redirect to="/login" />}
      <div className="col-sm-12 mainframe">
        <h3 style={{ margin: 'auto', textAlign: 'center' }}>Update Profile</h3>
      </div>
      <div className="col-sm-12 profile-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Course of Study"
              name="department"
              ref={register({ required: true, maxLength: 255 })}
            />
            {errors.department &&
              errors.department.type === 'required' &&
              errorMessage(required)}
            {errors.department &&
              errors.department.type === 'maxLength' &&
              errorMessage(maxLength)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Faculty Name"
              name="faculty"
              ref={register({ required: true, maxLength: 100 })}
            />
            {errors.faculty &&
              errors.faculty.type === 'required' &&
              errorMessage(required)}
            {errors.faculty &&
              errors.faculty.type === 'maxLength' &&
              errorMessage(maxLength)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="tel"
              placeholder="Year of graduation"
              name="graduation_year"
              ref={register({ maxLength: 20 })}
            />
            {errors.graduation_year &&
              errors.graduation_year.type === 'maxLength' &&
              errorMessage(maxLength)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="What do you do now"
              name="profession"
              ref={register({ required: true })}
            />
            {errors.profession &&
              errors.profession.type === 'required' &&
              errorMessage(required)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Office Address"
              name="office_address"
              ref={register}
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                value="Male"
                id="inlineRadio1"
                ref={register}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                value="Female"
                id="inlineRadio2"
                ref={register}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="datetime"
              placeholder="Date of Birth"
              name="birthdate"
              ref={register({
                required: false,
                pattern: /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/i,
              })}
            />
            {errors.birthdate &&
              errorMessage('Please use the following format MM/DD/YYYY')}
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="bio"
              placeholder="Short Biography of yourself"
              ref={register}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Highest Position held in the fellowship"
              name="position"
              ref={register}
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              placeholder="Connect to a Mentor"
              name="mentorship"
              id="customCheck1"
              ref={register}
            />
            <label htmlFor="customCheck1"> Connect to a Mentor</label>
          </div>
          <div className="form-group">
            <input className="btn btn-rounded btn-block" type="submit" />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ProfileSettings;
