import React from "react";
import Header from "../Header";
import ContactUs from "../ContactUs";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="overlay"></div> <Header />
        <div className="hero-content">
          <div>
            <h1>
              Building Exceptional Digital Solutions with Expert Precision
            </h1>
          </div>
          <div>
            <p>
              Delivering world-class software development services tailored{" "}
              <br />
              to your business needs.
            </p>

            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
