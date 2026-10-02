'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Code, Target } from 'lucide-react';

const stats = [
  { label: 'Repositories', value: '46+' },
  { label: 'Followers', value: '8' },
  { label: 'Following', value: '14' },
];

const info = [
  { icon: GraduationCap, label: 'University', value: 'Trincomalee Campus' },
  { icon: Code, label: 'Degree', value: 'BSc Computer Science' },
  { icon: MapPin, label: 'Location', value: 'Sri Lanka' },
  { icon: Target, label: 'Focus', value: 'Systems / OS / AI' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sage text-sm mb-2">{"// About Me"}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-12">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 glass rounded-2xl p-8 shadow-xl"
          >
            <p className="text-dark/70 text-lg leading-relaxed mb-6">
              I&apos;m a <strong className="text-dark">final-year Computer Science undergraduate</strong> at Trincomalee Campus, University of Trincomalee, with a deep passion for low-level systems programming and high-level AI/ML applications.
            </p>
            <p className="text-dark/70 text-lg leading-relaxed mb-6">
              I&apos;m currently exploring research at the intersection of <strong className="text-dark">operating systems, compilers, and artificial intelligence</strong>. My long-term goal is to build a domain-specific programming language and an AI-powered shell designed for productivity-driven developer environments.
            </p>
            <p className="text-dark/70 text-lg leading-relaxed">
              When I&apos;m not writing C or Rust, I&apos;m documenting my journey through system programming, reading about compiler design, or experimenting with OS bootloaders from scratch.
            </p>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-dark rounded-2xl p-8 shadow-xl"
          >
            <div className="space-y-6">
              {info.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-cream/50 text-xs font-mono">{label}</p>
                    <p className="text-cream font-medium">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="glass rounded-2xl p-6 text-center shadow-lg"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="text-dark/50 text-sm font-mono mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
