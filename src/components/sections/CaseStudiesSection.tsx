import React, { useState } from 'react';
import { Card, CardContent, CardImage } from '../ui/Card';
import caseStudies from '../../data/caseStudies';
import Button from '../ui/Button';
import { Layers, ChevronRight } from 'lucide-react';

interface CaseStudiesSectionProps {
  limit?: number;
  title?: string;
  subtitle?: string;
}

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  limit,
  title = "Our Portfolio",
  subtitle = "Successful projects that showcase our expertise and capabilities"
}) => {
  const [activeStudy, setActiveStudy] = useState<string | null>(null);
  
  const displayedCaseStudies = limit ? caseStudies.slice(0, limit) : caseStudies;
  
  return (
    <section className="py-16 bg-white" id="portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedCaseStudies.map((caseStudy) => (
            <Card 
              key={caseStudy.id} 
              hover={true}
              className="overflow-hidden h-full"
            >
              <CardImage 
                src={caseStudy.image} 
                alt={caseStudy.title} 
              />
              <CardContent>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2">
                    {caseStudy.industry}
                  </span>
                  <h3 className="text-xl font-semibold text-blue-900">{caseStudy.title}</h3>
                  <p className="text-gray-500 text-sm">{caseStudy.client}</p>
                </div>
                
                <p className="text-gray-700 mb-4">{caseStudy.description}</p>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeStudy === caseStudy.id ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="pt-4">
                    <h4 className="text-sm font-semibold text-blue-900 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="text-sm font-semibold text-blue-900 mb-2">Results</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="text-orange-500 h-4 w-4 mt-1 mr-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button
                  className="mt-4 text-blue-700 font-medium inline-flex items-center"
                  onClick={() => setActiveStudy(
                    activeStudy === caseStudy.id ? null : caseStudy.id
                  )}
                >
                  {activeStudy === caseStudy.id ? 'Show Less' : 'Show Details'}
                  <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${
                    activeStudy === caseStudy.id ? 'rotate-90' : ''
                  }`} />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {limit && limit < caseStudies.length && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/portfolio'}
              className="mx-auto"
            >
              <Layers className="mr-2 h-5 w-5" />
              View All Case Studies
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;