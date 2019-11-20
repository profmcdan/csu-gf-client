import React, { Fragment } from "react";
import resourceImg from "./images/resource-mock.png";

export default function ResourcesSection() {
  return (
    <Fragment>
      <div className="container">
        <div className="row bg-color-default">
          <div className="col">
            <p className="text-header text-center">Resources just for you</p>
          </div>
        </div>
        <div className="row resource-list">
          <div className="col-md-4 resource-content mb-3">
            <div className="resource-image-container">
              <img src={resourceImg} alt="" className="w-100" />
            </div>
            <div className="resource-title-container py-3">
              <h3 className="text-color-primary">
                C&amp;S FUTA Unification cares about you
              </h3>
            </div>
            <div className="resource-text-container text-csu-blue">
              <p className="text-justify">
                If you've looked at what other creators are doing on here, it
                can be daunting to see the different ways they leverage...
              </p>
              <a
                href="#"
                className="d-block text-csu-blue font-weight-bold"
                style={{ textDecoration: "underline" }}
              >
                Read More
              </a>
            </div>
          </div>

          <div className="col-md-4 resource-content mb-3">
            <div className="resource-image-container">
              <img src={resourceImg} alt="" className="w-100" />
            </div>
            <div className="resource-title-container py-3">
              <h3 className="text-color-primary">
                C&amp;S FUTA Unification cares about you
              </h3>
            </div>
            <div className="resource-text-container text-csu-blue">
              <p className="text-justify">
                If you've looked at what other creators are doing on here, it
                can be daunting to see the different ways they leverage...
              </p>
              <a
                href="#"
                className="d-block text-csu-blue font-weight-bold"
                style={{ textDecoration: "underline" }}
              >
                Read More
              </a>
            </div>
          </div>

          <div className="col-md-4 resource-content mb-3">
            <div className="resource-image-container">
              <img src={resourceImg} alt="" className="w-100" />
            </div>
            <div className="resource-title-container py-3">
              <h3 className="text-color-primary">
                C&amp;S FUTA Unification cares about you
              </h3>
            </div>
            <div className="resource-text-container text-csu-blue">
              <p className="text-justify">
                If you've looked at what other creators are doing on here, it
                can be daunting to see the different ways they leverage...
              </p>
              <a
                href="#"
                className="d-block text-csu-blue font-weight-bold"
                style={{ textDecoration: "underline" }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
