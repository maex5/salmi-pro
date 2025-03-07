export interface Reference {
  name: string;
  title: string;
  company: string;
  avatar: string;
  quote: string;
  buzzwords: string[];
}

export interface Contact {
  email: string;
  linkedin: {
    username: string;
    url: string;
  };
  github: {
    username: string;
    url: string;
  };
  references: Reference[];
}

export const contact: Contact = {
  email: 'max.salmi@me.com',
  linkedin: {
    username: 'Max Salmi',
    url: 'https://fi.linkedin.com/in/max-salmi-3b648559'
  },
  github: {
    username: 'maex5',
    url: 'https://github.com/maex5'
  },
  references: [
    {
      name: 'Kim Nyberg',
      title: 'Head of Product at Schibsted',
      company: 'Schibsted',
      avatar: '/images/references/kim.jpg',
      quote: 'Max is an exceptional ad tech professional who combines deep technical expertise with strong business acumen. His ability to innovate and lead complex projects has been invaluable to our team.',
      buzzwords: ['Ad Tech', 'Technical Leadership', 'Innovation', 'Project Management']
    },
    {
      name: 'Jasse Marin',
      title: 'Product Manager at Schibsted',
      company: 'Schibsted',
      avatar: '/images/references/jasse.jpg',
      quote: 'Working with Max has been a great experience. His expertise in ad technology and ability to solve complex technical challenges while maintaining focus on business objectives is remarkable.',
      buzzwords: ['Product Development', 'Problem Solving', 'Technical Integration', 'Business Focus']
    },
    {
      name: 'Marko Lehtimäki',
      title: 'Head of Development at Schibsted',
      company: 'Schibsted',
      avatar: '/images/references/marko.jpg',
      quote: 'Max has been instrumental in modernizing our ad tech infrastructure. His technical knowledge and leadership skills have helped us achieve significant improvements in performance and revenue.',
      buzzwords: ['Technical Architecture', 'Team Leadership', 'Performance Optimization', 'Ad Tech']
    },
    {
      name: 'Jaakko Kuivalainen',
      title: 'Development Manager at Schibsted',
      company: 'Schibsted',
      avatar: '/images/references/jaakko.jpg',
      quote: 'Max\'s contributions to our ad tech ecosystem have been outstanding. He consistently delivers high-quality solutions and effectively leads teams through complex technical challenges.',
      buzzwords: ['Technical Leadership', 'Ad Tech', 'Team Management', 'Solution Architecture']
    }
  ]
};