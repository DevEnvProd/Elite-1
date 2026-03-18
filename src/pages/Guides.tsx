import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Clock, BarChart } from 'lucide-react';
import { Guide } from '../types';

export const Guides = () => {
  const [guides, setGuides] = useState<Guide[]>([]);

  useEffect(() => {
    fetch('/api/guides')
      .then(res => res.json())
      .then(data => setGuides(data));
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gradient">Expert Guides</h1>
        <p className="text-white/60 max-w-2xl text-lg">
          Master the art of digital entertainment with our comprehensive guides. From beginner basics to advanced strategies.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide, idx) => (
          <motion.div
            key={guide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl group hover:border-accent/30 transition-all flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="bg-accent/10 text-accent text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {guide.category}
              </span>
              <BookOpen size={16} className="text-white/20" />
            </div>
            
            <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-accent transition-colors">
              {guide.title}
            </h3>
            <p className="text-white/50 text-sm mb-8 flex-1">
              {guide.excerpt}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest">
                <span className="flex items-center gap-1"><Clock size={12} /> {guide.readTime}</span>
                <span className="flex items-center gap-1"><BarChart size={12} /> {guide.difficulty}</span>
              </div>
              <button className="text-sm font-bold text-white hover:text-accent transition-colors">
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
