import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Globe, BarChart3, TrendingUp, Zap } from 'lucide-react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationState, setAnimationState] = useState({
    chart1: 0,
    chart2: 0,
    globeRotation: 0,
    pulseSize: 1
  });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Animation interval for ongoing animations
    const animationInterval = setInterval(() => {
      setAnimationState(prev => ({
        chart1: prev.chart1 < 80 ? prev.chart1 + 2 : 80,
        chart2: prev.chart2 < 60 ? prev.chart2 + 1.5 : 60,
        globeRotation: (prev.globeRotation + 1) % 360,
        pulseSize: 1 + 0.05 * Math.sin(Date.now() / 500)
      }));
    }, 30);
    
    return () => {
      clearTimeout(timer);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
      {/* Enhanced Background elements - parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" 
             style={{ transform: `translateY(${isVisible ? '5px' : '0px'})`, transition: 'transform 5s ease-in-out', transitionDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl"
             style={{ transform: `translateY(${isVisible ? '-8px' : '0px'})`, transition: 'transform 6s ease-in-out', transitionDelay: '0.8s' }}></div>
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-cyan-100/50 blur-3xl"
             style={{ transform: `translateY(${isVisible ? '3px' : '0px'})`, transition: 'transform 7s ease-in-out', transitionDelay: '1s' }}></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} md:grid-cols-2 md:items-center`}>
          
          {/* Text content with subtle animations */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 transition-all hover:bg-blue-200 hover:scale-105">
                <Globe className="mr-2 h-4 w-4" style={{ animation: isVisible ? 'spin 10s linear infinite' : 'none' }} />
                Global Solutions
              </div>
              
              <h2 className="text-4xl font-bold tracking-tight text-slate-800 md:text-5xl">
                Integrated Global 
                <span className="block text-blue-500 relative">
                  Business Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500" 
                        style={{ width: isVisible ? '100%' : '0%', transition: 'width 1.5s ease-out', transitionDelay: '0.8s' }}></span>
                </span>
              </h2>
            </div>
            
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                 style={{ width: isVisible ? '80px' : '0px', transition: 'width 1s ease-out', transitionDelay: '0.8s' }}></div>
            
            <p className="text-lg leading-relaxed text-slate-600">
              Empowering organizations with seamless global business services 
              specializing in multi-dimensional functions leveraging innovative 
              technologies and deep market insights.
            </p>
            
            <div className="space-y-4">
              {/* List items with staggered animations */}
              <div className="flex items-center text-slate-700 transform transition-all"
                   style={{ opacity: isVisible ? 1 : 0, transform: `translateX(${isVisible ? '0' : '-20px'})`, transition: 'all 0.6s ease-out', transitionDelay: '0.3s' }}>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                  <Check className="h-4 w-4" />
                </span>
                <span className="ml-3">End-to-end supply chain optimization</span>
              </div>
              <div className="flex items-center text-slate-700 transform transition-all"
                   style={{ opacity: isVisible ? 1 : 0, transform: `translateX(${isVisible ? '0' : '-20px'})`, transition: 'all 0.6s ease-out', transitionDelay: '0.5s' }}>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                  <Check className="h-4 w-4" />
                </span>
                <span className="ml-3">AI-powered business intelligence</span>
              </div>
              <div className="flex items-center text-slate-700 transform transition-all"
                   style={{ opacity: isVisible ? 1 : 0, transform: `translateX(${isVisible ? '0' : '-20px'})`, transition: 'all 0.6s ease-out', transitionDelay: '0.7s' }}>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                  <Check className="h-4 w-4" />
                </span>
                <span className="ml-3">Global logistics network integration</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:translate-y-0.5 active:translate-y-0">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </button>
              
              <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 hover:translate-y-0.5 active:translate-y-0">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Visual section with enhanced animations */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-1 shadow-xl shadow-blue-100/20 hover:shadow-blue-200/30 transition-shadow"
                 style={{ transform: `rotate(${isVisible ? '0deg' : '3deg'})`, transition: 'transform 1s ease-out' }}>
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100/50 blur-xl"
                     style={{ transform: `scale(${animationState.pulseSize})`, transition: 'transform 1s ease-in-out' }}></div>
                <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-cyan-100/50 blur-xl"
                     style={{ transform: `scale(${animationState.pulseSize * 0.9})`, transition: 'transform 1.2s ease-in-out' }}></div>
              </div>
              
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-white p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex space-x-1">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-3 w-14 rounded-full bg-slate-200"></div>
                    <div className="h-3 w-3 rounded-full bg-slate-200"></div>
                  </div>
                </div>
                
                <div className="mx-auto mb-6 flex max-w-xs flex-col rounded-lg bg-slate-50 p-4 shadow-lg transform transition-all hover:shadow-xl"
                     style={{ transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)' }}>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-blue-500" 
                             style={{ transform: `rotate(${animationState.globeRotation}deg)`, transition: 'transform 0.3s linear' }} />
                      <span className="font-medium text-slate-800">Global Network</span>
                    </div>
                    <span className="text-xs font-semibold bg-green-100 text-green-600 px-2 py-0.5 rounded-full flex items-center">
                      <span className="relative flex h-2 w-2 mr-1">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                      </span>
                      Live
                    </span>
                  </div>
                  
                  <div className="relative mb-3 h-32 overflow-hidden rounded-md bg-white">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="h-full w-full text-slate-100" viewBox="0 0 100 100">
                        <path 
                          d="M10,50 Q25,25 40,50 T70,50 T100,50" 
                          stroke="currentColor" 
                          strokeWidth="0.5" 
                          fill="none"
                        />
                        <path 
                          d="M10,65 Q35,40 60,65 T100,65" 
                          stroke="currentColor" 
                          strokeWidth="0.5" 
                          fill="none"
                        />
                        <path 
                          d="M10,35 Q45,10 80,35 T100,35" 
                          stroke="rgb(59, 130, 246)" 
                          strokeWidth="1.5" 
                          fill="none"
                          strokeDasharray="200"
                          strokeDashoffset={isVisible ? "0" : "200"}
                          style={{ transition: "stroke-dashoffset 2s ease-in-out" }}
                        />
                        {/* Animated data points */}
                        <circle cx="10" cy="35" r="0" fill="rgb(59, 130, 246)" 
                                style={{ r: isVisible ? "2" : "0", transition: "r 0.5s ease-out", transitionDelay: "0.5s" }} />
                        <circle cx="30" cy="15" r="0" fill="rgb(59, 130, 246)" 
                                style={{ r: isVisible ? "2" : "0", transition: "r 0.5s ease-out", transitionDelay: "0.7s" }} />
                        <circle cx="50" cy="25" r="0" fill="rgb(59, 130, 246)" 
                                style={{ r: isVisible ? "2" : "0", transition: "r 0.5s ease-out", transitionDelay: "0.9s" }} />
                        <circle cx="70" cy="15" r="0" fill="rgb(59, 130, 246)" 
                                style={{ r: isVisible ? "2" : "0", transition: "r 0.5s ease-out", transitionDelay: "1.1s" }} />
                        <circle cx="90" cy="30" r="0" fill="rgb(59, 130, 246)" 
                                style={{ r: isVisible ? "2" : "0", transition: "r 0.5s ease-out", transitionDelay: "1.3s" }} />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded bg-slate-100 p-2 text-center transition-all hover:bg-blue-50 hover:shadow-sm">
                      <div className="text-xs text-slate-500">Regions</div>
                      <div className="text-sm font-medium text-slate-800" 
                           style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s', transitionDelay: '1.5s' }}>24</div>
                    </div>
                    <div className="rounded bg-slate-100 p-2 text-center transition-all hover:bg-blue-50 hover:shadow-sm">
                      <div className="text-xs text-slate-500">Partners</div>
                      <div className="text-sm font-medium text-slate-800"
                           style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s', transitionDelay: '1.7s' }}>125</div>
                    </div>
                    <div className="rounded bg-slate-100 p-2 text-center transition-all hover:bg-blue-50 hover:shadow-sm">
                      <div className="text-xs text-slate-500">Efficiency</div>
                      <div className="text-sm font-medium text-slate-800"
                           style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s', transitionDelay: '1.9s' }}>97%</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-slate-50 p-3 transform transition-all hover:shadow-md"
                       style={{ transform: isVisible ? 'translateY(0)' : 'translateY(15px)', opacity: isVisible ? 1 : 0, 
                              transition: 'all 0.6s ease-out', transitionDelay: '1.2s' }}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">Supply Chain</span>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-blue-500" />
                        <span className="text-xs font-medium text-blue-500">+12%</span>
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                           style={{ width: `${animationState.chart1}%`, transition: 'width 1s ease-out' }}></div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3 transform transition-all hover:shadow-md"
                       style={{ transform: isVisible ? 'translateY(0)' : 'translateY(15px)', opacity: isVisible ? 1 : 0, 
                              transition: 'all 0.6s ease-out', transitionDelay: '1.4s' }}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">Operations</span>
                      <div className="flex items-center space-x-1">
                        <Zap className="h-4 w-4 text-indigo-500" />
                        <span className="text-xs font-medium text-indigo-500">+8%</span>
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500"
                           style={{ width: `${animationState.chart2}%`, transition: 'width 1s ease-out' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced decorative elements with animations */}
            <div className="absolute -right-4 top-1/4 h-20 w-20 rounded-full bg-blue-100/50 backdrop-blur-xl"
                 style={{ 
                   animation: isVisible ? 'pulse 3s infinite alternate' : 'none',
                   transform: `scale(${animationState.pulseSize})`,
                 }}></div>
            <div className="absolute -bottom-10 left-1/3 h-16 w-16 rounded-full bg-indigo-100/50 backdrop-blur-xl"
                 style={{ 
                   animation: isVisible ? 'pulse 4s infinite alternate-reverse' : 'none',
                   transform: `scale(${animationState.pulseSize * 0.8})`,
                 }}></div>
            
            {/* New floating element */}
            <div className="absolute top-10 -right-6 h-12 w-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-300 rotate-12 shadow-lg"
                 style={{ 
                   animation: isVisible ? 'float 5s ease-in-out infinite' : 'none',
                   opacity: isVisible ? 0.7 : 0,
                   transition: 'opacity 1s ease-out',
                 }}></div>
          </div>
        </div>
      </div>
      
      {/* Add global animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(8deg); }
          100% { transform: translateY(0px) rotate(12deg); }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Banner;