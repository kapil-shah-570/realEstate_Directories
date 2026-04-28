// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaBed, FaBath, FaRulerCombined, FaHeart, FaShareAlt, FaEye } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';
// import './FeaturedProperties.css';

// const FeaturedProperties = () => {
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [favorites, setFavorites] = useState([]);
//   const [filter, setFilter] = useState('all');

//   const properties = [
//     {
//       id: 1,
//       title: "Modern Luxury Villa",
//       price: "$2,500,000",
//       location: "Beverly Hills, CA",
//       image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
//       bedrooms: 5,
//       bathrooms: 4,
//       sqft: "4,500",
//       type: "villa",
//       features: ["Pool", "Garden", "Garage", "Smart Home"],
//       rating: 4.9,
//       status: "For Sale"
//     },
//     {
//       id: 2,
//       title: "Downtown Penthouse",
//       price: "$3,800,000",
//       location: "Manhattan, NY",
//       image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
//       bedrooms: 4,
//       bathrooms: 3,
//       sqft: "3,200",
//       type: "penthouse",
//       features: ["Rooftop", "Gym", "Concierge", "Parking"],
//       rating: 4.8,
//       status: "For Sale"
//     },
//     {
//       id: 3,
//       title: "Waterfront Mansion",
//       price: "$5,200,000",
//       location: "Miami, FL",
//       image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
//       bedrooms: 7,
//       bathrooms: 6,
//       sqft: "8,500",
//       type: "mansion",
//       features: ["Private Beach", "Boat Dock", "Cinema", "Wine Cellar"],
//       rating: 5.0,
//       status: "For Sale"
//     },
//     {
//       id: 4,
//       title: "Contemporary Townhouse",
//       price: "$1,800,000",
//       location: "Chicago, IL",
//       image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
//       bedrooms: 3,
//       bathrooms: 2.5,
//       sqft: "2,800",
//       type: "townhouse",
//       features: ["Terrace", "Fireplace", "Modern Kitchen", "Storage"],
//       rating: 4.7,
//       status: "For Sale"
//     },
//     {
//       id: 5,
//       title: "Luxury Apartment",
//       price: "$950,000",
//       location: "San Francisco, CA",
//       image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
//       bedrooms: 2,
//       bathrooms: 2,
//       sqft: "1,800",
//       type: "apartment",
//       features: ["City View", "Balcony", "Gym", "24/7 Security"],
//       rating: 4.6,
//       status: "For Sale"
//     },
//     {
//       id: 6,
//       title: "Country Estate",
//       price: "$3,500,000",
//       location: "Austin, TX",
//       image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
//       bedrooms: 6,
//       bathrooms: 5,
//       sqft: "6,500",
//       type: "estate",
//       features: ["Farm", "Stable", "Pool", "Guest House"],
//       rating: 4.9,
//       status: "For Sale"
//     }
//   ];

//   const filteredProperties = filter === 'all' 
//     ? properties 
//     : properties.filter(p => p.type === filter);

//   const toggleFavorite = (id) => {
//     setFavorites(prev => 
//       prev.includes(id) 
//         ? prev.filter(favId => favId !== id)
//         : [...prev, id]
//     );
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.5,
//         type: "spring"
//       }
//     }),
//     hover: {
//       y: -10,
//       scale: 1.02,
//       transition: { type: "spring", stiffness: 400 }
//     }
//   };

//   return (
//     <section className="featured-properties">
//       <div className="container">
//         <motion.div 
//           className="section-header"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="section-title">Featured Properties</h2>
//           <p className="section-subtitle">Discover our premium real estate selections</p>
//         </motion.div>

//         {/* Filter Tabs */}
//         <motion.div 
//           className="filter-tabs"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//         >
//           {[
//             { key: 'all', label: 'All Properties' },
//             { key: 'villa', label: 'Villas' },
//             { key: 'penthouse', label: 'Penthouses' },
//             { key: 'apartment', label: 'Apartments' },
//             { key: 'mansion', label: 'Mansions' },
//             { key: 'townhouse', label: 'Townhouses' },
//           ].map((tab) => (
//             <button
//               key={tab.key}
//               className={`filter-tab ${filter === tab.key ? 'active' : ''}`}
//               onClick={() => setFilter(tab.key)}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </motion.div>

//         {/* Property Grid */}
//         <div className="properties-grid">
//           {filteredProperties.map((property, index) => (
//             <motion.div
//               key={property.id}
//               className="property-card"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover="hover"
//               custom={index}
//               onClick={() => setSelectedProperty(property)}
//             >
//               {/* Property Image */}
//               <div className="property-image">
//                 <img src={property.image} alt={property.title} />
//                 <div className="property-badge">{property.status}</div>
//                 <div className="property-actions">
//                   <motion.button
//                     className={`action-btn favorite ${favorites.includes(property.id) ? 'active' : ''}`}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       toggleFavorite(property.id);
//                     }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <FaHeart />
//                   </motion.button>
//                   <motion.button
//                     className="action-btn share"
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <FaShareAlt />
//                   </motion.button>
//                   <motion.button
//                     className="action-btn view"
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <FaEye />
//                   </motion.button>
//                 </div>
//                 <div className="property-rating">
//                   ⭐ {property.rating}
//                 </div>
//               </div>
              
//               {/* Property Content */}
//               <div className="property-content">
//                 <h3 className="property-title">{property.title}</h3>
//                 <p className="property-location">{property.location}</p>
//                 <div className="property-price">{property.price}</div>
                
//                 <div className="property-features">
//                   <span><FaBed /> {property.bedrooms} Beds</span>
//                   <span><FaBath /> {property.bathrooms} Baths</span>
//                   <span><FaRulerCombined /> {property.sqft} sqft</span>
//                 </div>
                
//                 <div className="property-tags">
//                   {property.features.map((feature, idx) => (
//                     <span key={idx} className="tag">{feature}</span>
//                   ))}
//                 </div>
                
//                 <motion.button 
//                   className="property-btn"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   View Details
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Carousel View */}
//         <motion.div 
//           className="property-carousel-container"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//         >
//           <Swiper
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={'auto'}
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 0,
//               depth: 100,
//               modifier: 2.5,
//               slideShadows: true,
//             }}
//             pagination={{ clickable: true }}
//             navigation={true}
//             modules={[EffectCoverflow, Pagination, Navigation]}
//             className="property-carousel"
//           >
//             {properties.map((property) => (
//               <SwiperSlide key={property.id}>
//                 <div className="carousel-slide">
//                   <img src={property.image} alt={property.title} />
//                   <div className="carousel-content">
//                     <h3>{property.title}</h3>
//                     <p>{property.location}</p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </motion.div>

//         {/* Property Modal */}
//         <AnimatePresence>
//           {selectedProperty && (
//             <motion.div 
//               className="property-modal-overlay"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedProperty(null)}
//             >
//               <motion.div 
//                 className="property-modal"
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button 
//                   className="modal-close"
//                   onClick={() => setSelectedProperty(null)}
//                 >
//                   ✕
//                 </button>
//                 <div className="modal-content">
//                   <img src={selectedProperty.image} alt={selectedProperty.title} />
//                   <div className="modal-details">
//                     <h2>{selectedProperty.title}</h2>
//                     <p className="modal-location">{selectedProperty.location}</p>
//                     <div className="modal-price">{selectedProperty.price}</div>
//                     <div className="modal-features">
//                       <span><FaBed /> {selectedProperty.bedrooms} Bedrooms</span>
//                       <span><FaBath /> {selectedProperty.bathrooms} Bathrooms</span>
//                       <span><FaRulerCombined /> {selectedProperty.sqft} sqft</span>
//                     </div>
//                     <p className="modal-description">
//                       Luxury living at its finest. This property features state-of-the-art amenities 
//                       and breathtaking views. Perfect for those seeking the ultimate in comfort and style.
//                     </p>
//                     <button className="modal-btn">Schedule Viewing</button>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProperties;















// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaBed, FaBath, FaRulerCombined, FaHeart, FaShareAlt, FaEye } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';

// const FeaturedProperties = () => {
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [favorites, setFavorites] = useState([]);
//   const [filter, setFilter] = useState('all');

//   const properties = [
//     {
//       id: 1,
//       title: "Modern Luxury Villa",
//       price: "$2,500,000",
//       location: "Beverly Hills, CA",
//       image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
//       bedrooms: 5,
//       bathrooms: 4,
//       sqft: "4,500",
//       type: "villa",
//       features: ["Pool", "Garden", "Garage", "Smart Home"],
//       rating: 4.9,
//       status: "For Sale"
//     },
//     {
//       id: 2,
//       title: "Downtown Penthouse",
//       price: "$3,800,000",
//       location: "Manhattan, NY",
//       image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
//       bedrooms: 4,
//       bathrooms: 3,
//       sqft: "3,200",
//       type: "penthouse",
//       features: ["Rooftop", "Gym", "Concierge", "Parking"],
//       rating: 4.8,
//       status: "For Sale"
//     },
//     {
//       id: 3,
//       title: "Waterfront Mansion",
//       price: "$5,200,000",
//       location: "Miami, FL",
//       image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
//       bedrooms: 7,
//       bathrooms: 6,
//       sqft: "8,500",
//       type: "mansion",
//       features: ["Private Beach", "Boat Dock", "Cinema", "Wine Cellar"],
//       rating: 5.0,
//       status: "For Sale"
//     },
//     {
//       id: 4,
//       title: "Contemporary Townhouse",
//       price: "$1,800,000",
//       location: "Chicago, IL",
//       image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
//       bedrooms: 3,
//       bathrooms: 2.5,
//       sqft: "2,800",
//       type: "townhouse",
//       features: ["Terrace", "Fireplace", "Modern Kitchen", "Storage"],
//       rating: 4.7,
//       status: "For Sale"
//     },
//     {
//       id: 5,
//       title: "Luxury Apartment",
//       price: "$950,000",
//       location: "San Francisco, CA",
//       image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
//       bedrooms: 2,
//       bathrooms: 2,
//       sqft: "1,800",
//       type: "apartment",
//       features: ["City View", "Balcony", "Gym", "24/7 Security"],
//       rating: 4.6,
//       status: "For Sale"
//     },
//     {
//       id: 6,
//       title: "Country Estate",
//       price: "$3,500,000",
//       location: "Austin, TX",
//       image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
//       bedrooms: 6,
//       bathrooms: 5,
//       sqft: "6,500",
//       type: "estate",
//       features: ["Farm", "Stable", "Pool", "Guest House"],
//       rating: 4.9,
//       status: "For Sale"
//     }
//   ];

//   const filteredProperties = filter === 'all' 
//     ? properties 
//     : properties.filter(p => p.type === filter);

//   const toggleFavorite = (id) => {
//     setFavorites(prev => 
//       prev.includes(id) 
//         ? prev.filter(favId => favId !== id)
//         : [...prev, id]
//     );
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.5,
//         type: "spring"
//       }
//     }),
//     hover: {
//       y: -10,
//       scale: 1.02,
//       transition: { type: "spring", stiffness: 400 }
//     }
//   };

//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-[1400px] mx-auto px-8">
//         {/* Section Header */}
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#3a86ff] to-[#64ffda] bg-clip-text text-transparent">
//             Featured Properties
//           </h2>
//           <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
//             Discover our premium real estate selections
//           </p>
//         </motion.div>

//         {/* Filter Tabs */}
//         <motion.div 
//           className="flex justify-center flex-wrap gap-4 mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//         >
//           {[
//             { key: 'all', label: 'All Properties' },
//             { key: 'villa', label: 'Villas' },
//             { key: 'penthouse', label: 'Penthouses' },
//             { key: 'apartment', label: 'Apartments' },
//             { key: 'mansion', label: 'Mansions' },
//             { key: 'townhouse', label: 'Townhouses' },
//           ].map((tab) => (
//             <button
//               key={tab.key}
//               className={`
//                 px-7 py-3 rounded-full font-semibold transition-all duration-300
//                 ${filter === tab.key 
//                   ? 'bg-[#3a86ff] text-white border-[#3a86ff] shadow-[0_5px_20px_rgba(58,134,255,0.3)]' 
//                   : 'bg-[#f1f5f9] text-[#1e293b] border-transparent hover:bg-[#e2e8f0] hover:-translate-y-0.5'
//                 }
//                 border-2
//               `}
//               onClick={() => setFilter(tab.key)}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </motion.div>

//         {/* Property Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {filteredProperties.map((property, index) => (
//             <motion.div
//               key={property.id}
//               className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover="hover"
//               custom={index}
//               onClick={() => setSelectedProperty(property)}
//             >
//               {/* Property Image */}
//               <div className="relative h-64 overflow-hidden">
//                 <img 
//                   src={property.image} 
//                   alt={property.title} 
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute top-4 left-4 bg-[#3a86ff] text-white px-4 py-2 rounded-full text-sm font-semibold">
//                   {property.status}
//                 </div>
//                 <div className="absolute top-4 right-4 flex flex-col gap-2">
//                   <motion.button
//                     className={`w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-base transition-all duration-300 hover:scale-110 hover:bg-white ${favorites.includes(property.id) ? 'bg-[#ff4757] text-white' : 'text-[#ff4757]'}`}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       toggleFavorite(property.id);
//                     }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <FaHeart />
//                   </motion.button>
//                   <motion.button
//                     className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#1e293b] text-base transition-all duration-300 hover:scale-110 hover:bg-white"
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <FaShareAlt />
//                   </motion.button>
//                   <motion.button
//                     className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#1e293b] text-base transition-all duration-300 hover:scale-110 hover:bg-white"
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <FaEye />
//                   </motion.button>
//                 </div>
//                 <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full text-sm flex items-center gap-1">
//                   ⭐ {property.rating}
//                 </div>
//               </div>
              
//               {/* Property Content */}
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-[#1e293b] mb-2">{property.title}</h3>
//                 <p className="text-[#64748b] mb-4 flex items-center gap-2">{property.location}</p>
//                 <div className="text-3xl font-extrabold text-[#3a86ff] mb-6">{property.price}</div>
                
//                 <div className="flex justify-between mb-6 pb-6 border-b border-[#e2e8f0]">
//                   <span className="flex items-center gap-2 text-[#64748b] text-sm"><FaBed /> {property.bedrooms} Beds</span>
//                   <span className="flex items-center gap-2 text-[#64748b] text-sm"><FaBath /> {property.bathrooms} Baths</span>
//                   <span className="flex items-center gap-2 text-[#64748b] text-sm"><FaRulerCombined /> {property.sqft} sqft</span>
//                 </div>
                
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {property.features.map((feature, idx) => (
//                     <span key={idx} className="bg-[#f1f5f9] text-[#1e293b] px-3 py-1 rounded-2xl text-xs">
//                       {feature}
//                     </span>
//                   ))}
//                 </div>
                
//                 <motion.button 
//                   className="w-full py-4 bg-gradient-to-r from-[#3a86ff] to-[#64ffda] rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(58,134,255,0.3)]"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   View Details
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Carousel View */}
//         <motion.div 
//           className="mt-16"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//         >
//           <Swiper
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={'auto'}
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 0,
//               depth: 100,
//               modifier: 2.5,
//               slideShadows: true,
//             }}
//             pagination={{ clickable: true }}
//             navigation={true}
//             modules={[EffectCoverflow, Pagination, Navigation]}
//             className="py-8"
//           >
//             {properties.map((property) => (
//               <SwiperSlide key={property.id}>
//                 <div className="w-[900px] h-[400px] rounded-2xl overflow-hidden relative max-sm:w-[250px] max-sm:h-[350px]">
//                   <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
//                   <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent text-white p-8">
//                     <h3 className="text-2xl mb-2">{property.title}</h3>
//                     <p>{property.location}</p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </motion.div>

//         {/* Property Modal */}
//         <AnimatePresence>
//           {selectedProperty && (
//             <motion.div 
//               className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[1000] p-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedProperty(null)}
//             >
//               <motion.div 
//                 className="bg-white rounded-2xl max-w-[1000px] w-full max-h-[90vh] overflow-y-auto relative"
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button 
//                   className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl shadow-[0_5px_20px_rgba(0,0,0,0.1)] z-[1001]"
//                   onClick={() => setSelectedProperty(null)}
//                 >
//                   ✕
//                 </button>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
//                   <img 
//                     src={selectedProperty.image} 
//                     alt={selectedProperty.title} 
//                     className="w-full h-full object-cover md:rounded-l-2xl max-md:h-[300px] max-md:rounded-t-2xl" 
//                   />
//                   <div className="p-12 max-md:p-8">
//                     <h2 className="text-3xl mb-2 text-[#1e293b]">{selectedProperty.title}</h2>
//                     <p className="text-[#64748b] mb-6 text-lg">{selectedProperty.location}</p>
//                     <div className="text-4xl font-extrabold text-[#3a86ff] mb-8">{selectedProperty.price}</div>
//                     <div className="flex gap-8 mb-8 pb-8 border-b border-[#e2e8f0]">
//                       <span className="flex items-center gap-2 text-[#1e293b]"><FaBed /> {selectedProperty.bedrooms} Bedrooms</span>
//                       <span className="flex items-center gap-2 text-[#1e293b]"><FaBath /> {selectedProperty.bathrooms} Bathrooms</span>
//                       <span className="flex items-center gap-2 text-[#1e293b]"><FaRulerCombined /> {selectedProperty.sqft} sqft</span>
//                     </div>
//                     <p className="text-[#64748b] leading-relaxed mb-8">
//                       Luxury living at its finest. This property features state-of-the-art amenities 
//                       and breathtaking views. Perfect for those seeking the ultimate in comfort and style.
//                     </p>
//                     <button className="w-full py-5 bg-gradient-to-r from-[#3a86ff] to-[#64ffda] rounded-xl text-white text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(58,134,255,0.3)]">
//                       Schedule Viewing
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProperties;

















import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaRulerCombined, FaHeart } from 'react-icons/fa';
import './FeaturedProperties.css';

export const featuredProperties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: "$2,500,000",
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    ],
    bedrooms: 5,
    bathrooms: 4,
    sqft: "4,500",
    type: "villa",
    features: ["Pool", "Garden", "Garage", "Smart Home"],
    rating: 4.9,
    status: "For Sale",
    description: "Luxury living at its finest. This stunning modern villa offers 5 bedrooms, 4 bathrooms, and an open-plan living space. The gourmet kitchen features top-of-the-line appliances, while the master suite boasts a spa-like bathroom and walk-in closet. Outside, enjoy a resort-style pool, manicured gardens, and a 3-car garage. Smart home technology controls lighting, climate, and security for ultimate convenience.",
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b786d4c2"
    },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    lat: 34.0736,
    lng: -118.4004,
    area: "0.5 acres",
    yearBuilt: 2020,
    floorPlan: "https://via.placeholder.com/400x300?text=Floor+Plan",
    bookingTimes: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"]
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    price: "$3,800,000",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    ],
    bedrooms: 4,
    bathrooms: 3,
    sqft: "3,200",
    type: "penthouse",
    features: ["Rooftop", "Gym", "Concierge", "Parking"],
    rating: 4.8,
    status: "For Sale",
    description: "Perched on the top floor of a prestigious Manhattan building, this penthouse offers panoramic views of the city skyline. The expansive living area features floor-to-ceiling windows, a modern chef's kitchen, and a private rooftop terrace. Building amenities include a state-of-the-art gym, 24/7 concierge, and secure underground parking. Experience urban luxury at its finest.",
    agent: {
      name: "Michael Chen",
      phone: "+1 (555) 987-6543",
      email: "michael@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    lat: 40.7736,
    lng: -73.9566,
    area: "3,200 sqft",
    yearBuilt: 2019,
    floorPlan: "https://via.placeholder.com/400x300?text=Floor+Plan",
    bookingTimes: ["10:00 AM", "1:00 PM", "3:00 PM"]
  },
  {
    id: 3,
    title: "Waterfront Mansion",
    price: "$5,200,000",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90",
      "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f"
    ],
    bedrooms: 7,
    bathrooms: 6,
    sqft: "8,500",
    type: "mansion",
    features: ["Private Beach", "Boat Dock", "Cinema", "Wine Cellar"],
    rating: 5.0,
    status: "For Sale",
    description: "Experience opulence at its finest in this breathtaking waterfront mansion. With 7 bedrooms, 6 bathrooms, and 8,500 sqft of living space, this estate boasts a private beach, infinity pool, and a private boat dock. The interior features a home cinema, wine cellar, and a grand foyer with soaring ceilings. Perfect for entertaining and luxury living.",
    agent: {
      name: "Emily Rodriguez",
      phone: "+1 (555) 456-7890",
      email: "emily@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    lat: 25.7907,
    lng: -80.1300,
    area: "2 acres",
    yearBuilt: 2015,
    floorPlan: "https://via.placeholder.com/400x300?text=Floor+Plan",
    bookingTimes: ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"]
  },
  {
    id: 4,
    title: "Contemporary Townhouse",
    price: "$1,800,000",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1567446537710-0c5ff5a6ac32",
      "https://images.unsplash.com/photo-1483721310020-03333e577cce"
    ],
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: "2,800",
    type: "townhouse",
    features: ["Terrace", "Fireplace", "Modern Kitchen", "Storage"],
    rating: 4.7,
    status: "For Sale",
    description: "This contemporary townhouse offers 3 bedrooms, 2.5 bathrooms, and a private rooftop terrace overlooking the city. The main level features an open-concept living/dining area with a fireplace, and a modern kitchen with premium appliances. With ample storage and a 2-car garage, this home combines style and functionality.",
    agent: {
      name: "David Kim",
      phone: "+1 (555) 234-5678",
      email: "david@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    lat: 41.8781,
    lng: -87.6298,
    area: "0.2 acres",
    yearBuilt: 2018,
    floorPlan: "https://via.placeholder.com/400x300?text=Floor+Plan",
    bookingTimes: ["11:00 AM", "1:00 PM", "3:00 PM"]
  },
  {
    id: 5,
    title: "Luxury Apartment",
    price: "$950,000",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    ],
    bedrooms: 2,
    bathrooms: 2,
    sqft: "1,800",
    type: "apartment",
    features: ["City View", "Balcony", "Gym", "24/7 Security"],
    rating: 4.6,
    status: "For Sale",
    description: "Modern urban living in the heart of San Francisco. This luxury apartment features 2 bedrooms, 2 bathrooms, floor-to-ceiling windows, and a private balcony with stunning city views. Residents enjoy a fully equipped gym, 24/7 security, and a prime location near dining, shopping, and public transit.",
    agent: {
      name: "Lisa Thompson",
      phone: "+1 (555) 876-5432",
      email: "lisa@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    lat: 37.7749,
    lng: -122.4194,
    area: "1,800 sqft",
    yearBuilt: 2021,
    floorPlan: "https://via.placeholder.com/400x300?text=Floor+Plan",
    bookingTimes: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"]
  },
  {
    id: 6,
    title: "Country Estate",
    price: "$3,500,000",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
      "https://images.unsplash.com/photo-1494522358652-c549345d2c9e"
    ],
    bedrooms: 6,
    bathrooms: 5,
    sqft: "6,500",
    type: "estate",
    features: ["Farm", "Stable", "Pool", "Guest House"],
    rating: 4.9,
    status: "For Sale",
    description: "Spread across acres of rolling Texas countryside, this exquisite country estate offers 6 bedrooms, 5 bathrooms, and a separate guest house. The property includes a working farm, horse stables, a resort-style pool, and a spacious outdoor entertainment area. Inside, you'll find rustic charm blended with modern luxury, including a gourmet kitchen and a grand stone fireplace.",
    agent: {
      name: "James Wilson",
      phone: "+1 (555) 345-6789",
      email: "james@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    lat: 30.2672,
    lng: -97.7431,
    area: "10 acres",
    yearBuilt: 2010,
    floorPlan: "https://via.placeholder.com/400x300?text=Floor+Plan",
    bookingTimes: ["8:00 AM", "10:00 AM", "1:00 PM", "3:00 PM"]
  }
];

const FeaturedProperties = () => {
  const [filter, setFilter] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const filteredProperties = filter === 'all' ? featuredProperties : featuredProperties.filter(p => p.type === filter);

  const toggleFavorite = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]);
  };

  return (
    <section className="featured-properties py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Discover our premium real estate selections</p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {['all', 'villa', 'penthouse', 'apartment', 'mansion', 'townhouse'].map(type => (
            <button key={type} onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition ${filter === type ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'}`}>
              {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="properties-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <Link to={`/featured/${property.id}`} state={property} key={property.id} className="block h-full">
              <motion.div
                className="property-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col group"
                initial={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">{property.status}</span>
                  <button onClick={(e) => toggleFavorite(property.id, e)}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center ${favorites.includes(property.id) ? 'text-red-500' : 'text-gray-600'} hover:scale-110 transition-transform`}>
                    <FaHeart />
                  </button>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{property.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{property.location}</p>
                  <p className="text-2xl font-extrabold text-blue-600 mb-4">{property.price}</p>
                  <div className="flex justify-between text-sm text-gray-700 mb-4">
                    <span className="flex items-center gap-1"><FaBed /> {property.bedrooms}</span>
                    <span className="flex items-center gap-1"><FaBath /> {property.bathrooms}</span>
                    <span className="flex items-center gap-1"><FaRulerCombined /> {property.sqft}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {property.features.slice(0, 3).map((feat, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md">{feat}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
