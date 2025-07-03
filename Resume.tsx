import React from 'react';
import { Download, Calendar, MapPin, Award, Book } from 'lucide-react';

const Resume: React.FC = () => {
  const education = [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "Satyug Darshan Institute of Engineering and Technology",
      duration: "2024 - 2028",
      status: "Current",
      description: "1st Year Student - Batch 2028"
    }
  ];

  const achievements = [
    {
      title: "Hackathon Participant",
      description: "Actively participating in various hackathons and coding competitions",
      date: "2024"
    },
    {
      title: "EcoCoder Project",
      description: "Developed environmental sustainability solution during hackathon",
      date: "2024"
    },
    {
      title: "Personal Projects",
      description: "Built multiple web development projects including Zomato Clone",
      date: "2024"
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Started B.Tech Journey",
      description: "Enrolled in Computer Science Engineering at SDIET",
      icon: <Book className="w-5 h-5" />
    },
    {
      year: "2024",
      title: "First Web Project",
      description: "Built my first major project - Zomato Clone",
      icon: <Award className="w-5 h-5" />
    },
    {
      year: "2024",
      title: "Hackathon Experience",
      description: "Participated in hackathons and coding competitions",
      icon: <Award className="w-5 h-5" />
    },
    {
      year: "2024",
      title: "Learning Python",
      description: "Started learning Python for advanced development",
      icon: <Book className="w-5 h-5" />
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mayank_Kumar_Shah_Resume.pdf';
    link.download = 'Mayank_Kumar_Shah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Resume</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my educational background and achievements
          </p>
          <button 
            onClick={handleDownloadResume}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education & Experience */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Book className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center text-gray-500 dark:text-gray-500 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.duration}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {achievement.date}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <div className="relative">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 mb-6 last:mb-0">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Summary */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Skills Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Web Development</span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Python</span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded">Learning</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Leadership</span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded">Excellent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Problem Solving</span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded">Strong</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;