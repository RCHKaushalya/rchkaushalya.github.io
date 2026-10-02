'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  { title: 'todo-rust', desc: 'CLI to-do app in Rust', lang: 'Rust', color: '#dea584', url: 'https://github.com/RCHKaushalya/todo-rust' },
  { title: 'pocket-allocator', desc: 'Custom memory allocator', lang: 'Rust', color: '#dea584', url: 'https://github.com/RCHKaushalya/pocket-allocator' },
  { title: 'mini-shell', desc: 'Unix shell in C', lang: 'C', color: '#8b949e', url: 'https://github.com/RCHKaushalya/mini-shell' },
  { title: 'os-bootloader', desc: 'x86 bootloader in Assembly', lang: 'Assembly', color: '#b08968', url: 'https://github.com/RCHKaushalya/os-bootloader' },
  { title: 'os-kernel', desc: 'Minimal kernel in C', lang: 'C', color: '#8b949e', url: 'https://github.com/RCHKaushalya/os-kernel' },
  { title: 'Desktop-Apps-Kivy', desc: 'GUI apps with Python & Kivy', lang: 'Python', color: '#F2C46A', url: 'https://github.com/RCHKaushalya/Desktop-Apps-with-Kivy' },
];

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass rounded-2xl p-6 shadow-depth hover:shadow-depth-lg transition-all group block"
      style={{
        transform: hovered ? 'perspective(800px) rotateX(2deg) rotateY(-2deg) translateY(-4px)' : 'perspective(800px) rotateX(0) rotateY(0) translateY(0)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-mono font-bold text-dark text-sm">{project.title}</h3>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Github size={14} className="text-dark/40" />
          <ExternalLink size={14} className="text-dark/40" />
        </div>
      </div>
      <p className="text-dark/50 text-sm mb-4">{project.desc}</p>
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: project.color }} />
        <span className="text-dark/40 text-xs font-mono">{project.lang}</span>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sage text-sm mb-2">{"// Projects"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-10">Things I&apos;ve Built</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
