'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('theme') as 'dark' | 'light' | null;
    const initial = stored ?? 'dark';
    setTheme(initial);
    document.documentElement.classList.toggle('light', initial === 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    window.localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('light', next === 'light');
  };

  return (
    <>
      {children}
      <button
        type="button"
        aria-label="Toggle color theme"
        onClick={toggleTheme}
        className="focus-ring fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-ink/80 text-platinum shadow-glow backdrop-blur transition hover:-translate-y-1 hover:border-signal/60 light:bg-white/80 light:text-graphite"
      >
        {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
      </button>
    </>
  );
}
