// import React, { useState, useRef } from 'react';
// import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import './NeighborhoodSpotlight.css';

// // Fix for leaflet markers
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });

// const NeighborhoodSpotlight = () => {
//   const [activeNeighborhood, setActiveNeighborhood] = useState(0);
//   const [hoveredFeature, setHoveredFeature] = useState(null);
//   const containerRef = useRef();
  
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
  
//   const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
//   const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);
  
//   const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
//   const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

//   const neighborhoods = [
//     {
//       id: 1,
//       name: "Beverly Hills",
//       location: "Los Angeles, CA",
//       image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//       price: "$2.5M",
//       description: "Luxury living at its finest with premium amenities and security",
//       features: {
//         safety: 9.5,
//         schools: 9.2,
//         amenities: 9.8,
//         transport: 8.7
//       },
//       coordinates: [34.0736, -118.4004],
//       highlights: [
//         { icon: "🏛️", text: "Rodeo Drive Shopping" },
//         { icon: "🌳", text: "Expansive Green Spaces" },
//         { icon: "🏫", text: "Top-Rated Schools" },
//         { icon: "🍽️", text: "Fine Dining" }
//       ],
//       stats: {
//         avgPrice: "$3.2M",
//         growth: "+12%",
//         inventory: "45",
//         daysOnMarket: "32"
//       }
//     },
//     {
//       id: 2,
//       name: "Upper East Side",
//       location: "Manhattan, NY",
//       image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//       price: "$3.8M",
//       description: "Historic neighborhood with cultural institutions and luxury residences",
//       features: {
//         safety: 9.3,
//         schools: 9.5,
//         amenities: 9.7,
//         transport: 9.8
//       },
//       coordinates: [40.7736, -73.9566],
//       highlights: [
//         { icon: "🏛️", text: "Museum Mile" },
//         { icon: "🌳", text: "Central Park Access" },
//         { icon: "🏫", text: "Private Schools" },
//         { icon: "🍽️", text: "Michelin Restaurants" }
//       ],
//       stats: {
//         avgPrice: "$4.1M",
//         growth: "+15%",
//         inventory: "28",
//         daysOnMarket: "45"
//       }
//     },
//     {
//       id: 3,
//       name: "Miami Beach",
//       location: "Miami, FL",
//       image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//       price: "$2.1M",
//       description: "Waterfront luxury with vibrant nightlife and beach access",
//       features: {
//         safety: 8.9,
//         schools: 8.5,
//         amenities: 9.9,
//         transport: 8.3
//       },
//       coordinates: [25.7907, -80.1300],
//       highlights: [
//         { icon: "🏖️", text: "Private Beach Access" },
//         { icon: "🌅", text: "Oceanfront Views" },
//         { icon: "🎭", text: "Art Deco District" },
//         { icon: "🛥️", text: "Marina Facilities" }
//       ],
//       stats: {
//         avgPrice: "$2.4M",
//         growth: "+18%",
//         inventory: "62",
//         daysOnMarket: "28"
//       }
//     },
//     {
//       id: 4,
//       name: "Pacific Heights",
//       location: "San Francisco, CA",
//       image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//       price: "$4.5M",
//       description: "Victorian architecture with panoramic bay views",
//       features: {
//         safety: 9.7,
//         schools: 9.6,
//         amenities: 9.4,
//         transport: 9.2
//       },
//       coordinates: [37.7925, -122.4340],
//       highlights: [
//         { icon: "🌉", text: "Golden Gate Views" },
//         { icon: "🏛️", text: "Historic Architecture" },
//         { icon: "🌳", text: "Lafayette Park" },
//         { icon: "🍷", text: "Wine Bars" }
//       ],
//       stats: {
//         avgPrice: "$5.2M",
//         growth: "+10%",
//         inventory: "22",
//         daysOnMarket: "55"
//       }
//     }
//   ];

//   const handleMouseMove = (event) => {
//     if (containerRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();
//       mouseX.set(event.clientX - rect.left - rect.width / 2);
//       mouseY.set(event.clientY - rect.top - rect.height / 2);
//     }
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(0);
//     mouseY.set(0);
//   };

//   const renderFeatureScore = (label, score) => (
//     <div 
//       className="feature-score"
//       onMouseEnter={() => setHoveredFeature(label)}
//       onMouseLeave={() => setHoveredFeature(null)}
//     >
//       <div className="feature-label">{label}</div>
//       <div className="score-bar">
//         <motion.div 
//           className="score-fill"
//           initial={{ width: 0 }}
//           animate={{ width: `${score * 10}%` }}
//           transition={{ duration: 1, delay: 0.2 }}
//           style={{ backgroundColor: hoveredFeature === label ? '#64ffda' : '#3a86ff' }}
//         />
//         <span className="score-value">{score}/10</span>
//       </div>
//     </div>
//   );

//   return (
//     <section className="neighborhood-spotlight">
//       <div className="container">
//         <motion.div 
//           className="section-header"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="section-title">Neighborhood Spotlight</h2>
//           <p className="section-subtitle">Explore premium locations and find your perfect community</p>
//         </motion.div>

//         <div className="content-wrapper">
//           {/* Neighborhood Selector */}
//           <div className="neighborhood-selector">
//             {neighborhoods.map((neighborhood, index) => (
//               <motion.button
//                 key={neighborhood.id}
//                 className={`neighborhood-tab ${activeNeighborhood === index ? 'active' : ''}`}
//                 onClick={() => setActiveNeighborhood(index)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <FaMapMarkerAlt className="tab-icon" />
//                 <div className="tab-content">
//                   <h4>{neighborhood.name}</h4>
//                   <p>{neighborhood.location}</p>
//                 </div>
//                 <div className="tab-price">{neighborhood.price}</div>
//               </motion.button>
//             ))}
//           </div>

//           {/* Main Content */}
//           <div className="main-content">
//             {/* Neighborhood Card */}
//             <motion.div 
//               ref={containerRef}
//               className="neighborhood-card"
//               style={{ 
//                 rotateX: springRotateX,
//                 rotateY: springRotateY 
//               }}
//               onMouseMove={handleMouseMove}
//               onMouseLeave={handleMouseLeave}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div 
//                 className="card-image"
//                 style={{
//                   backgroundImage: `url(${neighborhoods[activeNeighborhood].image})`
//                 }}
//               >
//                 <div className="image-overlay" />
//                 <div className="card-badge">Featured Area</div>
//               </div>
              
//               <div className="card-content">
//                 <div className="card-header">
//                   <h3>{neighborhoods[activeNeighborhood].name}</h3>
//                   <p className="location">{neighborhoods[activeNeighborhood].location}</p>
//                 </div>
                
//                 <p className="description">{neighborhoods[activeNeighborhood].description}</p>
                
//                 {/* Feature Scores */}
//                 <div className="feature-scores">
//                   {renderFeatureScore("Safety", neighborhoods[activeNeighborhood].features.safety)}
//                   {renderFeatureScore("Schools", neighborhoods[activeNeighborhood].features.schools)}
//                   {renderFeatureScore("Amenities", neighborhoods[activeNeighborhood].features.amenities)}
//                   {renderFeatureScore("Transport", neighborhoods[activeNeighborhood].features.transport)}
//                 </div>
                
//                 {/* Highlights */}
//                 <div className="highlights">
//                   <h4>Area Highlights</h4>
//                   <div className="highlight-grid">
//                     {neighborhoods[activeNeighborhood].highlights.map((highlight, idx) => (
//                       <div key={idx} className="highlight-item">
//                         <span className="highlight-icon">{highlight.icon}</span>
//                         <span>{highlight.text}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Interactive Map */}
//             <motion.div 
//               className="interactive-map"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               <MapContainer
//                 center={neighborhoods[activeNeighborhood].coordinates}
//                 zoom={13}
//                 style={{ height: '100%', width: '100%', borderRadius: '15px' }}
//               >
//                 <TileLayer
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 {neighborhoods.map((neighborhood, index) => (
//                   <Marker 
//                     key={neighborhood.id}
//                     position={neighborhood.coordinates}
//                     eventHandlers={{
//                       click: () => setActiveNeighborhood(index),
//                     }}
//                   >
//                     <Popup>
//                       <div className="map-popup">
//                         <h4>{neighborhood.name}</h4>
//                         <p>Avg Price: {neighborhood.stats.avgPrice}</p>
//                         <button onClick={() => setActiveNeighborhood(index)}>
//                           View Details
//                         </button>
//                       </div>
//                     </Popup>
//                   </Marker>
//                 ))}
//               </MapContainer>
              
//               {/* Map Legend */}
//               <div className="map-legend">
//                 <div className="legend-item">
//                   <div className="legend-icon safety"></div>
//                   <span>Safety Score</span>
//                 </div>
//                 <div className="legend-item">
//                   <div className="legend-icon schools"></div>
//                   <span>School Quality</span>
//                 </div>
//                 <div className="legend-item">
//                   <div className="legend-icon amenities"></div>
//                   <span>Amenities</span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Market Stats */}
//             <motion.div 
//               className="market-stats"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               <h3 className="stats-title">Market Statistics</h3>
//               <div className="stats-grid">
//                 {Object.entries(neighborhoods[activeNeighborhood].stats).map(([key, value]) => (
//                   <div key={key} className="stat-item">
//                     <div className="stat-value">{value}</div>
//                     <div className="stat-label">
//                       {key.replace(/([A-Z])/g, ' $1').trim()}
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="trend-indicator">
//                 <div className="trend-label">Market Trend</div>
//                 <div className="trend-value positive">
//                   ↑ {neighborhoods[activeNeighborhood].stats.growth} YoY Growth
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Comparison Table */}
//           <motion.div 
//             className="comparison-table"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//           >
//             <h3 className="table-title">Neighborhood Comparison</h3>
//             <div className="table-container">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Neighborhood</th>
//                     <th>Avg Price</th>
//                     <th>Safety</th>
//                     <th>Schools</th>
//                     <th>Inventory</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {neighborhoods.map((neighborhood) => (
//                     <tr 
//                       key={neighborhood.id}
//                       className={neighborhood.id === neighborhoods[activeNeighborhood].id ? 'active' : ''}
//                       onClick={() => setActiveNeighborhood(neighborhoods.findIndex(n => n.id === neighborhood.id))}
//                     >
//                       <td>{neighborhood.name}</td>
//                       <td>{neighborhood.stats.avgPrice}</td>
//                       <td>
//                         <div className="score-display">
//                           {neighborhood.features.safety}/10
//                         </div>
//                       </td>
//                       <td>
//                         <div className="score-display">
//                           {neighborhood.features.schools}/10
//                         </div>
//                       </td>
//                       <td>{neighborhood.stats.inventory}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NeighborhoodSpotlight;












import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for leaflet markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const NeighborhoodSpotlight = () => {
  const [activeNeighborhood, setActiveNeighborhood] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const containerRef = useRef();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);
  
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  const neighborhoods = [
    {
      id: 1,
      name: "Beverly Hills",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "$2.5M",
      description: "Luxury living at its finest with premium amenities and security",
      features: { safety: 9.5, schools: 9.2, amenities: 9.8, transport: 8.7 },
      coordinates: [34.0736, -118.4004],
      highlights: [
        { icon: "🏛️", text: "Rodeo Drive Shopping" },
        { icon: "🌳", text: "Expansive Green Spaces" },
        { icon: "🏫", text: "Top-Rated Schools" },
        { icon: "🍽️", text: "Fine Dining" }
      ],
      stats: { avgPrice: "$3.2M", growth: "+12%", inventory: "45", daysOnMarket: "32" }
    },
    {
      id: 2,
      name: "Upper East Side",
      location: "Manhattan, NY",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "$3.8M",
      description: "Historic neighborhood with cultural institutions and luxury residences",
      features: { safety: 9.3, schools: 9.5, amenities: 9.7, transport: 9.8 },
      coordinates: [40.7736, -73.9566],
      highlights: [
        { icon: "🏛️", text: "Museum Mile" },
        { icon: "🌳", text: "Central Park Access" },
        { icon: "🏫", text: "Private Schools" },
        { icon: "🍽️", text: "Michelin Restaurants" }
      ],
      stats: { avgPrice: "$4.1M", growth: "+15%", inventory: "28", daysOnMarket: "45" }
    },
    {
      id: 3,
      name: "Miami Beach",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "$2.1M",
      description: "Waterfront luxury with vibrant nightlife and beach access",
      features: { safety: 8.9, schools: 8.5, amenities: 9.9, transport: 8.3 },
      coordinates: [25.7907, -80.1300],
      highlights: [
        { icon: "🏖️", text: "Private Beach Access" },
        { icon: "🌅", text: "Oceanfront Views" },
        { icon: "🎭", text: "Art Deco District" },
        { icon: "🛥️", text: "Marina Facilities" }
      ],
      stats: { avgPrice: "$2.4M", growth: "+18%", inventory: "62", daysOnMarket: "28" }
    },
    {
      id: 4,
      name: "Pacific Heights",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "$4.5M",
      description: "Victorian architecture with panoramic bay views",
      features: { safety: 9.7, schools: 9.6, amenities: 9.4, transport: 9.2 },
      coordinates: [37.7925, -122.4340],
      highlights: [
        { icon: "🌉", text: "Golden Gate Views" },
        { icon: "🏛️", text: "Historic Architecture" },
        { icon: "🌳", text: "Lafayette Park" },
        { icon: "🍷", text: "Wine Bars" }
      ],
      stats: { avgPrice: "$5.2M", growth: "+10%", inventory: "22", daysOnMarket: "55" }
    }
  ];

  const handleMouseMove = (event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - rect.left - rect.width / 2);
      mouseY.set(event.clientY - rect.top - rect.height / 2);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const renderFeatureScore = (label, score) => (
    <div 
      className="mb-4"
      onMouseEnter={() => setHoveredFeature(label)}
      onMouseLeave={() => setHoveredFeature(null)}
    >
      <div className="flex justify-between mb-2 font-semibold text-[#1e293b]">
        <span>{label}</span>
      </div>
      <div className="h-2 bg-[#e2e8f0] rounded-full overflow-hidden relative">
        <motion.div 
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${score * 10}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ backgroundColor: hoveredFeature === label ? '#64ffda' : '#3a86ff' }}
        />
        <span className="absolute right-0 -top-6 text-sm font-semibold text-[#3a86ff]">{score}/10</span>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#3a86ff] to-[#64ffda] bg-clip-text text-transparent">
            Neighborhood Spotlight
          </h2>
          <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
            Explore premium locations and find your perfect community
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {/* Neighborhood Selector */}
          <div className="flex gap-4 overflow-x-auto pb-4">
            {neighborhoods.map((neighborhood, index) => (
              <motion.button
                key={neighborhood.id}
                className={`flex-1 min-w-[250px] rounded-2xl p-6 flex items-center gap-4 cursor-pointer transition-all duration-300 border-2 ${
                  activeNeighborhood === index 
                    ? 'bg-[#3a86ff] text-white border-[#3a86ff]' 
                    : 'bg-[#f8fafc] text-[#1e293b] border-transparent hover:bg-[#e2e8f0] hover:-translate-y-0.5'
                }`}
                onClick={() => setActiveNeighborhood(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FaMapMarkerAlt className={`text-2xl flex-shrink-0 ${activeNeighborhood === index ? 'text-white' : 'text-[#3a86ff]'}`} />
                <div className="flex-1 text-left">
                  <h4 className="text-xl font-bold mb-1">{neighborhood.name}</h4>
                  <p className={`text-sm ${activeNeighborhood === index ? 'opacity-90' : 'opacity-80'}`}>{neighborhood.location}</p>
                </div>
                <div className={`text-2xl font-extrabold ${activeNeighborhood === index ? 'text-white' : 'text-[#3a86ff]'}`}>
                  {neighborhood.price}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Neighborhood Card */}
            <motion.div 
              ref={containerRef}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] preserve-3d perspective-1000"
              style={{ rotateX: springRotateX, rotateY: springRotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: `url(${neighborhoods[activeNeighborhood].image})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                <div className="absolute top-6 right-6 bg-[#3a86ff] text-white px-4 py-2 rounded-full font-semibold text-sm">
                  Featured Area
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-extrabold text-[#1e293b] mb-2">{neighborhoods[activeNeighborhood].name}</h3>
                  <p className="text-[#64748b] flex items-center gap-2">{neighborhoods[activeNeighborhood].location}</p>
                </div>
                
                <p className="text-[#64748b] leading-relaxed mb-8">{neighborhoods[activeNeighborhood].description}</p>
                
                {/* Feature Scores */}
                <div className="mb-8">
                  {renderFeatureScore("Safety", neighborhoods[activeNeighborhood].features.safety)}
                  {renderFeatureScore("Schools", neighborhoods[activeNeighborhood].features.schools)}
                  {renderFeatureScore("Amenities", neighborhoods[activeNeighborhood].features.amenities)}
                  {renderFeatureScore("Transport", neighborhoods[activeNeighborhood].features.transport)}
                </div>
                
                {/* Highlights */}
                <div>
                  <h4 className="text-xl text-[#1e293b] mb-4">Area Highlights</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {neighborhoods[activeNeighborhood].highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-xl text-[#1e293b] text-sm">
                        <span className="text-xl">{highlight.icon}</span>
                        <span>{highlight.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interactive Map */}
            <motion.div 
              className="relative h-[500px] lg:h-auto rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <MapContainer
                center={neighborhoods[activeNeighborhood].coordinates}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {neighborhoods.map((neighborhood, index) => (
                  <Marker 
                    key={neighborhood.id}
                    position={neighborhood.coordinates}
                    eventHandlers={{ click: () => setActiveNeighborhood(index) }}
                  >
                    <Popup>
                      <div className="p-4 min-w-[200px]">
                        <h4 className="mb-2 text-[#3a86ff] font-bold">{neighborhood.name}</h4>
                        <p>Avg Price: {neighborhood.stats.avgPrice}</p>
                        <button 
                          className="w-full py-2 bg-[#3a86ff] text-white rounded-lg cursor-pointer mt-2"
                          onClick={() => setActiveNeighborhood(index)}
                        >
                          View Details
                        </button>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
              
              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 p-4 rounded-xl flex flex-col gap-2 shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-[#3a86ff]"></div>
                  <span>Safety Score</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-[#64ffda]"></div>
                  <span>School Quality</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-[#ff6b6b]"></div>
                  <span>Amenities</span>
                </div>
              </div>
            </motion.div>

            {/* Market Stats - Spans full width on mobile, two columns on desktop */}
            <motion.div 
              className="lg:col-span-2 bg-[#f8fafc] rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl text-[#1e293b] mb-6">Market Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {Object.entries(neighborhoods[activeNeighborhood].stats).map(([key, value]) => (
                  <div key={key} className="text-center p-6 bg-white rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                    <div className="text-3xl font-extrabold text-[#3a86ff] mb-2">{value}</div>
                    <div className="text-[#64748b] text-sm uppercase tracking-wider">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                <span className="font-semibold text-[#1e293b]">Market Trend</span>
                <span className="font-bold text-[#10b981]">
                  ↑ {neighborhoods[activeNeighborhood].stats.growth} YoY Growth
                </span>
              </div>
            </motion.div>
          </div>

          {/* Comparison Table */}
          <motion.div 
            className="bg-[#f8fafc] rounded-2xl p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-2xl text-[#1e293b] mb-6">Neighborhood Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
                <thead className="bg-[#3a86ff] text-white">
                  <tr>
                    <th className="p-5 text-left font-semibold text-sm uppercase tracking-wider">Neighborhood</th>
                    <th className="p-5 text-left font-semibold text-sm uppercase tracking-wider">Avg Price</th>
                    <th className="p-5 text-left font-semibold text-sm uppercase tracking-wider">Safety</th>
                    <th className="p-5 text-left font-semibold text-sm uppercase tracking-wider">Schools</th>
                    <th className="p-5 text-left font-semibold text-sm uppercase tracking-wider">Inventory</th>
                  </tr>
                </thead>
                <tbody>
                  {neighborhoods.map((neighborhood) => (
                    <tr 
                      key={neighborhood.id}
                      className={`border-b border-[#e2e8f0] cursor-pointer transition-all duration-300 hover:bg-[#f1f5f9] ${
                        neighborhood.id === neighborhoods[activeNeighborhood].id ? 'bg-[rgba(58,134,255,0.1)]' : ''
                      }`}
                      onClick={() => setActiveNeighborhood(neighborhoods.findIndex(n => n.id === neighborhood.id))}
                    >
                      <td className="p-5 text-[#1e293b]">{neighborhood.name}</td>
                      <td className="p-5 text-[#1e293b]">{neighborhood.stats.avgPrice}</td>
                      <td className="p-5">
                        <span className="px-3 py-1 bg-[#e2e8f0] rounded-full text-sm font-semibold">
                          {neighborhood.features.safety}/10
                        </span>
                      </td>
                      <td className="p-5">
                        <span className="px-3 py-1 bg-[#e2e8f0] rounded-full text-sm font-semibold">
                          {neighborhood.features.schools}/10
                        </span>
                      </td>
                      <td className="p-5 text-[#1e293b]">{neighborhood.stats.inventory}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodSpotlight;