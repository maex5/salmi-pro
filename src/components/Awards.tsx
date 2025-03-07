'use client';

import Image from 'next/image';
import { FaTrophy } from 'react-icons/fa';
import { awards } from '@/data/awards';
import { buzzwordGroups, type BuzzwordGroup } from '@/data/buzzwords';

interface Award {
  title: string;
  company: string;
  year: string;
  description: string;
  logo: string;
  bgColor?: string;
  links?: { text: string; url: string }[];
  buzzwords?: string[];
}

function calculateAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const alexAge = calculateAge(new Date(2014, 1)); // February 2014
const victoriaAge = calculateAge(new Date(2015, 6)); // July 2015
const ceciliaAge = calculateAge(new Date(2019, 6)); // July 2019

const AwardCard = ({ award }: { award: Award }) => {
  const content = (
    <>
      <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden" style={{ backgroundColor: award.bgColor }}>
        <div className="absolute inset-2 sm:inset-3">
          <Image
            src={award.logo}
            alt={`${award.company} logo`}
            fill
            sizes="(max-width: 48px) 100vw, 64px"
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-semibold mb-1">{award.title}</h3>
        <p className="text-gray-400 mb-2">
          {award.links ? (
            award.links.map((link, index) => (
              <span key={link.url}>
                {index > 0 && ' / '}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              </span>
            ))
          ) : (
            award.company
          )}
        </p>
        <p className="text-sm text-gray-500 mb-4">{award.year}</p>
        <p className="text-gray-300 mb-4">{award.description}</p>
        {award.buzzwords && (
          <div className="flex flex-wrap gap-2">
            {award.buzzwords.map((word) => {
              const group = buzzwordGroups.find(g => g.words.includes(word));
              return (
                <span
                  key={word}
                  className={`text-xs px-3 py-1 rounded-full ${group?.color || 'from-gray-400/20 to-gray-400/20 border-gray-400/40'} border border-opacity-40`}
                >
                  {word}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="glass-card p-6 mb-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        {content}
      </div>
    </div>
  );
};

export default function Awards() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-gradient mb-12 text-4xl sm:text-5xl">Awards & Recognition</h2>
        {awards.map((award, index) => (
          <AwardCard key={index} award={award} />
        ))}
      </div>
    </section>
  );
} 