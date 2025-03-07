export interface BuzzwordGroup {
  title: string;
  words: string[];
  color: string;
}

export const buzzwordGroups: BuzzwordGroup[] = [
  {
    title: 'Advertising Technology & Monetization',
    words: ['Ad Tech', 'Programmatic', 'GAM', 'Header Bidding', 'Prebid.js', 'Xandr', 'Ad Operations', 'AFS', 'Adnami', 'SSP', 'Ad Tech Platform', 'Ad Monetization', 'Social Media', 'SEO', 'Promotion'],
    color: 'from-blue-400/20 to-blue-400/20 border-blue-400/40'
  },
  {
    title: 'Data & Performance Analytics',
    words: ['Data Analytics', 'A/B Testing', 'Performance Marketing', 'Business Intelligence', 'Campaign Analytics', 'ROI Analysis', 'Performance Optimization', 'Revenue Analytics'],
    color: 'from-green-400/20 to-green-400/20 border-green-400/40'
  },
  {
    title: 'Web Development & Technical Skills',
    words: ['JavaScript', 'TypeScript', 'React', 'API Integration', 'Git', 'Web Development', 'HTML5', 'CSS3', 'Technical Integration', 'jQuery', 'Drupal', 'Ruby on Rails', 'IT Support'],
    color: 'from-purple-400/20 to-purple-400/20 border-purple-400/40'
  },
  {
    title: 'Leadership & Strategy',
    words: ['Team Leadership', 'Project Management', 'Scrum', 'Cross-functional Teams', 'Strategic Planning', 'Stakeholder Management', 'Team Building', 'Mentoring', 'Technical Leadership', 'Office Administration'],
    color: 'from-yellow-400/20 to-yellow-400/20 border-yellow-400/40'
  },
  {
    title: 'AI & Automation',
    words: ['AI Tools', 'Cursor', 'ChatGPT', 'Copilot', 'Automation'],
    color: 'from-red-400/20 to-red-400/20 border-red-400/40'
  },
  {
    title: 'Business & Market Strategy',
    words: ['Digital Marketing', 'UI/UX', 'Digital Transformation', 'Product Innovation', 'Market Strategy', 'Platform Innovation', 'Automotive Industry', 'Sales', 'Revenue Growth', 'Sales Strategy', 'Client Relations', 'Business Development', 'Solution Design', 'Customer Service', 'Construction'],
    color: 'from-pink-400/20 to-pink-400/20 border-pink-400/40'
  },
  {
    title: 'Creative & Design',
    words: ['Adobe Photoshop', 'Photography', 'Video Editing'],
    color: 'from-indigo-400/20 to-indigo-400/20 border-indigo-400/40'
  }
]; 