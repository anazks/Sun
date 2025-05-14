import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [isNovaxOpen, setIsNovaxOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Market Analysis', href: '#market-analysis' },
    { name: 'Contact', href: '#contact' },
    { 
      name: 'Novax', 
      href: '#novax',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Novax Pro', href: '#novax-pro' },
        { name: 'Novax Enterprise', href: '#novax-enterprise' },
        { name: 'Novax Support', href: '#novax-support' },
      ]
    }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 font-sans ${
      isScrolled 
        ? 'bg-white shadow-xl py-2' 
        : 'bg-gradient-to-r from-blue-50 to-indigo-50 py-4 shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              {/* Sun Icon */}
              <svg className="h-8 w-8 text-yellow-500 drop-shadow-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M19.78 4.22L17.66 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6.34 17.66L4.22 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M19.78 19.78L17.66 17.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6.34 6.34L4.22 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              
              <div className="ml-2 font-extrabold text-3xl font-serif">
                <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-blue-600 bg-clip-text text-transparent drop-shadow">
                  Sunserk
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsNovaxOpen(!isNovaxOpen)}
                      onMouseEnter={() => setIsNovaxOpen(true)}
                      onMouseLeave={() => setIsNovaxOpen(false)}
                      className={`px-3 py-2 rounded-md text-base font-medium group transition-colors duration-200 ${
                        activeItem === item.name
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      } flex items-center font-sans tracking-wide`}
                    >
                      {item.name}
                      <svg 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${isNovaxOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div
                      onMouseEnter={() => setIsNovaxOpen(true)}
                      onMouseLeave={() => setIsNovaxOpen(false)}
                      className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all origin-top-right ${
                        isNovaxOpen 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    >
                      <div className="py-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-sans tracking-wide"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setActiveItem(item.name)}
                    className={`relative px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      activeItem === item.name
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    } group font-sans tracking-wide`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${
                      activeItem === item.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </a>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <div className="ml-8">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2 rounded-md shadow-lg hover:shadow-xl transform transition duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-sans font-medium tracking-wide">
                Get Started
              </button>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner border-t">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => setIsNovaxOpen(!isNovaxOpen)}
                    className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-sans tracking-wide"
                  >
                    {item.name}
                    <svg 
                      className={`ml-1 h-5 w-5 transition-transform duration-200 ${isNovaxOpen ? 'rotate-180' : ''}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {isNovaxOpen && (
                    <div className="pl-4 border-l-2 border-blue-100 ml-4 mt-1 mb-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-sans tracking-wide"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeItem === item.name
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  } font-sans tracking-wide`}
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 font-sans tracking-wide">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;