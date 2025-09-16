import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © 2024 Portfolio. All rights reserved.
          </p>
          
          <p className="flex items-center gap-2 text-gray-400 text-center md:text-right">
            Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;