import React, { useState, useEffect } from 'react';
import { FaBed, FaBath, FaMapMarkerAlt, FaRulerCombined, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ListingsPage = () => {
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
      setProperties(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (property) => {
    navigate(`/listing/${property._id}`);
  };

  const likeProperty = async (propertyId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/properties/${propertyId}/like`, {
        method: 'POST',
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to like property');
      setProperties((prev) =>
        prev.map((item) => (item._id === propertyId ? { ...item, likesCount: data.likesCount } : item))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Available Properties</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
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
                    likeProperty(property._id);
                  }}
                  className="absolute top-4 left-4 rounded-full bg-white/90 p-2 shadow-sm hover:bg-white"
                  title="Like"
                >
                  <FaHeart className={`text-sm ${favorites.includes(property._id) ? 'text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-3 flex items-center gap-1">
                  <FaMapMarkerAlt /> {property.location}
                </p>
                <p className="text-2xl font-bold text-cyan-600 mb-4">{property.price}</p>
                <div className="flex items-center justify-between text-sm text-gray-600">
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
                <div className="mt-4">
                  <p className="text-gray-700 text-sm line-clamp-2">{property.description}</p>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {property.likesCount || 0} likes
                  {Array.isArray(property.comments) ? ` · ${property.comments.length} comments` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
        {properties.length === 0 && (
          <p className="text-center text-gray-500 mt-12">No properties available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default ListingsPage;
