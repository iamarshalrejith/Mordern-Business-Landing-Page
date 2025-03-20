import React from "react";
import { HiArrowRight } from "react-icons/hi";

const NewsLetterSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16" id="newsletter">
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl overflow-hidden shadow-lg">
        
        {/* Floating Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-3xl opacity-50"></div>

        <div className="relative px-6 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="text-white max-w-lg text-center md:text-left md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-gray-200 text-lg">
              Join our community and receive the latest insights, updates, and exclusive offers.
            </p>
          </div>

          {/* Right Content (Input and Button) */}
          <div className="relative z-10 w-full max-w-md md:w-1/2 md:ml-auto">
            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded-r-lg transition-all duration-300">
                Subscribe <HiArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
