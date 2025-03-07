export interface BuzzwordGroup {
  title: string;
  words: string[];
  color: { borderColor: string };
}

export const buzzwordGroups: BuzzwordGroup[] = [
  {
    title: 'Advertising Technology & Monetization',
    words: ['Ad Tech', 'Programmatic', 'GAM', 'Header Bidding', 'Prebid.js', 'Xandr', 'Ad Operations', 'AFS', 'Adnami', 'SSP', 'Ad Tech Platform', 'Ad Monetization', 'Social Media', 'SEO', 'Promotion'],
    color: { borderColor: '#60a5fa' }
  },
  {
    title: 'Data & Performance Analytics',
    words: ['Data Analytics', 'A/B Testing', 'Performance Marketing', 'Business Intelligence', 'Campaign Analytics', 'ROI Analysis', 'Performance Optimization', 'Revenue Analytics'],
    color: { borderColor: '#4ade80' }
  },
  {
    title: 'Web Development & Technical Skills',
    words: ['JavaScript', 'TypeScript', 'React', 'API Integration', 'Git', 'Web Development', 'HTML5', 'CSS3', 'Technical Integration', 'jQuery', 'Drupal', 'Ruby on Rails', 'IT Support'],
    color: { borderColor: '#c084fc' }
  },
  {
    title: 'Leadership & Strategy',
    words: ['Team Leadership', 'Project Management', 'Scrum', 'Cross-functional Teams', 'Strategic Planning', 'Stakeholder Management', 'Team Building', 'Mentoring', 'Technical Leadership', 'Office Administration'],
    color: { borderColor: '#facc15' }
  },
  {
    title: 'AI & Automation',
    words: ['AI Tools', 'Cursor', 'ChatGPT', 'Copilot', 'Automation'],
    color: { borderColor: '#f87171' }
  },
  {
    title: 'Business & Market Strategy',
    words: ['Digital Marketing', 'UI/UX', 'Digital Transformation', 'Product Innovation', 'Market Strategy', 'Platform Innovation', 'Automotive Industry', 'Sales', 'Revenue Growth', 'Sales Strategy', 'Client Relations', 'Business Development', 'Solution Design', 'Customer Service', 'Construction'],
    color: { borderColor: '#f472b6' }
  },
  {
    title: 'Creative & Design',
    words: ['Adobe Photoshop', 'Photography', 'Video Editing'],
    color: { borderColor: '#818cf8' }
  }
]; 