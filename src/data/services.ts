import { ServiceType } from '../types';
import { Code, Database, Laptop, LayoutDashboard, Smartphone, FileCode } from 'lucide-react';

const services: ServiceType[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions designed to address your specific business challenges and requirements.',
    icon: 'Code',
    features: [
      'Business process automation',
      'Integration with existing systems',
      'Scalable architecture design',
      'Ongoing maintenance and support'
    ]
  },
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'Professional, responsive websites that elevate your brand and drive business growth.',
    icon: 'Laptop',
    features: [
      'Corporate websites',
      'E-commerce solutions',
      'UI/UX design',
      'Content management systems'
    ]
  },
  /*
  {
    id: 'mobile-apps',
    title: 'Mobile Application Development',
    description: 'Cross-platform and native mobile apps that deliver exceptional user experiences.',
    icon: 'Smartphone',
    features: [
      'iOS and Android development',
      'User-centered design',
      'Performance optimization',
      'App store submission support'
    ]
  },
  */
   {
    id: 'management-software',
    title: 'Management Software',
    description: 'Secure, compliant systems for healthcare providers with comprehensive data protection.',
    icon: 'LayoutDashboard',
    features: [
      'HIPAA-compliant data storage',
      'Secure patient portals',
      'Encrypted communication systems',
      'Inventory & POS systems',
      'CRM and ERP systems',
      'Project management tools'

    ]
  },
  /*
  {
    id: 'management-software',
    title: 'HIPAA-Compliant Management Software',
    description: 'Secure, compliant systems for healthcare providers with comprehensive data protection.',
    icon: 'LayoutDashboard',
    features: [
      'HIPAA-compliant data storage',
      'Secure patient portals',
      'Encrypted communication systems',
      'Audit trail and compliance reporting',
      'Role-based access control'
    ]
  },
  */
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions & Hosting',
    description: 'Reliable cloud infrastructure and hosting services to ensure your applications are always available.',
    icon: 'LayoutDashboard',
    features: [
      'Scalable cloud hosting',
      'Data backup and recovery',
      'Load balancing and CDN integration',
      '24/7 monitoring and support'
    ]
  },
  {
    id: 'database-solutions',
    title: 'Secure Database Solutions',
    description: 'Robust database architecture with industry-standard security protocols and compliance measures.',
    icon: 'Database',
    features: [
      'HIPAA-compliant data storage',
      'End-to-end encryption',
      'Automated backup systems',
      'Security auditing and monitoring',
      'Access control management'
    ]
  },
  {
    id: 'api-development',
    title: 'API Development & Integration',
    description: 'Custom API development and seamless integrations to connect your systems and services.',
    icon: 'FileCode',
    features: [
      'RESTful and GraphQL APIs',
      'Third-party integrations',
      'API security and authentication',
      'Documentation and support'
    ]
  }
];

export default services;

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Code':
      return Code;
    case 'Laptop':
      return Laptop;
    case 'Smartphone':
      return Smartphone;
    case 'LayoutDashboard':
      return LayoutDashboard;
    case 'Database':
      return Database;
    case 'FileCode':
      return FileCode;
    default:
      return Code;
  }
};