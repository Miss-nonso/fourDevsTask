"use client";
import React from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

import { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header>
      <div className="header-content-wrapper">
        {" "}
        <Logo />
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          {/* <li>
            <a href="#testimonial">Testimonial</a>
          </li> */}
          <li>
            <a href="#contact-us">Contact us</a>
          </li>
        </ul>
        <div
          className="hamburger-wrapper"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          {" "}
          {!mobileMenu ? (
            <img
              src="/assets/images/icons/hamburger.svg"
              alt="hamburger"
              className="mobile-menu-trigger"
            />
          ) : (
            <img src="/assets/images/icons/close.svg" alt="close" className="mobile-menu-close" />
          )}
        </div>
        {mobileMenu && <MobileNav />}
      </div>
    </header>
  );
};

export default Header;
