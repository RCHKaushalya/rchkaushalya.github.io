'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Brain, Monitor, Server, Wrench } from 'lucide-react';

const skills = [
  { icon: Cpu, title: 'Systems', tags: ['C', 'C++', 'Rust', 'Assembly'] },
  { icon: Brain, title: 'AI / ML', tags: ['Python', 'NumPy', 'ML'] },
  { icon: Monitor, title: 'GUI', tags: ['Kivy', 'Python', 'JS'] },
  { icon: Server, title: 'OS / Low Level', tags: ['Bootloader', 'Kernel', 'Shell', 'Alloc'] },
  { icon: Wrench, title: 'Tools', tags: ['Git', 'Linux', 'VS Code', 'GDB'] },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sage text-sm mb-2">{"// Skills"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-10">Tech Toolbox</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 shadow-depth hover:shadow-depth-lg hover:glow-gold transition-shadow group"
            >
              <div className="w-10 h-10 rounded-xl bg-dark/5 flex items-center justify-center mb-4 group-hover:bg-gold/15 group-hover:scale-110 transition-all">
                <skill.icon size={18} className="text-dark/70 group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-mono font-semibold text-dark text-sm mb-3">{skill.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-dark/[0.04] text-dark/60 text-xs font-mono border border-dark/[0.06]"
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
