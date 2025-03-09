import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 shadow-md py-3' : 'py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home">ML Engineer</a>
        </div>
        
        <div className="lg:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="flex flex-col justify-between w-6 h-5"
          >
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
          </button>
        </div>
        
        <ul className={`lg:flex items-center space-x-8 ${
          isMobileMenuOpen 
            ? 'fixed inset-0 top-0 bg-primary flex flex-col items-center justify-center space-y-6 space-x-0 text-xl' 
            : 'hidden'
        }`}>
          {isMobileMenuOpen && (
            <button 
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 text-2xl"
            >
              ✕
            </button>
          )}
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-secondary transition-colors">Home</a></li>
          <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-secondary transition-colors">Skills</a></li>
          <li><a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-secondary transition-colors">Experience</a></li>
          <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-secondary transition-colors">Projects</a></li>
          <li><a href="#education" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-secondary transition-colors">Education</a></li>
          <li><a href="#achievements" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-secondary transition-colors">Achievements</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-secondary transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;