import React, { useState, useEffect } from 'react';
import { useLocation, Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaPhone, FaEnvelope,
  FaCalendarAlt, FaCheckCircle, FaArrowLeft, FaPlay, FaSearch
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { featuredProperties } from '../components/Sections/featuredProperties/FeaturedProperties';

const FeaturedPropertyDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const property = location.state || featuredProperties.find((item) => String(item.id) === String(id));
  const [userLocation, setUserLocation] = useState(null);
  const [bookingForm, setBookingForm] = useState({ date: '', time: '', name: '', email: '', message: '' });
  const [mortgage, setMortgage] = useState({ downPayment: 20, rate: 6.5, years: 30 });
  const [mortgageResult, setMortgageResult] = useState(null);

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition((pos) => {
      setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);

  if (!property) return <Navigate to="/" replace />;

  // Distance calculation (simplified)
  const getDistance = () => {
    if (!userLocation || !property.lat || !property.lng) return null;
    const R = 6371; // km
    const dLat = (property.lat - userLocation.lat) * Math.PI / 180;
    const dLon = (property.lng - userLocation.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2)**2 + Math.cos(userLocation.lat*Math.PI/180)*Math.cos(property.lat*Math.PI/180)*Math.sin(dLon/2)**2;
    return (R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))).toFixed(1) + ' km';
  };

  const calculateMortgage = () => {
    const principal = parseFloat(property.price.replace(/[^0-9.]/g, '')) * (1 - mortgage.downPayment/100);
    const monthlyRate = mortgage.rate / 100 / 12;
    const n = mortgage.years * 12;
    const payment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
    setMortgageResult(payment.toFixed(0));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert('Booking request sent! Agent will confirm.');
    setBookingForm({ date: '', time: '', name: '', email: '', message: '' });
  };

  return (
    <motion.div className="min-h-screen bg-gray-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="max-w-7xl mx-auto px-5 py-8">
        <Link to="/#featured-properties" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition mb-6">
          <FaArrowLeft /> Back to Properties
        </Link>

        {/* Hero Gallery */}
        <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} className="rounded-3xl overflow-hidden h-64 md:h-96 mb-8 shadow-xl">
          {(property.images || [property.image]).map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={property.title} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{property.title}</h1>
                <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm">{property.status}</span>
              </div>
                <p className="flex items-center gap-1 text-gray-600 mb-4"><FaMapMarkerAlt /> {property.location}</p>
                <p className="text-3xl font-extrabold text-blue-600 mb-6">{property.price}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{property.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-2xl text-center">
                  <FaBed className="text-blue-500 mx-auto mb-1" />
                  <p className="font-bold text-xl">{property.bedrooms}</p>
                  <p className="text-sm text-gray-500">Beds</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl text-center">
                  <FaBath className="text-blue-500 mx-auto mb-1" />
                  <p className="font-bold text-xl">{property.bathrooms}</p>
                  <p className="text-sm text-gray-500">Baths</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl text-center">
                  <FaRulerCombined className="text-blue-500 mx-auto mb-1" />
                  <p className="font-bold text-xl">{property.sqft}</p>
                  <p className="text-sm text-gray-500">sqft</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Features</h3>
                <div className="flex flex-wrap gap-3">
                  {(property.features || []).map((feat, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" /> {feat}
                    </span>
                  ))}
                </div>
              </div>

              {property.floorPlan && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Floor Plan</h3>
                  <img src={property.floorPlan} alt="Floor Plan" className="rounded-2xl w-full max-w-md" />
                </div>
              )}
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
              <div className="h-64 rounded-2xl overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={
                    property.lat && property.lng
                      ? `https://www.openstreetmap.org/export/embed.html?bbox=${property.lng - 0.02},${property.lat - 0.02},${property.lng + 0.02},${property.lat + 0.02}&layer=mapnik&marker=${property.lat},${property.lng}`
                      : 'about:blank'
                  }
                ></iframe>
              </div>
              {userLocation && property.lat && property.lng && (
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaSearch className="text-blue-500" /> Distance from you: {getDistance()}
                </p>
              )}
              {property.lat && property.lng && (
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${property.lat},${property.lng}`} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-blue-600 font-semibold hover:underline">
                  Get Directions →
                </a>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Agent</h3>
              <div className="flex items-center gap-4 mb-4">
                <img src={property.agent?.avatar} alt={property.agent?.name} className="w-12 h-12 rounded-full object-cover border" />
                <div>
                  <p className="font-semibold">{property.agent?.name}</p>
                  <p className="text-sm text-gray-500">{property.agent?.phone}</p>
                </div>
              </div>
              <div className="space-y-2">
                <a href={`tel:${property.agent?.phone || ''}`} className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold">
                  <FaPhone /> Call
                </a>
                <a href={`mailto:${property.agent?.email || ''}`} className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 py-3 rounded-full font-semibold">
                  <FaEnvelope /> Email
                </a>
              </div>
            </div>

            {/* Video */}
            {property.video && (
              <div className="bg-white rounded-3xl p-6 shadow-sm border">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Virtual Tour</h3>
                <div className="aspect-video">
                  <iframe width="100%" height="100%" src={property.video} title="Video tour" frameBorder="0" allowFullScreen className="rounded-2xl"></iframe>
                </div>
              </div>
            )}

            {/* Booking Form */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule a Visit</h3>
              <form onSubmit={handleBookingSubmit} className="space-y-3">
                <input type="date" value={bookingForm.date} onChange={e => setBookingForm({...bookingForm, date: e.target.value})} className="w-full border rounded-lg px-4 py-2" required />
                <select value={bookingForm.time} onChange={e => setBookingForm({...bookingForm, time: e.target.value})} className="w-full border rounded-lg px-4 py-2" required>
                  <option value="">Select Time</option>
                  {property.bookingTimes?.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <input type="text" placeholder="Your Name" value={bookingForm.name} onChange={e => setBookingForm({...bookingForm, name: e.target.value})} className="w-full border rounded-lg px-4 py-2" required />
                <input type="email" placeholder="Email" value={bookingForm.email} onChange={e => setBookingForm({...bookingForm, email: e.target.value})} className="w-full border rounded-lg px-4 py-2" required />
                <textarea placeholder="Message (optional)" value={bookingForm.message} onChange={e => setBookingForm({...bookingForm, message: e.target.value})} className="w-full border rounded-lg px-4 py-2" rows="2" />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold">
                  Request Booking
                </button>
              </form>
            </div>

            {/* Mortgage Calculator */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mortgage Calculator</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">Down Payment (%)</label>
                  <input type="number" value={mortgage.downPayment} onChange={e => setMortgage({...mortgage, downPayment: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Interest Rate (%)</label>
                  <input type="number" value={mortgage.rate} onChange={e => setMortgage({...mortgage, rate: e.target.value})} className="w-full border rounded-lg px-3 py-2" step="0.1" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Years</label>
                  <input type="number" value={mortgage.years} onChange={e => setMortgage({...mortgage, years: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
                </div>
                <button onClick={calculateMortgage} className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-full font-semibold">Calculate</button>
                {mortgageResult && (
                  <p className="text-green-600 font-bold text-center mt-2">Estimated Monthly Payment: ${mortgageResult}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Blog Posts (placeholder) */}
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder blog cards – you can map over actual blog data */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border">
              <p className="font-semibold">Top 5 Luxury Home Features</p>
              <p className="text-sm text-gray-500 mt-1">Read about must‑have amenities in high‑end properties.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border">
              <p className="font-semibold">Navigating the Beverly Hills Market</p>
              <p className="text-sm text-gray-500 mt-1">Tips for buyers in competitive luxury markets.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedPropertyDetail;
