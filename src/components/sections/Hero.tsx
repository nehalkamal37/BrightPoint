import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary?: {
    text: string;
    link: string;
  };
  ctaSecondary?: {
    text: string;
    link: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary
}) => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {ctaPrimary && (
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.location.href = ctaPrimary.link}
                className="group"
              >
                {ctaPrimary.text}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            )}
            
            {ctaSecondary && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = ctaSecondary.link}
                className="border-white text-white hover:bg-white/10"
              >
                {ctaSecondary.text}
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;