import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { companyInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MH</span>
              </div>
              <h3 className="text-white font-bold text-lg">Maitreyee Hydro</h3>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner in hydro solutions since 2006. Quality products and exceptional service.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Steam Bath Systems</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Sauna Bath Systems</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Swimming Pool Equipment</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Booster Pumps</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Hydro Pneumatic Systems</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-blue-400 transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-blue-400 transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <p className="mt-2 text-gray-500">
            GST No: {companyInfo.gstNo} | {companyInfo.legalStatus}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;