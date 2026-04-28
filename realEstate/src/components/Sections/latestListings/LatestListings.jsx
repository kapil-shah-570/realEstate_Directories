import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHeart,
  FaShareAlt,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './LatestListings.css';

const LatestListings = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/properties');
      if (!response.ok) throw new Error('Failed to fetch properties');
      const data = await response.json();
      setProperties(data.slice(0, 6)); // Show latest 6 properties
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const handleCardClick = (property) => {
    navigate(`/listing/${property._id}`);
  };

  if (loading) return <div className="py-16 text-center">Loading latest listings...</div>;
  if (error) return <div className="py-16 text-center text-red-500">Error: {error}</div>;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Listings</h2>
          <p className="text-xl text-gray-600">Discover our newest properties available for sale</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <motion.div
              key={property._id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleCardClick(property)}
            >
              <div className="relative h-48">
                {property.images && property.images.length > 0 ? (
                  <img
                    src={`http://localhost:8000${property.images[0]}`}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-4xl">🏠</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {property.status}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(property._id);
                  }}
                  className="absolute top-4 left-4 p-2 bg-white/80 rounded-full hover:bg-white transition"
                >
                  <FaHeart className={`text-lg ${favorites.includes(property._id) ? 'text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-3 flex items-center gap-1">
                  <FaMapMarkerAlt /> {property.location}
                </p>
                <p className="text-2xl font-bold text-cyan-600 mb-4">{property.price}</p>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <FaBed /> {property.bedrooms} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBath /> {property.bathrooms} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRulerCombined /> {property.sqft} sqft
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {property.features && property.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <FaArrowRight className="text-cyan-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {properties.length === 0 && (
          <p className="text-center text-gray-500 py-8">No properties available at the moment.</p>
        )}

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => navigate('/listings')}
            className="bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-700 transition"
          >
            View All Listings
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestListings;
