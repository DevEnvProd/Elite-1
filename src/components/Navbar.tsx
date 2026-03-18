import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, Diamond } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Story', path: '/about' },
    { name: 'Guides', path: '/guides' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'News', path: '/news' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center pointer-events-none">
      <nav
        className={cn(
          'pointer-events-auto transition-all duration-500 glass-dark rounded-full border border-white/10 shadow-2xl flex items-center px-6 py-2 gap-8',
          scrolled ? 'py-2 scale-95' : 'py-3'
        )}
      >
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <Diamond className="w-6 h-6 text-accent group-hover:rotate-45 transition-transform duration-500" />
          <span className="hidden sm:block text-sm font-serif font-bold tracking-wider text-gradient uppercase">
            Elite Hub
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[10px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-accent',
                location.pathname === link.path ? 'text-accent' : 'text-white/60'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 focus-within:border-accent/50 transition-all">
          <Search className="w-3.5 h-3.5 text-white/40 mr-2" />
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-[10px] font-bold uppercase tracking-wider focus:outline-none w-16 focus:w-32 transition-all text-white"
          />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute top-full mt-4 left-0 right-0 glass-dark rounded-3xl p-6 flex flex-col gap-4 md:hidden border border-white/10"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-serif font-bold py-2 border-b border-white/5',
                    location.pathname === link.path ? 'text-accent' : 'text-white/70'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 mt-2">
                <Search className="w-4 h-4 text-white/40 mr-3" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-transparent text-sm focus:outline-none w-full text-white"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
