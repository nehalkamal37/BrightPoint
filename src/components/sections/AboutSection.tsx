import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

interface AboutSectionProps {
  showFull?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ 
  showFull = false 
}) => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Transforming Businesses Through Innovative Software Solutions
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              At BrightPoint Summit, we specialize in creating custom software solutions 
              that help businesses optimize operations, increase efficiency, and drive growth. 
              With our expertise in software development, we transform your business challenges 
              into technological opportunities.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900">Customized Approach</h3>
                  <p className="text-gray-600">Every business is unique, and we tailor our solutions to meet your specific needs and challenges.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900">Technical Excellence</h3>
                  <p className="text-gray-600">Our team of expert developers stays at the forefront of technology to deliver cutting-edge solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900">Client Partnership</h3>
                  <p className="text-gray-600">We work collaboratively with you throughout the development process to ensure your vision becomes reality.</p>
                </div>
              </div>
            </div>
            
            {!showFull && (
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/about'}
              >
                Learn More About Us
              </Button>
            )}
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-50 rounded-2xl transform rotate-3 z-0"></div>
            <div className="absolute -inset-4 bg-orange-50 rounded-2xl transform -rotate-3 z-0"></div>
            
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team collaborating on software solution" 
                className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
        
        {showFull && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-10">
              Our mission is to empower businesses through innovative software solutions 
              that drive growth, efficiency, and competitive advantage. We strive to 
              transform complex business challenges into elegant technological solutions, 
              delivering measurable results and exceptional value to our clients.
            </p>
            
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">Discover</h4>
                <p className="text-gray-700">
                  We start by deeply understanding your business, challenges, goals, and requirements 
                  through thorough discovery sessions.
                </p>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">Design</h4>
                <p className="text-gray-700">
                  Our experts then architect and design a solution that addresses your specific 
                  needs while ensuring scalability and future flexibility.
                </p>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">Develop & Deploy</h4>
                <p className="text-gray-700">
                  We build your solution using agile methodologies to ensure transparency, 
                  quality, and on-time delivery, followed by seamless implementation.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;