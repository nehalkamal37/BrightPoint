import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, X } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center">
          {/* Logo Image */}
<div className="overflow-hidden w-24 h-[60px rounded-lg shadow-lg">
  <img
    src="/logo2.jpg"
    alt="BrightPoint Summit Logo (text only)"
    className="w-full mt-[-10px]  /* adjust -40px */
               transform transition-transform duration-300
               hover:scale-105"
/>
</div>




{/*
          <img
            src="/logo2.jpg"              // adjust path as needed
            alt="BrightPoint Summit Logo"
            className="h-14 w-22 mr-2 mb-13 p-2 rounded-lg overflow-hidden shadow-lg 
            transition-transform duration-300 transform hover:scale-105 md:h-20 md:w-24"
          />
          */}

          {/* Site Title */}
          <span className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-blue-900'}`}>
            BrightPoint<span className="text-orange-500">Summit</span>
          </span>
        </Link>
        {/*
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              BrightPoint<span className="text-orange-500">Summit</span>
            </span>
          </Link>
*/}
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
            ) : (
              <MenuIcon className={`h-6 w-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-blue-900 hover:text-orange-300'
            }`}>
              Home
            </Link>
            <Link to="/about" className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-blue-900 hover:text-orange-300'
            }`}>
              About
            </Link>
            <Link to="/services" className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-blue-900 hover:text-orange-300'
            }`}>
              Services
            </Link>
            <Link to="/portfolio" className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-blue-900 hover:text-orange-300'
            }`}>
              Portfolio
            </Link>
            <Link to="/blog" className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-blue-900 hover:text-orange-300'
            }`}>
              Blog
            </Link>
            <Link to="/contact" className={`font-medium transition-colors ${
           isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-blue-900 hover:text-orange-300'

             /* isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-orange-300'  */
            }`}>
              Contact
            </Link>

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
            <Link 
              to="/" 
              className="font-medium text-gray-700 hover:text-blue-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-gray-700 hover:text-blue-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="font-medium text-gray-700 hover:text-blue-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="font-medium text-gray-700 hover:text-blue-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/blog" 
              className="font-medium text-gray-700 hover:text-blue-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-gray-700 hover:text-blue-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
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