import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { Review } from '../types';
import { RatingStars } from './RatingStars';

interface ReviewCardProps {
  review: Review;
  featured?: boolean;
}

export const ReviewCard = ({ review, featured = false }: ReviewCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`group relative overflow-hidden rounded-2xl ${
        featured ? 'md:flex gap-8 bg-white/5 p-6 border border-white/10' : 'glass'
      }`}
    >
      <div className={`${featured ? 'md:w-1/2' : 'w-full'} overflow-hidden rounded-xl aspect-video relative`}>
        <img
          src={review.image}
          alt={review.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
        <div className="absolute top-4 left-4 flex gap-2">
          {review.license && (
            <span className="bg-accent/90 text-primary text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <ShieldCheck size={10} /> LICENSED
            </span>
          )}
        </div>
      </div>

      <div className={`${featured ? 'md:w-1/2 flex flex-col justify-center py-4' : 'p-6'}`}>
        <div className="flex justify-between items-start mb-2">
          <h3 className={`font-serif font-bold text-white ${featured ? 'text-3xl' : 'text-xl'}`}>
            {review.name}
          </h3>
          <RatingStars rating={review.rating} />
        </div>
        
        <p className="text-white/60 text-sm mb-6 line-clamp-2">
          {review.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {review.games.slice(0, 3).map((game) => (
            <span key={game} className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-2 py-1 rounded">
              {game}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <Link
            to={`/reviews/${review.id}`}
            className="text-sm font-bold text-white hover:text-accent transition-colors flex items-center gap-2"
          >
            Read Review
          </Link>
          <button className="bg-accent hover:bg-accent-hover text-primary px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2">
            Visit <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
