import React from 'react';
import { Link } from 'react-router-dom';
import { Diamond, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <Diamond className="w-6 h-6 text-accent" />
            <span className="text-lg font-serif font-bold tracking-wider text-gradient uppercase">
              Elite Hub
            </span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            Your premier destination for luxury entertainment reviews, expert guides, and the latest industry insights.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-accent hover:text-primary rounded-full transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-accent hover:text-primary rounded-full transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-accent hover:text-primary rounded-full transition-all">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><Link to="/reviews" className="hover:text-accent transition-colors">Platform Reviews</Link></li>
            <li><Link to="/guides" className="hover:text-accent transition-colors">Game Guides</Link></li>
            <li><Link to="/news" className="hover:text-accent transition-colors">Industry News</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><a href="#" className="hover:text-accent transition-colors">Contact Support</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Responsible Gaming</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-white font-bold mb-6">Disclaimer</h4>
          <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg">
            <span className="text-accent font-bold text-xl block mb-2">18+ Only</span>
            <p className="text-xs text-white/60 leading-tight">
              Entertainment involves risk. Please play responsibly. If you or someone you know has a problem, seek help immediately.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
        <p>© 2026 Elite Entertainment Hub. All rights reserved.</p>
        <div className="flex gap-6">
          <span>BeGambleAware.org</span>
          <span>GamCare Certified</span>
        </div>
      </div>
    </footer>
  );
};
