import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Calendar, 
  Gamepad2, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  ArrowLeft,
  ExternalLink
} from 'lucide-react';
import { Review } from '../types';
import { RatingStars } from '../components/RatingStars';

export const SingleReview = () => {
  const { id } = useParams();
  const [review, setReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/reviews/${id}`)
      .then(res => res.json())
      .then(data => {
        setReview(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="pt-40 text-center">Loading...</div>;
  if (!review) return <div className="pt-40 text-center">Review not found</div>;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end pb-16 px-6">
        <div className="absolute inset-0 z-0">
          <img
            src={review.image}
            alt={review.name}
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <Link to="/reviews" className="flex items-center gap-2 text-white/60 hover:text-accent mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Reviews
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <RatingStars rating={review.rating} starSize={24} />
                <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold">TOP RATED</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">{review.name}</h1>
              <p className="text-xl text-white/70 max-w-2xl">{review.description}</p>
            </div>
            <button className="bg-accent hover:bg-accent-hover text-primary font-bold px-12 py-5 rounded-xl transition-all flex items-center gap-3 text-lg">
              Visit Platform <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Key Info Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'License', value: review.license, icon: <ShieldCheck className="text-accent" /> },
            { label: 'Established', value: review.established, icon: <Calendar className="text-accent" /> },
            { label: 'Games', value: review.games.length + '+ Titles', icon: <Gamepad2 className="text-accent" /> },
            { label: 'Payout Speed', value: review.payoutSpeed, icon: <Zap className="text-accent" /> },
          ].map((item) => (
            <div key={item.label} className="glass p-6 rounded-2xl flex flex-col items-center text-center">
              <div className="mb-3">{item.icon}</div>
              <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{item.label}</span>
              <span className="font-bold text-sm">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Review */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 border-l-4 border-accent pl-6">Overview</h2>
            <p className="text-white/70 leading-relaxed text-lg">{review.review}</p>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 border-l-4 border-accent pl-6">Game Selection</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {review.games.map((game) => (
                <div key={game} className="bg-white/5 p-4 rounded-xl border border-white/5 text-center font-medium">
                  {game}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl border-emerald-500/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-emerald-500">
                <CheckCircle2 size={20} /> Pros
              </h3>
              <ul className="space-y-4">
                {review.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-3 text-sm text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-8 rounded-3xl border-rose-500/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-rose-500">
                <XCircle size={20} /> Cons
              </h3>
              <ul className="space-y-4">
                {review.cons.map((con) => (
                  <li key={con} className="flex items-start gap-3 text-sm text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="glass-dark p-8 rounded-3xl sticky top-32">
            <h3 className="text-2xl font-serif font-bold mb-6">Quick Verdict</h3>
            <div className="text-5xl font-bold text-accent mb-2">{review.rating} / 5</div>
            <RatingStars rating={review.rating} className="mb-6" />
            <p className="text-sm text-white/50 mb-8">
              Based on our rigorous 25-point inspection, {review.name} ranks among the top 5% of all platforms we've reviewed this year.
            </p>
            <button className="w-full bg-accent hover:bg-accent-hover text-primary font-bold py-4 rounded-xl transition-all mb-4">
              Visit Platform
            </button>
            <p className="text-[10px] text-center text-white/30 uppercase tracking-widest">
              Terms & Conditions Apply
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
