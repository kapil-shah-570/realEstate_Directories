import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt,
  FaPhone, FaEnvelope, FaArrowLeft, FaCalendarAlt,
} from 'react-icons/fa';
import { allProducts } from '../data/productsData';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Property Not Found</h2>
          <Link to="/products" className="text-blue-600 hover:underline">← Back to Properties</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <Link to="/products" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
          <FaArrowLeft /> Back to Properties
        </Link>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="md:col-span-2 rounded-2xl overflow-hidden h-64 md:h-96">
            <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
          </div>
          {product.images.slice(1, 3).map((img, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden h-48 md:h-56">
              <img src={img} alt={`${product.title} view ${idx + 2}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 mb-6">
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full">
                  {product.status}
                </span>
              </div>
              <p className="text-gray-600 flex items-center gap-1 mb-4"><FaMapMarkerAlt /> {product.location}</p>
              <div className="text-4xl font-extrabold text-blue-600 mb-6">{product.price}</div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <FaBed className="text-blue-500 mx-auto mb-1" />
                  <p className="font-bold">{product.bedrooms}</p>
                  <p className="text-sm text-gray-500">Beds</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <FaBath className="text-blue-500 mx-auto mb-1" />
                  <p className="font-bold">{product.bathrooms}</p>
                  <p className="text-sm text-gray-500">Baths</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <FaRulerCombined className="text-blue-500 mx-auto mb-1" />
                  <p className="font-bold">{product.sqft}</p>
                  <p className="text-sm text-gray-500">sqft</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Features & Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feat, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {product.lotSize && (
                <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                  <span>Lot Size: {product.lotSize}</span>
                  {product.yearBuilt && <span>• Built in {product.yearBuilt}</span>}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Agent & CTA */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Agent</h3>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={product.agent.avatar}
                  alt={product.agent.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <p className="font-semibold text-gray-900">{product.agent.name}</p>
                  <p className="text-sm text-gray-500">Real Estate Agent</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <a href={`tel:${product.agent.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition-colors"
                >
                  <FaPhone /> Call
                </a>
                <a href={`mailto:${product.agent.email}`}
                  className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 py-3 rounded-full font-semibold transition-colors"
                >
                  <FaEnvelope /> Email
                </a>
              </div>

              <div className="text-sm text-gray-500 flex items-center gap-1">
                <FaCalendarAlt />
                Listed on {product.listedDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;