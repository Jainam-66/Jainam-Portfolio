import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

// ...existing code...
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Replace this with your API endpoint and logic
  try {
    const response = await fetch('https://formspree.io/f/xovnrdao', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message. Please try again later.');
    }
  } catch (error) {
    alert('An error occurred. Please try again later.');
  }
  setIsSubmitting(false);
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/Jainam-66',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/jainam-jain-a9733b259',
      label: 'LinkedIn'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/JAINAM_J_JAIN',
      label: 'Twitter'
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'jainamjjain66@gmail.com',
      href: 'mailto:jainamjjain66@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 8431680800',
      href: 'tel:+918431680800'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Bengaluru, India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;