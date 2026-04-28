// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Sphere, Float } from '@react-three/drei';
// import { FaSearch, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
// import './HeroSection.css';

// // 3D Background Element
// const ThreeDBackground = () => {
//   const sphereRef = useRef();
  
//   useFrame((state) => {
//     if (sphereRef.current) {
//       sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
//       sphereRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
//     }
//   });

//   return (
//     <Float speed={2} rotationIntensity={1} floatIntensity={2}>
//       <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, -5]}>
//         <meshStandardMaterial
//           color="#3a86ff"
//           transparent
//           opacity={0.1}
//           emissive="#3a86ff"
//           emissiveIntensity={0.3}
//         />
//       </Sphere>
//     </Float>
//   );
// };

// const HeroSection = () => {
//   const containerRef = useRef();
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });
  
//   const [searchTerm, setSearchTerm] = useState('');
//   const [propertyType, setPropertyType] = useState('');
//   const [priceRange, setPriceRange] = useState([0, 5000000]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   const heroSlides = [
//     {
//       title: "Find Your Dream Home",
//       subtitle: "Premium properties in prime locations",
//       image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
//       stats: { properties: "5000+", clients: "1500+", cities: "50+" }
//     },
//     {
//       title: "Luxury Living Redefined",
//       subtitle: "Experience the pinnacle of comfort and style",
//       image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
//       stats: { properties: "1200+", clients: "800+", cities: "30+" }
//     },
//     {
//       title: "Invest in Your Future",
//       subtitle: "Smart real estate investments for tomorrow",
//       image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
//       stats: { properties: "800+", clients: "600+", cities: "20+" }
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log('Searching:', { searchTerm, propertyType, priceRange });
//   };

//   return (
//     <section ref={containerRef} className="hero-section">
//       {/* Animated Background */}
//       <div className="hero-background">
//         <motion.div 
//           className="bg-overlay"
//           style={{ y, opacity }}
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               className="slide-bg"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1 }}
//               style={{
//                 backgroundImage: `url(${heroSlides[currentIndex].image})`
//               }}
//             />
//           </AnimatePresence>
//         </motion.div>
        
//         {/* 3D Background Canvas */}
//         <div className="three-d-bg">
//           <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
//             <ambientLight intensity={0.5} />
//             <pointLight position={[10, 10, 10]} />
//             <ThreeDBackground />
//           </Canvas>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="hero-content">
//         <div className="container">
//           <motion.div
//             className="hero-text"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <AnimatePresence mode="wait">
//               <motion.h1
//                 key={currentIndex}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {heroSlides[currentIndex].title}
//               </motion.h1>
//             </AnimatePresence>
            
//             <AnimatePresence mode="wait">
//               <motion.p
//                 key={currentIndex}
//                 className="subtitle"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//               >
//                 {heroSlides[currentIndex].subtitle}
//               </motion.p>
//             </AnimatePresence>

//             {/* Search Form */}
//             <motion.form
//               className="search-form"
//               onSubmit={handleSearch}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <div className="search-grid">
//                 <div className="search-input-group">
//                   <FaSearch className="search-icon" />
//                   <input
//                     type="text"
//                     placeholder="Location, City, or Neighborhood"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </div>
                
//                 <select
//                   value={propertyType}
//                   onChange={(e) => setPropertyType(e.target.value)}
//                   className="property-type"
//                 >
//                   <option value="">Property Type</option>
//                   <option value="apartment">Apartment</option>
//                   <option value="villa">Villa</option>
//                   <option value="penthouse">Penthouse</option>
//                   <option value="townhouse">Townhouse</option>
//                   <option value="commercial">Commercial</option>
//                 </select>

//                 <div className="price-range">
//                   <span>Price Range:</span>
//                   <div className="range-slider">
//                     <input
//                       type="range"
//                       min="0"
//                       max="5000000"
//                       step="10000"
//                       value={priceRange[0]}
//                       onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
//                     />
//                     <input
//                       type="range"
//                       min="0"
//                       max="5000000"
//                       step="10000"
//                       value={priceRange[1]}
//                       onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//                     />
//                   </div>
//                   <div className="price-display">
//                     ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
//                   </div>
//                 </div>

//                 <motion.button
//                   type="submit"
//                   className="search-btn"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Search Properties
//                 </motion.button>
//               </div>

//               {/* Quick Filters */}
//               <div className="quick-filters">
//                 <button type="button" className="filter-btn">
//                   <FaBed /> 2+ Beds
//                 </button>
//                 <button type="button" className="filter-btn">
//                   <FaBath /> 2+ Baths
//                 </button>
//                 <button type="button" className="filter-btn">
//                   <FaRulerCombined /> 1500+ sqft
//                 </button>
//                 <button type="button" className="filter-btn">
//                   🏊 Pool
//                 </button>
//                 <button type="button" className="filter-btn">
//                   🅿️ Garage
//                 </button>
//               </div>
//             </motion.form>

//             {/* Hero Stats */}
//             <motion.div
//               className="hero-stats"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               {Object.entries(heroSlides[currentIndex].stats).map(([key, value], index) => (
//                 <motion.div
//                   key={key}
//                   className="stat-item"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <div className="stat-value">{value}</div>
//                   <div className="stat-label">
//                     {key.charAt(0).toUpperCase() + key.slice(1)}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Slide Indicators */}
//         <div className="slide-indicators">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               className={`indicator ${index === currentIndex ? 'active' : ''}`}
//               onClick={() => setCurrentIndex(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             >
//               <motion.div
//                 className="indicator-progress"
//                 animate={index === currentIndex ? { scaleX: [0, 1] } : {}}
//                 transition={{ duration: 5, ease: "linear" }}
//               />
//             </button>
//           ))}
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           className="scroll-indicator"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <div className="mouse">
//             <div className="wheel" />
//           </div>
//           <span>Scroll to explore</span>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
























import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float } from '@react-three/drei';
import { FaSearch, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

// 3D Background Element (unchanged)
const ThreeDBackground = () => {
  const sphereRef = useRef();
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      sphereRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, -5]}>
        <meshStandardMaterial
          color="#3a86ff"
          transparent
          opacity={0.1}
          emissive="#3a86ff"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
};

const HeroSection = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const heroSlides = [
    {
      title: "Find Your Dream Home",
      subtitle: "Premium properties in prime locations",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      stats: { properties: "5000+", clients: "1500+", cities: "50+" }
    },
    {
      title: "Luxury Living Redefined",
      subtitle: "Experience the pinnacle of comfort and style",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      stats: { properties: "1200+", clients: "800+", cities: "30+" }
    },
    {
      title: "Invest in Your Future",
      subtitle: "Smart real estate investments for tomorrow",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      stats: { properties: "800+", clients: "600+", cities: "20+" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching:', { searchTerm, propertyType, priceRange });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen h-screen max-h-screen text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-[1]">
        <motion.div className="absolute inset-0 bg-[rgba(10,25,47,0.85)]" style={{ y, opacity }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{ backgroundImage: `url(${heroSlides[currentIndex].image})` }}
            />
          </AnimatePresence>
        </motion.div>
        
        {/* 3D Background Canvas */}
        <div className="absolute inset-0 z-[2] opacity-30">
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ThreeDBackground />
          </Canvas>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-[3] h-full flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            className="text-center max-w-[800px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white to-[#a8b2d1] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {heroSlides[currentIndex].title}
              </motion.h1>
            </AnimatePresence>
            
            {/* Animated Subtitle */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                className="text-lg md:text-2xl text-[#a8b2d1] mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {heroSlides[currentIndex].subtitle}
              </motion.p>
            </AnimatePresence>

            {/* Search Form */}
            <motion.form
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-8 mb-12 border border-white/20"
              onSubmit={handleSearch}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_auto] gap-4 mb-6">
                {/* Location Input */}
                <div className="relative flex items-center">
                  <FaSearch className="absolute left-4 text-[#a8b2d1] text-lg" />
                  <input
                    type="text"
                    placeholder="Location, City, or Neighborhood"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full py-3 pl-12 pr-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#a8b2d1] focus:outline-none focus:border-[#3a86ff] focus:bg-white/15 transition-all"
                  />
                </div>
                
                {/* Property Type Select */}
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="py-3 px-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#3a86ff]"
                >
                  <option value="" className="bg-[#0a192f]">Property Type</option>
                  <option value="apartment" className="bg-[#0a192f]">Apartment</option>
                  <option value="villa" className="bg-[#0a192f]">Villa</option>
                  <option value="penthouse" className="bg-[#0a192f]">Penthouse</option>
                  <option value="townhouse" className="bg-[#0a192f]">Townhouse</option>
                  <option value="commercial" className="bg-[#0a192f]">Commercial</option>
                </select>

                {/* Price Range (custom slider) */}
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-[#a8b2d1]">Price Range:</span>
                  <div className="relative h-4">
                    <input
                      type="range"
                      min="0"
                      max="5000000"
                      step="10000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="absolute w-full h-1 bg-white/10 rounded-lg appearance-none pointer-events-auto range-thumb"
                    />
                    <input
                      type="range"
                      min="0"
                      max="5000000"
                      step="10000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="absolute w-full h-1 bg-white/10 rounded-lg appearance-none pointer-events-auto range-thumb"
                    />
                  </div>
                  <div className="text-sm text-[#64ffda] font-semibold">
                    ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                  </div>
                </div>

                {/* Search Button */}
                <motion.button
                  type="submit"
                  className="py-3 px-6 bg-gradient-to-r from-[#3a86ff] to-[#64ffda] rounded-lg text-white font-semibold whitespace-nowrap h-[54px] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(58,134,255,0.4)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Search Properties
                </motion.button>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[#a8b2d1] text-sm transition-all hover:bg-white/10 hover:border-[#3a86ff] hover:text-white">
                  <FaBed /> 2+ Beds
                </button>
                <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[#a8b2d1] text-sm transition-all hover:bg-white/10 hover:border-[#3a86ff] hover:text-white">
                  <FaBath /> 2+ Baths
                </button>
                <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[#a8b2d1] text-sm transition-all hover:bg-white/10 hover:border-[#3a86ff] hover:text-white">
                  <FaRulerCombined /> 1500+ sqft
                </button>
                <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[#a8b2d1] text-sm transition-all hover:bg-white/10 hover:border-[#3a86ff] hover:text-white">
                  🏊 Pool
                </button>
                <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[#a8b2d1] text-sm transition-all hover:bg-white/10 hover:border-[#3a86ff] hover:text-white">
                  🅿️ Garage
                </button>
              </div>
            </motion.form>

            {/* Hero Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {Object.entries(heroSlides[currentIndex].stats).map(([key, value], idx) => (
                <motion.div
                  key={key}
                  className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl min-w-[120px] md:min-w-[140px] cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-[#3a86ff] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(58,134,255,0.2)]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + idx * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl md:text-4xl font-extrabold text-[#64ffda] mb-2">{value}</div>
                  <div className="text-xs md:text-sm text-[#a8b2d1] uppercase tracking-wide font-medium">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-[4]">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-12 md:w-16 h-1 rounded-full overflow-hidden bg-white/20 ${index === currentIndex ? 'bg-white/10' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentIndex && (
                <motion.div
                  className="h-full bg-[#3a86ff] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#a8b2d1] text-xs md:text-sm uppercase tracking-wide z-[4]"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-[#64ffda] rounded-full animate-scroll" />
          </div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;