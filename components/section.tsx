import { MotionSection } from './motion';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <MotionSection
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
    >
      <div className="mb-10 max-w-3xl">
        <p className="section-kicker mb-3">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">{title}</h2>
        {intro ? <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{intro}</p> : null}
      </div>
      {children}
    </MotionSection>
  );
}
