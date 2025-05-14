import React from 'react'

function BusinessServices() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* HR Services Section */}
      <div className="mb-10 border-b pb-8">
        <div className="flex items-center mb-4">
          <span className="text-blue-600 text-2xl mr-2">👥</span>
          <h2 className="text-2xl font-bold text-blue-800">Human Resources (HR) Services</h2>
        </div>
        
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Empowering Your Workforce for Success</h3>
        <p className="mb-6">
          Our HR services are designed to manage your human capital effectively, ensuring compliance, engagement, and development.
        </p>
        
        <div className="mb-6">
          <h4 className="font-bold mb-2">Scope of Services:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Recruitment & Onboarding</span>: Attracting top talent and ensuring seamless integration into your organization.</li>
            <li><span className="font-semibold">Payroll & Benefits Administration</span>: Managing employee compensation, benefits enrollment, and compliance.</li>
            <li><span className="font-semibold">Performance Management</span>: Implementing systems to monitor and enhance employee performance.</li>
            <li><span className="font-semibold">Training & Development</span>: Offering programs to upskill employees and foster career growth.</li>
            <li><span className="font-semibold">Compliance & Risk Management</span>: Ensuring adherence to labor laws and mitigating HR-related risks.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-bold mb-2">Key Benefits:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Enhanced Employee Satisfaction</span>: Foster a positive work environment that boosts morale and retention.</li>
            <li><span className="font-semibold">Regulatory Compliance</span>: Stay ahead of legal requirements and avoid potential penalties.</li>
            <li><span className="font-semibold">Strategic HR Planning</span>: Align HR initiatives with business goals for long-term success.</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded flex items-center justify-between">
          <p className="font-semibold">Looking to optimize your HR functions?</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            👉 Book a Free Consultation
          </button>
        </div>
      </div>
      
      {/* Finance & Accounting Services Section */}
      <div>
        <div className="flex items-center mb-4">
          <span className="text-blue-600 text-2xl mr-2">💼</span>
          <h2 className="text-2xl font-bold text-blue-800">Finance & Accounting Services</h2>
        </div>
        
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Driving Financial Clarity and Control</h3>
        <p className="mb-6">
          Our finance and accounting services provide accurate, timely, and insightful financial information to support strategic decision-making.
        </p>
        
        <div className="mb-6">
          <h4 className="font-bold mb-2">Scope of Services:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Accounts Payable & Receivable Management</span>: Ensuring efficient processing of incoming and outgoing payments.</li>
            <li><span className="font-semibold">General Ledger Maintenance</span>: Keeping accurate records of all financial transactions.</li>
            <li><span className="font-semibold">Financial Reporting & Analysis</span>: Providing comprehensive reports to inform business strategies.</li>
            <li><span className="font-semibold">Budgeting & Forecasting</span>: Assisting in the preparation of financial plans and projections.</li>
            <li><span className="font-semibold">Tax Compliance & Planning</span>: Managing tax obligations and identifying savings opportunities.</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-bold mb-2">Key Benefits:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Financial Accuracy</span>: Maintain precise financial records to support business operations.</li>
            <li><span className="font-semibold">Informed Decision-Making</span>: Utilize detailed reports to guide strategic planning.</li>
            <li><span className="font-semibold">Cost Efficiency</span>: Reduce overhead by outsourcing complex financial tasks.</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded flex items-center justify-between">
          <p className="font-semibold">Need expert financial management?</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            👉 Book a Free Consultation
          </button>
        </div>
      </div>
    </div>
  )
}

export default BusinessServices