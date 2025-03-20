import React from "react";
import Scheduleimg from "../assets/stats.webp";
import { IoIosArrowRoundForward } from "react-icons/io";

const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left - Image */}
        <div className="md:w-1/2 w-full">
          <img 
            src={Scheduleimg} 
            alt="Scheduling Solutions" 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right - Text Content */}
        <div className="md:w-1/2 w-full">
          <p className="text-blue-500 font-semibold uppercase tracking-wider dark:text-blue-400">
            Schedule
          </p>
          <h2 className="capitalize text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-4 mb-6">
            Streamline Your Business <br /> with Smart Scheduling Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Optimize your workflow with intelligent scheduling tools that help you manage 
            tasks efficiently, reduce conflicts, and boost productivity.
          </p>
          <a 
            href="#" 
            className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Explore Scheduling Features 
            <IoIosArrowRoundForward className="w-5 h-5"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
