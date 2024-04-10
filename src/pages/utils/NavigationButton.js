"use client"
import React, { useState, useEffect } from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
const NavigationButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 5000;
      setIsVisible(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className=''>
      {isVisible && (
        <button
          className="bounce-button flex items-center fixed bottom-5 text-5xl right-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 z-40 rounded-full"
          onClick={scrollToTop}
        >
          <KeyboardDoubleArrowUpIcon />
        </button>
      )}
    </div>
  )
}

export default NavigationButton
