import { judges } from './judges';

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  logo: string;
  bgColor?: string;
}

// Technology color groups
const techColors = {
  // Ad Tech & Marketing
  adTech: ['Ad Tech', 'Programmatic', 'Header Bidding', 'Prebid.js', 'Ad Operations', 'Performance Marketing', 'Data Analytics', 'Revenue Growth', 'SEO', 'Digital Marketing'],
  // Development
  development: ['JavaScript', 'React', 'HTML5', 'CSS3', 'jQuery', 'Ruby on Rails', 'Web Development', 'UI/UX', 'Performance Optimization'],
  // Tools & Platforms
  tools: ['Drupal', 'Git', 'Jira', 'Scrum', 'ChatGPT', 'Copilot', 'Automation', 'Adobe Photoshop', 'Adobe After Effects'],
  // Business & Strategy
  business: ['Strategic Planning', 'Digital Transformation', 'Business Development', 'Market Strategy', 'Customer Service', 'Sales', 'Office Administration'],
  // Industry Specific
  industry: ['Automotive Industry', 'Construction', 'Photography', 'Video Editing']
};

export const experiences: ExperienceItem[] = [
  {
    title: 'Advertising Technology Manager',
    company: 'Schibsted Suomi',
    period: 'Oct 2020 - Present',
    description: `I started at Schibsted Marketplaces Finland as the Advertising Technology Manager, responsible for ad tech across Tori.fi, Oikotie.fi, Rakentaja.fi, Sähkövertailu.fi, and Puutarhanet. Our ad stack covered everything from data to programmatic and direct ads, ensuring effective monetization and scalability.

Over time, my role has expanded to a Nordic-wide focus, optimizing advertising technology across Tori, Oikotie, FINN, Blocket, DBA, and Bilbasen, platforms that serve millions of users daily across Finland, Sweden, Denmark, and Norway. My expertise spans programmatic advertising, Google Ads/GAM, Xandr, AFS, Relevant, Adnami, and other advanced ad solutions, ensuring scalable and high-performing systems.

I specialize in integrating and managing ad technologies, mentoring teams, and driving cross-country collaboration. I've played a key role in transitioning to new advertising platforms, leading modernization efforts to enhance efficiency, scalability, and performance. A significant portion of our services has already successfully migrated.

Beyond ad tech, I bridge business and technical needs, working closely with leadership and stakeholders to align strategy, research solutions, and ensure seamless execution. I also leverage AI-driven tools and automation to streamline workflows, improve efficiency, and drive innovation in digital advertising.`,
    technologies: ['Ad Tech', 'Programmatic', 'Header Bidding', 'Prebid.js', 'Ad Operations', 'AI Tools', 'ChatGPT', 'Copilot', 'Automation', 'Performance Optimization', 'Revenue Growth', 'Team Leadership', 'Project Management', 'Cross-functional Teams', 'Strategic Planning', 'Stakeholder Management', 'Team Building', 'Mentoring', 'Technical Leadership'],
    logo: '/schibsted_logo.png',
    bgColor: '#ffffff'
  },
  {
    title: 'Board Member',
    company: 'MIX Nordic Oy',
    period: 'Dec 2018 - Present',
    description: 'Helping MIX Nordic with technology and automation to grow and become an important player in the Finnish car importing field.',
    technologies: ['Strategic Planning', 'Digital Transformation', 'Business Development', 'Market Strategy', 'Team Leadership', 'Project Management', 'Stakeholder Management'],
    logo: '/mixnordic.png',
    bgColor: '#222222'
  },
  {
    title: 'Ad Tech Specialist',
    company: 'Tori.fi, Schibsted Media Group',
    period: 'Apr 2019 - Oct 2020',
    description: 'I\'m an software developer on the biggest online marketplace in Finland. As an ad tech specialist I do everything that has to do with advertising on Tori.fi. My main responsibilities are: planning and developing new (and better performing) ad solutions, programmatic, data, UX, performance analysis, GDPR, Scrum master, troubleshooting, client/agency/sales meetings, documentation, integrations and keeping the banners running smoothly.',
    technologies: ['Ad Tech', 'Ad Operations', 'Performance Marketing', 'Data Analytics', 'Revenue Growth', 'Project Management', 'Scrum', 'Cross-functional Teams', 'Stakeholder Management'],
    logo: '/tori.png',
    bgColor: '#ffffff'
  },
  {
    title: 'Frontend Developer',
    company: 'Tori.fi, Schibsted Media Group',
    period: 'Feb 2017 - Mar 2019',
    description: 'Developed and optimized web applications using modern web technologies.',
    technologies: ['JavaScript', 'React', 'Web Development', 'Performance Optimization', 'UI/UX', 'Scrum'],
    logo: '/tori.png',
    bgColor: '#ffffff'
  },
  {
    title: 'Social Media Marketing Coordinator',
    company: 'Madisson Beauty Oy',
    period: 'Nov 2015 - Nov 2017',
    description: 'Administrating webpages and Facebook. Made company website with Drupal.',
    technologies: ['Digital Marketing', 'Social Media', 'SEO', 'Drupal', 'UI/UX', 'Adobe Photoshop', 'Project Management'],
    logo: '/mb.png',
    bgColor: '#d664d2'
  },
  {
    title: 'Car sales assistant / Audi Center Airport',
    company: 'VV-Auto Group Oy',
    period: 'Jun 2011 - May 2016',
    description: 'Customer service, sales and marketing.',
    technologies: ['Sales', 'Customer Service', 'Photography', 'Automotive Industry'],
    logo: '/audi.jpg',
    bgColor: '#ffffff'
  },
  {
    title: 'Software Developer Internship',
    company: 'Agoedu',
    period: 'Jan 2015 - Jun 2015',
    description: 'Developing an internal web system with Ruby on Rails. Made first version of the company website with Drupal. Video editing with Adobe After Effects.',
    technologies: ['Ruby on Rails', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Drupal', 'Video Editing'],
    logo: '/agoedu.png',
    bgColor: '#00B4FE'
  },
  {
    title: 'Boat salesman/promoter',
    company: 'Astrum vene- ja autotalo',
    period: 'Feb 2013',
    description: 'Promoting different boat models. Making offers and trade offers.',
    technologies: ['Sales', 'Customer Service'],
    logo: '/astrum.png',
    bgColor: '#595959'
  },
  {
    title: 'Promoter',
    company: 'Dezoo',
    period: 'Jun 2012',
    description: 'Promoting the newest Seat models all around Finland.',
    technologies: ['Sales', 'Promotion', 'Automotive Industry'],
    logo: '/dezoo.png',
    bgColor: '#000000'
  },
  {
    title: 'Promoter',
    company: 'Dezoo',
    period: 'Dec 2011',
    description: 'Promoting Seat models.',
    technologies: ['Sales', 'Promotion', 'Automotive Industry'],
    logo: '/dezoo.png',
    bgColor: '#000000'
  },
  {
    title: 'Construction Worker',
    company: 'KMA Company',
    period: 'May 2011 - Aug 2011',
    description: 'Summerjob at a construction site.',
    technologies: ['Construction'],
    logo: '/kmac.png',
    bgColor: '#000000'
  },
  {
    title: 'Office Assistant',
    company: 'SEAT Finland / VV-Auto Group Oy',
    period: 'Jun 2007 - Aug 2010',
    description: 'Summerjob.',
    technologies: ['Office Administration', 'IT Support'],
    logo: '/seat.jpg',
    bgColor: '#ffffff'
  }
];