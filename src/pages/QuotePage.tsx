import React from 'react';
import QuoteRequestSection from '../components/sections/QuoteRequestSection';

const QuotePage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Request a Quote - BrightPoint Summit';
  }, []);

  return (
    <div className="pt-20">
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Request a Quote</h1>
            <p className="text-xl text-blue-100">
              Tell us about your project and we'll create a custom solution that meets your needs.
            </p>
          </div>
        </div>
      </div>
      
      <QuoteRequestSection />
    </div>
  );
};

export default QuotePage;