import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footertop">
        

        <div className="container">

          <div className="left">
            <div className="leftlogo">
              <img src="./logo__cdr.png" alt="" className="logofooter" />
            </div>

            <div className="footerdesc">
              <p>
                The Centre for Development and Research (CDR) is an independent
                development and research non-profit organization working for
                peace and sustainable development.
              </p>
            </div>

            <div className="regdetails">
              <p>
                Registered under the South Sudan Relief and Rehabilitation
                Commission (RRC)
              </p>
              <span>
                <strong>Registration No:</strong> (2040)
              </span>
              <span>
                {" "}
                <strong>TIN No:</strong> (101-161-323)
              </span>
            </div>
            <div className="contactdetails">
              <p>
                <strong>Tel:</strong> +211 921 200 050
              </p>

              <p>
                <strong>Email:</strong> cdrsouthsudan@gmail.com{" "}
              </p>
              <p>
                <strong>Location: </strong>Juba, South Sudan
              </p>
            </div>
          </div>
          <div className="middleone">
            <div className="middletitle">
              <h2>About Us</h2>
            </div>

            <div className="middlelinks">
              <ul>
                <Link>Our Story</Link>
                <Link>Our Mission</Link>
                <Link>Our Vision</Link>
                <Link>Our Values</Link>
                <Link>Legal Status</Link>
              </ul>
            </div>
          </div>

          <div className="middletwo">
            <div className="middletitle">
              <h2>Support</h2>
            </div>

            <div className="middlelinks">
              <ul>
                <Link>FAQ</Link>
                <Link>Contact Us</Link>
              </ul>
            </div>
          </div>
          <div className="right">
            <p>Stay up to date on the latest from CDR</p>
            <p>
              <form action="">
                <input type="text" />
                <input type="submit" />
              </form>
            </p>
          </div>
        </div>
      </div>

      <div className="footerbottom">
        <div className="container">
          <div className="left">
          <p>Copyright © 2021 - 2025 All rights Reserved. </p>
          </div>
          <div className="right">
           <p>Design by sidneymatiko@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
