import React, { useState } from 'react'

function BusinessServices() {
  const [activeTab, setActiveTab] = useState('hr');
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-xl shadow-sm font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Business Services</h1>
      
      {/* Service Tabs */}
      <div className="flex mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('hr')}
          className={`px-4 py-2 font-medium text-sm transition-colors ${
            activeTab === 'hr' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          Human Resources
        </button>
        <button
          onClick={() => setActiveTab('finance')}
          className={`px-4 py-2 font-medium text-sm transition-colors ${
            activeTab === 'finance' 
              ? 'text-indigo-600 border-b-2 border-indigo-600' 
              : 'text-gray-600 hover:text-indigo-600'
          }`}
        >
          Finance & Accounting
        </button>
      </div>
      
      {/* HR Services Content */}
      {activeTab === 'hr' && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 text-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Human Resources (HR) Services</h2>
          </div>
          
          <p className="text-gray-700">
            Our HR services help manage your workforce effectively, ensuring compliance, engagement, and development.
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-gray-800 mb-3">Services Include:</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Recruitment & Onboarding</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Payroll & Benefits</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Performance Management</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Training & Development</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-medium text-gray-800">Ready to optimize your HR functions?</p>
            <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-5 py-2 rounded-lg shadow-sm text-sm font-medium flex items-center">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {/* Finance Services Content */}
      {activeTab === 'finance' && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-500 text-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Finance & Accounting Services</h2>
          </div>
          
          <p className="text-gray-700">
            Our finance services provide accurate, timely financial information to support strategic decision-making.
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-gray-800 mb-3">Services Include:</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Accounts Payable & Receivable</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Financial Reporting</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Budgeting & Forecasting</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tax Compliance & Planning</span>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-medium text-gray-800">Need expert financial management?</p>
            <button className="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white px-5 py-2 rounded-lg shadow-sm text-sm font-medium flex items-center">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BusinessServices