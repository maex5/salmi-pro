'use client';

import { buzzwordGroups, type BuzzwordGroup } from '@/data/buzzwords';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    endorsements: number;
    isVerified?: boolean;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Ad Tech & Platform Engineering',
    skills: [
      { name: 'Ad Tech', endorsements: 42, isVerified: true },
      { name: 'Programmatic', endorsements: 38, isVerified: true },
      { name: 'Header Bidding', endorsements: 35, isVerified: true },
      { name: 'GAM', endorsements: 33, isVerified: true },
      { name: 'Ad Operations', endorsements: 31, isVerified: true },
      { name: 'Performance Optimization', endorsements: 29, isVerified: true }
    ]
  },
  {
    name: 'Software Development & Architecture',
    skills: [
      { name: 'JavaScript', endorsements: 45, isVerified: true },
      { name: 'TypeScript', endorsements: 40, isVerified: true },
      { name: 'React', endorsements: 38, isVerified: true },
      { name: 'Node.js', endorsements: 36, isVerified: true },
      { name: 'API Integration', endorsements: 34, isVerified: true },
      { name: 'Web Development', endorsements: 32, isVerified: true }
    ]
  },
  {
    name: 'Additional Skills',
    skills: [
      { name: 'Team Leadership', endorsements: 39, isVerified: true },
      { name: 'Project Management', endorsements: 36, isVerified: true },
      { name: 'Digital Marketing', endorsements: 33, isVerified: true },
      { name: 'Data Analytics', endorsements: 31, isVerified: true },
      { name: 'Product Innovation', endorsements: 28, isVerified: true },
      { name: 'Technical Integration', endorsements: 27, isVerified: true }
    ]
  }
];

const SkillCard = ({ skill, category }: { skill: { name: string; endorsements: number; isVerified?: boolean }; category: string }) => {
  const group = buzzwordGroups.find(g => g.words.includes(skill.name));
  
  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{skill.name}</h3>
        {skill.isVerified && (
          <span className="text-emerald-400" role="status" aria-label="Verified skill">
            ✓
          </span>
        )}
      </div>
      <p className="text-gray-400">
        {skill.endorsements} endorsements
      </p>
      <div className="mt-4">
        <span
          className={`text-xs px-3 py-1 rounded-full border ${group?.color || 'border-gray-400/40'}`}
        >
          {group?.title || category}
        </span>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-gradient mb-12">Skills & Expertise</h2>
        {skillCategories.map((category) => (
          <div key={category.name} className="mb-12 last:mb-0">
            <h3 className="text-2xl font-semibold mb-6">{category.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} category={category.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}