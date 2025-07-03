import React, { useState } from 'react';
import { Github, Lightbulb, Code, Users, Trophy } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Zomato Clone",
      description: "A complete food delivery platform clone with modern UI and responsive design using HTML, CSS, and JavaScript.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      icon: <Code className="w-8 h-8" />,
      status: "Completed",
      category: "Web Development",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      githubUrl: "https://github.com/Mayank-cyber-cell"
    },
    {
      title: "Personal Portfolio v1",
      description: "My first portfolio website showcasing my journey and projects with clean design and smooth animations.",
      tech: ["HTML5", "CSS3", "JavaScript", "Animations"],
      icon: <Users className="w-8 h-8" />,
      status: "Completed",
      category: "Web Development",
      gradient: "from-blue-400 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
      githubUrl: "https://github.com/Mayank-cyber-cell"
    },
    {
      title: "AI Study Partner App",
      description: "An innovative AI-powered study companion app idea to help students learn more effectively with personalized assistance.",
      tech: ["Python", "AI/ML", "React", "Node.js"],
      icon: <Lightbulb className="w-8 h-8" />,
      status: "In Development",
      category: "AI/ML",
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
      githubUrl: "https://github.com/Mayank-cyber-cell"
    },
    {
      title: "EcoCoder Hackathon Project",
      description: "Environmental sustainability solution developed during hackathon focusing on green technology and eco-friendly practices.",
      tech: ["Python", "Web Development", "Data Analysis", "Environmental Tech"],
      icon: <Trophy className="w-8 h-8" />,
      status: "Completed",
      category: "Hackathon",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      githubUrl: "https://github.com/Mayank-cyber-cell"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white';
      case 'In Development':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects I've worked on, showcasing my skills, creativity, and passion for innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${project.bgGradient} backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-4xl transform hover:scale-105 transition-all duration-700 overflow-hidden border border-white/20 dark:border-gray-700/20 animate-slideInFromBottom`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-xs font-bold shadow-lg ${getStatusColor(project.status)} transform group-hover:scale-110 transition-all duration-300`}>
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl text-gray-800 dark:text-gray-200 rounded-xl text-sm font-semibold border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 px-8 py-4 bg-gradient-to-r ${project.gradient} text-white rounded-2xl font-bold hover:shadow-2xl transform hover:scale-110 transition-all duration-500 group/btn shadow-xl`}
                  >
                    <Github size={20} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>View on GitHub</span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </a>
                </div>

                {/* Hover Effect Indicator */}
                {hoveredProject === index && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-ping"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-slideInFromBottom delay-800">
          <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl p-10 text-white shadow-4xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-20 h-20 border border-white rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4">
                Want to see more of my work?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                I'm always working on new projects and ideas. Check out my GitHub for the latest updates and contributions!
              </p>
              <a
                href="https://github.com/Mayank-cyber-cell"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-gray-100 transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-4xl"
              >
                Visit My GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;