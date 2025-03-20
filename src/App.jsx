import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import CompanyList from './Components/CompanyList'
import PurposeSection from './Components/PurposeSection'
import FeatureSection from './Components/FeatureSection'
import ScheduleSection from './Components/ScheduleSection'
import MonitorSection from './Components/MonitorSection'
import PricingSection from './Components/PricingSection'
import ServiceSection from './Components/ServiceSection'
import TestimonialSection from './Components/TestimonialSection'
import NewsLetterSection from './Components/NewsLetterSection'
import Footer from './Components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className={`relative min-h-screen overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
      {/* Gradient Background */}
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10 dark:from-indigo-500/40 dark:to-pink-500/40'></div>
      
      {/* Dark Mode Toggle Button */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full shadow-lg"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        <CompanyList />
        <PurposeSection />
        <FeatureSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServiceSection />
        <TestimonialSection />
        <NewsLetterSection />
        <Footer />
      </div>
    </main>
  )
}

export default App
