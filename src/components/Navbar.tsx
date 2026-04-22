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

  useEffect(() => {
    // Prevent background scroll when mobile menu is open
    if (isOpen) {
      const prev = document.body.style.overflow;
      // ensure the menu appears from the top of the viewport
      try { window.scrollTo({ top: 0, left: 0 }); } catch (e) {}
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

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

        {/* Desktop Nav (use xl so tablets like iPad use mobile menu) */}
        <div className="hidden xl:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[11px] uppercase tracking-[0.2em] text-obsidian/70 hover:text-obsidian focus:text-obsidian transition-colors duration-700 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-obsidian transition-all duration-700 group-hover:w-full group-focus:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Search and cart removed per request */}

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-obsidian z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
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
            id="mobile-menu"
            className="fixed inset-0 backdrop-blur-sm bg-black/40 z-40 flex items-start justify-center pt-8"
          >
            <div className="w-full max-w-[420px] mx-4">
              <div className="relative bg-black text-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh]">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="absolute top-4 right-4 p-3 text-white/80 hover:text-white focus:text-white"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>

                <div className="px-6 pt-8 pb-6 overflow-y-auto max-h-[80vh]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-xl font-serif tracking-widest">MOTIVA</div>
                    <div className="text-sm uppercase text-white/80">EN</div>
                  </div>

                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.45 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className="text-2xl font-serif text-white/90 hover:text-[#D4AF37] focus:text-[#D4AF37] transition-colors duration-300"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-sm text-white/60 text-center">Explore our collections and projects — crafted with intention.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
