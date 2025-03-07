'use client';

import { judges } from '@/data/judges';

export default function Judges() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-gradient mb-12">Judges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {judges.map((judge) => (
            <div key={judge.name} className="glass-card p-6 animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">{judge.name}</h3>
              <p className="text-gray-400">
                {judge.getAge()} years old
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 