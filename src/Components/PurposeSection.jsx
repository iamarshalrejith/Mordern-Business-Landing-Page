import React from "react";

const PurposeSection = () => {
  const features = [
    {
      title: "Built for Impact",
      description:
        "We nurture a diverse team of designers, developers, and marketers to drive real results.",
    },
    {
      title: "In Sync with You",
      description:
        "We adapt to your workflows, ensuring a smooth and seamless collaboration experience.",
    },
  ];

  return (
    <section id="about" className="w-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
          {/* Heading Section */}
          <div className="space-y-4">
            <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wide">
              Achieve More
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Empowering Your Team for Success
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Our mission is to help teams collaborate, innovate, and grow with confidence.
            </p>
          </div>

          {/* Feature Boxes */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:bg-purple-50 dark:hover:bg-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mt-3">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
