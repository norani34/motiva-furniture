import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-alabaster text-obsidian pt-20 pb-10 border-t border-obsidian/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">
          <div>
            <Link to="/" className="text-3xl font-serif font-bold tracking-[0.2em] text-obsidian">
              MOTIVA
            </Link>
            <p className="text-muted text-sm leading-relaxed font-light max-w-xs mt-4">
              Thoughtfully crafted furniture for modern living — design that endures and comforts.
            </p>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-obsidian/60 mb-3">Follow</p>
              <div className="flex items-center space-x-4">
                <a href="https://www.instagram.com/motivafurniture?igsh=MTJkOTF2cWxzZnY4ZA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted hover:text-obsidian transition-colors duration-300">
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
                <a href="https://www.facebook.com/Motivafurniture1?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted hover:text-obsidian transition-colors duration-300">
                  <Facebook size={18} strokeWidth={1.5} />
                </a>
                <a href="https://www.tiktok.com/@motiva.furniture?_r=1&_d=f1edcaek3d9kdf&sec_uid=MS4wLjABAAAAibwtyggqsemWEHKEqYzXsEqDJujHAfeK8r3QeMCl2ODKwgxBTnEkQwHw2cbPI3T1&share_author_id=7491472696518280210&sharer_language=en&source=h5_m&u_code=d22hak2460ke7k&item_" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted hover:text-obsidian transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-95"><path d="M16.5 3h2.5v3.6c.8.4 1.5 1 2 1.7-.7.3-1.4.6-2.2.8V7.3c-.5-.3-1.1-.6-1.8-.7V3zM9.5 3h2v10.9c-.8 0-1.6-.1-2.4-.4-1.2-.5-2.2-1.6-2.7-2.8-.7-1.8-.4-3.9.9-5.3C8.1 3.6 8.8 3 9.5 3zM12 21.8c-3.3 0-5.9-2.7-5.9-6s2.6-6 5.9-6v2.1c-2.1 0-3.9 1.8-3.9 3.9s1.8 3.9 3.9 3.9 3.9-1.8 3.9-3.9h2.1c0 3.3-2.6 6-5.9 6z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6 text-obsidian font-medium">Projects</h4>
            <ul className="space-y-3 text-sm text-muted font-light">
              <li><Link to="/collections" className="hover:text-obsidian transition-colors duration-300">Dining Rooms</Link></li>
              <li><Link to="/collections" className="hover:text-obsidian transition-colors duration-300">Living Sets</Link></li>
              <li><Link to="/collections" className="hover:text-obsidian transition-colors duration-300">Reception</Link></li>
              <li><Link to="/collections" className="hover:text-obsidian transition-colors duration-300">Bedrooms</Link></li>
              <li><Link to="/collections" className="hover:text-obsidian transition-colors duration-300">L-Shape</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6 text-obsidian font-medium">Company</h4>
            <ul className="space-y-3 text-sm text-muted font-light mb-6">
              <li><Link to="/about" className="hover:text-obsidian transition-colors duration-300">Client Journal</Link></li>
              <li><Link to="/gallery" className="hover:text-obsidian transition-colors duration-300">Architectural Signatures</Link></li>
              <li><Link to="/contact" className="hover:text-obsidian transition-colors duration-300">Begin the Conversation</Link></li>
              <li><Link to="/contact" className="hover:text-obsidian transition-colors duration-300">Careers</Link></li>
            </ul>
            <Link to="/contact" className="inline-flex items-center text-sm text-obsidian/80 hover:text-obsidian transition-colors">
              Contact Us
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-obsidian/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted font-light tracking-wide">
          <p className="mb-3 md:mb-0">© {new Date().getFullYear()} Motiva Furniture. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy" className="hover:text-obsidian transition-colors duration-300">Privacy</a>
            <a href="/terms" className="hover:text-obsidian transition-colors duration-300">Terms</a>
            <a href="/cookies" className="hover:text-obsidian transition-colors duration-300">Cookies</a>
            <span className="text-obsidian/40">Built with care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
