import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Target, Users, Mail, Phone, MapPin } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Mission */}
      <section className="mb-32 text-center max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
        >
          Our Story
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-8 text-gradient"
        >
          The Elite Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/60 leading-relaxed"
        >
          Founded on the principles of transparency and expertise, Elite Entertainment Hub is the definitive source for high-stakes digital platform reviews.
        </motion.p>
      </section>

      {/* Why Trust Us */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Unbiased Analysis', icon: <Shield />, desc: 'We accept no compensation for ratings. Our reviews are 100% independent.' },
            { title: 'Expert Insight', icon: <Eye />, desc: 'Our team consists of industry veterans with decades of collective experience.' },
            { title: 'Rigorous Testing', icon: <Target />, desc: 'Every platform undergoes a 25-point inspection before receiving a score.' },
          ].map((item, idx) => (
            <div key={item.title} className="glass p-10 rounded-3xl text-center group hover:border-accent/30 transition-all">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Review Process */}
      <section className="mb-32 bg-black/20 p-12 md:p-24 rounded-[3rem]">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">Our Review Process</h2>
        <div className="space-y-12">
          {[
            { step: '01', title: 'Initial Screening', desc: 'We verify licenses, ownership, and regulatory standing.' },
            { step: '02', title: 'Hands-on Testing', desc: 'Our team spends 40+ hours interacting with the platform as real users.' },
            { step: '03', title: 'Financial Audit', desc: 'We test deposit and withdrawal speeds across multiple methods.' },
            { step: '04', title: 'Final Verdict', desc: 'Data is aggregated and a final score is assigned by our editorial board.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-8 items-start">
              <span className="text-6xl font-serif font-bold text-accent/20 leading-none">{item.step}</span>
              <div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 max-w-xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif font-bold mb-8">Get in Touch</h2>
          <p className="text-white/60 mb-12 text-lg">
            Have questions about a platform or want to suggest a review? Our team is here to assist you.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-accent"><Mail /></div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Email Us</div>
                <div className="font-bold">concierge@elitehub.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-accent"><Phone /></div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Call Us</div>
                <div className="font-bold">+1 (888) ELITE-HUB</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-accent"><MapPin /></div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Headquarters</div>
                <div className="font-bold">123 Luxury Lane, Digital Oasis</div>
              </div>
            </div>
          </div>
        </div>

        <form className="glass p-10 rounded-[2rem] space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40">First Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40">Last Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/40">Email Address</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/40">Message</label>
            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent resize-none"></textarea>
          </div>
          <button className="w-full bg-accent hover:bg-accent-hover text-primary font-bold py-4 rounded-xl transition-all">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};
