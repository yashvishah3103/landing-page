import { ExternalLink, Github, Quote, Send } from 'lucide-react';
import { MotionDiv } from './motion';

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-muted light:bg-graphite/5">
      {children}
    </span>
  );
}

export function ExperienceCard({ item, index }: { item: any; index: number }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative grid gap-5 rounded-3xl border border-white/12 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-signal/40 light:bg-white/70"
    >
      <div className="flex items-start gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-signal/30 bg-signal/10 font-mono text-xl font-bold text-signal">
          {item.logo}
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal">{item.tone}</p>
          <h3 className="mt-2 text-xl font-semibold text-[var(--fg)]">{item.role}</h3>
          <p className="mt-1 text-sm text-muted">
            {item.company} | {item.period}
          </p>
        </div>
      </div>
      <p className="leading-7 text-muted">{item.summary}</p>
      <ul className="space-y-3">
        {item.bullets.map((bullet: string) => (
          <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag: string) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </MotionDiv>
  );
}

export function PublicationCard({ item }: { item: any }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="group glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-signal/40"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-full bg-signal/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-signal">{item.type}</span>
        <Quote size={18} className="text-muted transition group-hover:text-signal" />
      </div>
      <h3 className="text-xl font-semibold leading-7 text-[var(--fg)]">{item.title}</h3>
      <p className="mt-3 font-mono text-sm text-muted">{item.venue}</p>
      <p className="mt-5 text-sm leading-7 text-muted">{item.abstract}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag: string) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <a href={item.link} className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-signal">
        Publication link <ExternalLink size={15} />
      </a>
    </MotionDiv>
  );
}

export function ProjectCard({ item }: { item: any }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex h-full flex-col rounded-3xl border border-white/12 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-mint/40 hover:bg-white/[0.07] light:bg-white/75"
    >
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-mint">{item.category}</p>
      <h3 className="mt-3 text-xl font-semibold text-[var(--fg)]">{item.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-muted">{item.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.stack.map((tag: string) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        {item.links.length ? (
          item.links.map((link: any) => (
            <a key={link.href} href={link.href} className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm text-[var(--fg)] transition hover:border-signal/50">
              {link.label === 'GitHub' ? <Github size={16} /> : <ExternalLink size={16} />}
              {link.label}
            </a>
          ))
        ) : (
          <a href="#contact" className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm text-muted transition hover:border-signal/50 hover:text-signal">
            <Send size={16} />
            Discuss work
          </a>
        )}
      </div>
    </MotionDiv>
  );
}
