import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 cursor-pointer">
              {/* Logo */}
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 bg-red-600 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
              </div>
              {/* Business Name */}
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                GrowNow
              </span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Optimize, Automate, Succeed.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Our Services
            </h3>
            <ul className="mt-4 space-y-3">
              {["Web Design", "Marketing", "Automation", "Analytics"].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition"
                    >
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@grownow.com"
                  className="hover:text-blue-500 dark:hover:text-blue-400"
                >
                  info@grownow.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+911234567890"
                  className="hover:text-blue-500 dark:hover:text-blue-400"
                >
                  +91 1234567890
                </a>
              </li>
              <li>Address: 123 Growth St, Startup City, India</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Subscribe to our Newsletter
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Stay updated with our latest insights and offers.
          </p>
          <div className="mt-4 flex gap-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white bg-white dark:bg-gray-800 placeholder:text-gray-400 dark:placeholder:text-gray-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition font-semibold text-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Follow Us
          </h3>
          <div className="mt-4 flex justify-center space-x-6">
            {[
              { icon: <FaFacebookF size={20} />, color: "text-blue-600" },
              { icon: <FaTwitter size={20} />, color: "text-blue-400" },
              { icon: <FaInstagram size={20} />, color: "text-pink-600" },
              { icon: <FaLinkedinIn size={20} />, color: "text-blue-800" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} GrowNow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
