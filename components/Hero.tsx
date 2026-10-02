'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-transparent to-cream z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sage text-sm mb-4"
          >
            {"// Hello, World!"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-dark leading-tight mb-6"
          >
            Rasindu
            <br />
            <span className="gradient-text">Kaushalya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-dark/60 font-mono mb-8 max-w-lg"
          >
            Systems Programmer <span className="text-gold">·</span> OS Developer <span className="text-gold">·</span> AI/ML Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(242, 196, 106, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-dark text-cream px-8 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-3 rounded-xl font-semibold text-dark flex items-center gap-2 shadow-lg"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 mt-8 justify-center lg:justify-start"
          >
            {[
              { icon: Github, href: 'https://github.com/RCHKaushalya' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rasindu-appuhami-118891337/' },
              { icon: Mail, href: 'mailto:rchkaushalya@gmail.com' },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="glass p-3 rounded-xl text-dark/60 hover:text-dark transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-gold via-sage to-gold rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cream/30 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://avatars.githubusercontent.com/u/155729951?v=4"
                alt="Rasindu Kaushalya"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 glass-dark px-4 py-2 rounded-xl shadow-lg"
            >
              <span className="text-cream text-sm font-mono">Open to Opportunities</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-dark/40"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
