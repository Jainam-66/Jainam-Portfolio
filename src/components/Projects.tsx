import React from 'react';
import CreditCardFraudDetectionRepImage from '../assets/CreditCardFraudDetectionRepImage.png';
import CustomObjectDetectionRepImage from '../assets/CustomObjectDetectionRepImage.png';
import RailVisionRepImage from '../assets/RailVisionRepImage.png';
import SignSightRepImage from '../assets/SignSightRepImage.png';
import StockPerformanceRepImage from '../assets/StockPerformanceRepImage.png';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sign Sight',
      description: 'An AI-powered American Sign Language (ASL) interpreter that uses a Convolutional Neural Network (CNN) trained on 10,000+ custom-labeled hand sign images to recognize and translate the first 14 English alphabet signs in real-time through a webcam feed.',
      image: SignSightRepImage,
      technologies: ['Python', 'AWS', 'Computer Vision', 'CNN'],
      githubUrl: 'https://github.com/Jainam-66/SignSight',
      liveUrl: 'https://dai.ly/klVkJ8TSeXRK2eyxqxP',
      featured: true
    },
    {
      title: 'Railvision',
      description: 'RailVision uses AI-powered computer vision to make railway platforms safer by tracking people in real time, detecting trespassing incidents, and alerting authorities instantly. It also visualizes passenger flow with heatmaps to help optimize platform management',
      image: RailVisionRepImage,
      technologies: ['Python', 'Computer Vision', 'DeepSORT'],
      githubUrl: 'https://github.com/Jainam-66/RailVision',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      title: 'Stock Performance and Sentiment Analysis Tool',
      description: 'A tool that analyzes stock performance and sentiment from news articles using NLP techniques.',
      image: StockPerformanceRepImage,
      technologies: ['Python', 'yfinance', 'Cohere AI', 'NewsApiClient', 'NLP', 'Sentiment Analysis', 'API Integration'],
      githubUrl: 'https://github.com/Jainam-66/Stock-Sense-AI',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      title: 'Custom Object Detection',
      description: 'A tool for detecting and classifying objects in images using deep learning techniques.',
      image: CustomObjectDetectionRepImage,
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning', 'Computer Vision'],
      githubUrl: 'https://github.com/Jainam-66/Custom-object-detection',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      title: 'Credit Card Fraud Detection',
      description: 'A web application that detects fraudulent credit card transactions using machine learning algorithms and provides visualizations of transaction data.',
      image: CreditCardFraudDetectionRepImage,
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
      githubUrl: 'https://github.com/Jainam-66/Credit_Card_Fraud_Detection',
      liveUrl: 'https://example.com',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 text-gray-700" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;