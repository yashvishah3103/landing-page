'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '@/lib/portfolio-data';

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-ink/70 backdrop-blur-xl light:bg-white/70">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-signal/40 bg-signal/10 font-mono text-sm text-signal">YS</span>
          <span className="hidden text-sm font-semibold tracking-wide text-[var(--fg)] sm:block">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm text-muted transition hover:bg-white/8 hover:text-[var(--fg)] light:hover:bg-graphite/5"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[var(--fg)] md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink/95 px-5 py-4 shadow-card light:bg-white/95 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-muted transition hover:bg-white/8 hover:text-[var(--fg)] light:hover:bg-graphite/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
