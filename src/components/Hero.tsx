import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
              Hello,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                World.
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
              I'm Jainam J Jain
            </h2>
            <div className="flex items-center justify-center gap-3">
             <span className="text-2xl">👋</span>
             <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
               AI & ML Engineering Student passionate about Machine Learning,
               Data Science, and Web Development. Welcome to my portfolio!
            </p>
           </div>
          </div>

        <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Jainam-66"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/jainam-jain-a9733b259"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-200" />
            </a>
            <a
              href="mailto:jainamjjain66@gmail.com"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <Mail className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-200" />
            </a>
          </div>

          <div className="pt-8">
            <button
              onClick={scrollToNext}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 font-medium"
            >
              Learn More
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-purple-500 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-20 w-3 h-3 bg-pink-500 rounded-full opacity-20 animate-float"></div>
    </section>
  );
};

export default Hero;