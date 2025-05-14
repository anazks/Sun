import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <section className="banner-container">
      {/* Animated background elements */}
      <div className="banner-background">
        <div className="banner-blob" />
        <div className="banner-blob" />
        <div className="banner-blob" />
        <div className="banner-blob" />
      </div>
      
      <div className="banner-content-container">
        <div className="banner-flex-container">
          {/* Content section */}
          <div className="banner-text-section">
            <h2 className="banner-heading">
              Integrated Global Business Services{' '}
              <span>Supply Chain Solutions</span>
            </h2>
            
            <div className="banner-divider" />
            
            <p className="banner-description">
              Empowering organizations with seamless global business services specializing in multi-dimensional functions leveraging innovative technologies and deep market insights.
            </p>
            
            <button className="banner-button">
              <span>Explore Solutions</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="banner-button-icon"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </div>
          
          {/* Image section */}
          <div className="banner-image-section">
            <div className="banner-image-container">
              <div className="banner-image-inner">
                <div className="banner-main-image">
                  <div className="banner-image-overlay" />
                  <svg 
                    className="banner-illustration" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
                    <path d="M30 50L45 65L70 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  <p className="banner-illustration-caption">
                    Business Solutions Illustration
                  </p>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="banner-decor-element" />
              <div className="banner-decor-element" />
              <div className="banner-decor-element" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;