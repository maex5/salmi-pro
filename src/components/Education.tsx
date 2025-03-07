'use client';

import Image from 'next/image';

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  logo: string;
  bgColor?: string;
}

const education: EducationItem[] = [
  {
    school: 'Laurea University of Applied Sciences',
    degree: 'Bachelor of Business Administration in Information Technology',
    period: '2013 - 2016',
    logo: '/laurea.jpg',
    bgColor: '#ffffff'
  },
  {
    school: 'Gymnasiet Svenska normallyceum',
    degree: 'Finnish Matriculation Examination',
    period: '2008 - 2012',
    logo: '/norsen.png',
    bgColor: '#008FD5'
  }
];

const EducationCard = ({ education }: { education: EducationItem }) => (
  <div className="glass-card p-6 mb-6 animate-fade-in">
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
      <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden" style={{ backgroundColor: education.bgColor }}>
        <div className="absolute inset-2 sm:inset-3">
          <Image
            src={education.logo}
            alt={`${education.school} logo`}
            fill
            sizes="(max-width: 48px) 100vw, 64px"
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-semibold mb-1">{education.degree}</h3>
        <p className="text-gray-400 mb-2">{education.school}</p>
        <p className="text-sm text-gray-500">{education.period}</p>
      </div>
    </div>
  </div>
);

export default function Education() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-gradient mb-12 text-4xl sm:text-5xl">Education</h2>
        {education.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </section>
  );
} 