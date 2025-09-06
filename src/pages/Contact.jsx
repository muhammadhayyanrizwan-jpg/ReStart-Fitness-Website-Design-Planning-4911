import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMapPin, FiClock, FiSend } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: "Phone",
      details: ["+971 54 245 7211"],
      link: "tel:+971542457211"
    },
    {
      icon: FiMapPin,
      title: "Location",
      details: ["Bur Dubai", "Dubai, UAE"],
      link: "https://maps.app.goo.gl/ou92Us5itnbaSPKT7"
    },
    {
      icon: FiClock,
      title: "Hours",
      details: ["Mon-Sat: 6:00 AM - 11:00 PM", "Sunday: 8:00 AM - 10:00 PM"],
      link: null
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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Ready to start your fitness journey? Get in touch with us today and let's discuss how we can help you achieve your goals
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center bg-gray-900 p-8 rounded-lg"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-6">
                  <SafeIcon icon={info.icon} className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-300">
                      {info.link && detailIndex === 0 ? (
                        <a 
                          href={info.link} 
                          className="hover:text-yellow-400 transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-gray-900 p-8 rounded-lg"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell us about your fitness goals and how we can help you"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              className="space-y-8"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Google Map */}
              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Find Us</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3919296449985!2d55.287160699999994!3d25.257397899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43ad5a7a898b%3A0x18e4d2fd2c7efc18!2sReStart%20Fitness%20Center%20%26%20Gym!5e0!3m2!1sen!2s!4v1757159009880!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ReStart Fitness Center & Gym Location"
                  ></iframe>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Visit Our Gym</h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Located in the heart of Bur Dubai, ReStart Fitness Center & Gym is easily accessible and offers convenient parking for all our members.
                  </p>
                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="font-bold text-yellow-400 mb-2">What to Bring:</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Valid ID for registration</li>
                      <li>• Comfortable workout clothes</li>
                      <li>• Water bottle</li>
                      <li>• Towel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
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
            Ready to Transform Your Life?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-800 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Don't wait any longer. Your fitness journey starts with a single step. Contact us today!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="tel:+971542457211"
              className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition-colors"
            >
              Call Now
            </a>
            <a 
              href="https://maps.app.goo.gl/ou92Us5itnbaSPKT7"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold hover:bg-black hover:text-yellow-400 transition-colors"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;