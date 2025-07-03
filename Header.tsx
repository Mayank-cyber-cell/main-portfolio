import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 relative group"
            >
              MKS
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 relative group font-medium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* Enhanced Theme Toggle */}
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-cyan-400/20 hover:to-purple-600/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl group"
              >
                <div className="relative">
                  {theme === 'light' ? 
                    <Moon size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 transition-colors duration-300" /> : 
                    <Sun size={20} className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                  }
                  <Palette className="absolute inset-0 w-5 h-5 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </div>
              </button>

              {/* Theme Menu Dropdown */}
              {showThemeMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/30 overflow-hidden animate-slideInFromTop">
                  <div className="p-2">
                    <button
                      onClick={() => {
                        if (theme === 'dark') toggleTheme();
                        setShowThemeMenu(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        theme === 'light' 
                          ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-gray-900' 
                          : 'hover:bg-gray-100/10 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <Sun className="w-5 h-5 text-yellow-500" />
                      <span className="font-medium">Light Mode</span>
                      {theme === 'light' && <div className="ml-auto w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>}
                    </button>
                    
                    <button
                      onClick={() => {
                        if (theme === 'light') toggleTheme();
                        setShowThemeMenu(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-blue-400/20 to-purple-600/20 text-white' 
                          : 'hover:bg-gray-100/10 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <Moon className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">Dark Mode</span>
                      {theme === 'dark' && <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>}
                    </button>
                  </div>
                  
                  <div className="border-t border-gray-200/20 dark:border-gray-700/20 p-2">
                    <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
                      Theme Preference
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="p-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-cyan-400/20 hover:to-purple-600/20 transition-all duration-300 relative"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-cyan-400/20 hover:to-purple-600/20 transition-all duration-300 transform hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : ''}`}></span>
                <span className={`absolute top-3 left-0 w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl mt-2 border border-gray-200/20 dark:border-gray-700/20 shadow-2xl">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-600 hover:bg-clip-text hover:bg-gray-50/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-300 font-medium transform hover:scale-105"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen ? 'slideInFromTop 0.5s ease-out forwards' : ''
                }}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Theme Toggle */}
            <div className="border-t border-gray-200/20 dark:border-gray-700/20 pt-2 mt-2">
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-300 font-medium"
              >
                <div className="flex items-center space-x-3">
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
                  <span>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Theme Menu */}
        {showThemeMenu && (
          <div className="md:hidden absolute right-4 top-20 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/30 overflow-hidden animate-slideInFromTop z-50">
            <div className="p-2">
              <button
                onClick={() => {
                  if (theme === 'dark') toggleTheme();
                  setShowThemeMenu(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  theme === 'light' 
                    ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-gray-900' 
                    : 'hover:bg-gray-100/10 text-gray-700 dark:text-gray-300'
                }`}
              >
                <Sun className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">Light Mode</span>
                {theme === 'light' && <div className="ml-auto w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>}
              </button>
              
              <button
                onClick={() => {
                  if (theme === 'light') toggleTheme();
                  setShowThemeMenu(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-blue-400/20 to-purple-600/20 text-white' 
                    : 'hover:bg-gray-100/10 text-gray-700 dark:text-gray-300'
                }`}
              >
                <Moon className="w-5 h-5 text-blue-400" />
                <span className="font-medium">Dark Mode</span>
                {theme === 'dark' && <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;