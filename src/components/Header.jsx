import React from 'react';
import Button from './Button';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 150;
      const scrollPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
<div className='flex justify-between items-center py-4 px-16'>
      <div className="w-16 cursor-pointer"><img className='w-16' src="/ahead.jpg" alt="logo" /></div>
      <div className="flex justify-center items-center gap-8">
        <span onClick={() => scrollToSection("scroller")} className='cursor-pointer'>Emotions</span>
        <span onClick={() => scrollToSection("meet")} className='cursor-pointer'>Manifesto</span>
        <span onClick={() => scrollToSection("selfaw")} className='cursor-pointer'>Self-awareness test</span>
        <span onClick={() => scrollToSection("work")} className='cursor-pointer'>Work with us</span>
      </div>
      <div className="cursor-pointer"><Button text="Download App"/></div>
    </div>
  )
}

export default Header
