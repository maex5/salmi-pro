export interface Education {
  school: string;
  degree: string;
  period: string;
  description: string;
  schoolLogo: string;
  subjects: string[];
}

export const education: Education[] = [
  {
    school: 'Laurea University of Applied Sciences',
    degree: 'Bachelor of Business Administration (BBA) / Information technology',
    period: '2013 - 2017',
    description: 'Studied Business Information Technology with a focus on software development, web technologies, and digital business.',
    schoolLogo: '/laurea.jpg',
    subjects: [
      'Software Development',
      'Web Technologies',
      'Business Administration',
      'Project Management',
      'Digital Marketing',
      'UI/UX Design'
    ]
  },
  {
    school: 'Gymnasiet Svenska normallyceum',
    degree: 'Finnish Matriculation Examination',
    period: '2008 - 2012',
    description: 'Completed secondary education with a focus on mathematics, physics, and computer science.',
    schoolLogo: '/norsen.png',
    subjects: [
      'Mathematics',
      'Physics',
      'Computer Science',
      'Swedish',
      'English',
      'Finnish'
    ]
  }
];