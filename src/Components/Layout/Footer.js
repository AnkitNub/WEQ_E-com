import { Fragment } from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <footer className={classes.footer}>
        <div className={classes.footerContainer}>
          <div className={classes.footerSection}>
            <h3>About Us</h3>
            <p>Discover high-quality products with fast delivery.</p>
            <address>
              123 Main Street
              <br />
              City, State 12345
              <br />
              Phone: 123-456-7890
              <br />
              Email: info@example.com
            </address>
          </div>
          <div className={classes.footerSection}>
            <h3>Help</h3>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>
          <div className={classes.footerSection}>
            <h3>Social</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className={classes.copyRight}>
          <p>&copy; 2024 E-Commerce. All rights reserved.</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
