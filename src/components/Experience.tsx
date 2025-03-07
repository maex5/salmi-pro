'use client';

import Image from 'next/image';
import { experiences, type ExperienceItem } from '@/data/experience';
import { buzzwordGroups, type BuzzwordGroup } from '@/data/buzzwords';

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => (
  <div className="glass-card p-6 mb-6 animate-fade-in">
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
      <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden" style={{ backgroundColor: experience.bgColor }}>
        <div className="absolute inset-2 sm:inset-3">
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            fill
            sizes="(max-width: 48px) 100vw, 64px"
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
        <p className="text-blue-400 mb-2">{experience.company}</p>
        <p className="text-gray-400 mb-4">{experience.period}</p>
        <p className="text-gray-300 mb-4 whitespace-pre-line">{experience.description}</p>
        <div className="flex flex-wrap gap-2">
          {experience.technologies?.map((tech) => {
            const group = buzzwordGroups.find(g => g.words.includes(tech));
            return (
              <span
                key={tech}
                className={`text-xs px-3 py-1 rounded-full ${group?.color || 'from-gray-400/20 to-gray-400/20 border-gray-400/40'} border border-opacity-40`}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-gradient mb-12 text-4xl sm:text-5xl">Experience</h2>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
} 