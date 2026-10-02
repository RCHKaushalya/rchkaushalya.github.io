'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Brain, Monitor, Server, Wrench } from 'lucide-react';

const skills = [
  {
    icon: Cpu,
    title: 'Systems Programming',
    tags: ['C', 'C++', 'Rust', 'Assembly'],
    color: 'from-gold/20 to-gold/5',
  },
  {
    icon: Brain,
    title: 'AI / ML',
    tags: ['Python', 'NumPy', 'ML Concepts'],
    color: 'from-sage/20 to-sage/5',
  },
  {
    icon: Monitor,
    title: 'Desktop / GUI',
    tags: ['Kivy', 'Python', 'JavaScript'],
    color: 'from-gold/20 to-sage/5',
  },
  {
    icon: Server,
    title: 'OS & Low Level',
    tags: ['Bootloader', 'Kernel Dev', 'Shell Design', 'Memory Alloc'],
    color: 'from-sage/20 to-gold/5',
  },
  {
    icon: Wrench,
    title: 'Dev Tools',
    tags: ['Git', 'Linux', 'VS Code', 'GDB'],
    color: 'from-gold/10 to-sage/10',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sage text-sm mb-2">{"// Skills"}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-12">My Tech Toolbox</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 shadow-lg hover:glow-hover transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon size={22} className="text-dark" />
              </div>
              <h3 className="font-mono font-semibold text-dark mb-3">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-dark/5 text-dark/70 text-sm font-mono border border-dark/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
