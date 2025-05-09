import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Trackdown Engineering</h3>
            <p className="text-neutral-300 mb-4">
              Registered Nigerian engineering firm specializing in infrastructure and engineering systems since 2015.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-secondary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-secondary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-secondary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-secondary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Infrastructure Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Engineering Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Construction Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Consultancy Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-secondary-400" />
                <span className="text-neutral-300">
                  <a href="tel:08037623715" className="hover:text-white transition-colors">
                    08037623715
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-secondary-400" />
                <span className="text-neutral-300">
                  <a href="mailto:trackdownengineering@gmail.com" className="hover:text-white transition-colors">
                    trackdownengineering@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-secondary-400" />
                <span className="text-neutral-300">
                  Office: Suite SF 7, Kaduna Capital Plaza, Alkali Road, Kaduna<br />
                  Perm Address: NO M13, Commissioner Road, Unguwan Dosa, Kaduna
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-700 text-neutral-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Trackdown Engineering & Construction Ltd. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#privacy" className="mr-4 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};