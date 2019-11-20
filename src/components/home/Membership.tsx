import React, { Fragment } from 'react';

export default function Membership() {
  return (
    <Fragment>
      <div className="container membership">
        <div className="row memberships">
          <div className="col-12">
          <p className="text-header">Why Membership?</p>
          <p style={{ textAlign: 'center' }} className="text-color-secondary">
            This platform provides a leverage for members to develop professional
            connections, share information and discover resources.
          </p>
          </div>
        </div>
        <div className="row membership-values">
          <div className="m-value-item col-md-4">
            <p className="value-header">Collaboration</p>
            <p className="text-color-secondary">
              Engage other graduates, share needed ideas and information for
              self development and growth
            </p>
          </div>
          <div className="m-value-item col-md-4">
            <p className="value-header">Growth</p>
            <p className="text-color-secondary">
              Mentor or get mentored on professional and personal growth with
              actionable information
            </p>
          </div>
          <div className="m-value-item col-md-4">
            <p className="value-header">Future</p>
            <p className="text-color-secondary">
              Your life after school is important to us and we would like to
              know what we can do to help as a team
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
