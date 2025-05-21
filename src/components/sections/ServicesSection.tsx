import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import services, { getIconComponent } from '../../data/services';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

interface ServicesSectionProps {
  showAll?: boolean;
  title?: string;
  subtitle?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  showAll = false,
  title = "Our Services",
  subtitle = "Comprehensive software solutions tailored to your business needs"
}) => {
  // If showAll is false, only show the first 3 services
  const displayedServices = showAll ? services : services.slice(0, 3);
  
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => {
            const IconComponent = getIconComponent(service.icon);
            
            return (
              <Card key={service.id} hover={true} className="h-full flex flex-col">
                <CardHeader className="flex flex-col items-start">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-700 mb-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="px-6 py-4 mt-auto">
                  <Link to={`/services#${service.id}`} className="text-blue-700 font-medium inline-flex items-center group">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
        
        {!showAll && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/services'}
              className="mx-auto"
            >
              View All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;