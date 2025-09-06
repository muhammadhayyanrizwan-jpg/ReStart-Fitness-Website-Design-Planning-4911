import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-yellow-400/20 py-8">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400 mb-4">
            © {currentYear} ReStart Fitness Center & Gym. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Domain + Hosting + Design = <a 
              href="https://www.account4web.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Account4Web Inc
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;