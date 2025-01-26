import Link from "next/link";
import Logo from "../Logo";

import { socialIcons } from "@/public/assets/data/data";
import { footerLinks } from "@/public/assets/data/data";
import ContactUs from "../ContactUs";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer-main-wrapper">
        <div className="footer-main-content">
          <div className="footer-col1">
            <Logo />
            <div className="footer-icons">
              {socialIcons.map(({ icon, href }, index) => (
                <Link href={href} key={index}>
                  <span>
                    <img src={icon} alt="" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <ul>
            {footerLinks.map(({ text, href }, index) => (
              <Link href={href} key={index}>
                {" "}
                <li>{text}</li>{" "}
              </Link>
            ))}
          </ul>
        </div>
        <div className="footer-col3">
          <div className="footer-text-link-wrapper">
            {" "}
            <ContactUs />
            {/* <TextLink linkText="KEEP" href="#" bgcolor="black" /> */}
          </div>

          <small>
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
