import React from 'react';
import CaseStudiesSection from '../components/sections/CaseStudiesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';

const PortfolioPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Portfolio - BrightPoint Summit';
  }, []);

  return (
    <div className="pt-20">
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-blue-100">
              Explore our past projects and see how we've helped businesses achieve their goals.
            </p>
          </div>
        </div>
      </div>
      
      <CaseStudiesSection 
        title="Case Studies"
        subtitle="In-depth looks at how our software solutions solved real business challenges"
      />
      {/*
      <TestimonialsSection />
      */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across multiple sectors, providing specialized solutions for various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-blue-50 rounded-lg text-center">
              <div className="bg-blue-100 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Retail & E-commerce</h3>
              <p className="text-gray-700">
                Inventory management systems, e-commerce platforms, and customer engagement solutions.
              </p>
            </div>
            
            <div className="p-8 bg-blue-50 rounded-lg text-center">
              <div className="bg-blue-100 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Healthcare</h3>
              <p className="text-gray-700">
                Patient management systems, medical record solutions, and healthcare analytics platforms.
              </p>
            </div>
            
            <div className="p-8 bg-blue-50 rounded-lg text-center">
              <div className="bg-blue-100 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Finance</h3>
              <p className="text-gray-700">
                Financial management tools, investment platforms, and secure payment processing systems.
              </p>
            </div>
            
            <div className="p-8 bg-blue-50 rounded-lg text-center">
              <div className="bg-blue-100 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Education</h3>
              <p className="text-gray-700">
                Learning management systems, educational platforms, and administrative tools.
              </p>
            </div>
            
            <div className="p-8 bg-blue-50 rounded-lg text-center">
              <div className="bg-blue-100 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Real Estate</h3>
              <p className="text-gray-700">
                Property management systems, client portals, and real estate analytics tools.
              </p>
            </div>
            
            <div className="p-8 bg-blue-50 rounded-lg text-center">
              <div className="bg-blue-100 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Logistics & Transportation</h3>
              <p className="text-gray-700">
                Fleet management systems, route optimization tools, and supply chain solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection 
        title="Have a Project in Mind?"
        subtitle="Let's discuss how we can create a solution that meets your industry-specific needs."
      />
    </div>
  );
};

export default PortfolioPage;