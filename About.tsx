import React from 'react';
import { Code, Trophy, Users, Heart, Sparkles, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Passionate Developer",
      description: "Learning web development and exploring AI technologies",
      gradient: "from-blue-400 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Hackathon Participant",
      description: "Actively participating in hackathons and coding competitions",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leader",
      description: "Strong leadership and communication skills",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Multi-Interest",
      description: "Passionate about coding, trading, cricket, and AI startups",
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-rose-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-full blur-xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Get to know me better - my journey, passions, and what drives me to create amazing things
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative animate-slideInFromLeft">
            <div className="relative w-96 h-96 mx-auto">
              {/* Animated Rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-20 animate-spin-slow"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute inset-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
              
              {/* Profile Image Container */}
              <div className="absolute inset-12 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-600 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
                <img 
                  src="/profile copy copy.jpg" 
                  alt="Mayank Kumar Shah" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 via-transparent to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Icons */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white animate-bounce">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white animate-bounce delay-500">
                <Zap className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slideInFromRight">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-gray-700/30">
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6">
                Hi, I'm <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text">Mayank Kumar Shah</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                I'm a 1st-year B.Tech Computer Science Engineering student at Satyug Darshan Institute of Engineering and Technology, 
                Batch 2028. I'm passionate about technology, coding, and creating innovative solutions that make a difference.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Currently learning Python and web development, I enjoy participating in hackathons and building projects that 
                solve real-world problems. When I'm not coding, you'll find me trading, watching cricket, or exploring the latest 
                AI trends and startup ideas.
              </p>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4 flex items-center">
                  <Trophy className="w-6 h-6 mr-3" />
                  Education
                </h4>
                <p className="text-lg opacity-90">
                  <strong className="text-xl">B.Tech Computer Science Engineering</strong><br />
                  Satyug Darshan Institute of Engineering and Technology<br />
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">Batch 2028 | 1st Year</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-24 animate-slideInFromBottom delay-500">
          <h3 className="text-4xl font-black text-center text-gray-900 dark:text-white mb-16">
            What Makes Me <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text">Unique</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${highlight.bgGradient} backdrop-blur-xl rounded-3xl p-8 text-center hover:shadow-2xl transform hover:scale-110 hover:-translate-y-4 transition-all duration-700 border border-white/30 dark:border-gray-700/30 relative overflow-hidden`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${highlight.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    {highlight.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                {/* Hover Effect Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full animate-ping"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;