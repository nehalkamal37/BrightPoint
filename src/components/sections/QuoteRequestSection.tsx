import React, { useState } from 'react';
import Button from '../ui/Button';
import { Send, Briefcase, Shield } from 'lucide-react';

const QuoteRequestSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
    hipaaRequired: false,
    dataTypes: [] as string[]
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleDataTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      dataTypes: e.target.checked 
        ? [...prev.dataTypes, value]
        : prev.dataTypes.filter(type => type !== value)
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          description: '',
          hipaaRequired: false,
          dataTypes: []
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <section className="py-16 bg-gray-50" id="quote">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Request a Quote</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Let's discuss your project and how we can help you achieve your business goals.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-green-800 mb-2">Quote Request Submitted!</h4>
              <p className="text-green-700 mb-4">
                Thank you for your interest in our services. Our team will review your project details and get back to you shortly with a custom quote.
              </p>
              <p className="text-green-700">
                <strong>What happens next?</strong> One of our experts will contact you within 1-2 business days to discuss your project in more detail.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex items-center justify-center mb-8">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Briefcase className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 ml-3">
                  Let's Build Something Great
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service You're Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="custom-software">Custom Software Development</option>
                  <option value="web-development">Website Development</option>
                  <option value="mobile-apps">Mobile Application Development</option>
                  <option value="management-software">HIPAA-Compliant Management Software</option>
                  <option value="database-solutions">Secure Database Solutions</option>
                  <option value="api-development">API Development & Integration</option>
                  <option value="other">Other/Not Sure</option>
                </select>
              </div>

              <div className="mb-6">
                <div className="flex items-start mb-4">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="hipaaRequired"
                      name="hipaaRequired"
                      checked={formData.hipaaRequired}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="hipaaRequired" className="text-sm font-medium text-gray-700">
                      This project requires HIPAA compliance
                    </label>
                    <p className="text-sm text-gray-500">
                      Check this if your project involves protected health information (PHI)
                    </p>
                  </div>
                </div>

                {formData.hipaaRequired && (
                  <div className="ml-7 p-4 bg-blue-50 rounded-md">
                    <div className="flex items-center mb-3">
                      <Shield className="h-5 w-5 text-blue-700 mr-2" />
                      <span className="text-sm font-medium text-blue-900">
                        Types of Protected Health Information (PHI)
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Medical Records',
                        'Patient Demographics',
                        'Billing Information',
                        'Lab Results',
                        'Prescription Data',
                        'Appointment Scheduling',
                        'Insurance Information',
                        'Clinical Notes'
                      ].map((type) => (
                        <div key={type} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`dataType-${type}`}
                            value={type}
                            checked={formData.dataTypes.includes(type)}
                            onChange={handleDataTypeChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor={`dataType-${type}`} className="ml-2 text-sm text-gray-700">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="< $5,000">Less than $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000+">$50,000+</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="< 1 month">Less than 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Ongoing">Ongoing support/maintenance</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  required
                  placeholder="Please describe your project, goals, and any specific requirements..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <div className="mb-8 p-4 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600">
                  <strong>Privacy Notice:</strong> We take your privacy seriously. Any protected health information (PHI) shared through this form will be handled in accordance with HIPAA regulations. We use industry-standard encryption and security measures to protect your data.
                </p>
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <>Processing Request...</>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Quote Request
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteRequestSection;