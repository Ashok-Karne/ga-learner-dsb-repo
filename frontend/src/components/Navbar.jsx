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
    { name: 'Our Products', path: '/products' },
    { name: 'Profile', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs">
          <div className="flex items-center gap-4">
            <span>Mumbai, Maharashtra</span>
            <span className="hidden md:inline">GST No: 27ACJPK5215E1ZT</span>
            <span className="hidden md:inline bg-yellow-500 text-gray-900 px-2 py-0.5 rounded text-xs font-semibold">TrustSEAL Verified</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+918046077653" className="flex items-center gap-1 hover:text-blue-100">
              <Phone className="w-3 h-3" />
              <span>Call +91-8046077653</span>
            </a>
            <Button size="sm" className="bg-blue-700 hover:bg-blue-800 h-6 text-xs px-3">
              SEND EMAIL
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">MH</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Maitreyee Hydro Systems</h1>
              <p className="text-xs text-gray-600">Mumbai, Maharashtra</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded transition-colors ${
                  isActive(link.path) ? 'text-blue-600 bg-gray-50' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
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
                className={`block py-2 text-sm hover:bg-gray-50 px-4 rounded ${
                  isActive(link.path) ? 'text-blue-600 bg-gray-50 font-medium' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;