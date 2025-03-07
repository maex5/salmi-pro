'use client';

import { FaCode, FaServer, FaChartLine, FaPalette, FaUsers, FaGlobe } from 'react-icons/fa';

const SkillCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="glass-card p-6 animate-fade-in">
    <Icon className="h-8 w-8 mb-4 text-white/80" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default function About() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-gradient mb-8">About Me</h2>
        <div className="glass-card p-8 mb-8 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-4">Advertising Technology Manager at Schibsted Marketplaces Finland</h3>
          <p className="text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
            {`I specialize in advertising technology, online marketing, and software development, with deep expertise in adtech, ad operations, programmatic advertising, and cross-market integrations. I drive technical innovation, optimize ad performance, and ensure scalable, high-performing ad solutions across multiple Nordic marketplaces.

I take ownership of complex, high-impact projects, working closely with leadership, product managers, and cross-functional teams to align technical execution with business goals. I mentor teams, facilitate collaboration, and ensure smooth execution—even under tight deadlines.

I'm also a strong advocate for leveraging AI-driven tools to enhance efficiency, automate processes, and drive continuous improvement in digital advertising.`}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <SkillCard
            icon={FaChartLine}
            title="Ad Tech & Analytics"
            description="Specializing in ad technology, programmatic advertising, and performance optimization for digital advertising."
          />
          <SkillCard
            icon={FaCode}
            title="Software Development"
            description="Building scalable solutions with modern technologies like React and TypeScript."
          />
          <SkillCard
            icon={FaUsers}
            title="Team Leadership"
            description="Leading cross-functional teams, driving innovation, and ensuring successful project delivery."
          />
          <SkillCard
            icon={FaServer}
            title="Technical Integration"
            description="Implementing and optimizing complex ad tech solutions and platform integrations."
          />
          <SkillCard
            icon={FaPalette}
            title="Product Strategy"
            description="Bridging technical and business needs to create effective advertising solutions."
          />
          <SkillCard
            icon={FaGlobe}
            title="Digital Innovation"
            description="Leveraging AI and automation to enhance advertising efficiency and performance."
          />
        </div>
      </div>
    </section>
  );
} 