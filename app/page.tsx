import { Award, BookOpen, BrainCircuit, Building2, GraduationCap, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { about, certifications, education, experience, profile, projects, publications, skillGroups } from '@/lib/portfolio-data';
import { ExperienceCard, ProjectCard, PublicationCard, Tag } from '@/components/cards';
import { Hero } from '@/components/hero';
import { Nav } from '@/components/nav';
import { Section } from '@/components/section';
import { ThemeProvider } from '@/components/theme-provider';
import { MotionDiv } from '@/components/motion';

export default function Home() {
  return (
    <ThemeProvider>
      <Nav />
      <main className="min-h-screen overflow-hidden bg-[var(--bg)]">
        <Hero />

        <Section
          id="about"
          eyebrow="Profile"
          title="A research-driven engineer building toward production AI and enterprise systems."
          intro="The portfolio has been shaped around the actual arc in the resume: AI research, VLM deployment, LLM optimization, and a deliberate move into enterprise-scale software and data engineering."
        >
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="glass rounded-3xl p-6 sm:p-8">
              {about.map((paragraph) => (
                <p key={paragraph} className="mb-6 text-base leading-8 text-muted last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid gap-4">
              {[
                { icon: BrainCircuit, label: 'Research axis', value: 'TinyML, V2X, IoBT, UAV security, anomaly detection' },
                { icon: Building2, label: 'Engineering axis', value: 'APIs, Docker, MLOps, enterprise data, analytics systems' },
                { icon: ShieldCheck, label: 'Operating style', value: 'Curious, reliable, analytical, collaborative, growth-oriented' }
              ].map((item) => (
                <div key={item.label} className="glass rounded-3xl p-6">
                  <item.icon className="text-signal" size={24} />
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-muted">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold leading-7 text-[var(--fg)]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Timeline of applied AI systems and enterprise engineering direction."
          intro="Experience is presented as a technical story: from computer vision and VLM experimentation to scalable inference, then toward enterprise software, ETL, and analytics."
        >
          <div className="relative grid gap-6 lg:grid-cols-2">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-signal/40 to-transparent lg:block" />
            {experience.map((item, index) => (
              <ExperienceCard key={item.company} item={item} index={index} />
            ))}
          </div>
        </Section>

        <Section
          id="research"
          eyebrow="Research & Publications"
          title="Scholarly work across TinyML, security, autonomous systems, and embedded intelligence."
          intro="This section is intentionally academic in tone, with citation-like cards, venues, topics, and publication links emphasized as first-class portfolio material."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {publications.map((publication) => (
              <PublicationCard key={publication.title} item={publication} />
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Project Systems"
          title="Selected AI, optimization, software, and data engineering work."
          intro="Projects are framed as engineering systems rather than disconnected demos, highlighting pipelines, deployment, inference acceleration, vector retrieval, and data workflows."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} item={project} />
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Technical Map"
          title="Skill architecture across AI research, production ML, software, and enterprise data."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <MotionDiv
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--fg)]">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </MotionDiv>
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="Academic Foundation" title="Education and certification pathway.">
          <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr]">
            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="space-y-6">
                {education.map((item) => (
                  <div key={item.school} className="flex gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-signal/10 text-signal">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{item.period}</p>
                      <h3 className="mt-2 text-lg font-semibold text-[var(--fg)]">{item.degree}</h3>
                      <p className="mt-1 text-sm text-muted">{item.school}</p>
                      <p className="mt-2 text-sm text-muted">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Award className="text-amberline" size={24} />
                <h3 className="text-xl font-semibold text-[var(--fg)]">Certifications</h3>
              </div>
              <div className="mt-6 space-y-5">
                {certifications.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 light:bg-graphite/5">
                    <p className="font-semibold text-[var(--fg)]">{item.title}</p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-muted">{item.issuer}</p>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Open to research-led AI, software engineering, and enterprise data conversations."
          intro="For opportunities, collaborations, publications, or engineering discussions, reach out through email or the professional links below."
        >
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="space-y-5">
                <a href={`mailto:${profile.email}`} className="focus-ring flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition hover:border-signal/40">
                  <Mail className="text-signal" size={21} />
                  <span>
                    <span className="block text-sm text-muted">Email</span>
                    <span className="font-semibold text-[var(--fg)]">{profile.email}</span>
                  </span>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 p-4">
                  <Phone className="text-signal" size={21} />
                  <span>
                    <span className="block text-sm text-muted">Phone</span>
                    <span className="font-semibold text-[var(--fg)]">{profile.phone}</span>
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 p-4">
                  <MapPin className="text-signal" size={21} />
                  <span>
                    <span className="block text-sm text-muted">Location</span>
                    <span className="font-semibold text-[var(--fg)]">{profile.location}</span>
                  </span>
                </div>
              </div>
            </div>

            <form action="https://formspree.io/f/meojrrbp" method="POST" className="glass rounded-3xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm text-muted">
                  First name
                  <input name="first_name" required className="focus-ring rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-[var(--fg)] outline-none transition focus:border-signal/60 light:bg-white" />
                </label>
                <label className="grid gap-2 text-sm text-muted">
                  Last name
                  <input name="last_name" className="focus-ring rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-[var(--fg)] outline-none transition focus:border-signal/60 light:bg-white" />
                </label>
              </div>
              <label className="mt-4 grid gap-2 text-sm text-muted">
                Email
                <input type="email" name="email" required className="focus-ring rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-[var(--fg)] outline-none transition focus:border-signal/60 light:bg-white" />
              </label>
              <label className="mt-4 grid gap-2 text-sm text-muted">
                Message
                <textarea name="message" rows={5} required className="focus-ring resize-none rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-[var(--fg)] outline-none transition focus:border-signal/60 light:bg-white" />
              </label>
              <button type="submit" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-1 hover:shadow-glow">
                Send message <Mail size={16} />
              </button>
            </form>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-muted sm:px-8 lg:px-10">
        <BookOpen className="mx-auto mb-3 text-signal" size={18} />
        © 2026 Yashvi Shah. AI research, production engineering, and enterprise data systems.
      </footer>
    </ThemeProvider>
  );
}
