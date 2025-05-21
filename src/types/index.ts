export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CaseStudyType {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  technologies: string[];
  image: string;
  results: string[];
}

export interface TestimonialType {
  id: string;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
}

export interface TeamMemberType {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface BlogPostType {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}