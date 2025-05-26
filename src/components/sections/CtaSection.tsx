import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title = "Ready to Transform Your Business?",
  subtitle = "Let's discuss how our custom software solutions can help you achieve your goals.",
  buttonText = "Request a Free Consultation",
  buttonLink = "/quote"
}) => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {subtitle}
          </p>
          <Button
            size="lg"
            onClick={() => window.location.href = buttonLink}
        /*    className="bg-white text-orange-600 hover:bg-blue-50 group"*/
                        className="bg-blue-50 text-orange-600 hover:bg-blue-50 group"

          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;