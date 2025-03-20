import React from 'react'
import amazon from "../assets/amazon.png"
import sitepoint from "../assets/sitepoint.png"
import meundies from "../assets/meundies.png"
import slack from "../assets/slack.png"
import woocommerece from "../assets/woocommerce.png"

const CompanyList = () => {
    const logos = [amazon, sitepoint, meundies, slack, woocommerece];

    return (
        <div className='w-full container mx-auto py-20 gap-7 flex sm:flex-row flex-col sm:items-center items-start overflow-hidden'>
            {/* Left Text Box */}
            <div className='w-[300px] shrink-0 text-gray-600 dark:text-gray-300 border-l-4 border-blue-500 bg-white dark:bg-gray-800 px-7 py-2 z-10 sm:text-base text-xl font-semibold text-left sm:ml-1 md:ml-4'>
                Proud Partner at <br /> Hubspot & Segment
            </div>

            {/* Moving Logos */}
            <div className='flex animate-marquee whitespace-nowrap'>
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt="company logo" 
                        className="mx-12 h-7 w-36 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all dark:opacity-80 dark:hover:opacity-100"  
                    />
                ))}

                {/* Duplicate Logos for Smooth Animation */}
                {logos.map((logo, index) => (
                    <img key={`duplicate-${index}`} src={logo} alt="company logo" 
                        className="mx-12 h-7 w-36 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all dark:opacity-80 dark:hover:opacity-100"  
                    />
                ))}
            </div>
        </div>
    );
};

export default CompanyList;
