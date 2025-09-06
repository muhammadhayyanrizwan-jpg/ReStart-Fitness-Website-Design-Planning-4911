import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTarget, FiHeart, FiUsers, FiAward } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiTarget,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our equipment to our training programs."
    },
    {
      icon: FiHeart,
      title: "Passion",
      description: "Our passion for fitness drives us to help every member achieve their personal best."
    },
    {
      icon: FiUsers,
      title: "Community",
      description: "We foster a supportive community where everyone feels welcome and motivated."
    },
    {
      icon: FiAward,
      title: "Results",
      description: "We are committed to helping our members achieve real, lasting results."
    }
  ];

  const trainers = [
    {
      name: "Jagdish",
      specialty: "Personal Training & Motivation",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Arun Kumar",
      specialty: "Body Transformation & Diet Planning",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Shourya",
      specialty: "Strength Training & Conditioning",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Arjun",
      specialty: "Functional Training",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container text-center">
          <motion.h1
            className="text-5xl font-bold text-yellow-400 mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About ReStart Fitness
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Located in the heart of Bur Dubai, ReStart Fitness Center & Gym is your premier destination for achieving your fitness goals with state-of-the-art equipment and expert guidance.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                ReStart Fitness Center & Gym was founded with a simple yet powerful vision: to create a space where everyone, regardless of their fitness level, could begin or restart their fitness journey in a supportive and motivating environment.
              </p>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Over the years, we have helped hundreds of members transform their lives through fitness. Our state-of-the-art facility, combined with our team of expert trainers, provides everything you need to achieve your fitness goals.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you're looking to lose weight, build muscle, improve your health, or simply feel better about yourself, ReStart Fitness is here to support you every step of the way.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://i.ibb.co/fYxP3jvR/Re-Start-Fitness-Center-Gym-inside-image-1.png"
                alt="Gym Interior"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-6">
                  <SafeIcon icon={value.icon} className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Trainers */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Meet Our Expert Trainers
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{trainer.name}</h3>
                  <p className="text-gray-300">{trainer.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Facilities
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Modern Equipment",
                description: "State-of-the-art cardio machines, strength training equipment, and free weights from leading brands.",
                image: "https://i.ibb.co/4R0GxmY1/Re-Start-Fitness-Center-Gym-inside-imag-2.png"
              },
              {
                title: "Spacious Training Area",
                description: "Large, well-ventilated spaces designed for comfortable workouts and group training sessions.",
                image: "https://i.ibb.co/6RHzgqt0/Re-Start-Fitness-Center-Gym-inside-image-3.png"
              }
            ].map((facility, index) => (
              <motion.div
                key={index}
                className="bg-black rounded-lg overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">{facility.title}</h3>
                  <p className="text-gray-300">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;