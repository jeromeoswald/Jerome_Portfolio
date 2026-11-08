import { Code2, Database, Server, Wrench } from 'lucide-react';
import { skills } from '../../data/portfolio';
import Reveal from '../ui/Reveal';

const groupIcons = { Frontend: Code2, Backend: Server, Databases: Database };

export default function Skills() {
  return (
    <div className="mt-20 sm:mt-24">
      <Reveal className="mb-8 text-center">
        <h3 id="skills-title" className="text-fluid-xl font-bold text-ink sm:text-[1.75rem]">
          Skills &amp; <span className="text-gradient">Toolbox</span>
        </h3>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2" role="list" aria-labelledby="skills-title">
        {skills.map((group, i) => {
          const Icon = groupIcons[group.group] ?? Wrench;
          return (
            <Reveal key={group.group} delay={i * 0.06} className="card p-6" role="listitem">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft/70 text-accent dark:bg-accent-soft/40">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h4 className="text-fluid-lg font-bold text-ink">{group.group}</h4>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-fluid-sm font-medium text-ink/85 transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
