import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import '../components/Flyer.css';

export default function Flyer() {
  const handleDownload = () => {
    const flyer = document.getElementById("flyer");
    const btn = flyer.querySelector(".no-print");
    
    btn.style.display = "none";
    
    html2canvas(flyer).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth() - 20;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth, pdfHeight);
      pdf.save("brightpoint-summit-flyer.pdf");
      
      btn.style.display = "";
    });
  };

  return (
<div
  id="flyer"
  className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 mt-20"
>
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden relative">
        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="no-print absolute top-14 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            🚀 BrightPoint Summit
          </h1>
          <p className="mt-2 text-lg text-blue-100">
            Innovative Software Solutions for Your Business
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Services Section */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <span className="text-blue-600 text-xl">🌟</span>
              </div>
              <h2 className="text-xl font-bold text-blue-700">Our Services</h2>
            </div>
            <ul className="space-y-3 pl-2">
              {['Custom Software Development', 
                'Web & Mobile Application Development',
                'Cloud Integration & Migration',
                'UI/UX Design & Prototyping',
                'IT Strategy & Consulting'].map((service, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Testimonial Section */}
          <section className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <span className="text-blue-600 text-xl">📈</span>
              </div>
              <h2 className="text-xl font-bold text-blue-700">Our Impact</h2>
            </div>
            <blockquote className="italic text-gray-700 border-l-4 border-blue-400 pl-4 py-2">
              "BrightPoint Summit transformed our outdated systems into streamlined,
              efficient operations. Their team understood our business and delivered
              beyond expectations."
            </blockquote>
            <div className="text-right mt-3">
              <p className="font-semibold text-blue-700">— Sarah Johnson</p>
              <p className="text-sm text-gray-600">CTO, Retail Innovations Inc.</p>
            </div>
          </section>

          {/* Case Study Section */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <span className="text-blue-600 text-xl">🏆</span>
              </div>
              <h2 className="text-xl font-bold text-blue-700">Case Study</h2>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Retail Inventory Management System</h3>
              <div className="mt-2 space-y-1 text-gray-600">
                <p>Developed for a National Retail Chain</p>
                <p>50+ Locations streamlined</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {['React', 'Node.js', 'PostgreSQL', 'Docker'].map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <span className="text-blue-600 text-xl">👥</span>
              </div>
              <h2 className="text-xl font-bold text-blue-700">Contact Our Team</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Magued Michel</p>
                  <a href="tel:+17188737533" className="text-blue-600 hover:text-blue-800">+1 718 873 7533</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Mina Hannalla</p>
                  <a href="tel:+19016970621" className="text-blue-600 hover:text-blue-800">+1 901 697 0621</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@brightpointsummit.com" className="text-blue-600 hover:text-blue-800">info@brightpointsummit.com</a>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <a href="https://www.brightpointsummit.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">www.brightpointsummit.com</a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center py-6 border-t border-gray-200 bg-gray-50">
          <p className="text-gray-600">
            ✨ Let's build your future together! ✨
          </p>
        </footer>
      </div>
    </div>
  );
}