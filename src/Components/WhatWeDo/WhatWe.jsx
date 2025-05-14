import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  },
  tabContent: {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  }
};

const BackgroundElement = ({ className, animate }) => (
  <motion.div 
    className={className}
    animate={animate}
    transition={{
      duration: animate.duration || 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const TabButton = ({ isActive, onClick, title }) => (
  <motion.button 
    onClick={onClick}
    className={`flex-shrink-0 px-6 py-3 rounded-full mr-3 transition-all duration-300 whitespace-nowrap ${
      isActive ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-blue-50'
    }`}
    whileHover={{ scale: isActive ? 1 : 1.05 }}
    whileTap={{ scale: 0.98 }}
  >
    {title}
  </motion.button>
);

const ServiceIcon = ({ icon }) => (
  <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-6 text-white shadow-lg">
    {icon}
  </div>
);

const BenefitCard = ({ benefit }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-white rounded-xl shadow-lg p-8 h-full transform transition-all duration-300 hover:shadow-xl">
      <motion.div 
        className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center text-4xl mb-6 shadow-lg`}
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <span>{benefit.icon}</span>
      </motion.div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
    </div>
  </motion.div>
);

export default function WhatWeDo() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  // Services data
  const services = useMemo(() => [
    {
      title: "Custom Product Development Teams in India",
      description: "We assemble teams of experts to design and develop hardware and software solutions tailored to your needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Design Engineering & Prototyping",
      description: "From concept to working prototype, we ensure every detail is meticulously planned and executed.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "India-Based Manufacturing",
      description: "Identify and partner with trusted Indian manufacturers across industries to create your products.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Compliance, Quality Control, and Logistics",
      description: "We manage quality checks, certification processes, and logistics, ensuring smooth production cycles.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ], []);

  // Benefits data
  const benefits = useMemo(() => [
    {
      title: "Strategic Market Presence",
      description: "Position your brand on the map in India. Leverage India as a manufacturing hub to expand into the local market, with growing demand in sectors like consumer electronics, automotive, medical devices, and consumer goods.",
      icon: "🌍",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Cost Efficiency",
      description: "Manufacture products at a fraction of the cost compared to Western markets. India's highly competitive labor and material costs mean you can scale production without compromising quality.",
      icon: "💸",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Accelerate Time-to-Market",
      description: "With quick prototyping, optimized production cycles, and access to a large pool of skilled engineers and manufacturers, get your product to market faster.",
      icon: "🚀",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Risk Mitigation",
      description: "Reduce production risks by working with a diverse supplier base. Our local expertise ensures that you meet compliance standards while maintaining quality.",
      icon: "🔒",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "End-to-End Support",
      description: "From product design to supplier identification, manufacturing, and logistics, we provide a seamless experience and comprehensive management of your product's lifecycle.",
      icon: "📦",
      color: "from-red-400 to-red-600"
    },
    {
      title: "Local Presence, Global Reach",
      description: "Establish a presence in India, creating opportunities for local partnerships, government incentives, and tapping into India's vast consumer market. This presence can also help reduce tariffs and trade barriers when exporting products internationally.",
      icon: "📍",
      color: "from-indigo-400 to-indigo-600"
    }
  ], []);

  const animationControls = inView ? "visible" : "hidden";

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden py-20" ref={ref}>
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
      >
        <BackgroundElement 
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-200 opacity-10"
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        />
        <BackgroundElement 
          className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-indigo-200 opacity-10"
          animate={{ scale: [1, 1.05, 1] }}
        />
        <BackgroundElement 
          className="absolute top-40 right-40 w-24 h-24 rounded-full bg-purple-200 opacity-10"
          animate={{ rotate: [0, 360] }}
        />
      </motion.div>
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial="hidden"
          animate={animationControls}
          variants={animations.item}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">What We Do</h2>
          <motion.div 
            className="w-24 h-1 bg-blue-500 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          />
        </motion.div>
      </div>
      
      {/* Services Section - Interactive Tabs */}
      <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial="hidden"
          animate={animationControls}
          variants={animations.container}
        >
          <motion.div variants={animations.item} className="mb-8">
            <div className="flex overflow-x-auto pb-4 hide-scrollbar">
              {services.map((service, index) => (
                <TabButton
                  key={index}
                  isActive={activeTab === index}
                  onClick={() => setActiveTab(index)}
                  title={service.title}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="md:flex">
              {/* Left side: Icon animation */}
              <div className="md:w-2/5 bg-gradient-to-br from-blue-50 to-indigo-100 p-10 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-blue-200 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.1, 0.2]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <ServiceIcon icon={services[activeTab].icon} />
                    <BackgroundElement 
                      className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-300 rounded-full opacity-30"
                      animate={{ y: [0, -5, 0], x: [0, 5, 0] }}
                    />
                    <BackgroundElement 
                      className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-300 rounded-full opacity-20"
                      animate={{ scale: [1, 1.1, 1] }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Right side: Content */}
              <motion.div 
                className="md:w-3/5 p-10"
                variants={animations.tabContent}
                initial="hidden"
                animate="visible"
                key={activeTab}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {services[activeTab].title}
                </h3>
                <motion.div 
                  className="w-16 h-1 bg-blue-500 mb-6"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                />
                <p className="text-gray-600 leading-relaxed mb-6">
                  {services[activeTab].description}
                </p>
                
                <motion.button 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center shadow-md"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#2563eb"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Key Benefits Section */}
      <div className="w-full py-16 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 h-full w-1/2 overflow-hidden"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 500 500" className="absolute h-full w-full text-white opacity-5">
            <path d="M488.6 250c0 131.4-106.6 238-238 238S12.6 381.4 12.6 250 119.2 12 250.6 12s238 106.6 238 238z" fill="none" stroke="currentColor" strokeWidth="100"></path>
          </svg>
        </motion.div>
        
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={animationControls}
            variants={animations.item}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Key Benefits</h2>
            <motion.div 
              className="w-24 h-1 bg-white mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: inView ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            />
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={animations.container}
            initial="hidden"
            animate={animationControls}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={animations.item}>
                <BenefitCard benefit={benefit} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate={animationControls}
          variants={animations.item}
        >
          <motion.div 
            className="bg-white rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden"
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            transition={{ duration: 0.3 }}
          >
            <BackgroundElement 
              className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full"
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
            />
            <BackgroundElement 
              className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full"
              animate={{ scale: [1, 1.05, 1] }}
            />
            
            <div className="relative z-10 md:flex items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Product Development & Manufacturing?</h3>
                <p className="text-lg text-gray-600">Partner with us to leverage India's manufacturing ecosystem and bring your products to market faster, cheaper, and with higher quality.</p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg flex items-center shadow-lg text-lg font-medium justify-center w-full md:w-auto"
                  whileHover={{ 
                    scale: 1.05,
                    background: "linear-gradient(to right, #1d4ed8, #4338ca)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Get Started Today
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Custom Style for Animations */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}