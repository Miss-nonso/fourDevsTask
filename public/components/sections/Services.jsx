import React from "react";
import { servicesData } from "@/public/assets/data/data";

const Services = () => {
  return (
    <div className="services" id="services">
      <h3 className="heading">
        Our Services <span>.</span>
      </h3>

      <div className="services-container">
        {servicesData.map(({ service, icon, description }, index) => (
          <div key={service} className="service-wrapper">
            <img src={icon} alt={service} />
            <div className="service-text">
              <h6>{service}</h6>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
