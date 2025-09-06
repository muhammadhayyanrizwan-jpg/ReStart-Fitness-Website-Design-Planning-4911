import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiDollarSign, FiUsers } = FiIcons;

const Menu = () => {
  const memberships = [
    {
      name: "Basic Membership",
      price: "AED 200/month",
      duration: "Monthly",
      features: [
        "Access to gym equipment",
        "Basic workout guidance",
        "Locker facility",
        "Free consultation"
      ]
    },
    {
      name: "Premium Membership",
      price: "AED 350/month",
      duration: "Monthly",
      features: [
        "All Basic features",
        "Personal trainer sessions",
        "Nutrition guidance",
        "Group fitness classes",
        "Priority booking"
      ]
    },
    {
      name: "Annual Package",
      price: "AED 2400/year",
      duration: "Yearly",
      features: [
        "All Premium features",
        "2 months free",
        "Guest passes",
        "Special workshops",
        "Diet consultation"
      ]
    }
  ];

  const services = [
    {
      icon: FiUsers,
      name: "Personal Training",
      description: "One-on-one sessions with certified trainers",
      price: "AED 150/session"
    },
    {
      icon: FiClock,
      name: "Group Classes",
      description: "Yoga, Zumba, and fitness group sessions",
      price: "AED 50/class"
    },
    {
      icon: FiDollarSign,
      name: "Nutrition Consultation",
      description: "Personalized diet plans and nutrition guidance",
      price: "AED 200/consultation"
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
            Membership Plans & Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Choose the perfect plan that fits your fitness goals and budget
          </motion.p>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Membership Plans
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {memberships.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-gray-900 p-8 rounded-lg text-center relative ${
                  index === 1 ? 'border-2 border-yellow-400 transform scale-105' : ''
                }`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                <div className="text-gray-400 mb-6">{plan.duration}</div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-center justify-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="tel:+971542457211"
                  className="btn-primary w-full inline-block"
                >
                  Call to Join
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Additional Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-black p-8 rounded-lg text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-6">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-xl font-bold text-white">{service.price}</div>
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
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-800 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Contact us today to discuss the best membership plan for your fitness journey
          </motion.p>
          <motion.a
            href="tel:+971542457211"
            className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition-colors inline-block"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Call Us Now
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
};

export default Menu;