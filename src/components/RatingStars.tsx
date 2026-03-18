import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface RatingStarsProps {
  rating: number;
  max?: number;
  className?: string;
  starSize?: number;
}

export const RatingStars = ({ rating, max = 5, className, starSize = 16 }: RatingStarsProps) => {
  return (
    <div className={cn("flex gap-1", className)}>
      {[...Array(max)].map((_, i) => (
        <Star
          key={i}
          size={starSize}
          className={cn(
            "transition-colors",
            i < Math.floor(rating)
              ? "fill-accent text-accent"
              : i < rating
              ? "fill-accent/50 text-accent/50"
              : "text-white/20"
          )}
        />
      ))}
      <span className="ml-2 text-sm font-medium text-accent">{rating.toFixed(1)}</span>
    </div>
  );
};
