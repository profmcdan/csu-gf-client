import React, { Fragment } from 'react';
import CatImage from './images/sampleUser.png';

export default function Testimonials() {
  return (
    <Fragment>
      <div className="container testimonial-panel">
        <p className="membership-header mb-5">In the words of our members</p>
        <div className="testimonials row">
          <div className="col-md-4">
            <div className="test-card pb-5 pt-2 mb-3">
              <p className="testi-test text-color-secondary text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                voluptatibus, neque optio provident debitis, consequatur quaerat
                quam ex aut quasi beatae ad dolorum quas in enim. Quisquam
                eligendi quasi autem.
              </p>
              <div className="member d-flex align-items-center mt-4">
                <img
                  src={CatImage}
                  width="50px"
                  style={{ height: '50px' }}
                  alt="Thumbnail"
                  className="img-thumbnail rounded-circle p-0"
                />
                <div className="member-details text-color-secondary">
                  <h6 className="m-0">Oluwafemi Abiodun</h6>
                  <span><small>Software Developer</small></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="test-card pb-5 pt-2 mb-3">
              <p className="testi-test text-color-secondary text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                voluptatibus, neque optio provident debitis, consequatur quaerat
                quam ex aut quasi beatae ad dolorum quas in enim. Quisquam
                eligendi quasi autem.
              </p>
              <div className="member d-flex align-items-center mt-4">
                <img
                  src={CatImage}
                  width="50px"
                  style={{ height: '50px' }}
                  alt="Thumbnail"
                  className="img-thumbnail rounded-circle p-0"
                />
                <div className="member-details text-color-secondary">
                  <h6 className="m-0">Temitayo Morakinyo</h6>
                  <span><small>HCI PhD</small></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="test-card pb-5 pt-2 mb-3">
              <p className="testi-test text-color-secondary text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                voluptatibus, neque optio provident debitis, consequatur quaerat
                quam ex aut quasi beatae ad dolorum quas in enim. Quisquam
                eligendi quasi autem.
              </p>
              <div className="member d-flex align-items-center mt-4">
                <img
                  src={CatImage}
                  width="50px"
                  style={{ height: '50px' }}
                  alt="Thumbnail"
                  className="img-thumbnail rounded-circle p-0"
                />
                <div className="member-details text-color-secondary">
                  <h6 className="m-0">Tola Aanuoluwapo</h6>
                  <span><small>CEO, Tanz Technologies</small></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
