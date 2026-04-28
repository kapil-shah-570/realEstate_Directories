import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt,
  FaPhone, FaEnvelope, FaCalendarAlt, FaArrowLeft,
  FaCheckCircle, FaImage, FaVideo
} from 'react-icons/fa';

const ListingDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProperty();
  }, [id]);

  const fetchProperty = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/properties/${id}`);
      if (!response.ok) throw new Error('Property not found');
      const data = await response.json();
      setProperty(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center">Error: {error}</div>;
  if (!property) return <div className="min-h-screen flex items-center justify-center">Property not found</div>;

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-5 py-8">
        <Link
          to="/listings"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all mb-6"
        >
          <FaArrowLeft /> Back to Listings
        </Link>

        <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-8 shadow-xl">
          {property.images && property.images.length > 0 ? (
            <img src={`http://localhost:8000${property.images[0]}`} alt={property.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-slate-200 flex items-center justify-center">
              <FaImage className="text-slate-400 text-6xl" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-sm opacity-80 mb-2">Property</p>
            <h1 className="text-3xl md:text-5xl font-extrabold">{property.title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <FaMapMarkerAlt /> {property.location}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{property.price}</h2>
                <span className="px-4 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">{property.status}</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-2xl text-center">
                  <FaBed className="text-blue-500 mx-auto mb-1" />
                  <p className="font-bold text-2xl text-gray-900">{property.bedrooms}</p>
                  <p className="text-sm text-gray-500">{property.bedrooms === 1 ? 'Bed' : 'Beds'}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl text-center">
                  <FaBath className="text-blue-500 mx-auto mb-1" />
                  <p className="font-bold text-2xl text-gray-900">{property.bathrooms}</p>
                  <p className="text-sm text-gray-500">{property.bathrooms === 1 ? 'Bath' : 'Baths'}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl text-center">
                  <FaRulerCombined className="text-blue-500 mx-auto mb-1" />
                  <p className="font-bold text-2xl text-gray-900">{property.sqft}</p>
                  <p className="text-sm text-gray-500">sqft</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Features & Amenities</h3>
              <div className="flex flex-wrap gap-3">
                {property.features && property.features.map((feature, index) => (
                  <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" /> {feature}
                  </span>
                ))}
              </div>
            </div>

            {property.availabilityDate && (
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Availability</h3>
                <div className="flex items-center gap-4 text-gray-700">
                  <FaCalendarAlt className="text-blue-500 text-2xl" />
                  <div>
                    <p className="font-semibold text-gray-900">Available from</p>
                    <p>{new Date(property.availabilityDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            )}

            {property.images && property.images.length > 1 && (
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Photo Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-square rounded-xl overflow-hidden">
                      <img
                        src={`http://localhost:8000${image}`}
                        alt={`Property ${index + 2}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {property.whyChoose && (
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose This Property</h3>
                <p className="text-gray-700 leading-relaxed">{property.whyChoose}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Agent</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {property.agentName ? property.agentName.charAt(0).toUpperCase() : 'A'}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{property.agentName || 'Agent'}</p>
                    <p className="text-sm text-gray-500">Real Estate Agent</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {property.agentPhone && (
                    <a href={`tel:${property.agentPhone}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                      <FaPhone /> {property.agentPhone}
                    </a>
                  )}
                  {property.agentEmail && (
                    <a href={`mailto:${property.agentEmail}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                      <FaEnvelope /> {property.agentEmail}
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Address:</span>
                  <span className="font-semibold">{property.location}</span>
                </div>
                {property.buildingName && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Building:</span>
                    <span className="font-semibold">{property.buildingName}</span>
                  </div>
                )}
                {property.latitude && property.longitude && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coordinates:</span>
                    <span className="font-semibold">{property.latitude}, {property.longitude}</span>
                  </div>
                )}
                {property.nearbyPlaces && (
                  <div className="mt-4">
                    <span className="text-gray-600 block mb-2">Nearby Places:</span>
                    <p className="text-gray-700">{property.nearbyPlaces}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingDetailPage;