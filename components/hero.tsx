'use client';

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { profile } from '@/lib/portfolio-data';

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % profile.roles.length);
    }, 2300);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden px-5 pt-28 sm:px-8 lg:px-10">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_25%_20%,rgba(139,233,253,0.16),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(167,139,250,0.14),transparent_24%),linear-gradient(135deg,#080b12,#111827_48%,#0b111d)] light:bg-[radial-gradient(circle_at_25%_20%,rgba(15,111,135,0.16),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(89,76,158,0.12),transparent_24%),linear-gradient(135deg,#f7f9fc,#edf3fa_48%,#ffffff)]" />
      <div className="neural-mask absolute inset-0 -z-10 bg-neural-grid bg-[size:38px_38px] opacity-70" />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-8 top-28 -z-10 h-72 w-72 rounded-full border border-signal/20"
      />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 py-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-[var(--fg)] sm:text-6xl lg:text-7xl">
            Yashvi Shah
            <span className="mt-4 block bg-gradient-to-r from-signal via-platinum to-mint bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl light:from-[#0f6f87] light:via-[#162033] light:to-[#13795b]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={profile.roles[roleIndex]}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35 }}
                  className="inline-block min-h-[1.2em]"
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{profile.headline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#research" className="focus-ring rounded-full bg-signal px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-1 hover:shadow-glow">
              Explore Research
            </a>
            <a href="#projects" className="focus-ring rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-[var(--fg)] transition hover:-translate-y-1 hover:border-signal/60">
              View Systems
            </a>
            <a href={`mailto:${profile.email}`} className="focus-ring rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-[var(--fg)] transition hover:-translate-y-1 hover:border-mint/60">
              Contact
            </a>
          </div>

          <div className="mt-9 flex gap-3">
            <a aria-label="LinkedIn" href={profile.linkedin} className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/15 text-muted transition hover:border-signal/60 hover:text-signal">
              <Linkedin size={18} />
            </a>
            <a aria-label="GitHub" href={profile.github} className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/15 text-muted transition hover:border-signal/60 hover:text-signal">
              <Github size={18} />
            </a>
            <a aria-label="Email" href={`mailto:${profile.email}`} className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/15 text-muted transition hover:border-signal/60 hover:text-signal">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85, delay: 0.1 }} className="relative mx-auto w-full max-w-md">
          <div className="glass relative overflow-hidden rounded-[2rem] p-4">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent" />
            <div className="relative overflow-hidden rounded-[1.45rem] border border-white/10">
              <img src="/landing-page/images/profile.jpg" alt="Portrait of Yashvi Shah" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/12 bg-ink/72 p-4 backdrop-blur">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">Current focus</p>
                <p className="mt-2 text-sm leading-6 text-platinum">VLM pipelines, vector retrieval, LLM optimization, and enterprise data systems.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {profile.metrics.map((metric) => (
              <div key={metric.label} className="glass rounded-2xl p-4">
                <p className="text-2xl font-semibold text-[var(--fg)]">{metric.value}</p>
                <p className="mt-1 text-xs leading-5 text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll to about section" className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/15 p-3 text-muted transition hover:text-signal md:block">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
