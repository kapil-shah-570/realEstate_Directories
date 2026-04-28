import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaBed, FaBath, FaRulerCombined, FaPhone, FaEnvelope } from 'react-icons/fa';

const ProductModal = ({ product, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
        >
          <FaTimes />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64 md:h-full">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>
          <div className="p-6 flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                {product.status}
              </span>
            </div>
            <p className="text-gray-500 mb-4">{product.location}</p>
            <div className="text-3xl font-extrabold text-blue-600 mb-4">{product.price}</div>

            <div className="flex gap-4 text-sm text-gray-700 mb-6">
              <span className="flex items-center gap-1"><FaBed /> {product.bedrooms} Beds</span>
              <span className="flex items-center gap-1"><FaBath /> {product.bathrooms} Baths</span>
              <span className="flex items-center gap-1"><FaRulerCombined /> {product.sqft} sqft</span>
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feat, i) => (
                  <span key={i} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-900 mb-2">Contact Agent</h4>
              <p className="text-gray-700">{product.agent.name}</p>
              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                <a
                  href={`tel:${product.agent.phone}`}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700"
                >
                  <FaPhone /> Call
                </a>
                <a
                  href={`mailto:${product.agent.email}`}
                  className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-50"
                >
                  <FaEnvelope /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductModal;