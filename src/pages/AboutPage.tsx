import React from 'react';
import AboutSection from '../components/sections/AboutSection';
import team from '../data/team';
import { Card, CardContent } from '../components/ui/Card';
import CtaSection from '../components/sections/CtaSection';

const AboutPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'About Us - BrightPoint Summit';
  }, []);

  return (
    <div className="pt-20">
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">About BrightPoint Summit</h1>
            <p className="text-xl text-blue-100">
              We're a passionate team of software experts dedicated to helping businesses 
              succeed through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>
      
      <AboutSection showFull={true} />
      {/*
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the talented professionals who make our software solutions possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.id} className="text-center">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent>
                  <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                  <p className="text-orange-500 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The core principles that guide our work and interactions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg text-center">
              <div className="bg-blue-100 p-3 inline-flex rounded-full mb-4">
                <svg className="h-8 w-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in everything we do, from code quality to client communication.
              </p>
            </div>
            
            <div className="p-6 bg-blue-50 rounded-lg text-center">
              <div className="bg-blue-100 p-3 inline-flex rounded-full mb-4">
                <svg className="h-8 w-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Innovation</h3>
              <p className="text-gray-700">
                We embrace innovative approaches and stay at the forefront of technology trends.
              </p>
            </div>
            
            <div className="p-6 bg-blue-50 rounded-lg text-center">
              <div className="bg-blue-100 p-3 inline-flex rounded-full mb-4">
                <svg className="h-8 w-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Partnership</h3>
              <p className="text-gray-700">
                We build true partnerships with our clients, working collaboratively to achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection 
        title="Ready to Work with Us?"
        subtitle="Let's discuss how our team can help bring your software vision to life."
      />
    </div>
  );
};

export default AboutPage;