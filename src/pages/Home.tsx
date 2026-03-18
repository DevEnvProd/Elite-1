import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Trophy, Zap, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Review } from '../types';
import { ReviewCard } from '../components/ReviewCard';
import { Newsletter } from '../components/Newsletter';

export const Home = () => {
  const [featuredReviews, setFeaturedReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => setFeaturedReviews(data.slice(0, 3)));
  }, []);

  const categories = [
    { name: 'Casino Reviews', icon: <Trophy />, path: '/reviews', color: 'bg-amber-500' },
    { name: 'Game Guides', icon: <Zap />, path: '/guides', color: 'bg-blue-500' },
    { name: 'Industry News', icon: <Globe />, path: '/news', color: 'bg-emerald-500' },
    { name: 'Lifestyle', icon: <Shield />, path: '/about', color: 'bg-purple-500' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/luxury-hero/1920/1080?blur=2"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Redefining Digital Entertainment
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight text-gradient">
              Discover Premium <br /> Entertainment
            </h1>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              Expertly curated reviews, strategic guides, and exclusive insights into the world's most prestigious digital platforms.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/reviews"
                className="bg-accent hover:bg-accent-hover text-primary font-bold px-10 py-5 rounded-xl transition-all flex items-center gap-2 group"
              >
                Explore Reviews <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="glass hover:bg-white/10 text-white font-bold px-10 py-5 rounded-xl transition-all"
              >
                Our Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform of the Month */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4">Platform of the Month</h2>
            <p className="text-white/50">Our top-rated selection for unmatched quality and reliability.</p>
          </div>
          <Link to="/reviews" className="text-accent hover:underline hidden md:block">View All Platforms</Link>
        </div>
        
        {featuredReviews.length > 0 && (
          <ReviewCard review={featuredReviews[0]} featured />
        )}
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center">Explore Our Hub</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={cat.path}
                  className="glass p-8 rounded-3xl flex flex-col items-center text-center group hover:border-accent/50 transition-all"
                >
                  <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-sm text-white/40">Expert insights and curated content.</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold mb-12">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  );
};
