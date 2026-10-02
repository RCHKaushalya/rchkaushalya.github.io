'use client';

import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-6 px-6 border-t border-dark/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-dark/40 font-mono text-xs">
          <Terminal size={14} className="text-gold" />
          <span>Rasindu Kaushalya</span>
        </div>
        <p className="text-dark/30 text-xs">
          Vercel · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
