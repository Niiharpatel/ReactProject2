import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5 ">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-banner-content p-3 position-relative">
                <img
                  src="images/main-banner.jpg"
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link>Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </section>
    </>
  );
}
