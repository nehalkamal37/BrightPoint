import React from 'react';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import CaseStudiesSection from '../components/sections/CaseStudiesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import BlogSection from '../components/sections/BlogSection';
import CtaSection from '../components/sections/CtaSection';

const HomePage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'BrightPoint Summit - Software Solutions';
  }, []);

  return (
    <>
      <Hero 
        title="Empowering Businesses with Smarter Software Solutions"
        subtitle="We create custom software that drives efficiency, growth, and competitive advantage for businesses of all sizes."
        ctaPrimary={{
          text: "Get a Quote",
          link: "/quote"
        }}
        ctaSecondary={{
          text: "Explore Our Work",
          link: "/portfolio"
        }}
      />
      
      <AboutSection />
      
      <ServicesSection />
      
      <CaseStudiesSection limit={2} />
      
      <TestimonialsSection />
      
      <BlogSection />
      
      <CtaSection />
    </>
  );
};

export default HomePage;