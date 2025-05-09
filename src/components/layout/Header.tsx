import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white dark:bg-neutral-900 shadow-medium py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-700 dark:text-primary-400">TEC</span>
            <span className="hidden md:inline-block text-lg font-semibold text-neutral-800 dark:text-white">
              Trackdown Engineering
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                    isActive 
                      ? 'text-primary-700 dark:text-primary-400' 
                      : 'text-neutral-700 dark:text-neutral-200'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Contact & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="tel:08037623715" 
              className="flex items-center space-x-2 text-sm text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Phone className="h-4 w-4" />
              <span>08037623715</span>
            </a>
            <ThemeToggle />
            <Button variant="default" size="default" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) => 
                    `py-3 px-2 text-base font-medium transition-colors ${
                      isActive 
                        ? 'text-primary-700 dark:text-primary-400' 
                        : 'text-neutral-700 dark:text-neutral-200'
                    }`
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
                <a 
                  href="tel:08037623715" 
                  className="flex items-center space-x-2 py-2 text-neutral-700 dark:text-neutral-200"
                >
                  <Phone className="h-5 w-5" />
                  <span>08037623715</span>
                </a>
                <a 
                  href="mailto:trackdownengineering@gmail.com"
                  className="flex items-center space-x-2 py-2 text-neutral-700 dark:text-neutral-200"
                >
                  <Mail className="h-5 w-5" />
                  <span>trackdownengineering@gmail.com</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};