import React from "react";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";

const services = [
  {
    icon: <BsStack className="w-14 h-14 text-indigo-600 dark:text-indigo-400" />,
    title: "Web Design",
    description: "We create stunning and responsive websites tailored to your needs.",
    link: "#learn-more",
  },
  {
    icon: <HiLightBulb className="w-14 h-14 text-amber-400 dark:text-amber-300" />,
    title: "Ad-Creatives",
    description: "Boost your brand with high-converting ad creatives and graphics.",
    link: "#learn-more",
  },
  {
    icon: <FiSettings className="w-14 h-14 text-red-400 dark:text-red-300" />,
    title: "Automation",
    description: "Streamline your workflow with AI-powered automation tools.",
    link: "#learn-more",
  },
  {
    icon: <BiTime className="w-14 h-14 text-cyan-400 dark:text-cyan-300" />,
    title: "Infographics",
    description: "Transform data into beautiful and informative visuals.",
    link: "#learn-more",
  },
];

const ServiceSection = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900" id="services">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
          Future of Support with a New Shape
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
          Discuss your project with us, and let's make it happen!
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-4 flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>
            <a
              href={service.link}
              className="mt-4 px-4 py-2 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-600 dark:border-indigo-400 rounded-md hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition duration-300"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
