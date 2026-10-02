'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Code, Target } from 'lucide-react';

const stats = [
  { value: '46+', label: 'Repos' },
  { value: '8', label: 'Followers' },
  { value: '14', label: 'Following' },
];

const info = [
  { icon: GraduationCap, label: 'University', value: 'Trincomalee Campus' },
  { icon: Code, label: 'Degree', value: 'BSc Computer Science' },
  { icon: MapPin, label: 'Location', value: 'Sri Lanka' },
  { icon: Target, label: 'Focus', value: 'Systems / OS / AI' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sage text-sm mb-2">{"// About"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-10">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 glass rounded-2xl p-8 shadow-depth"
          >
            <p className="text-dark/70 leading-relaxed mb-4">
              Final-year <strong className="text-dark">CS undergraduate</strong> passionate about low-level systems programming and AI/ML. Building at the intersection of <strong className="text-dark">operating systems, compilers, and artificial intelligence</strong>.
            </p>
            <p className="text-dark/70 leading-relaxed">
              Long-term goal: a <strong className="text-dark">domain-specific programming language</strong> and an <strong className="text-dark">AI-powered shell</strong> for developer productivity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 glass-dark rounded-2xl p-8 shadow-depth"
          >
            <div className="space-y-5">
              {info.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-cream/40 text-[11px] font-mono uppercase tracking-wider">{label}</p>
                    <p className="text-cream text-sm font-medium">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="glass rounded-2xl p-5 text-center shadow-depth"
            >
              <p className="text-2xl md:text-3xl font-bold gradient-text">{s.value}</p>
              <p className="text-dark/40 text-xs font-mono mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
