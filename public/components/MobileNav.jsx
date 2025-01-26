"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import ContactUs from "./ContactUs";

const MobileNav = () => {
  return (
    <motion.div
      className="mobileNav"
      initial={{ opacity: 0, y: -1 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        // delay: 0.000,
        ease: "easeOut"
      }}
    >
      {/* <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
       
          <li>
            <a href="#contact-us">Contact us</a>
          </li>
        </ul> */}
      <div id="myLinks">
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#portfolio">PORTFOLIO</a>
      </div>

      <div className="nav-invite-btn">
        <i>Scale Your Vision, Build Your Future</i>
        {/* <ContactUs /> */}
      </div>
    </motion.div>
  );
};

export default MobileNav;
