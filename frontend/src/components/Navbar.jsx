import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Mumbai, Maharashtra</span>
            <span className="hidden md:inline">GST: 27ACJPK5215E1ZT</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+918046077653" className="flex items-center gap-1 hover:text-blue-100 transition-colors">
              <Phone className="w-3 h-3" />
              <span>+91-8046077653</span>
            </a>
            <a href="mailto:info@maitreyeehydro.com" className="flex items-center gap-1 hover:text-blue-100 transition-colors">
              <Mail className="w-3 h-3" />
              <span className="hidden md:inline">info@maitreyeehydro.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">MH</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Maitreyee Hydro Systems</h1>
              <p className="text-xs text-gray-600">Since 2006</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors relative group ${
                  isActive(link.path) ? 'text-blue-600' : ''
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-[-8px] left-0 w-full h-0.5 bg-blue-600 transform transition-transform ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 rounded transition-colors ${
                  isActive(link.path) ? 'text-blue-600 bg-blue-50' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;