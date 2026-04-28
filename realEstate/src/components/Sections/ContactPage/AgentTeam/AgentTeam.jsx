// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';
// import './AgentTeam.css';

// const agents = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     role: 'Senior Buyer Agent',
//     image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4c2',
//     email: 'sarah.j@realestate.com',
//     phone: '+1 (555) 123‑4567',
//     specialties: 'Residential, First‑time buyers'
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     role: 'Investment Specialist',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
//     email: 'michael.c@realestate.com',
//     phone: '+1 (555) 987‑6543',
//     specialties: 'Commercial, Multi‑family'
//   },
//   {
//     id: 3,
//     name: 'Emily Rodriguez',
//     role: 'Listing Agent',
//     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
//     email: 'emily.r@realestate.com',
//     phone: '+1 (555) 456‑7890',
//     specialties: 'Luxury homes, Waterfront'
//   }
// ];

// const AgentTeam = () => {
//   return (
//     <section className="agent-team">
//       <div className="container">
//         <motion.div
//           className="section-header"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="section-title">Directly Contact Our Specialists</h2>
//           <p className="section-subtitle">Get in touch with the right expert right away</p>
//         </motion.div>

//         <motion.div
//           className="agents-grid"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { transition: { staggerChildren: 0.1 } }
//           }}
//         >
//           {agents.map(agent => (
//             <motion.div
//               key={agent.id}
//               className="agent-card"
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
//               }}
//             >
//               <div className="agent-image">
//                 <img src={agent.image} alt={agent.name} />
//               </div>
//               <h3 className="agent-name">{agent.name}</h3>
//               <p className="agent-role">{agent.role}</p>
//               <p className="agent-specialty">{agent.specialties}</p>
//               <div className="agent-contact">
//                 <a href={`mailto:${agent.email}`}><FaEnvelope /> {agent.email}</a>
//                 <a href={`tel:${agent.phone}`}><FaPhone /> {agent.phone}</a>
//               </div>
//               <button className="chat-now-btn"><FaComments /> Chat now</button>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AgentTeam;













// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';

// const agents = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     role: 'Senior Buyer Agent',
//     image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4c2',
//     email: 'sarah.j@realestate.com',
//     phone: '+1 (555) 123‑4567',
//     specialties: 'Residential, First‑time buyers'
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     role: 'Investment Specialist',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
//     email: 'michael.c@realestate.com',
//     phone: '+1 (555) 987‑6543',
//     specialties: 'Commercial, Multi‑family'
//   },
//   {
//     id: 3,
//     name: 'Emily Rodriguez',
//     role: 'Listing Agent',
//     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
//     email: 'emily.r@realestate.com',
//     phone: '+1 (555) 456‑7890',
//     specialties: 'Luxury homes, Waterfront'
//   }
// ];

// const AgentTeam = () => {
//   return (
//     <section className="py-20 md:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-5 md:px-6">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Directly Contact Our Specialists
//           </h2>
//           <p className="text-lg text-gray-500 max-w-2xl mx-auto">
//             Get in touch with the right expert right away
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { transition: { staggerChildren: 0.1 } }
//           }}
//         >
//           {agents.map(agent => (
//             <motion.div
//               key={agent.id}
//               className="relative bg-white rounded-3xl p-8 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-gray-200 transition-all duration-300 overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_20px_30px_-10px_rgba(37,99,235,0.15)] hover:border-transparent"
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
//               }}
//             >
//               {/* Top border gradient effect */}
//               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

//               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-5 border-4 border-gray-100 group-hover:border-blue-200 transition-colors duration-300">
//                 <img src={agent.image} alt={agent.name} className="w-full h-full object-cover" />
//               </div>
              
//               <h3 className="text-2xl font-bold text-gray-900 mb-1">{agent.name}</h3>
//               <p className="text-base text-blue-600 font-semibold mb-3">{agent.role}</p>
//               <p className="text-gray-500 text-sm mb-6">{agent.specialties}</p>
              
//               <div className="flex flex-col gap-3 mb-6">
//                 <a 
//                   href={`mailto:${agent.email}`}
//                   className="flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-50 rounded-xl text-gray-700 text-sm no-underline transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
//                 >
//                   <FaEnvelope /> {agent.email}
//                 </a>
//                 <a 
//                   href={`tel:${agent.phone}`}
//                   className="flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-50 rounded-xl text-gray-700 text-sm no-underline transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
//                 >
//                   <FaPhone /> {agent.phone}
//                 </a>
//               </div>
              
//               <button className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:bg-blue-700 active:scale-95">
//                 <FaComments /> Chat now
//               </button>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AgentTeam;





















// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const agents = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     role: 'Senior Buyer Agent',
//     image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4c2',
//     email: 'sarah.j@realestate.com',
//     phone: '+1 (555) 123‑4567',
//     specialties: 'Residential, First‑time buyers'
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     role: 'Investment Specialist',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
//     email: 'michael.c@realestate.com',
//     phone: '+1 (555) 987‑6543',
//     specialties: 'Commercial, Multi‑family'
//   },
//   {
//     id: 3,
//     name: 'Emily Rodriguez',
//     role: 'Listing Agent',
//     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
//     email: 'emily.r@realestate.com',
//     phone: '+1 (555) 456‑7890',
//     specialties: 'Luxury homes, Waterfront'
//   },
//   {
//     id: 4,
//     name: 'David Kim',
//     role: 'Commercial Specialist',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
//     email: 'david.k@realestate.com',
//     phone: '+1 (555) 234‑5678',
//     specialties: 'Retail, Office spaces'
//   },
//   {
//     id: 5,
//     name: 'Lisa Thompson',
//     role: 'Rental Agent',
//     image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
//     email: 'lisa.t@realestate.com',
//     phone: '+1 (555) 876‑5432',
//     specialties: 'Apartments, Condos'
//   },
//   {
//     id: 6,
//     name: 'James Wilson',
//     role: 'Luxury Specialist',
//     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
//     email: 'james.w@realestate.com',
//     phone: '+1 (555) 345‑6789',
//     specialties: 'Estates, Villas'
//   }
// ];

// const AgentTeam = () => {
//   return (
//     <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 to-gray-100">
//       <div className="max-w-7xl mx-auto px-5 md:px-6">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
//             Our Team
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
//             Directly Contact Our Specialists
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Get in touch with the right expert right away
//           </p>
//         </motion.div>

//         {/* Swiper Carousel */}
//         <div className="relative">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 4000, disableOnInteraction: false }}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 }
//             }}
//             className="pb-12"
//           >
//             {agents.map(agent => (
//               <SwiperSlide key={agent.id}>
//                 <motion.div
//                   className="relative bg-white rounded-3xl p-8 text-center shadow-lg border border-gray-200 transition-all duration-300 overflow-hidden group hover:shadow-xl hover:border-blue-300 h-full flex flex-col"
//                   whileHover={{ y: -5 }}
//                 >
//                   {/* Top accent bar */}
//                   <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />

//                   <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-5 border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300">
//                     <img src={agent.image} alt={agent.name} className="w-full h-full object-cover" />
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-gray-900 mb-1">{agent.name}</h3>
//                   <p className="text-sm text-blue-600 font-semibold mb-3">{agent.role}</p>
//                   <p className="text-gray-500 text-xs mb-6">{agent.specialties}</p>
                  
//                   <div className="flex flex-col gap-2 mb-6 mt-auto">
//                     <a 
//                       href={`mailto:${agent.email}`}
//                       className="flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 rounded-lg text-gray-700 text-xs no-underline transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 border border-gray-200"
//                     >
//                       <FaEnvelope className="text-sm" /> {agent.email}
//                     </a>
//                     <a 
//                       href={`tel:${agent.phone}`}
//                       className="flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 rounded-lg text-gray-700 text-xs no-underline transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 border border-gray-200"
//                     >
//                       <FaPhone className="text-sm" /> {agent.phone}
//                     </a>
//                   </div>
                  
//                   <button className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 active:scale-95 shadow-md text-sm">
//                     <FaComments /> Chat now
//                   </button>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom navigation arrow styles (optional global override) */}
//           <style jsx global>{`
//             .swiper-button-next,
//             .swiper-button-prev {
//               color: #2563eb !important;
//               background: white;
//               width: 44px !important;
//               height: 44px !important;
//               border-radius: 50%;
//               box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//               transition: all 0.3s;
//             }
//             .swiper-button-next:hover,
//             .swiper-button-prev:hover {
//               background: #2563eb;
//               color: white !important;
//               transform: scale(1.05);
//             }
//             .swiper-button-next::after,
//             .swiper-button-prev::after {
//               font-size: 20px !important;
//               font-weight: bold;
//             }
//             .swiper-pagination-bullet {
//               background: #cbd5e1 !important;
//               opacity: 1 !important;
//             }
//             .swiper-pagination-bullet-active {
//               background: #2563eb !important;
//             }
//           `}</style>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AgentTeam;
















// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaEnvelope, FaPhone, FaComments, FaStar, FaAward } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const agents = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     role: 'Senior Buyer Agent',
//     image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4c2',
//     email: 'sarah.j@realestate.com',
//     phone: '+1 (555) 123‑4567',
//     specialties: ['Residential', 'First‑time buyers'],
//     rating: 4.9,
//     deals: 120,
//     featured: true
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     role: 'Investment Specialist',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
//     email: 'michael.c@realestate.com',
//     phone: '+1 (555) 987‑6543',
//     specialties: ['Commercial', 'Multi‑family'],
//     rating: 4.8,
//     deals: 95,
//     featured: true
//   },
//   {
//     id: 3,
//     name: 'Emily Rodriguez',
//     role: 'Listing Agent',
//     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
//     email: 'emily.r@realestate.com',
//     phone: '+1 (555) 456‑7890',
//     specialties: ['Luxury homes', 'Waterfront'],
//     rating: 5.0,
//     deals: 150,
//     featured: true
//   },
//   {
//     id: 4,
//     name: 'David Kim',
//     role: 'Commercial Specialist',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
//     email: 'david.k@realestate.com',
//     phone: '+1 (555) 234‑5678',
//     specialties: ['Retail', 'Office spaces'],
//     rating: 4.7,
//     deals: 78,
//     featured: false
//   },
//   {
//     id: 5,
//     name: 'Lisa Thompson',
//     role: 'Rental Agent',
//     image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
//     email: 'lisa.t@realestate.com',
//     phone: '+1 (555) 876‑5432',
//     specialties: ['Apartments', 'Condos'],
//     rating: 4.9,
//     deals: 200,
//     featured: false
//   },
//   {
//     id: 6,
//     name: 'James Wilson',
//     role: 'Luxury Specialist',
//     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
//     email: 'james.w@realestate.com',
//     phone: '+1 (555) 345‑6789',
//     specialties: ['Estates', 'Villas'],
//     rating: 5.0,
//     deals: 65,
//     featured: true
//   }
// ];

// const AgentTeam = () => {
//   return (
//     <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-gray-100">
//       <div className="max-w-7xl mx-auto px-5 md:px-6">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-blue-200">
//             <FaAward className="text-blue-500" />
//             Top Rated Agents
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
//             Directly Contact Our Specialists
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Get in touch with the right expert right away
//           </p>
//         </motion.div>

//         <div className="relative">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 4000, disableOnInteraction: false }}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 }
//             }}
//             className="pb-12"
//           >
//             {agents.map(agent => (
//               <SwiperSlide key={agent.id}>
//                 <motion.div
//                   className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full flex flex-col"
//                   whileHover={{ y: -5 }}
//                 >
//                   {/* Featured badge */}
//                   {agent.featured && (
//                     <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
//                       <FaStar className="text-white text-xs" /> Top Agent
//                     </div>
//                   )}

//                   {/* Image Section */}
//                   <div className="relative h-56 w-full overflow-hidden">
//                     <img 
//                       src={agent.image} 
//                       alt={agent.name} 
//                       className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
//                   </div>

//                   {/* Content Section */}
//                   <div className="p-6 flex-1 flex flex-col">
//                     <div className="flex items-start justify-between mb-2">
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
//                         <p className="text-blue-600 font-semibold text-sm">{agent.role}</p>
//                       </div>
//                       <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-200">
//                         <FaStar className="text-yellow-500 text-xs" />
//                         <span className="text-sm font-bold text-gray-700">{agent.rating}</span>
//                       </div>
//                     </div>

//                     {/* Specialties */}
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {agent.specialties.map((spec, idx) => (
//                         <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200">
//                           {spec}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Stats */}
//                     <div className="flex items-center gap-4 mb-4 text-sm">
//                       <div className="flex items-center gap-1 text-gray-600">
//                         <FaAward className="text-blue-500" />
//                         <span className="font-semibold">{agent.deals}</span> deals
//                       </div>
//                     </div>

//                     {/* Contact Buttons */}
//                     <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100">
//                       <a 
//                         href={`mailto:${agent.email}`}
//                         className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 hover:bg-blue-50 rounded-lg text-gray-700 hover:text-blue-700 text-xs font-medium transition-colors duration-200 border border-gray-200 hover:border-blue-200"
//                         title="Email"
//                       >
//                         <FaEnvelope /> Email
//                       </a>
//                       <a 
//                         href={`tel:${agent.phone}`}
//                         className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 hover:bg-blue-50 rounded-lg text-gray-700 hover:text-blue-700 text-xs font-medium transition-colors duration-200 border border-gray-200 hover:border-blue-200"
//                         title="Call"
//                       >
//                         <FaPhone /> Call
//                       </a>
//                       <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg text-xs font-semibold transition-all duration-200 shadow-sm">
//                         <FaComments /> Chat
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Swiper styles */}
//           <style jsx global>{`
//             .swiper-button-next,
//             .swiper-button-prev {
//               color: #2563eb !important;
//               background: white;
//               width: 44px !important;
//               height: 44px !important;
//               border-radius: 50%;
//               box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//               transition: all 0.3s;
//             }
//             .swiper-button-next:hover,
//             .swiper-button-prev:hover {
//               background: #2563eb;
//               color: white !important;
//               transform: scale(1.05);
//             }
//             .swiper-button-next::after,
//             .swiper-button-prev::after {
//               font-size: 20px !important;
//               font-weight: bold;
//             }
//             .swiper-pagination-bullet {
//               background: #cbd5e1 !important;
//               opacity: 1 !important;
//             }
//             .swiper-pagination-bullet-active {
//               background: #2563eb !important;
//             }
//           `}</style>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AgentTeam;














// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaEnvelope, FaPhone, FaComments, FaStar, FaAward } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const agents = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     role: 'Senior Buyer Agent',
//     image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4c2',
//     email: 'sarah.j@realestate.com',
//     phone: '+1 (555) 123‑4567',
//     specialties: ['Residential', 'First‑time buyers'],
//     rating: 4.9,
//     deals: 120,
//     featured: true
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     role: 'Investment Specialist',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
//     email: 'michael.c@realestate.com',
//     phone: '+1 (555) 987‑6543',
//     specialties: ['Commercial', 'Multi‑family'],
//     rating: 4.8,
//     deals: 95,
//     featured: true
//   },
//   {
//     id: 3,
//     name: 'Emily Rodriguez',
//     role: 'Listing Agent',
//     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
//     email: 'emily.r@realestate.com',
//     phone: '+1 (555) 456‑7890',
//     specialties: ['Luxury homes', 'Waterfront'],
//     rating: 5.0,
//     deals: 150,
//     featured: true
//   },
//   {
//     id: 4,
//     name: 'David Kim',
//     role: 'Commercial Specialist',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
//     email: 'david.k@realestate.com',
//     phone: '+1 (555) 234‑5678',
//     specialties: ['Retail', 'Office spaces'],
//     rating: 4.7,
//     deals: 78,
//     featured: false
//   },
//   {
//     id: 5,
//     name: 'Lisa Thompson',
//     role: 'Rental Agent',
//     image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
//     email: 'lisa.t@realestate.com',
//     phone: '+1 (555) 876‑5432',
//     specialties: ['Apartments', 'Condos'],
//     rating: 4.9,
//     deals: 200,
//     featured: false
//   },
//   {
//     id: 6,
//     name: 'James Wilson',
//     role: 'Luxury Specialist',
//     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
//     email: 'james.w@realestate.com',
//     phone: '+1 (555) 345‑6789',
//     specialties: ['Estates', 'Villas'],
//     rating: 5.0,
//     deals: 65,
//     featured: true
//   }
// ];

// const AgentTeam = () => {
//   return (
//     <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-gray-100">
//       <div className="max-w-7xl mx-auto px-5 md:px-6">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-blue-200">
//             <FaAward className="text-blue-500" />
//             Top Rated Agents
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
//             Directly Contact Our Specialists
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Get in touch with the right expert right away
//           </p>
//         </motion.div>

//         {/* Carousel Container */}
//         <div className="relative">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation={{
//               nextEl: '.swiper-button-next',
//               prevEl: '.swiper-button-prev',
//             }}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 4000, disableOnInteraction: false }}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 }
//             }}
//             className="pb-12"
//           >
//             {agents.map(agent => (
//               <SwiperSlide key={agent.id}>
//                 <motion.div
//                   className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full flex flex-col"
//                   whileHover={{ y: -5 }}
//                 >
//                   {/* Featured badge */}
//                   {agent.featured && (
//                     <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
//                       <FaStar className="text-white text-xs" /> Top Agent
//                     </div>
//                   )}

//                   {/* Image Section */}
//                   <div className="relative h-56 w-full overflow-hidden">
//                     <img 
//                       src={agent.image} 
//                       alt={agent.name} 
//                       className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
//                   </div>

//                   {/* Content Section */}
//                   <div className="p-6 flex-1 flex flex-col">
//                     <div className="flex items-start justify-between mb-2">
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
//                         <p className="text-blue-600 font-semibold text-sm">{agent.role}</p>
//                       </div>
//                       <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-200">
//                         <FaStar className="text-yellow-500 text-xs" />
//                         <span className="text-sm font-bold text-gray-700">{agent.rating}</span>
//                       </div>
//                     </div>

//                     {/* Specialties */}
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {agent.specialties.map((spec, idx) => (
//                         <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200">
//                           {spec}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Stats */}
//                     <div className="flex items-center gap-4 mb-4 text-sm">
//                       <div className="flex items-center gap-1 text-gray-600">
//                         <FaAward className="text-blue-500" />
//                         <span className="font-semibold">{agent.deals}</span> deals
//                       </div>
//                     </div>

//                     {/* Contact Buttons */}
//                     <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100">
//                       <a 
//                         href={`mailto:${agent.email}`}
//                         className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 hover:bg-blue-50 rounded-lg text-gray-700 hover:text-blue-700 text-xs font-medium transition-colors duration-200 border border-gray-200 hover:border-blue-200"
//                         title="Email"
//                       >
//                         <FaEnvelope /> Email
//                       </a>
//                       <a 
//                         href={`tel:${agent.phone}`}
//                         className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 hover:bg-blue-50 rounded-lg text-gray-700 hover:text-blue-700 text-xs font-medium transition-colors duration-200 border border-gray-200 hover:border-blue-200"
//                         title="Call"
//                       >
//                         <FaPhone /> Call
//                       </a>
//                       <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg text-xs font-semibold transition-all duration-200 shadow-sm">
//                         <FaComments /> Chat
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Buttons */}
//           <div className="swiper-button-prev !w-12 !h-12 !bg-white !rounded-full !shadow-lg !border !border-gray-200 after:!text-blue-600 after:!text-xl hover:!bg-blue-600 hover:after:!text-white transition-all duration-300 !left-2 md:!left-0" />
//           <div className="swiper-button-next !w-12 !h-12 !bg-white !rounded-full !shadow-lg !border !border-gray-200 after:!text-blue-600 after:!text-xl hover:!bg-blue-600 hover:after:!text-white transition-all duration-300 !right-2 md:!right-0" />

//           {/* Global Style Overrides for Swiper */}
//           <style jsx global>{`
//             .swiper-button-prev,
//             .swiper-button-next {
//               color: #2563eb !important;
//               background: white;
//               width: 48px !important;
//               height: 48px !important;
//               border-radius: 50%;
//               box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//               transition: all 0.3s ease;
//               border: 1px solid #e2e8f0;
//             }
//             .swiper-button-prev:hover,
//             .swiper-button-next:hover {
//               background: #2563eb !important;
//               color: white !important;
//               border-color: #2563eb !important;
//             }
//             .swiper-button-prev::after,
//             .swiper-button-next::after {
//               font-size: 20px !important;
//               font-weight: bold;
//             }
//             .swiper-button-prev:hover::after,
//             .swiper-button-next:hover::after {
//               color: white !important;
//             }
//             .swiper-pagination-bullet {
//               background: #cbd5e1 !important;
//               opacity: 1 !important;
//               width: 10px;
//               height: 10px;
//             }
//             .swiper-pagination-bullet-active {
//               background: #2563eb !important;
//             }
//             @media (max-width: 640px) {
//               .swiper-button-prev {
//                 left: 8px !important;
//               }
//               .swiper-button-next {
//                 right: 8px !important;
//               }
//             }
//           `}</style>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AgentTeam;











import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaComments, FaStar, FaAward, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const agents = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Buyer Agent',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4c2',
    email: 'sarah.j@realestate.com',
    phone: '+1 (555) 123‑4567',
    specialties: ['Residential', 'First‑time buyers'],
    rating: 4.9,
    deals: 120,
    featured: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Investment Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    email: 'michael.c@realestate.com',
    phone: '+1 (555) 987‑6543',
    specialties: ['Commercial', 'Multi‑family'],
    rating: 4.8,
    deals: 95,
    featured: true
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Listing Agent',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    email: 'emily.r@realestate.com',
    phone: '+1 (555) 456‑7890',
    specialties: ['Luxury homes', 'Waterfront'],
    rating: 5.0,
    deals: 150,
    featured: true
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Commercial Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    email: 'david.k@realestate.com',
    phone: '+1 (555) 234‑5678',
    specialties: ['Retail', 'Office spaces'],
    rating: 4.7,
    deals: 78,
    featured: false
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Rental Agent',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    email: 'lisa.t@realestate.com',
    phone: '+1 (555) 876‑5432',
    specialties: ['Apartments', 'Condos'],
    rating: 4.9,
    deals: 200,
    featured: false
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Luxury Specialist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    email: 'james.w@realestate.com',
    phone: '+1 (555) 345‑6789',
    specialties: ['Estates', 'Villas'],
    rating: 5.0,
    deals: 65,
    featured: true
  }
];

const AgentTeam = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-blue-200">
            <FaAward className="text-blue-500" />
            Top Rated Agents
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Directly Contact Our Specialists
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with the right expert right away
          </p>
        </motion.div>

        {/* Carousel Container with Custom Navigation */}
        <div className="relative">
          {/* Left Navigation Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 -ml-5 md:-ml-6"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 -mr-5 md:-mr-6"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-xl" />
          </button>

          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {agents.map(agent => (
              <SwiperSlide key={agent.id}>
                <motion.div
                  className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  {/* Featured badge */}
                  {agent.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <FaStar className="text-white text-xs" /> Top Agent
                    </div>
                  )}

                  {/* Image Section */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img 
                      src={agent.image} 
                      alt={agent.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
                        <p className="text-blue-600 font-semibold text-sm">{agent.role}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-200">
                        <FaStar className="text-yellow-500 text-xs" />
                        <span className="text-sm font-bold text-gray-700">{agent.rating}</span>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {agent.specialties.map((spec, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200">
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <FaAward className="text-blue-500" />
                        <span className="font-semibold">{agent.deals}</span> deals
                      </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100">
                      <a 
                        href={`mailto:${agent.email}`}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 hover:bg-blue-50 rounded-lg text-gray-700 hover:text-blue-700 text-xs font-medium transition-colors duration-200 border border-gray-200 hover:border-blue-200"
                        title="Email"
                      >
                        <FaEnvelope /> Email
                      </a>
                      <a 
                        href={`tel:${agent.phone}`}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 hover:bg-blue-50 rounded-lg text-gray-700 hover:text-blue-700 text-xs font-medium transition-colors duration-200 border border-gray-200 hover:border-blue-200"
                        title="Call"
                      >
                        <FaPhone /> Call
                      </a>
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg text-xs font-semibold transition-all duration-200 shadow-sm">
                        <FaComments /> Chat
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Styling */}
          <style jsx global>{`
            .swiper-pagination-bullet {
              background: #cbd5e1 !important;
              opacity: 1 !important;
              width: 10px;
              height: 10px;
            }
            .swiper-pagination-bullet-active {
              background: #2563eb !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default AgentTeam;