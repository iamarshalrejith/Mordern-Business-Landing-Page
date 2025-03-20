import React, { useState } from 'react';

const PricingSection = () => {
    const [productCount, setProductCount] = useState(1);

    // Ensure product count is at least 1
    const handleProductChange = (e) => {
        const value = Math.max(1, Number(e.target.value)); // Prevent values below 1
        setProductCount(value);
    };

    // Calculate prices dynamically with better scaling
    const startPrice = Math.max(100, (4000 * (productCount / 50)).toFixed(2)); // Minimum $100
    const businessPrice = Math.max(200, (7500 * (productCount / 50)).toFixed(2)); // Minimum $200

    return (
        <section className="px-6 py-20 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900" id="pricing">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    Flexible Pricing Plans
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Choose a plan that scales with your business.
                </p>

                {/* Product Count Selector */}
                <div className="flex justify-center items-center mb-10">
                    <label className="text-lg font-medium text-gray-700 dark:text-gray-200 mr-3">
                        Products:
                    </label>
                    <input 
                        type="number" 
                        value={productCount} 
                        onChange={(e) => setProductCount(Number(e.target.value))}
                        className="text-black dark:text-white bg-white dark:bg-gray-700 border-2 border-blue-500 rounded-md p-2 w-24 text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
                        min={1}
                    />
                </div>

                {/* Pricing Plans */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Starter Plan */}
                    <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 border-2 border-blue-500 dark:border-blue-400">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Starter Plan</h3>
                        <p className="text-4xl font-bold text-blue-500 dark:text-blue-400 mt-4">
                            ${startPrice} <span className="text-lg font-medium">/month</span>
                        </p>
                        <ul className="text-gray-600 dark:text-gray-300 mt-4 space-y-2 text-center">
                            <li>✅ Basic Features</li>
                            <li>✅ Up to <strong>{productCount}</strong> Products</li>
                            <li>✅ Email Support</li>
                        </ul>
                        <button className="mt-6 bg-blue-500 dark:bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                            Get Starter
                        </button>
                    </div>

                    {/* Business Plan */}
                    <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 border-2 border-blue-500 dark:border-blue-400">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Business Plan</h3>
                        <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mt-4">
                            ${businessPrice} <span className="text-lg font-medium">/month</span>
                        </p>
                        <ul className="text-gray-600 dark:text-gray-300 mt-4 space-y-2 text-center">
                            <li>✅ Advanced Features</li>
                            <li>✅ Up to <strong>{productCount * 2}</strong> Products</li>
                            <li>✅ Priority Support</li>
                        </ul>
                        <button className="mt-6 bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors">
                            Get Business
                        </button>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-12">
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                        Still have questions? Contact us to learn more about our pricing and features.
                    </p>
                    <button className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white px-6 py-3 mt-6 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
