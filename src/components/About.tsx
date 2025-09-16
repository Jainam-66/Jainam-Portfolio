import React from 'react';
import { Code2, Cloud } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'AI & ML',
      icon: <Brain className="w-8 h-8" />,
      items: ['TensorFlow, PyTorch', 'CNN, NLP, Computer Vision', 'ML Models & Algorithms'],
      color: 'bg-blue-500'
    },
    {
      category: 'Programming & Development',
      icon: <Code2 className="w-8 h-8" />,
      items: ['Python, C, C++, Java, R', 'DSA, SQL, JavaScript', 'Node.js, React'],
      color: 'bg-purple-500'
    },
    {
      category: 'Cloud & Tools',
      icon: <Cloud className="w-8 h-8" />,
      items: ['Git, Docker, Kubernetes', 'AWS', 'API Integration'],
      color: 'bg-green-500'
    },
    {
      category: 'Collaboration & Soft Skills',
      icon: <Users className="w-8 h-8" />,
      items: ['Problem Solving', 'Analytical Thinking', 'Teamwork', 'Communication'],
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I’m an AI & ML engineering student with a strong interest in building intelligent systems and practical applications of machine learning. I enjoy combining coding, data, and research to solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              My journey started with a curiosity for how machines can learn and make decisions. Over time, I’ve explored projects in computer vision, natural language processing, and deep learning, which strengthened my foundation in AI and software development.
            </p>

          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">What I Do</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Machine Learning & Deep Learning (CNNs, NLP, Computer Vision)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Data Analysis & Visualization</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600">Web Development with React & Node.js</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-600">Cloud Deployment (AWS, Docker, Kubernetes)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 ${skill.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {skill.category}
              </h4>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;