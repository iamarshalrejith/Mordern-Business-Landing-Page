import React from "react";
import heroImg from "../assets/hero.png"; // Transparent hero image

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-32 pb-10 px-6 lg:px-12"
    >
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* Animated Badge */}
        <div className="flex items-center gap-2 bg-purple-100 w-fit px-5 py-2 rounded-full hover:bg-purple-200 transition-colors cursor-pointer shadow-sm">
          <span className="text-lg">✨</span>
          <span className="text-sm font-medium text-purple-700">
            Elevate Your Business Today
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight">
          Unlock <span className="text-teal-600">Limitless Growth</span>  
          <span className="block">with Smart Strategies.</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-700 text-lg md:text-xl max-w-xl">
          Gain powerful insights, boost conversions, and accelerate your success
          with our cutting-edge tools and expert-driven solutions.
        </p>

        {/* Email Input and Button */}
        <div className="flex gap-3 max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-teal-300 transition-all shadow-sm"
          />

          <button className="bg-gradient-to-r from-purple-500 to-teal-500 px-6 py-4 rounded-xl text-white hover:opacity-90 transition-all hover:shadow-lg">
            Get Started →
          </button>
        </div>
      </div>

      {/* Right Column - Hero Image with Blended Background */}
      <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center">
        <div className="relative">
          {/* Gradient Behind Image */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-300/40 to-purple-300/40 rounded-lg blur-3xl opacity-50 -z-10"></div>

          {/* Hero Image */}
          <img
            src={heroImg}
            alt="Success team"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 drop-shadow-lg"
          />

          {/* Abstract Soft Blur */}
          <div className="absolute -top-10 -left-10 w-80 h-80 bg-purple-300/30 rounded-full blur-[100px] opacity-40 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
