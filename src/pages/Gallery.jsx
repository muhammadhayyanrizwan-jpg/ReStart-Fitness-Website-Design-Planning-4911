import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: "https://i.ibb.co/fYxP3jvR/Re-Start-Fitness-Center-Gym-inside-image-1.png",
      title: "Main Workout Area",
      description: "Our spacious main workout area with modern equipment"
    },
    {
      url: "https://i.ibb.co/4R0GxmY1/Re-Start-Fitness-Center-Gym-inside-imag-2.png",
      title: "Cardio Section",
      description: "State-of-the-art cardio machines with entertainment systems"
    },
    {
      url: "https://i.ibb.co/6RHzgqt0/Re-Start-Fitness-Center-Gym-inside-image-3.png",
      title: "Strength Training Zone",
      description: "Professional strength training equipment and free weights"
    },
    {
      url: "https://i.ibb.co/zVTv0qph/Re-Start-Fitness-Center-Gym-inside-image-4.png",
      title: "Training Area",
      description: "Dedicated space for personal training and group sessions"
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

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
            Gallery
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Take a virtual tour of our state-of-the-art fitness facility and see what makes ReStart Fitness special
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">{image.title}</h3>
                    <p className="text-gray-200">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={closeLightbox}
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={prevImage}
              >
                <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
              </button>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={nextImage}
              >
                <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="container text-center">
          <motion.h2
            className="text-4xl font-bold text-black mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Experience Our Facility
          </motion.h2>
          <motion.p
            className="text-xl text-gray-800 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Visit us today for a free tour and see why ReStart Fitness is the perfect place for your fitness journey
          </motion.p>
          <motion.button
            className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition-colors"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Schedule a Visit
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;