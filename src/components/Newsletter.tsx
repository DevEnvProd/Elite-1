import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      }
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full" />
      
      <div className="max-w-4xl mx-auto glass p-12 rounded-3xl relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient">
          Join the Elite Circle
        </h2>
        <p className="text-white/60 mb-10 max-w-xl mx-auto">
          Subscribe to our newsletter for exclusive platform reviews, high-stakes guides, and the latest industry trends delivered to your inbox.
        </p>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 text-accent"
            >
              <CheckCircle size={48} />
              <p className="font-bold text-xl">Welcome to the inner circle!</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                disabled={status === 'loading'}
                className="bg-accent hover:bg-accent-hover text-primary font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? 'Subscribing...' : (
                  <>
                    Subscribe <Send size={18} />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
        
        <p className="mt-8 text-[10px] text-white/30 uppercase tracking-[0.2em]">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </section>
  );
};
