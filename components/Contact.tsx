'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <p className="font-mono text-sage text-sm mb-2">{"// Contact"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Let&apos;s Connect</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-dark rounded-3xl p-10 md:p-14 shadow-depth-lg text-center"
        >
          <p className="text-cream/60 text-sm max-w-md mx-auto mb-8">
            Open to collaborations, research, or just talking about OS internals and compilers.
          </p>

          <motion.a
            href="mailto:rchkaushalya@gmail.com"
            whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(242, 196, 106, 0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 bg-gold text-dark px-7 py-3.5 rounded-xl font-semibold text-sm shadow-depth mb-8"
          >
            <Mail size={16} />
            rchkaushalya@gmail.com
          </motion.a>

          <div className="flex justify-center gap-3 flex-wrap">
            {[
              { icon: Github, href: 'https://github.com/RCHKaushalya', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rasindu-appuhami-118891337/', label: 'LinkedIn' },
              { icon: ArrowUpRight, href: 'https://rchkaushalya.github.io/', label: 'Website' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-5 py-2.5 rounded-xl text-cream/60 hover:text-cream text-sm flex items-center gap-2 transition-all hover:-translate-y-0.5"
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
