import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, X } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to determine desktop nav link styles
  const getLinkClasses = () => {
    if (!isScrolled && isHome) {
      return 'text-white hover:text-orange-300';
    }
    return isScrolled
      ? 'text-gray-700 hover:text-blue-900'
      : 'text-blue-900 hover:text-orange-300';
  };

  // Helper for mobile menu icon color
  const getIconColor = () => {
    if (isScrolled) return 'text-blue-900';
    return isHome ? 'text-white' : 'text-blue-900';
  };

  return (
    // ... (keep all the imports and initial code the same until the return statement)

  <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
  }`}>

    <div className="container mx-auto px-4 md:px-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          {/* Logo Image - Modified for better mobile behavior */}
          <div className="w-12 h-12 md:w-24 md:h-[60px] flex-shrink-0">
            <img
              src="/logo2.jpg"
              alt="BrightPoint Summit Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Site Title - Adjusted spacing */}
          <span className={`ml-2 text-xl md:text-2xl font-bold ${
            !isScrolled && isHome ? 'text-white' : 'text-blue-900'
          }`}>
            BrightPoint<span className="text-orange-500">Summit</span>
          </span>
        </Link>

   {/*
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
    }`}>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">


          
            {/* Logo Image 
            <div className="overflow-hidden w-24 h-[60px] mr-[7px] rounded-lg shadow-lg">
              <img
                src="/logo2.jpg"
                alt="BrightPoint Summit Logo (text only)"
                className="w-full mt-[-14px] transform transition-transform duration-300 hover:scale-105"
              />
            </div>
*/}
            {/* Site Title */}
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${getIconColor()}`} />
            ) : (
              <MenuIcon className={`h-6 w-6 ${getIconColor()}`} />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {['/', '/about', '/services', '/portfolio', '/blog', '/contact','/flyer'].map((path, idx) => {
              const labels = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact','Flyer'];
              return (
                <Link
                  key={path}
                  to={path}
                  className={`font-medium transition-colors ${getLinkClasses()}`}>
                  {labels[idx]}
                </Link>
              );
            })}

            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.location.href = '/quote'}
            >
              Get a Quote
            </Button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <nav className="flex flex-col space-y-4 bg-white rounded-lg p-4 shadow-lg">
            {['/', '/about', '/services', '/portfolio', '/blog', '/contact'].map((path, idx) => {
              const labels = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'];
              return (
                <Link
                  key={path}
                  to={path}
                  className="font-medium text-gray-700 hover:text-blue-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {labels[idx]}
                </Link>
              );
            })}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                window.location.href = '/quote';
                setIsMenuOpen(false);
              }}
              className="w-full"
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
