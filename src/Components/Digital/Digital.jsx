import React from 'react';

function Digital() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Our Digital Services</h1>
          <p className="mt-2 text-lg text-gray-600">Comprehensive solutions to transform your business</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Digital Transformation Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 text-blue-500">⚙️</div>
                <h2 className="ml-3 text-xl font-bold text-gray-900">Digital Transformation & Systems Implementation</h2>
              </div>
              <p className="mb-4 text-gray-600 font-medium">Redesign your operations for a digital-first world.</p>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">What We Do:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Business process automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">ERP, CRM, and workflow tool implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Legacy system modernization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Cross-platform integrations</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Benefits:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center text-xl">
                      💡
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Process Automation</h4>
                      <p className="text-sm text-gray-600">Streamline tasks and reduce errors, freeing up your team for higher-value work.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center text-xl">
                      🔧
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Enhanced Efficiency</h4>
                      <p className="text-sm text-gray-600">Optimize workflows, reduce redundancies, and speed up your business processes.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center text-xl">
                      📈
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Future-Ready Systems</h4>
                      <p className="text-sm text-gray-600">Implement scalable tools that grow with your business.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-900">
                  <span className="font-semibold">Ideal for:</span> Companies modernizing operations or preparing for scale.
                </p>
                <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Book a Free Consultation →
                </button>
              </div>
            </div>
          </div>

          {/* Business Intelligence Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 text-purple-500">📊</div>
                <h2 className="ml-3 text-xl font-bold text-gray-900">Business Intelligence & Analytics</h2>
              </div>
              <p className="mb-4 text-gray-600 font-medium">Turn your data into actionable insights.</p>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">What We Do:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">BI dashboard setup (Power BI, Tableau)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Forecasting & predictive analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Real-time reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Cross-functional analytics (sales, ops, finance)</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Benefits:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center text-xl">
                      🧠
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Informed Decisions</h4>
                      <p className="text-sm text-gray-600">Empower leadership with the data they need to make strategic decisions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center text-xl">
                      ⏳
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Time Savings</h4>
                      <p className="text-sm text-gray-600">Speed up data processing and analysis with automated reporting.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center text-xl">
                      🔍
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Improved Visibility</h4>
                      <p className="text-sm text-gray-600">Get real-time insights into your operations, sales, and financials.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-900">
                  <span className="font-semibold">Ideal for:</span> Mid-sized businesses needing better visibility across departments.
                </p>
                <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Book a Free Consultation →
                </button>
              </div>
            </div>
          </div>

          {/* Training & Change Management Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 text-green-500">🧠</div>
                <h2 className="ml-3 text-xl font-bold text-gray-900">Training & Change Management</h2>
              </div>
              <p className="mb-4 text-gray-600 font-medium">Help your team adapt to growth and transformation.</p>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">What We Do:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Software and process onboarding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Team training on new systems or roles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Change readiness planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Internal communication strategies</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Benefits:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center text-xl">
                      🏫
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Empowered Employees</h4>
                      <p className="text-sm text-gray-600">Ensure your team is equipped to thrive with new systems and workflows.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center text-xl">
                      🌱
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Smooth Transitions</h4>
                      <p className="text-sm text-gray-600">Minimize disruption during organizational changes.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center text-xl">
                      🚀
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Increased Productivity</h4>
                      <p className="text-sm text-gray-600">Foster a culture of continuous learning and adaptability.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-900">
                  <span className="font-semibold">Ideal for:</span> Companies implementing new tools, scaling fast, or going through reorganization.
                </p>
                <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Book a Free Consultation →
                </button>
              </div>
            </div>
          </div>

          {/* Entry-Level Starter Package Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 text-amber-500">📦</div>
                <h2 className="ml-3 text-xl font-bold text-gray-900">Entry-Level Starter Package</h2>
              </div>
              <p className="mb-4 text-gray-600 font-medium">Start Smart. Scale Fast.</p>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">What We Do:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Monthly operational support (procurement, HR, finance, IT helpdesk)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">One-time setup of finance or HR systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Advisory + light analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Custom development of MVPs or internal tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Access to our vendor/supplier network</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Benefits:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center text-xl">
                      💸
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Affordable Startup</h4>
                      <p className="text-sm text-gray-600">Get the services you need at a price you can afford.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center text-xl">
                      🔄
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Scalable Solutions</h4>
                      <p className="text-sm text-gray-600">Start small and scale up as your business grows.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center text-xl">
                      📈
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Business Growth</h4>
                      <p className="text-sm text-gray-600">Position your business for growth with essential tools and processes.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-900">
                  <span className="font-semibold">Ideal for:</span> Startups, small businesses, or new projects looking to gain a competitive edge.
                </p>
                <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Book a Free Consultation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to transform your business?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our expert team is ready to help you implement the right digital solutions for your needs.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 shadow-md">
              Schedule Your Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500">© 2025 Digital Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Digital;