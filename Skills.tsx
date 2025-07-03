import React, { useState, useEffect } from 'react';
import { Code, Database, Palette, Settings, Brain, TrendingUp, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(new Array(4).fill(true));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-orange-400 to-red-500",
      skills: [
        { name: "HTML5", level: 85, color: "from-orange-400 to-orange-600" },
        { name: "CSS3", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 70, color: "from-yellow-400 to-yellow-600" },
        { name: "Python", level: 60, color: "from-green-400 to-green-600" }
      ]
    },
    {
      title: "Web Development",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-purple-400 to-pink-500",
      skills: [
        { name: "Responsive Design", level: 85, color: "from-purple-400 to-purple-600" },
        { name: "UI/UX Design", level: 75, color: "from-pink-400 to-pink-600" },
        { name: "Web Standards", level: 80, color: "from-indigo-400 to-indigo-600" },
        { name: "Cross-browser Compatibility", level: 70, color: "from-red-400 to-red-600" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-6 h-6" />,
      gradient: "from-cyan-400 to-blue-500",
      skills: [
        { name: "Git/GitHub", level: 75, color: "from-gray-400 to-gray-600" },
        { name: "VS Code", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "Chrome DevTools", level: 80, color: "from-green-400 to-green-600" },
        { name: "Figma", level: 65, color: "from-purple-400 to-purple-600" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-emerald-400 to-teal-500",
      skills: [
        { name: "Leadership", level: 90, color: "from-teal-400 to-teal-600" },
        { name: "Communication", level: 85, color: "from-cyan-400 to-cyan-600" },
        { name: "Problem Solving", level: 80, color: "from-emerald-400 to-emerald-600" },
        { name: "Team Collaboration", level: 85, color: "from-lime-400 to-lime-600" }
      ]
    }
  ];

  const interests = [
    { name: "AI & Machine Learning", icon: <Brain className="w-5 h-5" />, gradient: "from-purple-400 to-pink-500" },
    { name: "Trading & Finance", icon: <TrendingUp className="w-5 h-5" />, gradient: "from-green-400 to-emerald-500" },
    { name: "Cricket", icon: "🏏", gradient: "from-orange-400 to-red-500" },
    { name: "Startups", icon: "🚀", gradient: "from-blue-400 to-purple-500" },
    { name: "Web Development", icon: <Code className="w-5 h-5" />, gradient: "from-cyan-400 to-blue-500" },
    { name: "Hackathons", icon: "💻", gradient: "from-pink-400 to-rose-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text mb-6">
            My Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical abilities, creative skills, and personal expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-4xl transition-all duration-700 border border-white/30 dark:border-gray-700/30 transform hover:scale-105 animate-slideInFromBottom`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-white mr-6 shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-semibold text-lg">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden`}
                        style={{ 
                          width: visibleSkills[index] ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 200}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interests Section */}
        <div className="text-center animate-slideInFromBottom delay-800">
          <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-12">
            My <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text">Interests</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className={`group flex items-center space-x-4 bg-gradient-to-r ${interest.gradient} text-white px-8 py-4 rounded-2xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="text-2xl relative z-10 transform group-hover:scale-125 transition-transform duration-300">
                  {typeof interest.icon === 'string' ? interest.icon : interest.icon}
                </span>
                <span className="font-bold text-lg relative z-10">{interest.name}</span>
                <Zap className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl p-10 text-white text-center shadow-4xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden animate-slideInFromBottom delay-1000">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-16 h-16 border border-white rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-6">
              Continuous Learning Journey
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              As a 1st-year student, I'm constantly expanding my skillset and exploring new technologies. 
              My passion for learning drives me to stay updated with the latest trends in tech.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 backdrop-blur-xl px-6 py-3 rounded-2xl font-bold border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                Currently Learning: Python
              </span>
              <span className="bg-white/20 backdrop-blur-xl px-6 py-3 rounded-2xl font-bold border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                Next Goal: React.js
              </span>
              <span className="bg-white/20 backdrop-blur-xl px-6 py-3 rounded-2xl font-bold border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                Future Interest: AI/ML
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;