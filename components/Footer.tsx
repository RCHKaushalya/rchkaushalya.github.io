'use client';

import { motion } from 'framer-motion';
import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-dark/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-dark/50 font-mono text-sm">
          <Terminal size={16} className="text-gold" />
          <span>Built by Rasindu Kaushalya</span>
        </div>
        <div className="flex items-center gap-1 text-dark/50 text-sm">
          <span>Hosted on</span>
          <span className="font-semibold text-dark">Vercel</span>
          <Heart size={14} className="text-gold mx-1" />
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
