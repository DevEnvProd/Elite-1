import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { NewsArticle } from '../types';

export const News = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <header className="mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gradient">Industry News</h1>
            <p className="text-white/60 max-w-xl text-lg">
              Stay ahead of the curve with the latest updates, regulatory changes, and technological breakthroughs in digital entertainment.
            </p>
          </header>

          <div className="space-y-12">
            {news.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group md:flex gap-8"
              >
                <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden rounded-2xl mb-4 md:mb-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                    <span className="flex items-center gap-1"><Tag size={12} /> {article.category}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-white/50 text-sm mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-sm font-bold text-accent group-hover:gap-4 transition-all">
                    Read Full Story <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-12">
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-serif font-bold mb-6">Categories</h3>
            <ul className="space-y-4">
              {['Industry Trends', 'Legal & Regulatory', 'Technology', 'Platform Updates', 'Market Analysis'].map((cat) => (
                <li key={cat}>
                  <a href="#" className="flex justify-between items-center text-sm text-white/60 hover:text-accent transition-colors">
                    {cat} <span className="text-[10px] bg-white/5 px-2 py-1 rounded">12</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-serif font-bold mb-6">Popular Posts</h3>
            <div className="space-y-6">
              {news.map((article) => (
                <a key={article.id} href="#" className="flex gap-4 group">
                  <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden">
                    <img src={article.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-tight group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <span className="text-[10px] text-white/30">{article.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
