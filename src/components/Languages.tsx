'use client';

interface Language {
  name: string;
  level: string;
  flag: string;
  description: string;
}

const languages: Language[] = [
  {
    name: 'Swedish',
    level: 'Native',
    flag: '🇸🇪',
    description: 'Mother tongue'
  },
  {
    name: 'Finnish',
    level: 'Native',
    flag: '🇫🇮',
    description: 'Second native language'
  },
  {
    name: 'English',
    level: 'Fluent',
    flag: '🇬🇧',
    description: 'Professional working proficiency'
  },
  {
    name: 'Estonian',
    level: 'Basic',
    flag: '🇪🇪',
    description: 'Limited working proficiency'
  }
];

const LanguageCard = ({ language }: { language: Language }) => (
  <div className="glass-card p-6 animate-fade-in hover:bg-white/15 transition-all duration-300">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-1">{language.name}</h3>
        <p className="text-gray-400">{language.description}</p>
        <p className="text-sm text-gray-500">{language.level}</p>
      </div>
      <div className="text-4xl">
        {language.flag}
      </div>
    </div>
  </div>
);

export default function Languages() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-gradient mb-12 text-5xl">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((language, index) => (
            <LanguageCard key={index} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
} 