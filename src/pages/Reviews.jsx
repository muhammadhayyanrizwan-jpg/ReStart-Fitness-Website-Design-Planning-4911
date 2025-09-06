import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiUser } = FiIcons;

const Reviews = () => {
  const reviews = [
    {
      name: "Rohit Daga",
      rating: 5,
      review: "I've been working out at Restart Fitness for the past few days and I must say it's been an excellent experience! The facility is clean, well-equipped, and has a positive and motivating atmosphere. A special shoutout to Jagdish (trainer) who has been an incredible support."
    },
    {
      name: "Ashish Shriwas",
      rating: 5,
      review: "Recently I joined Grand Restart Gym and my experience is wonderful, positive environment & atmosphere, well-equipped gym setup with supportive trainers. Specially, my coach Shourya Sir is an excellent trainer who always helps me reach my fitness goal."
    },
    {
      name: "Nachappa Kullachanda Kalappa",
      rating: 5,
      review: "I would strongly recommend Restart Gym and Mr. Arun (Trainer) for your body transformation. He has strategic planning, workout methods, and diet plans for fast recovery and bodybuilding."
    },
    {
      name: "Dhanesh Pandhare",
      rating: 5,
      review: "Restart Fitness Center is very nice! The gym has state-of-the-art equipment, knowledgeable trainers, and a supportive atmosphere. Shout out to Coach Jagdish for helping me a lot with exercises, equipment usage, and diet plans."
    },
    {
      name: "Nisar Mohammed",
      rating: 5,
      review: "I've been training with Arun Kumar and the experience has been exceptional. He is knowledgeable, motivating, and genuinely invested in helping clients reach their fitness goals."
    },
    {
      name: "Amrit Paudel",
      rating: 5,
      review: "I joined Restart Fitness recently and it's been a wonderful experience. The environment is very good, especially Coach Shourya who always helps and motivates me during workouts."
    },
    {
      name: "Chandrika Das",
      rating: 5,
      review: "I've been training under Arjundev since May and have lost almost 4 kilos. He is supportive and good at his work. The gym environment is very nice and friendly."
    },
    {
      name: "Pranav Prasad",
      rating: 5,
      review: "Nice and calm atmosphere, good interaction from trainers, and great facilities. Receptionist Archana was very friendly and cooperative, making me feel comfortable."
    },
    {
      name: "ER Mohamed Abdullah A",
      rating: 5,
      review: "Restart Gym and Mr. Arun (Trainer) are perfect for body transformation. My personal trainer Arun Kumar provides excellent workout regimes and personalized diet plans."
    },
    {
      name: "Martins O Adepoju",
      rating: 5,
      review: "Training with Mr. Arun Kumar has been an awesome experience! Every workout is fun, challenging, and worth it. I've seen real progress and feel stronger and more confident."
    },
    {
      name: "Munavir KC",
      rating: 5,
      review: "Really happy with my experience at this gym. The place is clean, well-maintained, and has everything for a solid workout. Shoutout to Archana at the front desk and trainers Arjun, Arun, Jagadeesh, and Pradeep for their great support."
    },
    {
      name: "Niriksha Ganiga",
      rating: 5,
      review: "I've recently joined Restart Fitness and couldn't be happier. Special thanks to my trainer Mr. Arun for his guidance and motivation throughout the sessions."
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <SafeIcon
            key={i}
            icon={FiStar}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
            }`}
          />
        ))}
      </div>
    );
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
            Member Reviews
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            See what our satisfied members have to say about their transformation journey at ReStart Fitness
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Happy Members</div>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9</div>
              <div className="text-gray-300">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-gray-300">Success Stories</div>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            What Our Members Say
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-lg"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                    <SafeIcon icon={FiUser} className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-400">{review.name}</h3>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{review.review}</p>
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
            Ready to Write Your Success Story?
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
          <motion.button
            className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition-colors"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Start Your Journey
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default Reviews;