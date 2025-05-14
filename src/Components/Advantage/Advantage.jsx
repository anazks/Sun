import React, { useEffect, useState } from 'react';
import './Ad.css'
export default function EnhancedAdvantage() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Intersection Observer setup for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('.animate').forEach(el => {
      observer.observe(el);
    });

    // Parallax effect on scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.querySelectorAll('.animate').forEach(el => {
        observer.unobserve(el);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sectors = [
    { name: 'Consumer Electronics', icon: '📱' },
    { name: 'Automotive & Transportation', icon: '🚗' },
    { name: 'Medical Devices & Equipment', icon: '🏥' },
    { name: 'Industrial & Commercial Products', icon: '🏭' },
    { name: 'Textiles & Apparel', icon: '👕' },
    { name: 'Food Processing & Packaging', icon: '🍱' }
  ];

  const idealFor = [
    {
      title: 'Product-Based Companies',
      description: 'looking to reduce manufacturing costs while improving product quality.',
      icon: '🏢'
    },
    {
      title: 'Startups',
      description: 'seeking to design and scale products quickly without incurring heavy production costs.',
      icon: '🚀'
    },
    {
      title: 'Enterprises',
      description: 'looking to enter or expand their presence in the Indian market.',
      icon: '🌐'
    },
    {
      title: 'OEMs',
      description: 'who want to outsource part or all of their production to a trusted network of suppliers in India.',
      icon: '🤝'
    }
  ];

  const indiaAdvantages = [
    {
      title: 'Skilled Workforce',
      description: 'India has a vast pool of engineers and skilled labor with competitive wage rates.',
      icon: '👨‍🔧',
      stat: '5.5M+',
      statLabel: 'Engineering graduates annually'
    },
    {
      title: 'Government Support',
      description: 'PLI schemes, tax benefits, and incentives for foreign manufacturers.',
      icon: '🏛️',
      stat: '₹1.97L Cr',
      statLabel: 'In production-linked incentives'
    },
    {
      title: 'Scalability',
      description: 'From prototyping to mass production, India offers flexible manufacturing solutions.',
      icon: '📈',
      stat: '10x',
      statLabel: 'Faster scaling potential'
    },
    {
      title: 'Cost Efficiency',
      description: 'Competitive operational costs without compromising on quality standards.',
      icon: '💰',
      stat: '30-45%',
      statLabel: 'Lower production costs'
    },
    {
      title: 'Robust Infrastructure',
      description: 'Modern industrial parks and growing logistics networks across the country.',
      icon: '🏗️',
      stat: '11+',
      statLabel: 'Industrial corridors'
    },
    {
      title: 'Market Access',
      description: 'Gateway to both domestic and international markets with favorable trade agreements.',
      icon: '🌍',
      stat: '1.4B+',
      statLabel: 'Domestic consumer market'
    }
  ];

  const testimonials = [
    {
      text: "Partnering with Indian manufacturers has reduced our production costs by 35% while maintaining the quality our customers expect.",
      author: "Sarah Chen",
      position: "VP of Operations, TechGlobal Inc."
    },
    {
      text: "The skilled engineering workforce in India helped us optimize our product design and streamline manufacturing processes.",
      author: "Miguel Rodriguez",
      position: "Chief Innovation Officer, Nexus Devices"
    },
    {
      text: "India's growing infrastructure and government incentives made our expansion into Asian markets seamless and cost-effective.",
      author: "Johanna Schmidt",
      position: "Director of Global Supply Chain, EuroTech"
    }
  ];

  return (
    <div className="advantage-container">
      {/* Animated Background Elements */}
      <div className="bg-elements">
        <div className="bg-circle circle-1" style={{ transform: `translate(${scrollY * 0.02}px, ${scrollY * -0.01}px)` }}></div>
        <div className="bg-circle circle-2" style={{ transform: `translate(${scrollY * -0.03}px, ${scrollY * 0.02}px)` }}></div>
        <div className="bg-circle circle-3" style={{ transform: `translate(${scrollY * 0.04}px, ${scrollY * 0.03}px)` }}></div>
        <div className="bg-grid"></div>
      </div>
      
      <div className="content-wrapper">
        <div className="header-section animate" style={{ '--delay': '0.1s' }}>
          <div className="tagline">
            <span className="tag-icon">🇮🇳</span>
            <span>Why Manufacture in India?</span>
          </div>
          <h1 className="main-title">
            <span className="text-gradient">Unlock India's</span> Manufacturing Potential
          </h1>
          <div className="divider">
            <svg className="divider-svg" width="120" height="6" viewBox="0 0 120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3H40" stroke="url(#paint0_linear)" strokeWidth="5" strokeLinecap="round"/>
              <path d="M50 3H70" stroke="url(#paint0_linear)" strokeWidth="5" strokeLinecap="round"/>
              <path d="M80 3H120" stroke="url(#paint0_linear)" strokeWidth="5" strokeLinecap="round"/>
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="3" x2="120" y2="3" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2563eb"/>
                  <stop offset="1" stopColor="#f59e0b"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="intro-text">
            India combines <span className="highlight">cost efficiency</span>, <span className="highlight">skilled talent</span>, and 
            <span className="highlight"> favorable policies</span> to create the ideal manufacturing ecosystem for global businesses.
          </p>
          
          <div className="intro-stats animate" style={{ '--delay': '0.4s' }}>
            <div className="stat-item">
              <div className="stat-number counter" data-target="35">35%</div>
              <div className="stat-label">Lower Operating Costs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number counter" data-target="600">600K+</div>
              <div className="stat-label">Engineering Graduates/Year</div>
            </div>
            <div className="stat-item">
              <div className="stat-number counter" data-target="5">$5T</div>
              <div className="stat-label">Economy by 2025</div>
            </div>
          </div>
        </div>
        
        <div className="section animate" style={{ '--delay': '0.2s' }}>
          <div className="section-header">
            <h2 className="section-title">Key Manufacturing Sectors</h2>
            <p className="section-subtitle">India offers world-class capabilities across diverse industries</p>
          </div>
          
          <div className="sectors-grid">
            {sectors.map((sector, index) => (
              <div 
                key={index} 
                className="sector-card"
                style={{ '--animation-order': index }}
              >
                <div className="sector-icon-wrapper">
                  <div className="sector-icon">{sector.icon}</div>
                  <div className="sector-icon-bg"></div>
                </div>
                <h3 className="sector-name">{sector.name}</h3>
                <div className="sector-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="section animate" style={{ '--delay': '0.3s' }}>
          <div className="section-header">
            <h2 className="section-title">Ideal For Your Business</h2>
            <p className="section-subtitle">Who benefits most from Indian manufacturing?</p>
          </div>
          
          <div className="ideal-clients">
            {idealFor.map((item, index) => (
              <div 
                key={index} 
                className="client-card"
                style={{ '--animation-order': index }}
              >
                <div className="client-icon-container">
                  <div className="client-icon">{item.icon}</div>
                  <svg className="client-icon-bg" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" />
                  </svg>
                </div>
                <div className="client-content">
                  <h3 className="client-title">{item.title}</h3>
                  <p className="client-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="section animate advantage-section" style={{ '--delay': '0.4s' }}>
          <div className="section-header">
            <h2 className="section-title">Strategic Advantages</h2>
            <p className="section-subtitle">Why India stands out as a manufacturing destination</p>
          </div>
          
          <div className="advantages-grid">
            {indiaAdvantages.map((item, index) => (
              <div 
                key={index} 
                className="advantage-card"
                style={{ '--animation-order': index }}
              >
                <div className="advantage-top">
                  <div className="advantage-icon-wrapper">
                    <div className="advantage-icon">{item.icon}</div>
                  </div>
                  <div className="advantage-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="advantage-stat">
                  <div className="stat-value">{item.stat}</div>
                  <div className="stat-label">{item.statLabel}</div>
                </div>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>

        {/* New Testimonials Section */}
        <div className="section testimonials-section animate" style={{ '--delay': '0.5s' }}>
          <div className="section-header">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">Hear from businesses leveraging India's manufacturing ecosystem</p>
          </div>
          
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                style={{ '--animation-order': index }}
              >
                <div className="quote-icon">❝</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-position">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="cta-section animate" style={{ '--delay': '0.6s' }}>
          <div className="cta-background">
            <div className="cta-shape shape-1"></div>
            <div className="cta-shape shape-2"></div>
            <div className="cta-shape shape-3"></div>
          </div>
          
          <div className="cta-content">
            <h2>Ready to Optimize Your Manufacturing Strategy?</h2>
            <p>
              Partner with Sunserk to leverage India's manufacturing ecosystem — combining cost advantages, 
              quality assurance, and market access under one roof.
            </p>
            <button className="cta-button">
              <span className="button-text">Schedule Consultation</span>
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="button-glow"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}