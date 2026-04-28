import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaUserPlus,
  FaSearch,
  FaHandshake,
  FaHome,
  FaArrowRight,
  FaDollarSign,
  FaHeadset,
} from 'react-icons/fa';

const steps = [
  {
    icon: <FaUserPlus className="text-2xl" />,
    title: '1. Create Your Free Account',
    description: 'Sign up in seconds and get instant access to our exclusive listings.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: <FaSearch className="text-2xl" />,
    title: '2. Explore Properties',
    description: 'Browse thousands of homes for sale or rent with powerful search tools.',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: <FaHandshake className="text-2xl" />,
    title: '3. Connect with an Agent',
    description: 'Get matched with a local expert who knows the market inside out.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FaHome className="text-2xl" />,
    title: '4. Close the Deal',
    description: 'Our team will guide you through every step until you get the keys.',
    color: 'from-orange-500 to-red-500',
  },
];

const quickLinks = [
  { label: 'Browse Properties', to: '/products', icon: <FaSearch /> },
  { label: 'Our Services', to: '/services', icon: <FaHandshake /> },
  { label: 'Pricing Plans', to: '/pricing', icon: <FaDollarSign /> },
  { label: 'Contact Support', to: '/contact', icon: <FaHeadset /> },
];

const GetStartedPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Let's Get Started
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Your dream property is just a few steps away. We'll walk you through the entire process.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <FaUserPlus /> Create Free Account
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-blue-700 transition-all"
            >
              <FaSearch /> Browse Properties
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Simple 4‑Step Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From sign‑up to settlement, we're with you every step of the way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white mb-4`}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {/* Arrow connector on larger screens (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl">
                    <FaArrowRight />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Jump to What You Need
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    {link.icon}
                  </div>
                  <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-700">
                    {link.label}
                  </span>
                  <FaArrowRight className="ml-auto text-gray-400 group-hover:text-blue-600" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Trust Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl italic text-gray-600 mb-6">
              "EstatePro made buying my first home a breeze. The step‑by‑step guidance was exactly what I needed."
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Client"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-gray-900">Robert J.</p>
                <p className="text-sm text-gray-500">First‑time Buyer</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Create your free account now and take the first step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <FaUserPlus /> Sign Up Free
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all"
            >
              <FaHeadset /> Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedPage;