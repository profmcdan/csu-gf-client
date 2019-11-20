import React, { Fragment } from "react";

export default function JoinNow() {
  return (
    <Fragment>
      <div className="container py-5">
        <div className="row">
          <div className="col text-center" style={{ paddingTop: '50px', paddingBottom: '50px'}}>
            <p className="text-header text-center py-4 px-2">
              Join 400+ C&amp;S FUTA Unification <br/> graduates
            </p>
            <button
              type="button"
              className="btn btn-rounded rounded btn-main px-4"
              style={{ backgroundColor: '#0c4669', borderColor: '#0c4669' }}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
