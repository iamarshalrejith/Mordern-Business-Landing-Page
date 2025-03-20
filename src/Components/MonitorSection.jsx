import React from 'react';
import MonitorImg from '../assets/monitor-card.webp';
import { IoIosArrowRoundForward } from 'react-icons/io';

const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left - Text Content */}
        <div className="md:w-1/2 w-full">
          <p className="text-blue-500 font-semibold uppercase tracking-wider dark:text-blue-400">
            Monitor
          </p>
          <h2 className="capitalize text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-4 mb-6">
            Track & Optimize Your Business <br /> with Advanced Monitoring Tools
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get real-time insights, track performance, and ensure seamless operations with our monitoring solutions.
          </p>
          <a 
            href="#" 
            className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Explore Monitoring Features 
            <IoIosArrowRoundForward className="w-5 h-5"/>
          </a>
        </div>

        {/* Right - Image */}
        <div className="md:w-1/2 w-full">
          <img 
            src={MonitorImg} 
            alt="Monitoring Tools" 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default MonitorSection;
