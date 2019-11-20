import React, { Fragment } from "react";
import WhoIsHere from "./images/who-is-here.png";

export default function ProfessionalPresence() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p className="text-header text-center">Who is here?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-6">
            <div className="p-md-3">
              <img src={WhoIsHere} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="professional-list text-color-primary-alt pt-5">
              <h3>Writers</h3>
              <h3>Software Developers</h3>
              <h3>University Lecturers</h3>
              <h3>Architects</h3>
              <h3>Electrical Engineers</h3>
              <h3>Civil Engineers</h3>
              <h3>Surveyors</h3>
              <h3>Designers</h3>
              <h3 className="text-csu-blue professional-list-btn-wrapper">
                <a href="#" className="text-csu-blue">
                  See all
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
