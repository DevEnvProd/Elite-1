import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Tag } from 'lucide-react';
import { newsArticles } from '../data/newsData';

export const News = () => {
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

          <div className="space-y-16">
            {[...newsArticles].reverse().map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="group flex flex-col gap-8 pb-16 border-b border-white/10 last:border-0"
              >
                <div className="w-full aspect-[21/9] overflow-hidden rounded-2xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                    <span className="flex items-center gap-1"><Tag size={12} /> {article.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>
                  <div className="text-white/70 text-base leading-relaxed text-justify">
                    {article.content}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-12">
          <div className="glass p-8 rounded-3xl sticky top-32">
            <h3 className="text-xl font-serif font-bold mb-6">Popular Categories</h3>
            <ul className="space-y-4">
              {['Platform Updates', 'Industry Trends', 'Technology', 'Player Security', 'Market Analysis'].map((cat) => (
                <li key={cat}>
                  <Link to="/news" className="flex justify-between items-center text-sm text-white/60 hover:text-accent transition-colors">
                    {cat} <span className="text-[10px] bg-white/5 px-2 py-1 rounded">12</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <h3 className="text-xl font-serif font-bold mb-6">Recent Posts</h3>
              <div className="space-y-6">
                {[...newsArticles].reverse().slice(0, 5).map((article) => (
                  <Link key={article.id} to="/news" className="flex gap-4 group">
                    <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden">
                      <img src={article.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold leading-tight group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <span className="text-[10px] text-white/30">{article.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
