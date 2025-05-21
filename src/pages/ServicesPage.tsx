import React from 'react';
import ServicesSection from '../components/sections/ServicesSection';
import CtaSection from '../components/sections/CtaSection';

const ServicesPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Our Services - BrightPoint Summit';
  }, []);

  return (
    <div className="pt-20">
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive software solutions tailored to meet your business needs and drive growth.
            </p>
          </div>
        </div>
      </div>
      
      <ServicesSection 
        showAll={true} 
        title="What We Offer"
        subtitle="Explore our full range of software development and technology services"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>
          
          <div className="relative">
            {/* Process line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right mb-8 md:mb-0">
                  <div className="bg-blue-50 p-6 rounded-lg inline-block">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-bold mb-4">
                      1
                    </span>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Discovery & Planning</h3>
                    <p className="text-gray-700">
                      We start by understanding your business goals, requirements, and challenges 
                      through in-depth discussions and analysis.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block relative">
                  <div className="absolute top-1/2 -left-4 w-8 h-8 bg-blue-500 rounded-full transform -translate-y-1/2 border-4 border-white"></div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="hidden md:block relative">
                  <div className="absolute top-1/2 -right-4 w-8 h-8 bg-blue-500 rounded-full transform -translate-y-1/2 border-4 border-white"></div>
                </div>
                
                <div className="md:col-start-2 mb-8 md:mb-0">
                  <div className="bg-blue-50 p-6 rounded-lg inline-block">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-bold mb-4">
                      2
                    </span>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Design & Architecture</h3>
                    <p className="text-gray-700">
                      We design a solution architecture that addresses your specific 
                      needs and lay out a detailed development roadmap.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right mb-8 md:mb-0">
                  <div className="bg-blue-50 p-6 rounded-lg inline-block">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-bold mb-4">
                      3
                    </span>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Development & Testing</h3>
                    <p className="text-gray-700">
                      Our expert team develops your solution using agile methodologies, 
                      with regular updates and comprehensive testing throughout.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block relative">
                  <div className="absolute top-1/2 -left-4 w-8 h-8 bg-blue-500 rounded-full transform -translate-y-1/2 border-4 border-white"></div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="hidden md:block relative">
                  <div className="absolute top-1/2 -right-4 w-8 h-8 bg-blue-500 rounded-full transform -translate-y-1/2 border-4 border-white"></div>
                </div>
                
                <div className="md:col-start-2 mb-8 md:mb-0">
                  <div className="bg-blue-50 p-6 rounded-lg inline-block">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-bold mb-4">
                      4
                    </span>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Deployment & Support</h3>
                    <p className="text-gray-700">
                      We handle the deployment process and provide ongoing support 
                      and maintenance to ensure your solution continues to excel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection 
        title="Need a Custom Solution?"
        subtitle="Tell us about your project and we'll help you find the perfect approach."
      />
    </div>
  );
};

export default ServicesPage;