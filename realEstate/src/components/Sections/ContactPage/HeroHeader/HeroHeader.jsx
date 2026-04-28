// import React, { useEffect, useRef } from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import { FaPhone, FaEnvelope, FaCommentDots, FaMapMarkerAlt } from 'react-icons/fa';

// const HeroHeader = () => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-100px' });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   // Floating particles config
//   const particles = Array.from({ length: 20 }, (_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     size: Math.random() * 6 + 2,
//     duration: Math.random() * 20 + 15,
//     delay: Math.random() * 5,
//   }));

//   // Typewriter effect state (simulated via CSS, but we'll add a subtle motion)
//   const headline = "Let's Connect";
//   const headlineChars = headline.split('');

//   return (
//     <section className="relative bg-[radial-gradient(circle_at_20%_30%,#0f172a,#0b1120)] pt-36 pb-20 text-white overflow-hidden isolate" ref={ref}>
//       {/* Floating particles */}
//       <div className="absolute inset-0 pointer-events-none z-[1]">
//         {particles.map((p) => (
//           <motion.div
//             key={p.id}
//             className="absolute rounded-full bg-blue-500/30 blur-[1px] shadow-[0_0_10px_rgba(59,130,246,0.2)]"
//             initial={{ opacity: 0, x: `${p.x}vw`, y: `${p.y}vh` }}
//             animate={{
//               opacity: [0.2, 0.5, 0.2],
//               x: [`${p.x}vw`, `${p.x + (Math.random() * 10 - 5)}vw`, `${p.x}vw`],
//               y: [`${p.y}vh`, `${p.y + (Math.random() * 10 - 5)}vh`, `${p.y}vh`],
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               duration: p.duration,
//               repeat: Infinity,
//               delay: p.delay,
//               ease: 'easeInOut',
//             }}
//             style={{
//               width: p.size,
//               height: p.size,
//               left: `${p.x}%`,
//               top: `${p.y}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main glow orb */}
//       <div className="absolute -top-[10vh] -right-[10vw] w-[60vh] h-[60vh] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] rounded-full blur-[80px] z-[1] animate-pulse" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
//           initial="hidden"
//           animate={controls}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
//           }}
//         >
//           {/* Left column – Headline & CTA */}
//           <motion.div
//             className="max-w-[600px] text-center lg:text-left"
//             variants={{
//               hidden: { opacity: 0, x: -50 },
//               visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } },
//             }}
//           >
//             <div className="inline-flex items-center gap-2 px-5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-blue-100 mb-6 shadow-lg">👋 Welcome to Real Estate Co.</div>
            
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent tracking-tight">
//               {headlineChars.map((char, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.03, duration: 0.3 }}
//                   style={{ display: 'inline-block' }}
//                 >
//                   {char === ' ' ? '\u00A0' : char}
//                 </motion.span>
//               ))}
//             </h1>

//             <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-9 max-w-[550px] mx-auto lg:mx-0">
//               Whether you're buying, selling, investing, or just exploring — our team is ready to help.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-5 mb-9 justify-center lg:justify-start">
//               <motion.a
//                 href="#contact-form"
//                 className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg no-underline inline-flex items-center justify-center gap-3 border border-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl"
//                 whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(37,99,235,0.4)' }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <FaCommentDots /> Start Conversation
//               </motion.a>
//               <motion.a
//                 href="tel:+18001234567"
//                 className="w-full sm:w-auto px-9 py-4 bg-transparent border-2 border-white/30 rounded-full text-white font-semibold text-lg no-underline inline-flex items-center justify-center gap-3 backdrop-blur-sm transition-all duration-300 hover:border-white/50"
//                 whileHover={{ scale: 1.05, borderColor: '#2563eb', color: '#2563eb' }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <FaPhone /> Call Now
//               </motion.a>
//             </div>

//             {/* Quick contact chips */}
//             <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
//               <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm text-blue-100">
//                 <FaEnvelope className="text-blue-400" /> hello@realestate.com
//               </span>
//               <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm text-blue-100">
//                 <FaMapMarkerAlt className="text-blue-400" /> New York, NY
//               </span>
//             </div>
//           </motion.div>

//           {/* Right column – Animated contact illustration */}
//           <motion.div
//             className="relative h-[400px] flex items-center justify-center hidden md:flex"
//             variants={{
//               hidden: { opacity: 0, x: 50 },
//               visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } },
//             }}
//           >
//             <div className="relative w-full h-full">
//               <motion.div
//                 className="absolute top-[15%] left-[5%] px-7 py-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-blue-500/50 rounded-full text-white font-medium inline-flex items-center gap-3 shadow-2xl whitespace-nowrap"
//                 animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
//               >
//                 <FaPhone className="text-lg text-blue-400" /> 24/7 Support
//               </motion.div>
//               <motion.div
//                 className="absolute bottom-[20%] right-[5%] px-7 py-4 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-purple-500/50 rounded-full text-white font-medium inline-flex items-center gap-3 shadow-2xl whitespace-nowrap"
//                 animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
//                 transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
//               >
//                 <FaEnvelope className="text-lg text-blue-400" /> Instant Reply
//               </motion.div>
//               <motion.div
//                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-7 py-4 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 backdrop-blur-xl border border-emerald-500/50 rounded-full text-white font-medium inline-flex items-center gap-3 shadow-2xl whitespace-nowrap"
//                 animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
//                 transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
//               >
//                 <FaMapMarkerAlt className="text-lg text-blue-400" /> Office Visit
//               </motion.div>
//             </div>
//             <div className="absolute inset-0 -z-10">
//               <svg width="100%" height="100%" viewBox="0 0 300 200">
//                 <motion.circle
//                   cx="150"
//                   cy="100"
//                   r="50"
//                   fill="url(#grad)"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                 />
//                 <defs>
//                   <radialGradient id="grad">
//                     <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
//                     <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
//                   </radialGradient>
//                 </defs>
//               </svg>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Bottom wave separator */}
//       <div className="absolute bottom-0 left-0 w-full leading-0 z-[5]">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//           <path
//             fill="#ffffff"
//             fillOpacity="1"
//             d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default HeroHeader;




























import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaPhone, FaEnvelope, FaCommentDots, FaMapMarkerAlt } from 'react-icons/fa';

const HeroHeader = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Floating particles config (reduced count)
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  const headline = "Let's Connect";
  const headlineChars = headline.split('');

  return (
    <section
      ref={ref}
      className="relative bg-[radial-gradient(circle_at_20%_30%,#0f172a,#0b1120)] pt-16 md:pt-20 pb-12 md:pb-16 text-white overflow-hidden isolate"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-blue-500/30 blur-[1px] shadow-[0_0_8px_rgba(59,130,246,0.2)]"
            initial={{ opacity: 0, x: `${p.x}vw`, y: `${p.y}vh` }}
            animate={{
              opacity: [0.15, 0.4, 0.15],
              x: [`${p.x}vw`, `${p.x + (Math.random() * 8 - 4)}vw`, `${p.x}vw`],
              y: [`${p.y}vh`, `${p.y + (Math.random() * 8 - 4)}vh`, `${p.y}vh`],
              scale: [1, 1.1, 1],
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

      {/* Main glow orb - smaller */}
      <div className="absolute -top-[5vh] -right-[5vw] w-[40vh] h-[40vh] bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_70%)] rounded-full blur-[60px] z-[1] animate-pulse" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Left column – Headline & CTA */}
          <motion.div
            className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } },
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium text-blue-100 mb-4 shadow-md">
              👋 Welcome to Real Estate Co.
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent tracking-tight">
              {headlineChars.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02, duration: 0.25 }}
                  style={{ display: 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              Whether you're buying, selling, investing, or just exploring — our team is ready to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center lg:justify-start">
              <motion.a
                href="#contact-form"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-base inline-flex items-center justify-center gap-2 border border-white/20 shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(37,99,235,0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                <FaCommentDots className="text-sm" /> Start Conversation
              </motion.a>
              <motion.a
                href="tel:+18001234567"
                className="px-6 py-3 bg-transparent border-2 border-white/30 rounded-full text-white font-semibold text-base inline-flex items-center justify-center gap-2 backdrop-blur-sm transition-all duration-300 hover:border-blue-400"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPhone className="text-sm" /> Call Now
              </motion.a>
            </div>

            {/* Quick contact chips */}
            <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs text-blue-100">
                <FaEnvelope className="text-blue-400 text-xs" /> hello@realestate.com
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs text-blue-100">
                <FaMapMarkerAlt className="text-blue-400 text-xs" /> New York, NY
              </span>
            </div>
          </motion.div>

          {/* Right column – Animated illustration (scaled down) */}
          <motion.div
            className="relative h-[300px] md:h-[350px] flex items-center justify-center"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } },
            }}
          >
            <div className="relative w-full h-full">
              <motion.div
                className="absolute top-[10%] left-[5%] px-5 py-3 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-blue-500/40 rounded-full text-white font-medium inline-flex items-center gap-2 shadow-xl text-sm whitespace-nowrap"
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FaPhone className="text-blue-400 text-sm" /> 24/7 Support
              </motion.div>
              <motion.div
                className="absolute bottom-[15%] right-[5%] px-5 py-3 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-purple-500/40 rounded-full text-white font-medium inline-flex items-center gap-2 shadow-xl text-sm whitespace-nowrap"
                animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <FaEnvelope className="text-blue-400 text-sm" /> Instant Reply
              </motion.div>
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-3 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 backdrop-blur-xl border border-emerald-500/40 rounded-full text-white font-medium inline-flex items-center gap-2 shadow-xl text-sm whitespace-nowrap"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <FaMapMarkerAlt className="text-blue-400 text-sm" /> Office Visit
              </motion.div>
            </div>
            <div className="absolute inset-0 -z-10">
              <svg width="100%" height="100%" viewBox="0 0 300 200">
                <motion.circle
                  cx="150"
                  cy="100"
                  r="40"
                  fill="url(#grad)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <defs>
                  <radialGradient id="grad">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave separator - shorter */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-[5]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" className="block w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroHeader;