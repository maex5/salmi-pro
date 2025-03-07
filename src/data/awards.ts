import { judges } from "./judges";

export interface Award {
  title: string;
  company: string;
  year: string;
  description: string;
  logo: string;
  bgColor?: string;
  links?: { text: string; url: string }[];
  buzzwords?: string[];
}

export const awards: Award[] = [
  {
    title: 'Schibsted Sales Awards nomination 2019',
    company: 'Tori.fi / Schibsted',
    year: '2019',
    description: 'I planned and built a new type of advertising solution to support Tori, Tori users and Tori advertisers. The product was nominated for "Performance of the year" and presented to the whole Schibsted.',
    logo: '/tori.png',
    bgColor: '#ffffff',
    buzzwords: ['Ad Tech', 'Performance Marketing', 'Performance Optimization', 'Ad Monetization', 'Revenue Growth']
  },
  {
    title: '#3 - Third place in Hack the Construction Industry Productivity',
    company: 'Ultrahack',
    year: '2017',
    description: 'We made an app that digitally signs documents with the help of a QR-code reader and SignSpace. The track was organized by SignSpace, KIRA-digi and Tilaajavastuu. More info about Ultrahack.',
    logo: '/ultrahack.png',
    bgColor: '#000000',
    links: [
      { text: 'SignSpace', url: 'https://signspace.fi/' },
      { text: 'KIRA-digi', url: 'http://www.kiradigi.fi/etusivu.html' },
      { text: 'Tilaajavastuu', url: 'https://www.tilaajavastuu.fi/en/' },
      { text: 'Ultrahack', url: 'http://www.ultrahack.org/' }
    ],
    buzzwords: ['Digital Transformation', 'API Integration', 'UI/UX']
  },
  {
    title: '#1 - First place in Qvik speed coding challenge',
    company: 'Slush',
    year: '2016',
    description: 'An algorithm based puzzle where you had to use JS-commands to solve a maze.',
    logo: '/slush.png',
    bgColor: '#ffffff',
    links: [{ text: 'Qvik', url: 'http://qvik.fi' }],
    buzzwords: ['JavaScript', 'Automation', 'Technical Integration']
  },
  {
    title: 'Top 3 - Open track',
    company: 'Ultrahack',
    year: '2016',
    description: 'We developed further the fall detector (which won the Wellbeing Hackathon) and made an Alarm Center for the browser, phone and smartwatch. More info about Ultrahack.',
    logo: '/ultrahack.png',
    bgColor: '#000000',
    links: [
      { text: 'browser', url: 'http://salmi.pro/ject/fall/' },
      { text: 'phone', url: 'http://salmi.pro/ject/fall/demo/iphone/' },
      { text: 'smartwatch', url: 'http://salmi.pro/ject/fall/demo/polar/' },
      { text: 'Ultrahack', url: 'http://www.ultrahack.org/' }
    ],
    buzzwords: ['JavaScript', 'React', 'Product Innovation', 'UI/UX', 'API Integration']
  },
  {
    title: 'Bonus prize - Finnish Patent and Registration Office (PRH)',
    company: 'Ultrahack',
    year: '2016',
    description: 'A bonus prize from PRH to help us get a patent for our fall detector.',
    logo: '/ultrahack.png',
    bgColor: '#000000',
    links: [{ text: 'PRH', url: 'https://www.prh.fi/en/' }],
    buzzwords: ['Product Innovation', 'Project Management']
  },
  {
    title: '#1 - First place in Qvik speed coding challenge',
    company: 'Ultrahack',
    year: '2016',
    description: 'An algorithm based puzzle where you had to use JS-commands to solve a maze.',
    logo: '/ultrahack.png',
    bgColor: '#000000',
    links: [{ text: 'Qvik', url: 'http://qvik.fi' }],
    buzzwords: ['JavaScript', 'Automation']
  },
  {
    title: '#1 - First place',
    company: 'Wellbeing Hackathon',
    year: '2016',
    description: 'We made a Raspberry Pi + webcam solution that detects if an elderly person falls on the floor. Check out the solution and more info about the Wellbeing Hackathon.',
    logo: '/hyvinvointi.png',
    bgColor: '#000000',
    links: [
      { text: 'solution', url: 'http://tunn.us/arduino/falldetector2.php' },
      { text: 'Wellbeing Hackathon', url: 'http://hyvinvointihack.fi/ratkaisut-solutions-2016/' }
    ],
    buzzwords: ['AI Tools', 'JavaScript', 'Data Analytics', 'Product Innovation']
  },
  {
    title: '#1 - Best Daddy in the World',
    company: 'My family since 2014',
    year: '2014',
    description: `Judges: Alex (${judges[0].getAge()} yr.), Victoria (${judges[1].getAge()} yr.) and Cecilia (${judges[2].getAge()} yr.).`,
    logo: '/hearth.svg',
    bgColor: '#ffffff',
    buzzwords: ['Team Leadership', 'Cross-functional Teams', 'Team Building']
  }
];