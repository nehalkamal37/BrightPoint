import { CaseStudyType } from '../types';

const caseStudies: CaseStudyType[] = [
  {
    id: 'retail-inventory',
    title: 'Retail Inventory Management System',
    client: 'National Retail Chain',
    industry: 'Retail',
    description: 'Developed a comprehensive inventory management system that streamlined operations across 50+ locations, resulting in significant cost savings and improved accuracy.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    image: 'https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    results: [
      '32% reduction in inventory discrepancies',
      '45% faster order processing',
      '18% increase in overall operational efficiency'
    ]
  },
  {
    id: 'healthcare-portal',
    title: 'HIPAA-Compliant Patient Portal',
    client: 'Regional Healthcare Network',
    industry: 'Healthcare',
    description: 'Engineered a secure, HIPAA-compliant patient portal featuring end-to-end encryption, role-based access control, and comprehensive audit logging. Implemented strict authentication protocols and secure messaging systems.',
    technologies: ['Angular', 'Express.js', 'MongoDB', 'AWS HIPAA-eligible services'],
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    results: [
      'Achieved 100% HIPAA compliance certification',
      'Implemented 256-bit AES encryption for data at rest',
      'Established automated security monitoring and alerts',
      'Reduced administrative workload by 65%'
    ]
  },
  {
    id: 'logistics-app',
    title: 'Logistics & Fleet Management Application',
    client: 'Interstate Shipping Company',
    industry: 'Transportation',
    description: 'Built a comprehensive logistics platform with real-time tracking, route optimization, and analytics that transformed the client\'s operations.',
    technologies: ['React Native', 'Python', 'Redis', 'Google Maps API'],
    image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    results: [
      '22% reduction in fuel costs',
      '37% improvement in on-time deliveries',
      '41% decrease in customer support inquiries'
    ]
  },
  {
    id: 'fintech-solution',
    title: 'Financial Analytics Dashboard',
    client: 'Investment Management Firm',
    industry: 'Finance',
    description: 'Designed and implemented a sophisticated financial analytics platform that provides real-time insights and decision-making tools for portfolio managers.',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'D3.js'],
    image: 'https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    results: [
      '28% increase in portfolio performance',
      '52% faster risk assessment',
      'Expanded client base by 35% in first year'
    ]
  }
];

export default caseStudies;