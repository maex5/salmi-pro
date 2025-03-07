'use client';

import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGlobe, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactInfo = ({ icon: Icon, text, link }: { icon: any; text: string; link?: string }) => {
  const content = (
    <>
      <div className="p-3 rounded-full bg-white/10">
        <Icon className="h-6 w-6 text-white/80" />
      </div>
      <div>
        <span className="text-gray-300">{text}</span>
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card p-6 animate-fade-in block"
      >
        <div className="flex items-center gap-4">
          {content}
        </div>
      </a>
    );
  }

  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex items-center gap-4">
        {content}
      </div>
    </div>
  );
};

const Reference = ({ name, role, company, companyUrl }: { 
  name: string; 
  role: string; 
  company: string; 
  companyUrl: string;
}) => (
  <div className="glass-card p-6 animate-fade-in">
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-400 mb-2">{role}, <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{company}</a></p>
    <p className="text-gray-300 italic">Contact information available upon request</p>
  </div>
);

export default function Contact() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-gradient text-left mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-left">Contact Information</h3>
            <div className="space-y-6">
              <ContactInfo
                icon={FaEnvelope}
                text="max.salmi@me.com"
                link="mailto:max.salmi@me.com"
              />
              <ContactInfo
                icon={FaPhone}
                text="+358 40 198 0800"
                link="tel:+358401980800"
              />
              <ContactInfo
                icon={FaMapMarkerAlt}
                text="Helsinki, Finland"
              />
              <ContactInfo
                icon={FaGlobe}
                text="https://salmi.pro/"
                link="https://salmi.pro/"
              />
              <ContactInfo
                icon={FaLinkedin}
                text="LinkedIn"
                link="https://fi.linkedin.com/in/max-salmi-3b648559"
              />
              <ContactInfo
                icon={FaGithub}
                text="GitHub"
                link="https://github.com/maex5"
              />
            </div>
          </div>
          
          <div className="glass-card p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-left">References</h3>
            <div className="space-y-6">
              <Reference
                name="Kim Salmi"
                role="CTO"
                company="Duunitori"
                companyUrl="https://duunitori.fi"
              />
              <Reference
                name="Jasse Marin"
                role="Product Manager"
                company="Schibsted"
                companyUrl="https://www.schibsted.com"
              />
              <Reference
                name="Marko Leivo"
                role="Sales Manager"
                company="Audi Center"
                companyUrl="https://www.audicenter.fi"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 