import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const navLinks = [
  {
    name: 'Overview',
    id: 'overview'
  },
  {
    name: 'For Parents',
    id: 'parents'
  },
  {
    name: 'For Professionals',
    id: 'professionals'
  },
  {
    name: 'For Students',
    id: 'students'
  },
  {
    name: 'How It Works',
    id: 'how-it-works'
  },
  {
    name: 'FAQ',
    id: 'faq'
  }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-uts-navy shadow-lg py-3' : 'bg-uts-navy/95 backdrop-blur-sm py-5'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
            }>

            <span className="text-white font-bold text-lg md:text-xl tracking-wide">
              UTS STUDENT AI CONCIERGE
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) =>
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors">

                {link.name}
              </button>
            )}
            <a
              href="mailto:pamela.wong@utschools.ca?subject=Tell%20me%20about%20the%20UTS%20Student%20AI%20Concierge%20program"
              className="bg-uts-teal hover:bg-uts-teal/90 text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors shadow-md">

              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle menu">

              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="lg:hidden bg-uts-navy border-t border-uts-navy-light overflow-hidden">

            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) =>
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-uts-navy-light rounded-md">

                  {link.name}
                </button>
            )}
              <div className="pt-4">
                <a
                href="mailto:pamela.wong@utschools.ca?subject=Tell%20me%20about%20the%20UTS%20Student%20AI%20Concierge%20program"
                className="w-full bg-uts-teal hover:bg-uts-teal/90 text-white px-5 py-3 rounded-md text-base font-semibold transition-colors shadow-md block text-center">

                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}