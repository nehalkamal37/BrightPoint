import React from 'react';
import ContactSection from '../components/sections/ContactSection';

const ContactPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Contact Us - BrightPoint Summit';
  }, []);

  return (
    <div className="pt-20">
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Have questions or ready to discuss your project? Reach out to our team today.
            </p>
          </div>
        </div>
      </div>
      
      <ContactSection />
    </div>
  );
};

export default ContactPage;