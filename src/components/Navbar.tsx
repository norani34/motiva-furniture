import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/collections' },
    { name: 'Architectural Signatures', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-1000 ${
        scrolled ? 'bg-alabaster/90 backdrop-blur-xl py-4 border-b border-obsidian/10' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-[0.2em] text-obsidian z-50">
          MOTIVA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[11px] uppercase tracking-[0.2em] text-obsidian/70 hover:text-obsidian transition-colors duration-700 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-obsidian transition-all duration-700 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Search and cart removed per request */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-obsidian z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-alabaster z-40 flex items-center justify-center"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.path}
                    className="text-4xl font-serif text-obsidian hover:text-obsidian/50 transition-colors duration-700"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
