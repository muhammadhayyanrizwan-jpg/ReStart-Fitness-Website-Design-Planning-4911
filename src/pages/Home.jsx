import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiUsers, FiTarget, FiAward } = FiIcons;

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://i.ibb.co/fYxP3jvR/Re-Start-Fitness-Center-Gym-inside-image-1.png",
    "https://i.ibb.co/4R0GxmY1/Re-Start-Fitness-Center-Gym-inside-imag-2.png",
    "https://i.ibb.co/6RHzgqt0/Re-Start-Fitness-Center-Gym-inside-image-3.png",
    "https://i.ibb.co/zVTv0qph/Re-Start-Fitness-Center-Gym-inside-image-4.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const stats = [
    { icon: FiUsers, number: "500+", label: "Happy Members" },
    { icon: FiTarget, number: "10+", label: "Expert Trainers" },
    { icon: FiAward, number: "5+", label: "Years Experience" },
    { icon: FiPlay, number: "24/7", label: "Support Available" }
  ];

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1.05 : 1
              }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={image}
                alt={`Gym Interior ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-white">Transform Your</span>
            <br />
            <span className="text-yellow-400">Body Today</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Premier fitness facility with state-of-the-art equipment and expert trainers
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/contact" className="btn-primary">
              Join Now
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-yellow-400' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-black" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose ReStart Fitness?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Trainers",
                description: "Our certified trainers provide personalized workout plans and constant motivation to help you achieve your fitness goals."
              },
              {
                title: "State-of-the-Art Equipment",
                description: "Modern, well-maintained equipment ensures you have everything needed for an effective and safe workout."
              },
              {
                title: "Supportive Community",
                description: "Join a friendly and motivating community that encourages you to push your limits and celebrate your achievements."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-lg text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="container text-center">
          <motion.h2
            className="text-4xl font-bold text-black mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Fitness Journey?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-800 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join hundreds of satisfied members who have transformed their lives at ReStart Fitness
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition-colors"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;