import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          {/* About VetriKart */}
          <div className="col-md-4 mb-3">
            <h5 className="text-primary">About VetriKart</h5>
            <p className="lead fs-6 fw-light">
              VetriKart is your one-stop online shopping destination, offering a
              wide range of products including mobiles, furniture, appliances,
              fashion, groceries, and electronics. Enjoy seamless online
              shopping with fast and reliable shipping.
            </p>
          </div>

          {/* Shop by Categories */}
          <div className="col-md-4 mb-3">
            <h5 className="text-primary">Shop by Categories</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/mobile-section"
                  className="text-white text-decoration-none"
                >
                  Mobile
                </Link>
              </li>
              <li>
                <Link
                  to="/furniture-section"
                  className="text-white text-decoration-none"
                >
                  Furniture
                </Link>
              </li>
              <li>
                <Link
                  to="/appliance-section"
                  className="text-white text-decoration-none"
                >
                  Appliance
                </Link>
              </li>
              <li>
                <Link
                  to="/fashion-section"
                  className="text-white text-decoration-none"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  to="/grocery-section"
                  className="text-white text-decoration-none"
                >
                  Grocery
                </Link>
              </li>
              <li>
                <Link
                  to="/electronics-section"
                  className="text-white text-decoration-none"
                >
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support and Follow Us */}
          <div className="col-md-4 mb-3">
            <h5 className="text-primary">Customer Support</h5>
            <p>
              Email:
              <a
                href="mailto:support@vetrikart.com"
                className="text-white text-decoration-none"
              >
                support@vetrikart.com
              </a>
            </p>
            <p>
              Phone:
              <a
                href="tel:+1234567890"
                className="text-white text-decoration-none"
              >
                +1 234-567-890
              </a>
            </p>

            <h5 className="mt-3 text-primary">Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                className="text-white me-3"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-white me-3"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-white me-3"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-3 mt-3 border-top border-light">
          <p className="mb-0">
            © 2024 VetriKart. All Rights Reserved. Fast and reliable shipping
            guaranteed!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
