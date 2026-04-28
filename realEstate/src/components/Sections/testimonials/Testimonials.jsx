// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaStar, FaQuoteLeft, FaPlay } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import './Testimonials.css';

// const Testimonials = () => {
//   const [activeVideo, setActiveVideo] = useState(null);

//   const testimonials = [
//     {
//       id: 1,
//       name: "John & Sarah Miller",
//       role: "Home Buyers",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//       rating: 5,
//       text: "EstatePro helped us find our dream home in just 3 weeks! Their team was professional, responsive, and truly understood our needs.",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Modern Villa, Beverly Hills",
//       date: "March 2024"
//     },
//     {
//       id: 2,
//       name: "Robert Chen",
//       role: "Real Estate Investor",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
//       rating: 5,
//       text: "As an investor, I appreciate their market insights and deal sourcing capabilities. They've helped grow my portfolio by 40% in one year.",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Commercial Complex, NYC",
//       date: "February 2024"
//     },
//     {
//       id: 3,
//       name: "Maria Garcia",
//       role: "Property Seller",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
//       rating: 5,
//       text: "Sold my property 15% above market value thanks to their marketing strategy. The entire process was smooth and stress-free.",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Townhouse, Miami",
//       date: "January 2024"
//     },
//     {
//       id: 4,
//       name: "David Wilson",
//       role: "First-time Buyer",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//       rating: 5,
//       text: "As a first-time buyer, I was overwhelmed. Their guidance made the process easy and educational. Highly recommend!",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Starter Home, Chicago",
//       date: "December 2023"
//     }
//   ];

//   const stats = [
//     { value: "4.9/5", label: "Average Rating" },
//     { value: "98%", label: "Client Satisfaction" },
//     { value: "1500+", label: "Happy Clients" },
//     { value: "24h", label: "Response Time" }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100 }
//     }
//   };

//   return (
//     <section className="testimonials bg-dark">
//       <div className="container">
//         <motion.div 
//           className="section-header"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="section-title">Client Success Stories</h2>
//           <p className="section-subtitle">See what our clients have to say about their experiences</p>
//         </motion.div>

//         {/* Stats */}
//         <motion.div 
//           className="testimonial-stats"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               className="stat-item"
//               variants={itemVariants}
//               custom={index}
//               whileHover={{ scale: 1.1 }}
//             >
//               <div className="stat-value">{stat.value}</div>
//               <div className="stat-label">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Testimonials Carousel */}
//         <div className="testimonials-carousel">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 5000 }}
//             breakpoints={{
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 }
//             }}
//           >
//             {testimonials.map((testimonial) => (
//               <SwiperSlide key={testimonial.id}>
//                 <motion.div 
//                   className="testimonial-card"
//                   whileHover={{ y: -10, scale: 1.02 }}
//                   onClick={() => setActiveVideo(testimonial)}
//                 >
//                   <FaQuoteLeft className="quote-icon" />
                  
//                   <div className="testimonial-content">
//                     <p className="testimonial-text">"{testimonial.text}"</p>
                    
//                     <div className="testimonial-rating">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <FaStar key={i} className="star filled" />
//                       ))}
//                     </div>
                    
//                     <div className="testimonial-author">
//                       <img 
//                         src={testimonial.image} 
//                         alt={testimonial.name}
//                         className="author-image"
//                       />
//                       <div className="author-info">
//                         <h4 className="author-name">{testimonial.name}</h4>
//                         <p className="author-role">{testimonial.role}</p>
//                       </div>
//                     </div>
                    
//                     <div className="testimonial-details">
//                       <span className="detail">🏠 {testimonial.purchase}</span>
//                       <span className="detail">📅 {testimonial.date}</span>
//                     </div>
                    
//                     <button className="video-play-btn">
//                       <FaPlay /> Watch Video Testimonial
//                     </button>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Video Testimonial Modal */}
//         <AnimatePresence>
//           {activeVideo && (
//             <motion.div 
//               className="video-modal-overlay"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setActiveVideo(null)}
//             >
//               <motion.div 
//                 className="video-modal"
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button 
//                   className="modal-close"
//                   onClick={() => setActiveVideo(null)}
//                 >
//                   ✕
//                 </button>
                
//                 <div className="video-container">
//                   <iframe
//                     src={activeVideo.video}
//                     title={`Testimonial from ${activeVideo.name}`}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
                  
//                   <div className="video-info">
//                     <h3>{activeVideo.name}</h3>
//                     <p>{activeVideo.role}</p>
//                     <div className="video-details">
//                       <span>🏠 {activeVideo.purchase}</span>
//                       <span>📅 {activeVideo.date}</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Google Reviews Preview */}
//         <motion.div 
//           className="google-reviews"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//         >
//           <h3 className="reviews-title">Rated 4.9/5 on Google</h3>
//           <div className="reviews-badge">
//             <div className="google-rating">
//               <span className="rating-value">4.9</span>
//               <div className="stars">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} className="star filled" />
//                 ))}
//               </div>
//               <span className="reviews-count">Based on 350+ reviews</span>
//             </div>
//             <button className="view-reviews-btn">View All Reviews</button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;




































// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaStar, FaQuoteLeft, FaPlay, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const Testimonials = () => {
//   const [activeVideo, setActiveVideo] = useState(null);

//   const testimonials = [
//     {
//       id: 1,
//       name: "John & Sarah Miller",
//       role: "Home Buyers",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//       rating: 5,
//       text: "EstatePro helped us find our dream home in just 3 weeks! Their team was professional, responsive, and truly understood our needs.",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Modern Villa, Beverly Hills",
//       date: "March 2024"
//     },
//     {
//       id: 2,
//       name: "Robert Chen",
//       role: "Real Estate Investor",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
//       rating: 5,
//       text: "As an investor, I appreciate their market insights and deal sourcing capabilities. They've helped grow my portfolio by 40% in one year.",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Commercial Complex, NYC",
//       date: "February 2024"
//     },
//     {
//       id: 3,
//       name: "Maria Garcia",
//       role: "Property Seller",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
//       rating: 5,
//       text: "Sold my property 15% above market value thanks to their marketing strategy. The entire process was smooth and stress-free.",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Townhouse, Miami",
//       date: "January 2024"
//     },
//     {
//       id: 4,
//       name: "David Wilson",
//       role: "First-time Buyer",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//       rating: 5,
//       text: "As a first-time buyer, I was overwhelmed. Their guidance made the process easy and educational. Highly recommend!",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Starter Home, Chicago",
//       date: "December 2023"
//     }
//   ];

//   const stats = [
//     { value: "4.9/5", label: "Average Rating" },
//     { value: "98%", label: "Client Satisfaction" },
//     { value: "1500+", label: "Happy Clients" },
//     { value: "24h", label: "Response Time" }
//   ];

//   const contactInfo = [
//     { icon: <FaPhoneAlt />, label: "Call Us", value: "+1 (888) 123-4567", href: "tel:+18881234567" },
//     { icon: <FaEnvelope />, label: "Email Us", value: "hello@estatepro.com", href: "mailto:hello@estatepro.com" },
//     { icon: <FaMapMarkerAlt />, label: "Visit Us", value: "123 Real Estate Ave, Beverly Hills, CA 90210", href: "#" },
//     { icon: <FaClock />, label: "Office Hours", value: "Mon-Fri: 9am - 6pm | Sat: 10am - 4pm", href: null }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100 }
//     }
//   };

//   return (
//     <section className="py-24 bg-[#0a192f] text-white">
//       <div className="max-w-[1400px] mx-auto px-8">
//         {/* Section Header */}
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#64ffda] to-[#3a86ff] bg-clip-text text-transparent">
//             Client Success Stories
//           </h2>
//           <p className="text-xl text-[#a8b2d1] max-w-2xl mx-auto">
//             See what our clients have to say about their experiences
//           </p>
//         </motion.div>

//         {/* Stats */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               className="text-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-[#64ffda] hover:-translate-y-1.5"
//               variants={itemVariants}
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="text-4xl font-extrabold text-[#64ffda] mb-2 leading-none">{stat.value}</div>
//               <div className="text-base text-[#a8b2d1] uppercase tracking-wider">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Testimonials Carousel */}
//         <div className="mb-16">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 5000 }}
//             breakpoints={{
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 }
//             }}
//             className="py-8"
//           >
//             {testimonials.map((testimonial) => (
//               <SwiperSlide key={testimonial.id}>
//                 <motion.div 
//                   className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-10 h-full border border-white/10 cursor-pointer transition-all duration-300 hover:bg-white/8 hover:border-[#64ffda]"
//                   whileHover={{ y: -10, scale: 1.02 }}
//                   onClick={() => setActiveVideo(testimonial)}
//                 >
//                   <FaQuoteLeft className="absolute top-8 left-8 text-4xl text-[#64ffda] opacity-30" />
                  
//                   <div className="relative z-10">
//                     <p className="text-white leading-relaxed mb-6 text-lg italic">"{testimonial.text}"</p>
                    
//                     <div className="flex gap-1 mb-6">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <FaStar key={i} className="text-[#ffd700] text-lg" />
//                       ))}
//                     </div>
                    
//                     <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
//                       <img 
//                         src={testimonial.image} 
//                         alt={testimonial.name}
//                         className="w-16 h-16 rounded-full object-cover"
//                       />
//                       <div>
//                         <h4 className="text-xl font-semibold text-white mb-1">{testimonial.name}</h4>
//                         <p className="text-[#a8b2d1] text-sm">{testimonial.role}</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex flex-col gap-2 mb-6">
//                       <span className="flex items-center gap-2 text-[#a8b2d1] text-sm">🏠 {testimonial.purchase}</span>
//                       <span className="flex items-center gap-2 text-[#a8b2d1] text-sm">📅 {testimonial.date}</span>
//                     </div>
                    
//                     <button className="w-full py-3 bg-transparent border-2 border-[#64ffda] rounded-xl text-[#64ffda] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#64ffda] hover:text-[#0a192f]">
//                       <FaPlay /> Watch Video Testimonial
//                     </button>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Contact Information Card */}
//         <motion.div 
//           className="mb-16 p-10 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-md border border-white/10"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//         >
//           <h3 className="text-2xl font-semibold text-white mb-8 text-center">Get In Touch With Us</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {contactInfo.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-[#64ffda] hover:-translate-y-1"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className="text-3xl text-[#64ffda] mb-4">{item.icon}</div>
//                 <h4 className="text-lg font-medium text-white mb-2">{item.label}</h4>
//                 {item.href ? (
//                   <a 
//                     href={item.href} 
//                     className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors duration-300 text-sm"
//                   >
//                     {item.value}
//                   </a>
//                 ) : (
//                   <p className="text-[#a8b2d1] text-sm">{item.value}</p>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Video Modal */}
//         <AnimatePresence>
//           {activeVideo && (
//             <motion.div 
//               className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[1000] p-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setActiveVideo(null)}
//             >
//               <motion.div 
//                 className="bg-[#0a192f] rounded-2xl max-w-[900px] w-full relative overflow-hidden"
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button 
//                   className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white text-xl flex items-center justify-center z-10 transition-all duration-300 hover:bg-white/20"
//                   onClick={() => setActiveVideo(null)}
//                 >
//                   ✕
//                 </button>
                
//                 <div className="relative pt-[56.25%]">
//                   <iframe
//                     className="absolute inset-0 w-full h-full border-0"
//                     src={activeVideo.video}
//                     title={`Testimonial from ${activeVideo.name}`}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 </div>
                
//                 <div className="p-8 bg-white/5">
//                   <h3 className="text-2xl mb-2 text-white">{activeVideo.name}</h3>
//                   <p className="text-[#a8b2d1] mb-4">{activeVideo.role}</p>
//                   <div className="flex gap-4 flex-wrap">
//                     <span className="flex items-center gap-2 text-[#a8b2d1] text-sm">🏠 {activeVideo.purchase}</span>
//                     <span className="flex items-center gap-2 text-[#a8b2d1] text-sm">📅 {activeVideo.date}</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Google Reviews */}
//         <motion.div 
//           className="text-center p-12 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-md border border-white/10"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//         >
//           <h3 className="text-3xl mb-6 text-white">Rated 4.9/5 on Google</h3>
//           <div className="flex items-center justify-center gap-12 flex-wrap">
//             <div className="flex flex-col items-center gap-2">
//               <span className="text-5xl font-extrabold text-[#64ffda]">4.9</span>
//               <div className="flex gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} className="text-[#ffd700] text-xl" />
//                 ))}
//               </div>
//               <span className="text-[#a8b2d1] text-sm">Based on 350+ reviews</span>
//             </div>
//             <button className="px-10 py-4 bg-[#64ffda] rounded-xl text-[#0a192f] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(100,255,218,0.3)]">
//               View All Reviews
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;












// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaStar, FaQuoteLeft, FaPlay, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const Testimonials = () => {
//   const [activeVideo, setActiveVideo] = useState(null);

//   const testimonials = [
//     {
//       id: 1,
//       name: "John & Sarah Miller",
//       role: "Home Buyers",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//       rating: 5,
//       text: "EstatePro helped us find our dream home in just 3 weeks! Their team was professional, responsive, and truly understood our needs.",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Modern Villa, Beverly Hills",
//       date: "March 2024"
//     },
//     {
//       id: 2,
//       name: "Robert Chen",
//       role: "Real Estate Investor",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
//       rating: 5,
//       text: "As an investor, I appreciate their market insights and deal sourcing capabilities. They've helped grow my portfolio by 40% in one year.",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Commercial Complex, NYC",
//       date: "February 2024"
//     },
//     {
//       id: 3,
//       name: "Maria Garcia",
//       role: "Property Seller",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
//       rating: 5,
//       text: "Sold my property 15% above market value thanks to their marketing strategy. The entire process was smooth and stress-free.",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Townhouse, Miami",
//       date: "January 2024"
//     },
//     {
//       id: 4,
//       name: "David Wilson",
//       role: "First-time Buyer",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//       rating: 5,
//       text: "As a first-time buyer, I was overwhelmed. Their guidance made the process easy and educational. Highly recommend!",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Starter Home, Chicago",
//       date: "December 2023"
//     }
//   ];

//   const stats = [
//     { value: "4.9/5", label: "Average Rating" },
//     { value: "98%", label: "Client Satisfaction" },
//     { value: "1500+", label: "Happy Clients" },
//     { value: "24h", label: "Response Time" }
//   ];

//   const contactInfo = [
//     { icon: <FaPhoneAlt />, label: "Call Us", value: "+1 (888) 123-4567", href: "tel:+18881234567" },
//     { icon: <FaEnvelope />, label: "Email Us", value: "hello@estatepro.com", href: "mailto:hello@estatepro.com" },
//     { icon: <FaMapMarkerAlt />, label: "Visit Us", value: "123 Real Estate Ave, Beverly Hills, CA 90210", href: "#" },
//     { icon: <FaClock />, label: "Office Hours", value: "Mon-Fri: 9am - 6pm | Sat: 10am - 4pm", href: null }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100 }
//     }
//   };

//   return (
//     <section className="py-24 bg-gradient-to-b from-[#0a192f] to-[#112240] text-white">
//       <div className="max-w-[1400px] mx-auto px-8">
//         {/* Section Header */}
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#64ffda] to-[#3a86ff] bg-clip-text text-transparent">
//             Client Success Stories
//           </h2>
//           <p className="text-xl text-[#a8b2d1] max-w-2xl mx-auto">
//             See what our clients have to say about their experiences
//           </p>
//         </motion.div>

//         {/* Stats */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               className="text-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-[#64ffda] hover:-translate-y-1.5"
//               variants={itemVariants}
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="text-4xl font-extrabold text-[#64ffda] mb-2 leading-none">{stat.value}</div>
//               <div className="text-base text-[#a8b2d1] uppercase tracking-wider">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Testimonials Carousel */}
//         <div className="mb-16">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 5000 }}
//             breakpoints={{
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 }
//             }}
//             className="py-8"
//           >
//             {testimonials.map((testimonial) => (
//               <SwiperSlide key={testimonial.id}>
//                 <motion.div 
//                   className="relative bg-[#1a2a4a] rounded-2xl p-10 h-full border border-white/10 cursor-pointer transition-all duration-300 hover:bg-[#1e3055] hover:border-[#64ffda]"
//                   whileHover={{ y: -10, scale: 1.02 }}
//                   onClick={() => setActiveVideo(testimonial)}
//                 >
//                   <FaQuoteLeft className="absolute top-8 left-8 text-4xl text-[#64ffda] opacity-20" />
                  
//                   <div className="relative z-10">
//                     <p className="text-white leading-relaxed mb-6 text-lg italic">"{testimonial.text}"</p>
                    
//                     <div className="flex gap-1 mb-6">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <FaStar key={i} className="text-[#ffd700] text-lg" />
//                       ))}
//                     </div>
                    
//                     <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
//                       <img 
//                         src={testimonial.image} 
//                         alt={testimonial.name}
//                         className="w-16 h-16 rounded-full object-cover border-2 border-[#64ffda]"
//                       />
//                       <div>
//                         <h4 className="text-xl font-semibold text-white mb-1">{testimonial.name}</h4>
//                         <p className="text-[#a8b2d1] text-sm">{testimonial.role}</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex flex-col gap-2 mb-6">
//                       <span className="flex items-center gap-2 text-[#a8b2d1] text-sm">🏠 {testimonial.purchase}</span>
//                       <span className="flex items-center gap-2 text-[#a8b2d1] text-sm">📅 {testimonial.date}</span>
//                     </div>
                    
//                     <button className="w-full py-3 bg-transparent border-2 border-[#64ffda] rounded-xl text-[#64ffda] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#64ffda] hover:text-[#0a192f]">
//                       <FaPlay /> Watch Video Testimonial
//                     </button>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Contact Information Card - Distinct Background */}
//         <motion.div 
//           className="mb-16 p-10 bg-[#112240] rounded-2xl shadow-2xl border border-[#1e3a5f]"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//         >
//           <h3 className="text-2xl font-semibold text-white mb-8 text-center">Get In Touch With Us</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {contactInfo.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 className="flex flex-col items-center text-center p-6 bg-[#0a192f] rounded-xl border border-white/10 transition-all duration-300 hover:bg-[#0d1f3c] hover:border-[#64ffda] hover:-translate-y-1"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className="text-3xl text-[#64ffda] mb-4">{item.icon}</div>
//                 <h4 className="text-lg font-medium text-white mb-2">{item.label}</h4>
//                 {item.href ? (
//                   <a 
//                     href={item.href} 
//                     className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors duration-300 text-sm"
//                   >
//                     {item.value}
//                   </a>
//                 ) : (
//                   <p className="text-[#a8b2d1] text-sm">{item.value}</p>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Video Modal */}
//         <AnimatePresence>
//           {activeVideo && (
//             <motion.div 
//               className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[1000] p-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setActiveVideo(null)}
//             >
//               <motion.div 
//                 className="bg-[#0a192f] rounded-2xl max-w-[900px] w-full relative overflow-hidden"
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button 
//                   className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white text-xl flex items-center justify-center z-10 transition-all duration-300 hover:bg-white/20"
//                   onClick={() => setActiveVideo(null)}
//                 >
//                   ✕
//                 </button>
                
//                 <div className="relative pt-[56.25%]">
//                   <iframe
//                     className="absolute inset-0 w-full h-full border-0"
//                     src={activeVideo.video}
//                     title={`Testimonial from ${activeVideo.name}`}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 </div>
                
//                 <div className="p-8 bg-[#112240]">
//                   <h3 className="text-2xl mb-2 text-white">{activeVideo.name}</h3>
//                   <p className="text-[#a8b2d1] mb-4">{activeVideo.role}</p>
//                   <div className="flex gap-4 flex-wrap">
//                     <span className="flex items-center gap-2 text-[#a8b2d1] text-sm">🏠 {activeVideo.purchase}</span>
//                     <span className="flex items-center gap-2 text-[#a8b2d1] text-sm">📅 {activeVideo.date}</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Google Reviews */}
//         <motion.div 
//           className="text-center p-12 bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-2xl border border-white/10"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//         >
//           <h3 className="text-3xl mb-6 text-white">Rated 4.9/5 on Google</h3>
//           <div className="flex items-center justify-center gap-12 flex-wrap">
//             <div className="flex flex-col items-center gap-2">
//               <span className="text-5xl font-extrabold text-[#64ffda]">4.9</span>
//               <div className="flex gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} className="text-[#ffd700] text-xl" />
//                 ))}
//               </div>
//               <span className="text-[#a8b2d1] text-sm">Based on 350+ reviews</span>
//             </div>
//             <button className="px-10 py-4 bg-[#64ffda] rounded-xl text-[#0a192f] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(100,255,218,0.3)]">
//               View All Reviews
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;















// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaStar, FaQuoteLeft, FaPlay, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const Testimonials = () => {
//   const [activeVideo, setActiveVideo] = useState(null);

//   const testimonials = [
//     {
//       id: 1,
//       name: "John & Sarah Miller",
//       role: "Home Buyers",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
//       rating: 5,
//       text: "EstatePro helped us find our dream home in just 3 weeks! Their team was professional, responsive, and truly understood our needs.",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Modern Villa, Beverly Hills",
//       date: "March 2024"
//     },
//     {
//       id: 2,
//       name: "Robert Chen",
//       role: "Real Estate Investor",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
//       rating: 5,
//       text: "As an investor, I appreciate their market insights and deal sourcing capabilities. They've helped grow my portfolio by 40% in one year.",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Commercial Complex, NYC",
//       date: "February 2024"
//     },
//     {
//       id: 3,
//       name: "Maria Garcia",
//       role: "Property Seller",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
//       rating: 5,
//       text: "Sold my property 15% above market value thanks to their marketing strategy. The entire process was smooth and stress-free.",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Townhouse, Miami",
//       date: "January 2024"
//     },
//     {
//       id: 4,
//       name: "David Wilson",
//       role: "First-time Buyer",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//       rating: 5,
//       text: "As a first-time buyer, I was overwhelmed. Their guidance made the process easy and educational. Highly recommend!",
//       video: "https://player.vimeo.com/video/76979871",
//       purchase: "Starter Home, Chicago",
//       date: "December 2023"
//     }
//   ];

//   const stats = [
//     { value: "4.9/5", label: "Average Rating" },
//     { value: "98%", label: "Client Satisfaction" },
//     { value: "1500+", label: "Happy Clients" },
//     { value: "24h", label: "Response Time" }
//   ];

//   const contactInfo = [
//     { icon: <FaPhoneAlt />, label: "Call Us", value: "+1 (888) 123-4567", href: "tel:+18881234567" },
//     { icon: <FaEnvelope />, label: "Email Us", value: "hello@estatepro.com", href: "mailto:hello@estatepro.com" },
//     { icon: <FaMapMarkerAlt />, label: "Visit Us", value: "123 Real Estate Ave, Beverly Hills, CA 90210", href: "#" },
//     { icon: <FaClock />, label: "Office Hours", value: "Mon-Fri: 9am - 6pm | Sat: 10am - 4pm", href: null }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100 }
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
//           <h2 className="text-5xl font-extrabold mb-4 text-[#1e293b]">
//             Client Success Stories
//           </h2>
//           <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
//             See what our clients have to say about their experiences
//           </p>
//         </motion.div>

//         {/* Stats */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               className="text-center p-8 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-transparent cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:border-[#3a86ff] hover:-translate-y-1.5"
//               variants={itemVariants}
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="text-4xl font-extrabold text-[#3a86ff] mb-2 leading-none">{stat.value}</div>
//               <div className="text-base text-[#64748b] uppercase tracking-wider">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Testimonials Carousel */}
//         <div className="mb-16">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 5000 }}
//             breakpoints={{
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 }
//             }}
//             className="py-8"
//           >
//             {testimonials.map((testimonial) => (
//               <SwiperSlide key={testimonial.id}>
//                 <motion.div 
//                   className="relative bg-white rounded-2xl p-10 h-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-transparent cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:border-[#3a86ff]"
//                   whileHover={{ y: -10, scale: 1.02 }}
//                   onClick={() => setActiveVideo(testimonial)}
//                 >
//                   <FaQuoteLeft className="absolute top-8 left-8 text-4xl text-[#3a86ff] opacity-20" />
                  
//                   <div className="relative z-10">
//                     <p className="text-[#1e293b] leading-relaxed mb-6 text-lg italic">"{testimonial.text}"</p>
                    
//                     <div className="flex gap-1 mb-6">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <FaStar key={i} className="text-[#ffd700] text-lg" />
//                       ))}
//                     </div>
                    
//                     <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#e2e8f0]">
//                       <img 
//                         src={testimonial.image} 
//                         alt={testimonial.name}
//                         className="w-16 h-16 rounded-full object-cover border-2 border-[#3a86ff]"
//                       />
//                       <div>
//                         <h4 className="text-xl font-semibold text-[#1e293b] mb-1">{testimonial.name}</h4>
//                         <p className="text-[#64748b] text-sm">{testimonial.role}</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex flex-col gap-2 mb-6">
//                       <span className="flex items-center gap-2 text-[#64748b] text-sm">🏠 {testimonial.purchase}</span>
//                       <span className="flex items-center gap-2 text-[#64748b] text-sm">📅 {testimonial.date}</span>
//                     </div>
                    
//                     <button className="w-full py-3 bg-transparent border-2 border-[#3a86ff] rounded-xl text-[#3a86ff] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#3a86ff] hover:text-white">
//                       <FaPlay /> Watch Video Testimonial
//                     </button>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Contact Information Card */}
//         <motion.div 
//           className="mb-16 p-10 bg-[#f8fafc] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#e2e8f0]"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//         >
//           <h3 className="text-2xl font-semibold text-[#1e293b] mb-8 text-center">Get In Touch With Us</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {contactInfo.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-[#e2e8f0] transition-all duration-300 hover:shadow-md hover:border-[#3a86ff] hover:-translate-y-1"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className="text-3xl text-[#3a86ff] mb-4">{item.icon}</div>
//                 <h4 className="text-lg font-medium text-[#1e293b] mb-2">{item.label}</h4>
//                 {item.href ? (
//                   <a 
//                     href={item.href} 
//                     className="text-[#64748b] hover:text-[#3a86ff] transition-colors duration-300 text-sm"
//                   >
//                     {item.value}
//                   </a>
//                 ) : (
//                   <p className="text-[#64748b] text-sm">{item.value}</p>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Video Modal */}
//         <AnimatePresence>
//           {activeVideo && (
//             <motion.div 
//               className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[1000] p-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setActiveVideo(null)}
//             >
//               <motion.div 
//                 className="bg-white rounded-2xl max-w-[900px] w-full relative overflow-hidden"
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button 
//                   className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-[#1e293b] text-xl flex items-center justify-center z-10 shadow-md transition-all duration-300 hover:bg-gray-100"
//                   onClick={() => setActiveVideo(null)}
//                 >
//                   ✕
//                 </button>
                
//                 <div className="relative pt-[56.25%]">
//                   <iframe
//                     className="absolute inset-0 w-full h-full border-0"
//                     src={activeVideo.video}
//                     title={`Testimonial from ${activeVideo.name}`}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 </div>
                
//                 <div className="p-8 bg-gray-50">
//                   <h3 className="text-2xl mb-2 text-[#1e293b]">{activeVideo.name}</h3>
//                   <p className="text-[#64748b] mb-4">{activeVideo.role}</p>
//                   <div className="flex gap-4 flex-wrap">
//                     <span className="flex items-center gap-2 text-[#64748b] text-sm">🏠 {activeVideo.purchase}</span>
//                     <span className="flex items-center gap-2 text-[#64748b] text-sm">📅 {activeVideo.date}</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Google Reviews */}
//         <motion.div 
//           className="text-center p-12 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#e2e8f0]"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//         >
//           <h3 className="text-3xl mb-6 text-[#1e293b]">Rated 4.9/5 on Google</h3>
//           <div className="flex items-center justify-center gap-12 flex-wrap">
//             <div className="flex flex-col items-center gap-2">
//               <span className="text-5xl font-extrabold text-[#3a86ff]">4.9</span>
//               <div className="flex gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} className="text-[#ffd700] text-xl" />
//                 ))}
//               </div>
//               <span className="text-[#64748b] text-sm">Based on 350+ reviews</span>
//             </div>
//             <button className="px-10 py-4 bg-[#3a86ff] rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(58,134,255,0.3)]">
//               View All Reviews
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



















import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaPlay, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "John & Sarah Miller",
      role: "Home Buyers",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      text: "EstatePro helped us find our dream home in just 3 weeks! Their team was professional, responsive, and truly understood our needs.",
      video: "https://player.vimeo.com/video/76979871",
      purchase: "Modern Villa, Beverly Hills",
      date: "March 2024"
    },
    {
      id: 2,
      name: "Robert Chen",
      role: "Real Estate Investor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5,
      text: "As an investor, I appreciate their market insights and deal sourcing capabilities. They've helped grow my portfolio by 40% in one year.",
      video: "https://player.vimeo.com/video/76979871",
      purchase: "Commercial Complex, NYC",
      date: "February 2024"
    },
    {
      id: 3,
      name: "Maria Garcia",
      role: "Property Seller",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
      rating: 5,
      text: "Sold my property 15% above market value thanks to their marketing strategy. The entire process was smooth and stress-free.",
      video: "https://player.vimeo.com/video/76979871",
      purchase: "Townhouse, Miami",
      date: "January 2024"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "First-time Buyer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      rating: 5,
      text: "As a first-time buyer, I was overwhelmed. Their guidance made the process easy and educational. Highly recommend!",
      video: "https://player.vimeo.com/video/76979871",
      purchase: "Starter Home, Chicago",
      date: "December 2023"
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Average Rating" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "1500+", label: "Happy Clients" },
    { value: "24h", label: "Response Time" }
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt />, label: "Call Us", value: "+1 (888) 123-4567", href: "tel:+18881234567" },
    { icon: <FaEnvelope />, label: "Email Us", value: "hello@estatepro.com", href: "mailto:hello@estatepro.com" },
    { icon: <FaMapMarkerAlt />, label: "Visit Us", value: "123 Real Estate Ave, Beverly Hills, CA 90210", href: "#" },
    { icon: <FaClock />, label: "Office Hours", value: "Mon-Fri: 9am - 6pm | Sat: 10am - 4pm", href: null }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="py-24 bg-white overflow-visible">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold mb-4 text-[#1e293b]">
            Client Success Stories
          </h2>
          <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
            See what our clients have to say about their experiences
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-transparent cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:border-[#3a86ff] hover:-translate-y-1.5"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-extrabold text-[#3a86ff] mb-2 leading-none">{stat.value}</div>
              <div className="text-base text-[#64748b] uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        {/* <div className="mb-16 overflow-visible">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="py-8 overflow-visible"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <motion.div 
                  className="relative bg-white rounded-2xl p-10 h-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-transparent cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:border-[#3a86ff]"
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setActiveVideo(testimonial)}
                >
                  <FaQuoteLeft className="absolute top-8 left-8 text-4xl text-[#3a86ff] opacity-20" />
                  
                  <div className="relative z-10">
                    <p className="text-[#1e293b] leading-relaxed mb-6 text-lg italic">"{testimonial.text}"</p>
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-[#ffd700] text-lg" />
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#e2e8f0]">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#3a86ff]"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-[#1e293b] mb-1">{testimonial.name}</h4>
                        <p className="text-[#64748b] text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 mb-6">
                      <span className="flex items-center gap-2 text-[#64748b] text-sm">🏠 {testimonial.purchase}</span>
                      <span className="flex items-center gap-2 text-[#64748b] text-sm">📅 {testimonial.date}</span>
                    </div>
                    
                    <button className="w-full py-3 bg-transparent border-2 border-[#3a86ff] rounded-xl text-[#3a86ff] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#3a86ff] hover:text-white">
                      <FaPlay /> Watch Video Testimonial
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}

        {/* Testimonials Carousel */}
<div className="mb-16 overflow-visible">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000 }}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }}
    className="py-8 overflow-visible !h-auto"
  >
    {testimonials.map((testimonial) => (
      <SwiperSlide key={testimonial.id} className="!h-auto">
        <motion.div 
          className="relative bg-white rounded-2xl p-10 h-full min-h-[500px] flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-transparent cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:border-[#3a86ff]"
          whileHover={{ y: -10, scale: 1.02 }}
          onClick={() => setActiveVideo(testimonial)}
        >
          <FaQuoteLeft className="absolute top-8 left-8 text-4xl text-[#3a86ff] opacity-20" />
          
          <div className="relative z-10 flex flex-col flex-1">
            <p className="text-[#1e293b] leading-relaxed mb-6 text-lg italic">"{testimonial.text}"</p>
            
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-[#ffd700] text-lg" />
              ))}
            </div>
            
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#e2e8f0]">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#3a86ff]"
              />
              <div>
                <h4 className="text-xl font-semibold text-[#1e293b] mb-1">{testimonial.name}</h4>
                <p className="text-[#64748b] text-sm">{testimonial.role}</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mb-6 mt-auto">
              <span className="flex items-center gap-2 text-[#64748b] text-sm">🏠 {testimonial.purchase}</span>
              <span className="flex items-center gap-2 text-[#64748b] text-sm">📅 {testimonial.date}</span>
            </div>
            
            <button className="w-full py-3 bg-transparent border-2 border-[#3a86ff] rounded-xl text-[#3a86ff] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#3a86ff] hover:text-white">
              <FaPlay /> Watch Video Testimonial
            </button>
          </div>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

        {/* Contact Information Card */}
        <motion.div 
          className="mb-16 p-10 bg-[#f8fafc] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#e2e8f0]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-[#1e293b] mb-8 text-center">Get In Touch With Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-[#e2e8f0] transition-all duration-300 hover:shadow-md hover:border-[#3a86ff] hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-3xl text-[#3a86ff] mb-4">{item.icon}</div>
                <h4 className="text-lg font-medium text-[#1e293b] mb-2">{item.label}</h4>
                {item.href ? (
                  <a 
                    href={item.href} 
                    className="text-[#64748b] hover:text-[#3a86ff] transition-colors duration-300 text-sm"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[#64748b] text-sm">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div 
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[1000] p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
            >
              <motion.div 
                className="bg-white rounded-2xl max-w-[900px] w-full relative overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-[#1e293b] text-xl flex items-center justify-center z-10 shadow-md transition-all duration-300 hover:bg-gray-100"
                  onClick={() => setActiveVideo(null)}
                >
                  ✕
                </button>
                
                <div className="relative pt-[56.25%]">
                  <iframe
                    className="absolute inset-0 w-full h-full border-0"
                    src={activeVideo.video}
                    title={`Testimonial from ${activeVideo.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                <div className="p-8 bg-gray-50">
                  <h3 className="text-2xl mb-2 text-[#1e293b]">{activeVideo.name}</h3>
                  <p className="text-[#64748b] mb-4">{activeVideo.role}</p>
                  <div className="flex gap-4 flex-wrap">
                    <span className="flex items-center gap-2 text-[#64748b] text-sm">🏠 {activeVideo.purchase}</span>
                    <span className="flex items-center gap-2 text-[#64748b] text-sm">📅 {activeVideo.date}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Google Reviews */}
        <motion.div 
          className="text-center p-12 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#e2e8f0]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl mb-6 text-[#1e293b]">Rated 4.9/5 on Google</h3>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl font-extrabold text-[#3a86ff]">4.9</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#ffd700] text-xl" />
                ))}
              </div>
              <span className="text-[#64748b] text-sm">Based on 350+ reviews</span>
            </div>
            <button className="px-10 py-4 bg-[#3a86ff] rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(58,134,255,0.3)]">
              View All Reviews
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;