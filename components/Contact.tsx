'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sage text-sm mb-2">{"// Contact"}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-12 text-center">Let&apos;s Build Something</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-dark rounded-3xl p-8 md:p-12 shadow-2xl text-center"
        >
          <p className="text-cream/70 text-lg mb-8 max-w-lg mx-auto">
            I&apos;m always open to interesting collaborations, research discussions, or just talking about OS internals and compilers. Drop me a message.
          </p>

          <motion.a
            href="mailto:rchkaushalya@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(242, 196, 106, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gold text-dark px-8 py-4 rounded-xl font-semibold text-lg shadow-lg mb-8"
          >
            <Mail size={20} />
            rchkaushalya@gmail.com
          </motion.a>

          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { icon: Github, href: 'https://github.com/RCHKaushalya', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rasindu-appuhami-118891337/', label: 'LinkedIn' },
              { icon: Send, href: 'mailto:rchkaushalya@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-6 py-3 rounded-xl text-cream/70 hover:text-cream flex items-center gap-2 transition-colors"
              >
                <Icon size={18} />
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
