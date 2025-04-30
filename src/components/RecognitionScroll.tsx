import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Logo imports
import logo1 from '../assets/logos/Reliance.png';
import logo2 from '../assets/logos/TATA_AIG.png';
import logo3 from '../assets/logos/bajaj.png';
import logo4 from '../assets/logos/icici.png';
import logo5 from '../assets/logos/indus.png';
import logo6 from '../assets/logos/shriram.png';

const logos: string[] = [logo1, logo2, logo3, logo4, logo5, logo6];

// Slide content configuration
const slides = [
  {
    stat: '4 of Top 5',
    description: 'Automakers trust our solutions',
    color: 'from-cyan-500 to-blue-500',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    stat: '4+',
    description: 'Industry awards in 2023',
    color: 'from-teal-400 to-blue-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    stat: '4 Years',
    description: 'Best Employer for Diversity',
    color: 'from-blue-500 to-indigo-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
];

const RecognitionShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate the left-hand stats every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognized for excellence and innovation across multiple sectors
          </p>
        </div> */}

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Rotating Stat & Description */}
          <div className="w-10 md:w-1/3">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${slides[activeIndex].color} flex items-center justify-center text-white mb-6`}>
                {slides[activeIndex].icon}
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">
                {slides[activeIndex].stat}
              </h3>
              <p className="text-xl text-gray-600">
                {slides[activeIndex].description}
              </p>

              {/* Dot Indicators */}
              <div className="flex gap-2 mt-6">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${idx === activeIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Logo Marquee */}
          <div className="w-full md:w-2/3">
            <div className="relative w-full overflow-hidden py-4">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 z-10 pointer-events-none" />
              
              <motion.div
                className="flex"
                animate={{ x: ['0%', '-100%'] }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
              >
                {[...logos, ...logos].map((logo, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="min-w-[150px] h-[80px] flex items-center justify-center bg-white rounded-xl shadow-sm mx-4 p-4 hover:shadow-md transition-all"
                  >
                    <img 
                      src={logo} 
                      alt={`Logo ${idx % logos.length + 1}`} 
                      className="max-h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* <div className="mt-4 text-center">
              <p className="text-gray-500 text-sm">Hover to see logos in color</p>
            </div> */}
          </div>
        </div>

        {/* Accent elements */}
        <div className="hidden md:block">
          <div className="absolute left-0 -ml-20 mt-12 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute right-0 -mr-20 -mt-8 w-48 h-48 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionShowcase;