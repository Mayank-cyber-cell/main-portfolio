import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle, Sparkles, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "jimayank2105@gmail.com",
      description: "Send me an email anytime",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9013584367",
      description: "Call me for urgent matters",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "India",
      description: "Available for remote work",
      gradient: "from-pink-400 to-rose-500"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Mayank-cyber-cell",
      gradient: "from-gray-600 to-gray-800",
      hoverColor: "hover:from-gray-700 hover:to-gray-900"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/mayankkshah",
      gradient: "from-blue-500 to-blue-700",
      hoverColor: "hover:from-blue-600 hover:to-blue-800"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/mayankkshah_/",
      gradient: "from-pink-500 to-rose-600",
      hoverColor: "hover:from-pink-600 hover:to-rose-700"
    },
    {
      name: "Discord",
      icon: <MessageCircle className="w-6 h-6" />,
      url: "https://discord.com/mayankkumar5463",
      gradient: "from-indigo-500 to-purple-600",
      hoverColor: "hover:from-indigo-600 hover:to-purple-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-full blur-xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/30 dark:border-gray-700/30 animate-slideInFromLeft">
            <div className="flex items-center mb-8">
              <Sparkles className="w-8 h-8 text-cyan-400 mr-4 animate-spin" />
              <h3 className="text-3xl font-black text-gray-900 dark:text-white">
                Send me a message
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-cyan-400/20 focus:border-cyan-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 group-hover:border-cyan-400/50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-cyan-400/20 focus:border-cyan-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 group-hover:border-cyan-400/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="group">
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-cyan-400/20 focus:border-cyan-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 group-hover:border-cyan-400/50"
                  placeholder="Project Collaboration"
                />
              </div>
              <div className="group">
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-cyan-400/20 focus:border-cyan-400 transition-all duration-300 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 group-hover:border-cyan-400/50"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              <button
                type="submit"
                className="group w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-2xl font-bold hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden"
              >
                <Send className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slideInFromRight">
            <div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
                <Heart className="w-8 h-8 text-pink-500 mr-4 animate-pulse" />
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group flex items-start space-x-6 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 dark:border-gray-700/30 transform hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                        {info.title}
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg mb-1">
                        {info.value}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-8">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-16 h-16 bg-gradient-to-r ${social.gradient} ${social.hoverColor} rounded-2xl flex items-center justify-center text-white transform hover:scale-125 hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl relative overflow-hidden`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10 group-hover:rotate-12 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden transform hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 flex items-center">
                  <Sparkles className="w-6 h-6 mr-3 animate-spin" />
                  Available for Work
                </h3>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  I'm currently looking for internship opportunities and exciting projects to work on. Let's collaborate and build something amazing together!
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-300 rounded-full animate-ping"></div>
                  <span className="font-bold text-lg">Available for new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;