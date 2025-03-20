import { useState, useEffect } from "react";
import { HiX, HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const closeMenuOnOutsideClick = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenuOnOutsideClick);
    return () => document.removeEventListener("click", closeMenuOnOutsideClick);
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-all">
      <div className="w-full container mx-auto flex items-center px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer pl-10">
          <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 90,35 90,75 50,100 10,75 10,35" fill="url(#grad1)" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#8A2BE2", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#20B2AA", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <text x="50%" y="55%" fontSize="30" fontWeight="bold" fill="white" textAnchor="middle" transform="rotate(-5, 50, 50)">
              M
            </text>
          </svg>
          <span className="text-lg font-bold text-gray-900 dark:text-white">GrowNow</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-button md:hidden ml-auto pr-5 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX className="size-6 text-gray-900 dark:text-white" />
          ) : (
            <HiMenu className="size-6 text-gray-900 dark:text-white" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center gap-10 m-auto">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                activeLink === link.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Get in Touch Button */}
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
          <a href="#newsletter">Get in Touch</a>
        </button>
      </div>

      {/* Background Overlay (Blur Effect) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-lg z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu fixed top-0 left-0 w-3/4 h-full bg-white dark:bg-gray-900 border-t border-gray-100 py-6 shadow-lg backdrop-blur-md transform transition-transform duration-300 ease-in-out md:hidden z-50 flex flex-col items-center">
          <div className="w-full flex flex-col items-center space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-3 w-full text-center transition-colors ${
                  activeLink === link.href
                    ? "text-blue-600 bg-gray-100 dark:bg-gray-800"
                    : "text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button className="w-3/4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
              <a href="#newsletter">Get in Touch</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
