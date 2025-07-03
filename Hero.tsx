import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Instagram, Mail, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const roles = ['Coder', 'Creator', 'Dreamer', 'Leader', 'Innovator'];

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let index = 0;
    
    const typeText = () => {
      if (index < currentRoleText.length) {
        setDisplayText(currentRoleText.slice(0, index + 1));
        index++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setDisplayText('');
            setCurrentRole((prev) => (prev + 1) % roles.length);
            setIsTyping(true);
            index = 0;
          }, 1000);
        }, 2000);
      }
    };

    if (isTyping) {
      typeText();
    }
  }, [currentRole, isTyping]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-pink-400/30 to-rose-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Content */}
        <div className="space-y-8 animate-fadeInUp">
          {/* Greeting with Icon */}
          <div className="flex items-center justify-center space-x-3 animate-slideInFromLeft">
            <Sparkles className="w-6 h-6 text-cyan-400 animate-spin" />
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-medium">
              Hello, I'm
            </p>
            <Sparkles className="w-6 h-6 text-purple-500 animate-spin" style={{ animationDirection: 'reverse' }} />
          </div>

          {/* Name with Gradient Animation */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text animate-gradient bg-300% animate-slideInFromRight">
            Mayank Kumar Shah
          </h1>

          {/* Dynamic Role with Typing Effect */}
          <div className="h-16 sm:h-20 flex items-center justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-gray-700 dark:text-gray-300">I'm a </span>
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text relative">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </div>

          {/* Description with Glassmorphism */}
          <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 shadow-2xl animate-slideInFromBottom">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              1st-year B.Tech CSE student passionate about coding, AI, and building innovative solutions. 
              Currently learning Python and participating in hackathons to push the boundaries of technology.
            </p>
          </div>

          {/* Action Buttons with Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slideInFromBottom delay-300">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden"
            >
              <span className="relative z-10">View My Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-600 hover:text-white transform hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>

          {/* Social Links with Floating Animation */}
          <div className="flex justify-center space-x-6 animate-slideInFromBottom delay-500">
            {[
              { icon: Github, href: 'https://github.com/Mayank-cyber-cell', color: 'hover:text-gray-900 dark:hover:text-white' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/mayankkshah', color: 'hover:text-blue-600' },
              { icon: Instagram, href: 'https://www.instagram.com/mayankkshah_/', color: 'hover:text-pink-600' },
              { icon: Mail, href: 'mailto:jimayank2105@gmail.com', color: 'hover:text-red-500' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-125 hover:-translate-y-2 transition-all duration-500 text-gray-700 dark:text-gray-300 ${social.color} border border-white/30 dark:border-gray-700/30`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator with Pulse Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-3 text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors duration-300 bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-full border border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transform hover:scale-110"
          >
            <ChevronDown size={32} className="animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;