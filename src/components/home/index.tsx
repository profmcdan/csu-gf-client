import React, { Fragment, useContext, useEffect } from "react";
import MapImage from "./images/map.png";
import Membership from "./Membership";
import "./index.css";
import Testimonials from "./Testimonials";
import ProfessionalPresence from "./ProfessionalPresence";
import JoinNow from "./JoinNow";
import ResourcesSection from "./ResourcesSection";

import { Store } from "../../configureStore";

const Home = () => {
  const { state, dispatch } = useContext(Store);

  return (
    <Fragment>
      <div className="container map-panel">
        <div className="row">
          <div className="connect col-md-4">
            <div className="connect-sm-image-container d-md-none d-block">
              <img
                src={MapImage}
                width="700px"
                alt="World Map"
                className="w-100"
              />
            </div>
            <p className="connect-text">
              Connect with fellow C&amp;S FUTA graduate members
            </p>
            <p className="text-color-secondary">
              Starting your membership today gives you a direct relationship
              with any graduate of C&amp;S FUTA
            </p>
            <button
              type="button"
              className="btn btn-rounded rounded btn-main px-4"
            >
              Get Started
            </button>
          </div>
          <div className="col-md-8 connect-image-container d-md-block d-none">
            <img
              src={MapImage}
              width="700px"
              alt="World Map"
              className="w-100"
            />
          </div>
        </div>
      </div>
      <div className="membership-panel">
        <Membership />
      </div>
      <Testimonials />
      <div className="color-panel bg-color-default" >
        <ProfessionalPresence />
      </div>
      <div className="bg-white">
        <JoinNow />
      </div>

      <div className="color-panel">
        <ResourcesSection />
      </div>
    </Fragment>
  );
};

export default Home;
