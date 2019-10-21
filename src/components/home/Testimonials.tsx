import React, { Fragment } from 'react';
import CatImage from './images/sampleUser.png';

export default function Testimonials() {
  return (
    <Fragment>
      <div className="container testimonial-panel">
        <p className="membership-header">In the words of our members</p>
        <div className="testimonials">
          <div className="test-card">
            <p className="testi-test">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              voluptatibus, neque optio provident debitis, consequatur quaerat
              quam ex aut quasi beatae ad dolorum quas in enim. Quisquam
              eligendi quasi autem.
            </p>
            <div className="member">
              <img
                src={CatImage}
                height="80px"
                width="80px"
                alt="Thumbnail"
                className="img-thumbnail rounded-circle"
              />
              <div className="member-details">
                <h6>Oluwafemi Abiodun</h6>
                <span>Software Developer</span>
              </div>
            </div>
          </div>
          <div className="test-card">
            <p className="testi-test">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              voluptatibus, neque optio provident debitis, consequatur quaerat
              quam ex aut quasi beatae ad dolorum quas in enim. Quisquam
              eligendi quasi autem.
            </p>
            <div className="member">
              <img
                src={CatImage}
                height="80px"
                width="80px"
                alt="Thumbnail"
                className="img-thumbnail rounded-circle"
              />
              <div className="member-details">
                <h6>Temitayo Morakinyo</h6>
                <span>HCI PhD</span>
              </div>
            </div>
          </div>
          <div className="test-card">
            <p className="testi-test">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              voluptatibus, neque optio provident debitis, consequatur quaerat
              quam ex aut quasi beatae ad dolorum quas in enim. Quisquam
              eligendi quasi autem.
            </p>
            <div className="member">
              <img
                src={CatImage}
                height="80px"
                width="80px"
                alt="Thumbnail"
                className="img-thumbnail rounded-circle"
              />
              <div className="member-details">
                <h6>Tola Aanuoluwapo</h6>
                <span>CEO, Tanz Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
