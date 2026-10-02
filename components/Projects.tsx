'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: 'todo-rust',
    description: 'A command-line to-do list app built in Rust — my introduction to ownership, traits, and Cargo.',
    language: 'Rust',
    color: '#dea584',
    stars: 0,
    url: 'https://github.com/RCHKaushalya/todo-rust',
  },
  {
    title: 'pocket-allocator',
    description: 'A minimal custom memory allocator written in Rust — exploring heap management from scratch.',
    language: 'Rust',
    color: '#dea584',
    stars: 0,
    url: 'https://github.com/RCHKaushalya/pocket-allocator',
  },
  {
    title: 'mini-shell',
    description: 'A mini Unix shell written in C with command parsing, process forking, and basic piping support.',
    language: 'C',
    color: '#555555',
    stars: 0,
    url: 'https://github.com/RCHKaushalya/mini-shell',
  },
  {
    title: 'os-bootloader',
    description: 'First project in my OS development roadmap — a bootloader written in x86 Assembly that boots into protected mode.',
    language: 'Assembly',
    color: '#6E4C13',
    stars: 0,
    url: 'https://github.com/RCHKaushalya/os-bootloader',
  },
  {
    title: 'os-kernel',
    description: 'Second step of the OS roadmap — a minimal kernel with basic interrupt handling and memory layout setup.',
    language: 'C / Makefile',
    color: '#555555',
    stars: 0,
    url: 'https://github.com/RCHKaushalya/os-kernel',
  },
  {
    title: 'Desktop-Apps-with-Kivy',
    description: 'A collection of GUI applications built with Kivy — exploring Python-based desktop development.',
    language: 'Python / Kivy',
    color: '#3572A5',
    stars: 0,
    url: 'https://github.com/RCHKaushalya/Desktop-Apps-with-Kivy',
  },
];

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 15);
    setRotateY((centerX - x) / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      className="glass rounded-2xl p-6 shadow-lg hover:glow-hover transition-all group preserve-3d"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-mono font-bold text-dark text-lg">{project.title}</h3>
        <div className="flex gap-2">
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-dark/40 hover:text-dark transition-colors"
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-dark/40 hover:text-dark transition-colors"
          >
            <ExternalLink size={18} />
          </motion.a>
        </div>
      </div>

      <p className="text-dark/60 text-sm mb-4 flex-1">{project.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: project.color }}
          />
          <span className="text-dark/50 text-sm font-mono">{project.language}</span>
        </div>
        {project.stars > 0 && (
          <div className="flex items-center gap-1 text-dark/40 text-sm">
            <Star size={14} />
            {project.stars}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sage text-sm mb-2">{"// Projects"}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-12">Things I&apos;ve Built</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
