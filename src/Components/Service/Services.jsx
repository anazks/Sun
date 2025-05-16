import React, { useState } from 'react'

function BusinessServices() {
  const [activeTab, setActiveTab] = useState('hr');
  
  return (
    <div className="w-full bg-gray-100 font-sans" style={{width:"100vw"}}>
      <div className="w-full max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Business Services</h1>
        
        {/* Service Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full shadow-md p-1 flex">
            <button
              onClick={() => setActiveTab('hr')}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all flex items-center ${
                activeTab === 'hr' 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Human Resources
            </button>
            <button
              onClick={() => setActiveTab('finance')}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all flex items-center ${
                activeTab === 'finance' 
                  ? 'bg-indigo-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Finance & Accounting
            </button>
          </div>
        </div>
        
        {/* HR Services Content */}
        {activeTab === 'hr' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-500 text-white rounded-xl p-3 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Human Resources Services</h2>
                  <p className="text-blue-600 font-medium">Empowering Your Workforce</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Our HR services help manage your workforce effectively, ensuring compliance, engagement, and development.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex">
                  <div className="mr-4 bg-blue-500 text-white p-2 rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Recruitment & Onboarding</h3>
                    <p className="text-sm text-gray-600">Attract top talent and streamline integration</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex">
                  <div className="mr-4 bg-blue-500 text-white p-2 rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Payroll & Benefits</h3>
                    <p className="text-sm text-gray-600">Manage compensation and benefits efficiently</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex">
                  <div className="mr-4 bg-blue-500 text-white p-2 rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Performance Management</h3>
                    <p className="text-sm text-gray-600">Monitor and enhance employee performance</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex">
                  <div className="mr-4 bg-blue-500 text-white p-2 rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Training & Development</h3>
                    <p className="text-sm text-gray-600">Upskill employees and foster career growth</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-5 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
                <p className="font-medium text-lg">Ready to optimize your HR functions?</p>
                <button className="bg-white text-blue-600 hover:bg-blue-50 transition-colors px-6 py-3 rounded-lg shadow-md text-sm font-bold flex items-center">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Finance Services Content */}
        {activeTab === 'finance' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-indigo-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-indigo-500 text-white rounded-xl p-3 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Finance & Accounting Services</h2>
                  <p className="text-indigo-600 font-medium">Driving Financial Clarity and Control</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Our finance services provide accurate, timely financial information to support strategic decision-making.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex">
                  <div className="mr-4 bg-indigo-500 text-white p-2 rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Accounts Payable & Receivable</h3>
                    <p className="text-sm text-gray-600">Efficient processing of payments</p>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex">
                  <div className="mr-4 bg-indigo-500 text-white p-2 rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Financial Reporting</h3>
                    <p className="text-sm text-gray-600">Comprehensive reports for informed decisions</p>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex">
                  <div className="mr-4 bg-indigo-500 text-white p-2 rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Budgeting & Forecasting</h3>
                    <p className="text-sm text-gray-600">Financial plans and projections</p>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex">
                  <div className="mr-4 bg-indigo-500 text-white p-2 rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Tax Compliance & Planning</h3>
                    <p className="text-sm text-gray-600">Managing tax obligations and savings</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-5 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
                <p className="font-medium text-lg">Need expert financial management?</p>
                <button className="bg-white text-indigo-600 hover:bg-indigo-50 transition-colors px-6 py-3 rounded-lg shadow-md text-sm font-bold flex items-center">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BusinessServices