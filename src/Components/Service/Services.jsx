import { useState, useEffect } from 'react';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('procurement');
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
    
    // Add scroll animation observer with improved options
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px' 
    });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
      {/* Header section with improved animation */}
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 transition-all duration-700 delay-300 transform origin-center" style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></div>
          <p className="text-lg text-gray-600 mb-12">Comprehensive business solutions designed to optimize your operations and drive growth</p>
        </div>
      </div>
      
      {/* Service Navigation Tabs */}
      <div className="container mx-auto px-6 mb-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('procurement')}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
              activeTab === 'procurement' 
                ? 'bg-blue-600 text-white transform scale-105' 
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            Procurement Services
          </button>
          <button 
            onClick={() => setActiveTab('product')}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
              activeTab === 'product' 
                ? 'bg-blue-600 text-white transform scale-105' 
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            Product Design & Development
          </button>
        </div>
      </div>
      
      {/* Procurement Services Section */}
      <div className="container mx-auto px-6 mb-24" style={{ display: activeTab === 'procurement' ? 'block' : 'none' }}>
        <div className="animate-on-scroll bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 opacity-0 translate-y-10 hover:shadow-2xl transform hover:-translate-y-1">
          <div className="md:flex">
            {/* Left side content */}
            <div className="md:w-7/12 p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="text-5xl mr-4">🛒</div>
                <h2 className="text-3xl font-bold text-gray-800">Procurement Services</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-blue-600 mb-6">Streamlining Your Sourcing for Maximum Efficiency</h3>
              
              <p className="text-gray-600 mb-8 text-lg">
                Our procurement solutions are designed to optimize your sourcing processes, reduce costs, and enhance supplier relationships through strategic management and advanced technology.
              </p>
              
              <div className="mb-10">
                <h4 className="font-bold text-gray-800 mb-4 text-lg">Scope of Services:</h4>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="mr-4 text-blue-500 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Strategic Sourcing & Vendor Management:</span> 
                      <p className="text-gray-600">Identifying and managing suppliers to ensure quality and cost-effectiveness.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 text-blue-500 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Contract Negotiation & Compliance:</span> 
                      <p className="text-gray-600">Crafting and overseeing contracts to align with business objectives and regulatory standards.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 text-blue-500 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Purchase Order Management:</span> 
                      <p className="text-gray-600">Handling the end-to-end process of purchase orders, from creation to fulfillment.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mb-10">
                <h4 className="font-bold text-gray-800 mb-6 text-lg">Key Benefits:</h4>
                <div className="grid md:grid-cols-3 gap-5">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
                    <div className="text-blue-600 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-800 text-lg mb-2">Cost Savings</h5>
                    <p className="text-gray-600">Achieve significant reductions in procurement expenses.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
                    <div className="text-blue-600 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-800 text-lg mb-2">Improved Supplier Performance</h5>
                    <p className="text-gray-600">Enhance reliability and quality through effective supplier management.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
                    <div className="text-blue-600 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-800 text-lg mb-2">Process Efficiency</h5>
                    <p className="text-gray-600">Accelerate procurement cycles with automated solutions.</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <button className="px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center mx-auto md:mx-0 shadow-lg">
                  Book a Free Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Right side image */}
            <div className="md:w-5/12 bg-gradient-to-br from-indigo-50 to-blue-100">
              <div className="h-full flex items-center justify-center p-8">
                <div className="relative w-full max-w-md">
                  <div className="bg-white p-3 rounded-xl shadow-xl rotate-3 transform transition-all duration-500 hover:rotate-0 hover:scale-105">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 h-64 flex items-center justify-center rounded-lg overflow-hidden relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-blue-500 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      
                      {/* Animated elements */}
                      <div className="absolute top-10 left-10 w-12 h-12 bg-blue-200 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-10 right-10 w-16 h-16 bg-indigo-200 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-lg transform rotate-12"></div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-300 rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Design Section */}
      <div className="container mx-auto px-6 mb-24" style={{ display: activeTab === 'product' ? 'block' : 'none' }}>
        <div className="animate-on-scroll bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 opacity-0 translate-y-10 hover:shadow-2xl transform hover:-translate-y-1">
          <div className="md:flex flex-row-reverse">
            {/* Content side */}
            <div className="md:w-7/12 p-8 md:p-12">
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full font-medium mb-6">
                Product Innovation
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Design, Development & Manufacturing in India</h2>
              
              <h3 className="text-xl font-semibold text-blue-600 mb-6">Bring your product ideas to life — with full support from concept to production, while strategically positioning your business in India.</h3>
              
              <div className="mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-md">
                <p className="text-gray-700 text-lg">
                  At <span className="font-bold">Sunserk</span>, we help you develop, design, and manufacture high-quality products while leveraging <span className="font-bold">India's cost advantages</span> and robust manufacturing ecosystem. Whether you're looking to innovate, scale production, or enter the Indian market, we guide you every step of the way.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-5 bg-white rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 text-lg mb-2">Concept Development</h4>
                  <p className="text-gray-600">Turn your ideas into viable product concepts</p>
                </div>
                <div className="text-center p-5 bg-white rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 text-lg mb-2">Design & Prototyping</h4>
                  <p className="text-gray-600">Create physical models to test and refine</p>
                </div>
                <div className="text-center p-5 bg-white rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 text-lg mb-2">Manufacturing</h4>
                  <p className="text-gray-600">Scale production with quality assurance</p>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center shadow-lg">
                  Explore Our Manufacturing Solutions
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Image side */}
            <div className="md:w-5/12 bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className="h-full flex items-center justify-center p-8">
                <div className="relative w-full">
                  <div className="rounded-xl shadow-xl transform rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-105">
                    <div className="bg-white p-5 rounded-xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 h-36 rounded-lg flex items-center justify-center shadow-inner">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 h-36 rounded-lg flex items-center justify-center shadow-inner">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 h-36 rounded-lg flex items-center justify-center shadow-inner">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                          </svg>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 h-36 rounded-lg flex items-center justify-center shadow-inner">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-300 rounded-full opacity-70 animate-pulse" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute -top-6 -left-6 w-28 h-28 bg-indigo-300 rounded-lg opacity-60 transform rotate-12 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="container mx-auto px-6 pb-24">
        <div className="animate-on-scroll bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden transition-all duration-700 opacity-0 translate-y-10">
          <div className="p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your business?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-3xl mx-auto">
              Let our expert team help you optimize operations, reduce costs, and drive innovation with our comprehensive business solutions.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl text-lg font-medium hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
      
      {/* Custom styling for scroll animations */}
      <style jsx>{`
        .animate-on-scroll {
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse {
          animation: pulse 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Services