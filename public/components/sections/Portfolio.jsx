import React, { Fragment } from "react";
import Link from "next/link";
import { portfolioData } from "@/public/assets/data/data";

const Portfolio = () => {
  return (
    <div className="portfolio-section">
      <h3 className="heading">
        Portfolio <span>.</span>
      </h3>
      <div className="portfolio" id="portfolio">
        {portfolioData.map(({ image, title, href }, index) => (
          <div key={title} className="portfolio-wrapper">
            <div className="overlay"></div> <img src={image} alt={title} />
            <div className="portfolio-img-text">
              <h6>{title}</h6>
              <Link href={href}>
                <p>View project</p>

                <img src="/assets/images/right-arrow.svg" alt="arrow" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
