import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt,
  FaPhone, FaEnvelope, FaCalendarAlt, FaArrowLeft,
  FaCheckCircle, FaImage, FaHeart, FaComments
} from 'react-icons/fa';

const ListingDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [commentForm, setCommentForm] = useState({ name: '', message: '' });
  const [submittingComment, setSubmittingComment] = useState(false);

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

  const likeProperty = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/properties/${id}/like`, {
        method: 'POST',
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to like property');
      setProperty((prev) => ({ ...prev, likesCount: data.likesCount }));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setSubmittingComment(true);
    try {
      const response = await fetch(`http://localhost:8000/api/properties/${id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(commentForm),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to add comment');
      setProperty((prev) => ({ ...prev, comments: data.comments }));
      setCommentForm({ name: '', message: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmittingComment(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center">Error: {error}</div>;
  if (!property) return <div className="min-h-screen flex items-center justify-center">Property not found</div>;

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50"
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

        <div className="relative h-64 md:h-[30rem] rounded-3xl overflow-hidden mb-8 shadow-2xl">
          {property.images && property.images.length > 0 ? (
            <img src={`http://localhost:8000${property.images[0]}`} alt={property.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-slate-200 flex items-center justify-center">
              <FaImage className="text-slate-400 text-6xl" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] opacity-80 mb-2">Property Details</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">{property.title}</h1>
            <div className="flex items-center gap-2 mt-3 text-white/90">
              <FaMapMarkerAlt /> {property.location}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-600 font-semibold mb-2">Listing Price</p>
                  <h2 className="text-3xl font-black text-gray-900">{property.price}</h2>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={likeProperty}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    <FaHeart /> Like {property.likesCount || 0}
                  </button>
                  <span className="px-4 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700">
                    {property.status || 'draft'}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                  <FaBed className="text-cyan-600 mx-auto mb-1" />
                  <p className="font-bold text-2xl text-gray-900">{property.bedrooms}</p>
                  <p className="text-sm text-gray-500">{property.bedrooms === 1 ? 'Bed' : 'Beds'}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                  <FaBath className="text-cyan-600 mx-auto mb-1" />
                  <p className="font-bold text-2xl text-gray-900">{property.bathrooms}</p>
                  <p className="text-sm text-gray-500">{property.bathrooms === 1 ? 'Bath' : 'Baths'}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                  <FaRulerCombined className="text-cyan-600 mx-auto mb-1" />
                  <p className="font-bold text-2xl text-gray-900">{property.sqft || 'N/A'}</p>
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

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <FaComments className="text-cyan-600" />
                <h3 className="text-xl font-bold text-gray-900">Comments</h3>
              </div>

              <form onSubmit={handleCommentSubmit} className="space-y-3 mb-6">
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    name="name"
                    value={commentForm.name}
                    onChange={handleCommentChange}
                    placeholder="Your name"
                    className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                  <input
                    value={property.title}
                    disabled
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-500"
                  />
                </div>
                <textarea
                  name="message"
                  value={commentForm.message}
                  onChange={handleCommentChange}
                  placeholder="Write your comment..."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 h-28"
                  required
                />
                <button
                  type="submit"
                  disabled={submittingComment}
                  className="rounded-2xl bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700 disabled:opacity-60"
                >
                  {submittingComment ? 'Posting...' : 'Post Comment'}
                </button>
              </form>

              <div className="space-y-3">
                {(property.comments || []).length > 0 ? (
                  property.comments.map((comment, index) => (
                    <div key={`${comment.name}-${index}`} className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <p className="font-semibold text-slate-950">{comment.name}</p>
                        <span className="text-xs text-slate-500">{comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : ''}</span>
                      </div>
                      <p className="text-slate-700">{comment.message}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">No comments yet. Be the first to comment.</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Agent</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-cyan-600 font-bold text-lg">
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
                  <span className="font-semibold text-right">{property.location}</span>
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
                {property.whyChoose && (
                  <div className="mt-4">
                    <span className="text-gray-600 block mb-2">Why this listing stands out:</span>
                    <p className="text-gray-700">{property.whyChoose}</p>
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
