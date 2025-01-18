import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-50 to-green-100 text-black py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-green-800 text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-700">
              AgriConnect is dedicated to connecting farmers and agricultural
              enthusiasts with the tools and resources they need to succeed.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-green-800 text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/home"
                  className="hover:text-green-600 transition-colors text-black"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-green-600 transition-colors text-black"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-green-600 transition-colors text-black"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-green-600 transition-colors text-black"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-green-800 text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@agriconnect.com"
                  className="hover:text-green-600 transition-colors"
                >
                  support@agriconnect.com
                </a>
              </li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Agri Lane, Greenfield, USA</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-green-600 pt-4 text-center">
          <p className="text-gray-700">
            Copyright © {new Date().getFullYear()} - All rights reserved by
            AgriConnect.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
