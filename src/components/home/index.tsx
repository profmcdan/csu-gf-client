import React, { Fragment, useContext, useEffect } from 'react';
import MapImage from './images/map.png';
import Membership from './Membership';
import './index.css';
import Testimonials from './Testimonials';
import { Store } from '../../configureStore';

const Home = () => {
  const { state, dispatch } = useContext(Store);

  return (
    <Fragment>
      <div className="container map-panel">
        <div className="connect">
          <p className="connect-text">
            Connect with fellow C&S FUTA graduate members
          </p>
          <p>
            Starting your membership today gives you a direct relationship with
            any graduate of C&S FUTA
          </p>
          <button type="button" className="btn btn-rounded">
            Get Started
          </button>
        </div>
        <div className="">
          <img src={MapImage} height="500px" width="700px" alt="World Map" />
        </div>
      </div>
      <div className="container-fluid membership-panel">
        <Membership />
      </div>
      <Testimonials />
    </Fragment>
  );
};

export default Home;
