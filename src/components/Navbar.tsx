'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

interface NavLink {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { label: 'תיק עבודות', href: '#portfolio' },
    { label: 'שירותים', href: '#services' },
    { label: 'מוצרים', href: '#products' },
    { label: 'המלצות', href: '#testimonials' },
    { label: 'שאלות נפוצות', href: '#faq' },
    { label: 'צור קשר', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      id="navbar"
      dir="rtl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-gray-900/50'
          : 'bg-black/80 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="ניווט ראשי"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand - Right Side (RTL) */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a
              href="#"
              className="flex items-center space-x-reverse space-x-3"
              aria-label="חזרה לדף הבית"
            >
              <div className="relative">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center border border-gray-600"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-2xl font-bold text-white">ש.י</span>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-transparent rounded-lg blur-sm"></div>
              </div>
              <div className="hidden md:block text-right">
                <h1 className="text-xl font-bold text-white tracking-tight">
                  ש.י סחר בנשק
                </h1>
                <p className="text-xs text-gray-400 font-medium">
                  מקצועיות ואמינות
                </p>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation - Left Side (RTL) */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-4 py-2 text-gray-300 font-medium text-sm transition-colors duration-300 hover:text-white group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                aria-label={link.label}
              >
                <span className="relative z-10">{link.label}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="navHover"
                />
                <motion.div
                  className="absolute bottom-0 right-0 left-0 h-0.5 bg-gradient-to-l from-gray-400 to-gray-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button - Left Side (RTL) */}
          <motion.button
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors duration-300"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isMobileMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-7 h-7" />
            ) : (
              <HiMenuAlt3 className="w-7 h-7" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Slides from Right (RTL) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={toggleMobileMenu}
              aria-hidden="true"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              id="mobile-menu"
              dir="rtl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-black/98 backdrop-blur-xl border-l border-gray-800 shadow-2xl lg:hidden overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="תפריט ניווט נייד"
            >
              <div className="p-6">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <motion.button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="סגור תפריט"
                  >
                    <HiX className="w-6 h-6" />
                  </motion.button>
                  <div className="text-right">
                    <h2 className="text-lg font-bold text-white">ש.י סחר בנשק</h2>
                    <p className="text-xs text-gray-400">תפריט ניווט</p>
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="space-y-2" aria-label="תפריט ניווט נייד">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block px-4 py-4 text-right text-gray-300 font-medium text-base rounded-lg hover:bg-gradient-to-l hover:from-gray-800 hover:to-gray-900 hover:text-white transition-all duration-300 border border-transparent hover:border-gray-700"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.02, x: -5 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={link.label}
                    >
                      <span className="flex items-center justify-between">
                        <motion.span
                          className="inline-block w-2 h-2 rounded-full bg-gray-600"
                          whileHover={{ scale: 1.5, backgroundColor: '#969696' }}
                        />
                        <span>{link.label}</span>
                      </span>
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile Menu Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 pt-6 border-t border-gray-800 text-right"
                >
                  <p className="text-sm text-gray-400 leading-relaxed">
                    שקד ירושלמי - איש יוצא שירות ביטחון כללי
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    סוחר נשק חוקי בין מדינות
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
