import Header from "../components/Header";
import SocialIcons from "../components/SocialIcons";
import { useTheme } from "../context/ThemeContext";

function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  return (
    <section id={id}>
      <h2
        className="text-[12.5px] font-bold tracking-[0.25em] uppercase mb-5 transition-colors duration-700"
        style={{ color: theme.accent }}
      >
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Entry({
  title,
  href,
  sub,
  right,
}: {
  title: string;
  href?: string;
  sub: string;
  right?: React.ReactNode;
}) {
  const { theme } = useTheme();
  return (
    <div className="flex justify-between items-baseline gap-4">
      <div>
        {href ? (
          <a
            href={href}
            className="hover:underline underline-offset-2 transition-colors duration-700"
            style={{ color: theme.text }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        ) : (
          <span>{title}</span>
        )}
        <p
          className="text-sm transition-colors duration-700"
          style={{ color: theme.textSecondary }}
        >
          {sub}
        </p>
      </div>
      {right && <div className="flex gap-3 text-sm shrink-0">{right}</div>}
    </div>
  );
}

function SmallLink({ href, children }: { href: string; children: string }) {
  const { theme } = useTheme();
  return (
    <a
      href={href}
      className="hover:underline underline-offset-2 transition-colors duration-700"
      style={{ color: theme.textSecondary }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function Experience() {
  return (
    <div className="space-y-14">
      <Header />

      {/* Work */}
      <Section title="work" id="work">
        <Entry
          title="Ontario Institute for Cancer Research"
          sub="software engineer intern &middot; jan 2026 - apr 2026"
        />
        <Entry
          title="Inductive Solution Inc"
          sub="software engineer intern &middot; may 2025 - apr 2026"
        />
      </Section>

      {/* Projects */}
      <Section title="projects">
        <Entry
          title="full stack social media app"
          sub="typescript, python, react native, django, twilio"
          right={
            <SmallLink href="https://github.com/ethanluc7/hunger-tracker">
              github
            </SmallLink>
          }
        />
        <Entry
          title="full stack pomodoro timer app"
          sub="typescript, react.js, express, supabase"
          right={
            <SmallLink href="https://github.com/ethanluc7/glass-pomodoro-timer">
              github
            </SmallLink>
          }
        />
      </Section>

      {/* Skills */}
      <Section title="skills">
        <Entry
          title="frontend"
          sub="typescript/javascript, react.js, next.js, react native, tailwind css, emotion css"
        />
        <Entry
          title="backend"
          sub="typescript, python, flask, django, express"
        />
        <Entry
          title="tools"
          sub="docker, aws, nginx, figma, vite, react storybook"
        />
      </Section>

      {/* Education */}
      <Section title="education">
        <Entry
          title="University of Waterloo"
          sub="bachelor of mathematics &middot; 2024 - 2029"
        />
      </Section>

      {/* Footer */}
      <footer>
        <SocialIcons />
      </footer>
    </div>
  );
}
