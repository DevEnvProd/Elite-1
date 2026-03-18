import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Review } from '../types';
import { ReviewCard } from '../components/ReviewCard';

export const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [sortBy, setSortBy] = useState('rating');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'newest') return b.established.localeCompare(a.established);
    return 0;
  });

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gradient">Platform Reviews</h1>
        <p className="text-white/60 max-w-2xl text-lg">
          Our comprehensive, unbiased evaluations of the world's leading digital entertainment platforms. We analyze every detail so you don't have to.
        </p>
      </header>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 glass p-6 rounded-2xl">
        <div className="flex items-center gap-4">
          <Filter size={18} className="text-accent" />
          <div className="flex gap-2">
            {['All', 'Licensed', 'Crypto', 'Live Dealer'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f.toLowerCase())}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  filter === f.toLowerCase() ? 'bg-accent text-primary font-bold' : 'hover:bg-white/5 text-white/60'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <SlidersHorizontal size={18} className="text-accent" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer"
          >
            <option value="rating">Sort by Rating</option>
            <option value="newest">Sort by Newest</option>
            <option value="popular">Sort by Popular</option>
          </select>
        </div>
      </div>

      {/* Featured Sticky Card */}
      {sortedReviews.length > 0 && (
        <div className="mb-16">
          <ReviewCard review={sortedReviews[0]} featured />
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedReviews.slice(1).map((review, idx) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <ReviewCard review={review} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
