import React from "react";

const FeatureSection = () => {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty details."
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models."
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engagement models, pricing, and billing."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading text */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          How can we help your business?
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Helping you grow smarter and faster.
        </p>
      </div>

      {/* Feature box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col text-center items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-all"
          >
            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 mb-4 text-3xl">
              {feature.icon}
            </div>
            {/* Title */}
            <h3 className="text-2xl font-medium text-gray-800 dark:text-white mb-2">
              {feature.title}
            </h3>
            {/* Description */}
            <p className="text-gray-500 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-12">
        <button className="relative bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
          Become a Partner
          {/* Glow Effect */}
          <div className="absolute inset-0 w-full h-full rounded-full bg-blue-600/30 blur-xl -z-10"></div>
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
