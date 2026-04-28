// import React from 'react';
// import { motion } from 'framer-motion';

// const HeroSection = () => {
//   return (
//     <section className="relative bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20 md:py-28">
//       <div className="max-w-6xl mx-auto px-5 text-center">
//         <motion.h1
//           className="text-4xl md:text-6xl font-extrabold mb-6"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           Our Valued Clients
//         </motion.h1>
//         <motion.p
//           className="text-xl text-blue-100 max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           We build lasting partnerships with businesses and individuals, delivering exceptional real estate solutions.
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




























// import React, { useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { FaUsers, FaHandshake, FaTrophy } from 'react-icons/fa';

// // Animated particles helper
// const FloatingParticles = ({ count = 20 }) => {
//   const particles = useMemo(
//     () =>
//       Array.from({ length: count }, (_, i) => ({
//         id: i,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         size: Math.random() * 6 + 2,
//         duration: Math.random() * 20 + 15,
//         delay: Math.random() * 5,
//       })),
//     [count]
//   );

//   return (
//     <div className="absolute inset-0 pointer-events-none z-0">
//       {particles.map((p) => (
//         <motion.div
//           key={p.id}
//           className="absolute rounded-full bg-blue-400/30 blur-[1px] shadow-[0_0_12px_rgba(96,165,250,0.3)]"
//           initial={{ opacity: 0, x: `${p.x}vw`, y: `${p.y}vh` }}
//           animate={{
//             opacity: [0.1, 0.5, 0.1],
//             x: [`${p.x}vw`, `${p.x + (Math.random() * 10 - 5)}vw`, `${p.x}vw`],
//             y: [`${p.y}vh`, `${p.y + (Math.random() * 10 - 5)}vh`, `${p.y}vh`],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: p.duration,
//             repeat: Infinity,
//             delay: p.delay,
//             ease: 'easeInOut',
//           }}
//           style={{
//             width: p.size,
//             height: p.size,
//             left: `${p.x}%`,
//             top: `${p.y}%`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // Count-up component
// const AnimatedNumber = ({ value, duration = 2 }) => {
//   const [count, setCount] = React.useState(0);

//   React.useEffect(() => {
//     let start = 0;
//     const increment = value / (duration * 60);
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= value) {
//         setCount(value);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 1000 / 60);
//     return () => clearInterval(timer);
//   }, [value, duration]);

//   return <span>{count}+</span>;
// };

// const HeroSection = () => {
//   const taglines = [
//     'Building Lasting Partnerships',
//     'Delivering Excellence',
//     'Trusted by Industry Leaders',
//   ];

//   const [currentTagline, setCurrentTagline] = React.useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTagline((prev) => (prev + 1) % taglines.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-[90vh] flex items-center bg-[radial-gradient(circle_at_20%_30%,#0f172a,#0b1120)] text-white overflow-hidden">
//       {/* Background glow */}
//       <div className="absolute -top-1/2 -right-1/4 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] rounded-full blur-[120px]" />
//       <div className="absolute -bottom-1/2 -left-1/4 w-[70vw] h-[70vw] bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_70%)] rounded-full blur-[120px]" />

//       <FloatingParticles count={25} />

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
//         <div className="flex flex-col items-center text-center">
//           {/* Premium badge */}
//           <motion.div
//             className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-blue-200 mb-8"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <FaTrophy className="text-yellow-400" />
//             Award‑Winning Agency
//           </motion.div>

//           {/* Main Headline */}
//           <motion.h1
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 max-w-4xl"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
//           >
//             <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
//               Our Valued Clients
//             </span>
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
//               Are Our Biggest Asset
//             </span>
//           </motion.h1>

//           {/* Rotating Tagline */}
//           <div className="h-12 overflow-hidden mb-8">
//             <motion.p
//               key={currentTagline}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -20, opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-xl md:text-2xl text-blue-200 font-medium"
//             >
//               {taglines[currentTagline]}
//             </motion.p>
//           </div>

//           {/* Stats Row */}
//           <motion.div
//             className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//           >
//             <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
//               <FaUsers className="text-3xl text-blue-400" />
//               <div className="text-left">
//                 <div className="text-2xl font-bold"><AnimatedNumber value={5000} /></div>
//                 <div className="text-sm text-gray-400">Clients Served</div>
//               </div>
//             </div>
//             <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
//               <FaHandshake className="text-3xl text-green-400" />
//               <div className="text-left">
//                 <div className="text-2xl font-bold"><AnimatedNumber value={300} /></div>
//                 <div className="text-sm text-gray-400">Corporate Partners</div>
//               </div>
//             </div>
//             <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
//               <FaTrophy className="text-3xl text-yellow-400" />
//               <div className="text-left">
//                 <div className="text-2xl font-bold">98%</div>
//                 <div className="text-sm text-gray-400">Satisfaction</div>
//               </div>
//             </div>
//           </motion.div>

//           {/* CTA Button */}
//           <motion.a
//             href="/contact"
//             className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold text-lg inline-flex items-center gap-3 shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:scale-105"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <span>Become a Client</span>
//             <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
//             <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
//           </motion.a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


























import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHandshake, FaTrophy } from 'react-icons/fa';

// Light‑mode floating particles
const FloatingParticles = ({ count = 20 }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-200/60 blur-[1px] shadow-[0_0_8px_rgba(59,130,246,0.1)]"
          initial={{ opacity: 0, x: `${p.x}vw`, y: `${p.y}vh` }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            x: [`${p.x}vw`, `${p.x + (Math.random() * 8 - 4)}vw`, `${p.x}vw`],
            y: [`${p.y}vh`, `${p.y + (Math.random() * 8 - 4)}vh`, `${p.y}vh`],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
        />
      ))}
    </div>
  );
};

// Count‑up component
const AnimatedNumber = ({ value, duration = 2 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}+</span>;
};

const HeroSection = () => {
  const taglines = [
    'Building Lasting Partnerships',
    'Delivering Excellence',
    'Trusted by Industry Leaders',
  ];

  const [currentTagline, setCurrentTagline] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute -top-1/2 -right-1/4 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(37,99,235,0.06)_0%,transparent_70%)] rounded-full blur-[120px]" />
      <div className="absolute -bottom-1/2 -left-1/4 w-[70vw] h-[70vw] bg-[radial-gradient(circle,rgba(124,58,237,0.05)_0%,transparent_70%)] rounded-full blur-[120px]" />

      <FloatingParticles count={20} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="flex flex-col items-center text-center">
          {/* Premium badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100/80 backdrop-blur-sm border border-blue-200 rounded-full text-xs font-semibold uppercase tracking-widest text-blue-700 mb-8 shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FaTrophy className="text-yellow-500" />
            Award‑Winning Agency
          </motion.div>

          {/* Main Headline – dark text for contrast */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Our Valued Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Are Our Biggest Asset
            </span>
          </motion.h1>

          {/* Rotating Tagline */}
          <div className="h-12 overflow-hidden mb-8">
            <motion.p
              key={currentTagline}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-500 font-medium"
            >
              {taglines[currentTagline]}
            </motion.p>
          </div>

          {/* Stats Row */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-200 backdrop-blur-sm">
              <FaUsers className="text-3xl text-blue-600" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900"><AnimatedNumber value={5000} /></div>
                <div className="text-sm text-gray-500">Clients Served</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-200">
              <FaHandshake className="text-3xl text-green-600" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900"><AnimatedNumber value={300} /></div>
                <div className="text-sm text-gray-500">Corporate Partners</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-200">
              <FaTrophy className="text-3xl text-yellow-500" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="/contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Become a Client</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;