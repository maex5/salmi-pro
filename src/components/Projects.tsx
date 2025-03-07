'use client';

import Image from 'next/image';
import { projects } from '@/data/projects';

interface Project {
  title: string;
  link: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <a 
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="glass-card p-4 animate-fade-in hover:bg-white/10 transition-all duration-300 cursor-pointer text-center"
  >
    <h3 className="text-lg font-semibold">{project.title}</h3>
  </a>
);

export default function Projects() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-gradient mb-8">Side Projects / Involved In</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}