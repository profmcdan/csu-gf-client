import React, { Fragment } from 'react';

export default function Membership() {
  return (
    <Fragment>
      <div className="container membership">
        <div className="memberships">
          <p className="membership-header">Why Membership?</p>
          <p style={{ textAlign: 'center' }}>
            This platform provides a leverage for members to deveop professional
            connections, share information and discover resources.
          </p>
        </div>
        <div className="membership-values">
          <div className="m-value-item col-3">
            <p className="value-header">Collaboration</p>
            <p>
              Engage other graduates, share needed ideas and information for
              self development and growth
            </p>
          </div>
          <div className="m-value-item col-3">
            <p className="value-header">Growth</p>
            <p>
              Mentor or get mentored on professional and personal growth with
              actionable information
            </p>
          </div>
          <div className="m-value-item col-3">
            <p className="value-header">Future</p>
            <p>
              Your life after school is important to us and we would like to
              know what we can do to help as a team
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
