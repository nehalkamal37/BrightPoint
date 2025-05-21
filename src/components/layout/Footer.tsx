import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">BrightPoint<span className="text-orange-500">Summit</span></h3>
            <p className="mb-4 text-gray-300">
              Empowering businesses with innovative software solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-orange-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-orange-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-orange-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-orange-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-orange-400 transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-orange-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#custom-software" className="text-gray-300 hover:text-orange-400 transition-colors">Custom Software</Link>
              </li>
              <li>
                <Link to="/services#web-development" className="text-gray-300 hover:text-orange-400 transition-colors">Website Development</Link>
              </li>
              <li>
                <Link to="/services#mobile-apps" className="text-gray-300 hover:text-orange-400 transition-colors">Mobile Applications</Link>
              </li>
              <li>
                <Link to="/services#management-software" className="text-gray-300 hover:text-orange-400 transition-colors">Management Software</Link>
              </li>
              <li>
                <Link to="/services#database-solutions" className="text-gray-300 hover:text-orange-400 transition-colors">Database Solutions</Link>
              </li>
              <li>
                <Link to="/services#api-development" className="text-gray-300 hover:text-orange-400 transition-colors">API Development</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-orange-400 mt-0.5" />
                <span className="text-gray-300">1337 Whitewater Rd, Memphis, Tennessee 38117</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-400" />
                <a href="tel:+19016970621" className="text-gray-300 hover:text-orange-400 transition-colors">+1 (901) 697-0621</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-400" />
                <a href="tel:+13018524616" className="text-gray-300 hover:text-orange-400 transition-colors">+1 (301) 852-4616</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-orange-400" />
                <a href="mailto:info@brightpointsummit.com" className="text-gray-300 hover:text-orange-400 transition-colors">info@brightpointsummit.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-blue-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {currentYear} BrightPoint Summit. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-orange-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-orange-400 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;